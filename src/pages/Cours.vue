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
      <form >
    <md-card class="md-layout-item ">
      <md-card-header data-background-color="green">
        <h4 class="title">Nouveau Cours</h4>
        <p class="category">Envoyer un nouveau cours en remplissant ce formulaire.</p>
      </md-card-header>

      <md-card-content>
          <div class="md-layout">
       <div class="md-layout-item md-small-size-100 md-size-50 ">
            <md-field>
              <label>Titre</label>
              <md-input v-model="emailadress" type="text"></md-input>
            </md-field>
          </div>

          <div class="col-md-12 mr-40">
          <div class="md-layout-item md-small-size-100 md-size-20">
          <div class="upload-btn-wrapper">
              <md-button md-button class="md-raised md-success" > <i class="material-icons">attachment</i> </md-button>
              <input type="file" name="myfile" />
            </div>
          </div>
          </div>
          
        
          <div class="md-layout-item md-small-size-100 md-size-60">
              <md-field>
                <label>Description</label>
                <md-input v-model="emailadress" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
           
                <md-list class="dropdown"><drop-down>   
                      <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                      </a>
                      <md-button md-button class="md-raised md-success"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Destinataire
                        </md-button>
                      
                      <ul class="dropdown-menu dropdown-menu-left">
                        <li><a href="#">1CP</a></li>
                        <li><a href="#">2CP</a></li>
                        <li><a href="#">1CS</a></li>
                        <li><a href="#">2CS</a></li>
                        <li><a href="#">3CS</a></li>
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
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  }
};
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