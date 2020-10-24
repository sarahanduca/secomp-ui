<template>
  <div class="text-left container h-100">
    <div class="row align-items-center h-100 justify-content-center">
      <div class="col-10">
        <b-form class="" @submit="onSubmit">
          <b-form-group
            id="input-group-name"
            label="Usuário"
            label-for="input-usuario"
          >
            <b-form-input
              id="input-usuario"
              disabled
              value="PetMaster"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-senha"
            label="Senha"
            label-for="input-senha"
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
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form-group>
        </b-form>
      </div>
    </div>
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
      const response = await fetch(
        process.env.VUE_APP_API_URL + "/petmaster/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.form)
        }
      ).then(r => r.json(), false);

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

<style scoped></style>
