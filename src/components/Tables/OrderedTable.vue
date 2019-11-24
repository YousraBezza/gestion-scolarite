<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Matricule">
          <md-field> <md-input v-model="item.matricule"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Nom">
          <md-field> <md-input v-model="item.nom"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Prénom">
          <md-field> <md-input v-model="item.prenom"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Absences">
          <md-field> <md-input v-model="item.absence"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle Continu">
          <md-field> <md-input v-model="item.cc"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle intermédiaire">
          <md-field> <md-input v-model="item.ci"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle Finale">
          <md-field> <md-input v-model="item.exam"></md-input></md-field>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>done_all</md-icon>
            <md-tooltip md-direction="top">présent</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">absent</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import {rows} from 'C:/igl/gestion-scolarite/src/pages';
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          matricule: 1,
          nom: "Bezza",
          prenom: "Yousra",
          absence: "2",
          cc: "19",
          ci:"20",
          exam:"17"
        },
        {
          matricule: 2,
          nom: "Khaber",
          prenom: "Sara",
          absence: "2",
          cc: "19",
          ci:"20",
          exam:"17"
        },
        {
          matricule: 3,
          nom: "Chikh",
          prenom: "Yanis",
          absence: "2",
          cc: "19",
          ci:"20",
          exam:"17"
        },
        {
          matricule: 4,
          nom: "Idrissou",
          prenom: "Dalia",
          absence: "2",
          cc: "19",
          ci:"20",
          exam:"17"
        }
      ]
    };
  }
};
</script>
