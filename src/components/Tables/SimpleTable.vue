<template>
  <div>
    <md-table v-model="cours" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Titre">{{ item.titre }}</md-table-cell>
        <md-table-cell md-label="Destinataire">{{ item.promo }}</md-table-cell>
        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date_h}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import CoursServ from '../../coursServ.js';
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
   cours=[]
  },
    async created() {
    try {
      this.cours = await CoursServ.getClasse();
    } catch(err){
      this.error = err.message;
    }
  },
 
};
</script>
