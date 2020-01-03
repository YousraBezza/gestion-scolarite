<template>
  <div>
    <md-list class="dropdown md-layout-item d-small-size-5 md-size-5"><drop-down>   
                      <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                      </a>
                      <md-button md-button class="md-raised md-success"   data-toggle="dropdown"  aria-expanded="false">
                          <p>{{groupe}}</p>
                        </md-button>
                      
                      <ul class="dropdown-menu dropdown-menu-left">
                        <li><md-button v-on:click="changerGroupe(306)" class="md-simple">1CS 6</md-button></li>
                        <li><md-button v-on:click="changerGroupe(301)" class="md-simple">1CS 1</md-button></li>
                        
                      </ul>
                    </drop-down>
                    
                  </md-list>   
                  
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Matricule">
          <md-field> <md-input v-model="item.id_etud"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Nom">
          <md-field> <md-input v-model="item.nom"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Prénom">
          <md-field> <md-input v-model="item.prenom"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Absences">
          <md-field> <md-input   v-model="item.abs"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle Continu">
          <md-field> <md-input id="cc" v-model="item.Note1"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle intermédiaire">
          <md-field> <md-input v-model="item.note2"></md-input></md-field>
          </md-table-cell>
        <md-table-cell md-label="Contrôle Final">
          <md-field> <md-input v-model="item.note3"></md-input></md-field>
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
    <div class=" md-layout-item md-small-size-100 md-size-50">
                      <md-button md-button id="submiit"  class="md-round md-success" type="submit" v-on:click="modifnotes()">Sauvegarder</md-button>
          </div>
  </div>
  

  
</template>


<script>
import ClasseService from '../../ClasseService.js';
import NotesService from '../../NotesService.js';


export default {
  name: "ordered-table",
  props: {
    
    tableHeaderColor: {
      type: String,
      default: ""
    }
    
  },
  
  data(){
    return {
      selected: [],
      users: [],
      grp_id: '306',
      groupe:"1CS - G06",
      error:''
    }
      
    
  },
  async created() {
    try {
      this.users = await ClasseService.getClasse(this.grp_id);
    } catch(err){
      this.error = err.message;
    }
  },
  methods:{
  async changerGroupe(id){
    try{
      this.grp_id = id;
      if (id == 301){
        this.groupe = "1CS - G01";
      }
      if (id == 306){
        this.groupe="1CS - G06";
      }
      this.users = await ClasseService.getClasse(id);

    }catch(err){
      this.error = err.message;
    }
  },
  async modifnotes(){
    await  NotesService.updateNotes(this.users);
  }
  }
};
</script>
