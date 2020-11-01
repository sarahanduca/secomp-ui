<template>
  <div class="h-100">
    <b-container class="h-100">
      <b-row
        align-h="center"
        align-v="center"
        class="h-100 text-center text-light"
      >
        <b-col>
          <b-img src="../../assets/secompBranca.svg" width="120" class="my-3" />
          <b-alert :show="fail" dismissible variant="danger"
            >Este link parece estar quebrado, não foi possível efetuar a
            operação
          </b-alert>
          <b-alert :show="removed" variant="success"
            >Desinscrição efetuada com sucesso!
          </b-alert>
          <h3>Você está prestes a se desinscrever da SECOMP</h3>
          <p>
            Ao se desinscrever da SECOMP você deixará de receber nossos emails e
            também <span>perderá o direito ao certificado.</span> Deseja
            continuar?
          </p>
          <b-overlay :show="fechting" variant="tranparent">
            <b-button :disabled="removed" variant="danger" @click="remover"
              >Sim, quero me desinscrever</b-button
            >
          </b-overlay>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Desinscreve",
  props: ["id", "token"],
  data() {
    return {
      fail: false,
      fechting: false,
      removed: false
    };
  },
  methods: {
    async remover() {
      if (this.id && this.token) {
        this.fechting = true;
        const response = await fetch(
          process.env.VUE_APP_API_URL +
            `/api/desinscreve?id=${this.id}&token=${this.token}`,
          {
            method: "DELETE",
            mode: "cors"
          }
        )
          .then(r => r.json())
          .catch(() => (this.fail = true));
        this.fechting = false;
        if (response.status == 200) {
          this.removed = true;
          this.fail = false;
        } else {
          this.removed = false;
          this.fail = true;
        }
      } else {
        this.removed = false;
        this.fail = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
h3 {
  color: #296016;
}
span {
  color: #dc3545;
}
.col {
  max-width: 500px;
}
</style>
