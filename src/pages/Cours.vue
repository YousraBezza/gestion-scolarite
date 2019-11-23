<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Cours Envoyés</h4>
            <p class="category">Informations sur les cours que vous avez envoyé, y compris la date d'envoi, la promo concernée...</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        
      </div> 
    </div>
     <form >
      <div
        class="  md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-70 "
      >
    <md-card class="md-layout-item mr-20">
      <md-card-header data-background-color="green">
        <h4 class="title">Nouveau Cours</h4>
        <p class="category">Envoyer un nouveau cours en remplissant ce formulaire.</p>
      </md-card-header>

      <md-card-content>
       <div class="md-layout-item md-small-size-100 md-size-33 ">
            <md-field>
              <label>Titre</label>
              <md-input v-model="emailadress" type="text"></md-input>
            </md-field>
          </div>



            <div class="md-layout-item md-small-size-100 md-size-33">
            
          
             
          <md-list class="dropdown"><drop-down>
          
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                 
                  <p class="hidden-lg hidden-md">Notifications</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">1CP</a></li>
                  <li><a href="#">2CP</a></li>
                  <li><a href="#">1CS</a></li>
                  <li><a href="#">2CS</a></li>
                  <li><a href="#">3CS</a></li>
                </ul>
              </drop-down>
               </md-field>
            </md-list>
           
          </div>



            <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Description</label>
              <md-input v-model="emailadress" type="text"></md-input>
            </md-field>
          </div>
         
      </md-card-content>
      </md-card>
      </div>
      </form>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  }
};
</script>
