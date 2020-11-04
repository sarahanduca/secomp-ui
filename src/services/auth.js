class AuthService {
  async already_logged() {
    const key = localStorage.getItem("token");
    const exp = localStorage.getItem("expire");
    if (key != null && exp != null) {
      if (exp > Date.now()) {
        const response = await fetch(
          process.env.VUE_APP_API_URL + "/api/list",
          {
            method: "HEAD",
            mode: "cors",
            headers: {
              Authorization: `Bearer ${key}`
            }
          }
        );

        return response.ok;
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("expire");
        return false;
      }
    } else {
      return false;
    }
  }
  getKey() {
    const key = localStorage.getItem("token");
    const exp = localStorage.getItem("expire");
    if (key != null && exp != null) {
      if (exp > Date.now()) {
        return key;
      }
      return false;
    }
    return false;
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expire");
  }
}

export default new AuthService();
