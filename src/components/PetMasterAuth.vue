<template>
  <div class='text-left container h-100'>
      <div class='row align-items-center h-100 justify-content-center'>
          <div class="col-10">
            <b-form class='' @submit="onSubmit">
                <b-form-group
                id="input-group-name"
                label="Usuário"
                label-for="input-usuario"
                >
                    <b-form-input
                    id="input-usuario"
                    disabled
                    value='PetMaster'
                    type='text'
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
            
            <b-form-group class='text-center'>
                <b-button type="submit"  variant="primary">Login</b-button>
            </b-form-group>
            </b-form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PetAuth",
    data () {
        return {
            form: {
                password: ''
            },
            invalid: false    
        }
    },
    mounted() {
        let cookie = this.$cookies.get("token")
        if(cookie != null){
            // use router to get out of here
        }
    },
    methods: {
        async try_login() {
            const response = await fetch("http://localhost:3000/petmaster/auth", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.form)
            });
            return response.json()
        },
        onSubmit(evt) {
            evt.preventDefault();
            this.try_login().then(data => {
                if(data.status == 200) {
                    this.$cookies.set("token", data.auth_token, "1d")
                } else {
                    this.invalid = true
                }
            })
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
    /* .auth {
        margin: 5em;
    } */
</style>
