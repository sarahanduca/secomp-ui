<template>
  <div class="h-100" id="mail-editor"></div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "Disparos",
  data: function() {
    return {};
  },
  mounted: function() {
    unlayer.init({
      id: "mail-editor",
      projectId: 1234,
      displayMode: "email"
    });
  }
};
</script>

<style scoped></style>
