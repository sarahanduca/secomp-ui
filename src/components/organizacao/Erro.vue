<template>
  <div class="w-100 h-100">
    <b-row align-h="center" align-v="center" class="mx-0 h-100">
      <b-col class="text-center">
        <b-img src="../../assets/secompBranca.svg" width="150" />
        <h2 class="mt-2">Algo deu errado!</h2>
        <b-button class="mt-2" variant="light" to="/"
          >Voltar para o início</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Erro"
};
</script>

<style scoped>
h2 {
  color: #296016;
}
</style>
