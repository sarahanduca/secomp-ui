<template>
  <div class="h-100">
    <div class="h-100 d-none d-md-block" id="mail-editor"></div>
    <b-row
      align-h="center"
      class="h-100 d-md-none text-light text-center"
      align-v="center"
    >
      <b-col>
        <b-container>
          <b-img src="../../assets/warning.svg" width="100" class="mb-4" />
          <p>O compositor só funciona em desktop</p>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "Disparos",
  data: function() {
    return {
      initialized: false
    };
  },
  mounted: function() {
    unlayer.init({
      id: "mail-editor",
      projectId: 1234,
      displayMode: "email"
    });
    this.initialized = true;
  },
  methods: {
    init: function() {
      if (!this.initialized) {
        unlayer.init({
          id: "mail-editor",
          projectId: 1234,
          displayMode: "email"
        });
        this.initialized = true;
      }
    }
  }
};
</script>

<style scoped></style>
