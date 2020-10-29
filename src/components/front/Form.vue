<template>
  <b-container class="h-100">
    <b-row align-v="center" align-h="center">
      <b-col>
        <h3 v-if="!show">Inscrição realizada com sucesso!</h3>
        <b-form @submit.stop.prevent="onSubmit" v-if="show">
          <b-form-group
            id="input-group-nome"
            label="Nome"
            label-for="input-nome"
          >
            <b-form-input
              id="input-nome"
              v-model="$v.form.nome.$model"
              :state="validateState('nome')"
              required
              placeholder="João da Silva"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label="Email"
            label-for="input-email"
            description="Seu email jamais será compartilhado com ninguém"
          >
            <b-form-input
              id="input-email"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              type="email"
              required
              placeholder="example@example.com"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!this.$v.form.email.callback">
              Email em uso
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-cpf"
            label="CPF"
            label-for="input-CPF"
            description="Precisamos do seu CPF para gerar o certificado"
          >
            <b-form-input
              id="input-email"
              v-model="$v.form.cpf.$model"
              :state="validateState('cpf')"
              required
              v-mask="'###.###.###-##'"
              placeholder="000.000.000-00"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!this.$v.form.cpf.callback">
              CPF inválido ou em uso
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-ra"
            label="RA"
            label-for="input-ra"
            description="Apenas para acadêmicos da UEM"
          >
            <b-form-input
              id="input-ra"
              v-model="$v.form.ra.$model"
              :state="validateState('ra')"
              placeholder="000000"
              v-mask="'######'"
            ></b-form-input>
            <b-form-invalid-feedback>
              RA deve ter 6 dígitos
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group class="text-center">
            <b-button type="submit" variant="success">
              Inscrever-se
            </b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mask } from "vue-the-mask";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  helpers
} from "vuelidate/lib/validators";

export default {
  name: "Form",
  mixins: [validationMixin],
  directives: { mask },
  data: function() {
    return {
      form: {
        nome: "",
        email: "",
        cpf: "",
        ra: ""
      },
      submited: false,
      response: null,
      show: true
    };
  },
  watch: {
    "form.nome": function() {
      if (this.response && this.response.erros && this.response.erros.nome) {
        this.response.erros.nome = undefined;
      }
    },
    "form.email": function() {
      if (this.response && this.response.erros && this.response.erros.email) {
        this.response.erros.email = undefined;
      }
    },
    "form.cpf": function() {
      if (this.response && this.response.erros && this.response.erros.cpf) {
        this.response.erros.cpf = undefined;
      }
    },
    "form.ra": function() {
      if (this.response && this.response.erros && this.response.erros.email) {
        this.response.erros.ra = undefined;
      }
    }
  },
  methods: {
    onSubmit: async function() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.response = await fetch(
        process.env.VUE_APP_API_URL + "/api/inscreve",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.form)
        }
      )
        .then(r => r.json())
        .catch(() => this.$router.push("/erro"));
      this.submited = true;

      if (this.response && this.response.status == "200") {
        this.show = false;
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    }
  },
  computed: {},
  validations: function() {
    // eslint-disable-next-line no-unused-vars
    const checkCallback = param => value => {
      if (this.submited) {
        if (this.response && this.response.status == "400") {
          if (this.response.erros[param] != undefined) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    };
    const composto = helpers.regex("composto", /.*([A-zÀ-ü]) .*([A-zÀ-ü])/);

    return {
      form: {
        nome: {
          callback: checkCallback("nome"),
          composto,
          required
        },
        email: {
          email,
          required,
          callback: checkCallback("email")
        },
        cpf: {
          required,
          minLength: minLength(14),
          maxLenght: maxLength(14),
          callback: checkCallback("cpf")
        },
        ra: {
          minLength: minLength(6),
          maxLenght: maxLength(6),
          callback: checkCallback("ra")
        }
      }
    };
  }
};
</script>

<style scoped></style>
