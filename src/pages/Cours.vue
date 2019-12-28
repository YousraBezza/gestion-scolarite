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

   

     
      <div
        class="  md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-90 "
      >
      <form @submit="formSubmit">
    <md-card class="md-layout-item ">
      <md-card-header data-background-color="green">
        <h4 class="title">Nouveau Cours</h4>
        <p class="category">Envoyer un nouveau cours en remplissant ce formulaire.</p>
      </md-card-header>

      <md-card-content>
          <div class="md-layout">
       <div class="md-layout-item md-small-size-100 md-size-60 ">
            <md-field>
              <label>Titre</label>
              <md-input v-model="titre" type="text" required></md-input>
            </md-field>
          </div>

        
          <div class="md-layout-item md-small-size-100 md-size-20">
          <div class="upload-btn-wrapper">
              <md-button md-button class="md-raised md-success" > <i class="material-icons">attachment</i> </md-button>
              <input type="file"  required />
            </div>
          </div>
          
           
        
          <div class="md-layout-item md-small-size-100 md-size-60">
              <md-field>
                <label>Description</label>
                <md-input v-model="description" type="text" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
          
                <md-list class="dropdown" required><drop-down>   
                      <a slot="title" class="dropdown-toggle" data-toggle="dropdown" required>
                      </a>
                      <md-button md-button class="md-raised md-success"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required>
                          Destinataire
                        </md-button>
                      
                      <ul class="dropdown-menu dropdown-menu-left" id="drop" >
                        <li><md-button v-on:click="SetPromo('1CP')" class="md-simple">1CP</md-button></li>
                        <li><md-button v-on:click="SetPromo('2CP')" class="md-simple">2CP</md-button></li>
                        <li><md-button v-on:click="SetPromo('1CS')" class="md-simple">1CS</md-button></li>
                        <li><md-button v-on:click="SetPromo('2CS')" class="md-simple">2CS</md-button></li>                       
                      </ul>
                    </drop-down>
                    
                  </md-list>     
                </div>
        </div>
        <br><br>
        <div class=" md-layout-item md-small-size-100 md-size-50">
            <md-button md-button class="md-round md-success" type="submit">Envoyer</md-button>
        </div>
        
      </md-card-content>
      </md-card>
    </form>
   
      </div>
     


  </div>
</template>

<script>
import { SimpleTable } from "@/components"
import axios from 'axios'

export default {
  components: {

    SimpleTable
  },

      
        data() {
            return {
              titre: '',
              description: '',
              drop:'',
              promo:"1CP",
            };
        },
        methods: {
            formSubmit() {
    
               axios.post('http://localhost:8080/courss/add', {
                   titre: this.titre,
                  promo:this.promo,
                  description:this.description,
           
               })  
    },
   async  SetPromo(prom){
 try{
      this.promo = prom;
    }catch(err){
     console.log('erreur'+err)
    }
    }

}
}
</script>
<style>.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
 
  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }</style>