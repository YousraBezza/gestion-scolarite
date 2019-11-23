<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-1000 md-xsmall-size-1000 md-size-500"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Liste des étudiants</h4>
            <p class="category">{{groupe}}</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="green"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data: () => ({
      groupe: 'Groupe 1 / 1CP',
      type: null
    })
}
</script>
