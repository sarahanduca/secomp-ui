<template>
  <b-row class="h-100 w-100 mx-0" align-v="center">
    <b-col>
      <b-container class="text-center text-light">
        <b-img src="../../assets/avatar.svg" width="100" class="mb-5" />
        <b-row align-v="center">
          <b-col>
            <h4>{{ this.inscrito.nome }}</h4>
            <br />
            <span>{{ this.inscrito.email }}</span>
          </b-col>
        </b-row>
        <b-col></b-col>
        <b-row> </b-row>
        <b-row>
          <b-col>{{ this.inscrito.cpf }}</b-col>
        </b-row>
        <b-row>
          <b-col>{{ campeonatos }}</b-col>
        </b-row>
        <b-row>
          <b-col>{{ this.inscrito.ra }}</b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <b-btn variant="danger" @click="remove">Remover</b-btn>
          </b-col>
        </b-row>
      </b-container>
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
      inscrito: ""
    };
  },
  mounted: async function() {
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
      if (this.inscrito.campeonatos) {
        this.inscrito.campeonatos = JSON.parse(data.campeonatos);
      }
    } else {
      AuthService.logout();
      this.$router.push("/login");
    }
  },
  methods: {
    remove: async function() {
      const key = AuthService.getKey();
      if (key) {
        // eslint-disable-next-line no-unused-vars
        const data = await fetch(
          process.env.VUE_APP_API_URL + "/api/remove/" + this.id,
          {
            method: "DELETE",
            mode: "cors",
            headers: {
              Authorization: `Bearer ${key}`
            }
          }
        )
          .then(true, false)
          .catch(() => {
            this.$router.push("/erro");
          });

        if (data) {
          this.$router.push("/petmaster");
        } else {
          this.$router.push("erro");
        }
      } else {
        AuthService.logout();
        this.$router.push("/login");
      }
    }
  },
  computed: {
    campeonatos() {
      if (this.inscrito && this.inscrito.campeonatos) {
        return this.inscrito.campeonatos.join();
      } else {
        return null;
      }
    }
  }
};
</script>
<style scoped></style>
