<template>
  <b-overlay :show="fetching">
    <b-container class="h-100" v-if="!showTerm">
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
              description="Apenas para acadêmicos da UEM (Opcional)"
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
                Continuar
              </b-button>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="h-100" v-if="showTerm">
      <b-row align-v="center" align-h="center">
        <b-col>
          <h4 class="text-center">Termo de consentimento de uso de dados</h4>
          <p>
            A Lei Geral de proteção de Dados (LGPD) - Lei nº 13709, de 14 de
            agosto de 2018, atualizada pela Lei nº 13853, de 2019, dispõe sobre
            o tratamento de dados pessoais com o objetivo de proteger os
            direitos fundamentais de liberdade e de privacidade do indivíduo.
            Nesse sentido, este termo de consentimento versa sobre o uso dos
            dados coletados para a inscrição da quarta edição da Semana da
            Computação (SECOMP), no ano de 2020, e sobre a gravação das
            palestras que ocorrerão.<br />Os seguintes dados serão coletados e
            tratados: Nome, CPF, endereço eletrônico, RA/Matrícula. Esses dados
            serão coletados única e exclusivamente para confecção do relatório
            final do evento e dos certificados de participação. Caso os dados
            sejam utilizados para geração de estatísticas de participação no
            evento, eles serão anonimizados.<br />Os dados pessoais coletados
            estarão sob a responsabilidade do Departamento de Informática da
            Universidade Estadual de Maringá e não serão compartilhados com
            quaisquer outras instituições, públicas ou privadas. Durante a
            realização do evento, as palestras serão gravadas e serão
            disponibilizadas nas redes sociais oficiais do evento. As
            tecnologias necessárias para garantir a confidencialidade e a
            proteção dos dados estão sendo utilizadas de forma adequada.<br />A
            qualquer momento, você poderá solicitar remoção dos dados
            armazenados e ter acesso às informações sobre a forma e a duração de
            tratamento dos seus dados, e ainda revogar este consentimento.<br />Para
            dúvidas e esclarecimentos, entre contato com o Prof. Dr. Daniel
            Kikuti, coordenador geral do evento, pelo e-mail
            <b-link href="mailto:dkikuti@uem.br">dkikuti@uem.br</b-link>.
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center" class="text-center pb-3">
        <b-col>
          <b-button variant="success" @click="onSubmit">Inscrever-se</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
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
      show: true,
      fetching: false,
      showTerm: false
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
      if (this.showTerm) {
        this.fetching = true;
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
          .catch(() => this.$router.push("erro"));
        this.fetching = false;
        this.submited = true;

        if (this.response && this.response.status == "200") {
          this.show = false;
          this.showTerm = false;
        } else {
          this.showTerm = false;
        }
      } else {
        this.showTerm = true;
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

<style scoped>
.btn-success {
  border-color: #296016 !important;
  background-color: #296016 !important;
}
.btn-success:focus {
  box-shadow: 0 0 0 0.2rem #296016;
}
</style>
