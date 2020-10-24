class AuthService {
  async already_logged() {
    const key = localStorage.getItem("token");
    const exp = localStorage.getItem("expire");
    if (key != null && exp != null) {
      if (exp > Date.now()) {
        const response = await fetch(
          process.env.VUE_APP_API_URL + "/petmaster/status",
          {
            method: "GET",
            mode: "cors",
            headers: {
              Authorization: `Bearer ${key}`
            }
          }
        );

        return response.ok;
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("exp");
        return false;
      }
    } else {
      return false;
    }
  }
}

export default new AuthService();
