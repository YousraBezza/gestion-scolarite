<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Titre">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Destinataire">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Module">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.salary }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
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
          name: "Introduction d'IGL",
          salary: "1-11-19",
          country: "1CS",
          city: "IGL"
        },
          {
          name: "Hachage",
          salary: "3-11-19",
          country: "2CP",
          city: "SFSD"
        },
        {  
          name: "Methodologies",
          salary: "18-11-19",
          country: "1CS",
          city: "IGL"
        },
        {  
          name: "UML",
          salary: "27-11-19",
          country: "1CS",
          city: "IGL"
        },
        
       
      ]
    };
  }
};
</script>
