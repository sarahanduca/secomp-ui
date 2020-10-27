<template>
  <div class="h-100" id="login">
    <b-row
      class="h-100 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5 px-xl-5 px-lg-4"
      align-h="center"
      align-v="center"
    >
      <b-col class="mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5 px-xl-5 px-lg-4">
        <b-img
          src="../assets/LogoSECOMP.png"
          alt="logo SECOMP"
          class="mx-auto"
          width="114"
          height="100"
        />
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-senha"
            label="Senha"
            label-for="input-senha"
            label-align="left"
          >
            <b-form-input
              id="input-senha"
              v-model="form.password"
              type="password"
              required
              :state="pass_state"
              placeholder="********"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="text-center">
            <b-button type="submit" variant="success">Login</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const ONE_DAY = 1000 * 60 * 60 * 24;
export default {
  name: "PetAuth",
  data() {
    return {
      form: {
        password: ""
      },
      invalid: false
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const response = await fetch(process.env.VUE_APP_API_URL + "/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.form)
      }).then(r => r.json(), false);

      if (response) {
        localStorage.setItem("token", response.auth_token);
        localStorage.setItem(
          "expire",
          new Date(Date.now() + ONE_DAY).valueOf()
        );
      } else {
        this.invalid = true;
      }

      this.$router.push("/petmaster");
    }
  },
  computed: {
    pass_state() {
      return this.invalid ? false : null;
    }
  }
};
</script>

<style scoped>
#login {
  background-image: url("../assets/fundoHeader.svg");
  background-repeat: repeat-x;
  background-position: center -300px;
}
.col {
  max-width: 500px;
}
</style>
