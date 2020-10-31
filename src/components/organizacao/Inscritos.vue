<template>
  <b-row class="w-100 mx-0">
    <b-col
      class="d-sm-none d-none d-md-block pt-3"
      cols="3"
      v-b-visible="sidebar_visible"
    >
      <b-form-group>
        <b-form-input
          id="input-search"
          v-model="filter"
          type="text"
          placeholder="Pesquisar"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="px-0 d-md-block" v-if="!isBusy">
      <b-form-group class="my-2 mx-2 d-md-none">
        <b-form-input
          id="input-search-mobile"
          v-model="filter"
          type="text"
          placeholder="Pesquisar"
        ></b-form-input>
      </b-form-group>
      <b-table
        id="t-inscritos"
        caseFirst="upper"
        class="text-left"
        hover
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :fields="fields"
        :filter="filter"
        primary-key="id"
        responsive="sm"
        :items="inscritos"
        selectable
        select-mode="single"
        @row-selected="rowSelected"
      >
        <template #head(id)="data">
          <span>{{ data.label.toUpperCase() }}</span>
        </template>
        <template #head(cpf)="data">
          <span>{{ data.label.toUpperCase() }}</span>
        </template>
        <template #head(ra)="data">
          <span>{{ data.label.toUpperCase() }}</span>
        </template>
        <template #cell(campeonatos)="data">
          <span>{{
            data.item.campeonatos
              ? JSON.parse(data.item.campeonatos).join()
              : data.item.campeonatos
          }}</span>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import AuthService from "../../services/auth.js";
export default {
  name: "Inscritos",
  data: function() {
    return {
      inscritos: [],
      filter: null,
      fields: [
        { key: "id", sortable: true },
        { key: "nome", sortable: true }
      ],
      sortBy: "id",
      sortDesc: false,
      isBusy: true
    };
  },
  created: async function() {
    const key = AuthService.getKey();

    if (key) {
      const data = await fetch(process.env.VUE_APP_API_URL + "/api/list", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${key}`
        }
      })
        .then(r => r.json(), false)
        .catch(() => {
          this.$router.push("/erro");
        });
      this.inscritos = data;
      this.isBusy = false;
    } else {
      AuthService.logout();
      this.$router.push("/login");
    }
  },
  methods: {
    sidebar_visible: function(visible) {
      if (visible) {
        this.fields = [
          { key: "id", sortable: true },
          { key: "nome", sortable: true },
          { key: "email", sortable: true },
          { key: "cpf", sortable: true },
          { key: "campeonatos", sortable: true },
          { key: "ra", sortable: true }
        ];
      } else {
        this.fields = [
          { key: "id", sortable: true },
          { key: "nome", sortable: true }
        ];
      }
    },
    rowSelected: function(inscrito) {
      this.$router.push({
        path: "/petmaster/inscrito",
        query: { id: inscrito[0].id }
      });
    }
  },
  computed: {}
};
</script>

<style scoped>
table,
td,
th {
  text-align: left;
}
.row,
.col {
  background-color: white;
}
</style>
