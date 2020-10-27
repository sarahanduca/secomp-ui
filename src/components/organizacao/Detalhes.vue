<template>
  <b-row class="w-100 mx-0">
    <b-col
      id="detalhes"
      class="d-sm-none d-none d-md-block pt-3"
      cols="3"
      v-text="inscrito"
    >
      {{ inscrito }}
    </b-col>
  </b-row>
</template>

<script>
import AuthService from "../../services/auth.js";
export default {
  name: "Detalhes",
  props: ["id"],
  data: function() {
    return {
      inscrito: null
    };
  },
  created: async function() {
    const key = AuthService.getKey();

    if (key) {
      // eslint-disable-next-line no-unused-vars
      const data = await fetch(
        process.env.VUE_APP_API_URL + "/api/inscrito/" + this.id,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${key}`
          }
        }
      )
        .then(r => r.json(), false)
        .catch(() => {
          this.$router.push("/erro");
        });
      this.inscrito = data;
    } else {
      AuthService.logout();
      this.$router.push("/login");
    }
  },
  methods: {}
};
</script>
<style></style>
