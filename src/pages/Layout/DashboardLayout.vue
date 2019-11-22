<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Profile</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <md-icon>content_paste</md-icon>
        <p>Suivi</p>
      </sidebar-link>
      
      <sidebar-link to="/table">
        <md-icon>book</md-icon>
        <p>Cours</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>calendar_today</md-icon>
        <p>Emplois du temps</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Délibération</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>school</md-icon>
        <p>Encadrement</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>settings_applications</md-icon>
        <p>Paramètres</p>
      </sidebar-link>
      
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
