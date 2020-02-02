<template>
  <v-app id="main">
    <app-nav-drawer />
    <app-nav-bar />
    <v-content>
      <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>

import NavBar from '@/components/App/NavBar/NavBar.vue';
import NavDrawer from '@/components/App/NavBar/NavDrawer.vue';
import Footer from '@/components/App/Footer/Footer.vue';

export default {
  name: 'App',

  components: {
    AppNavDrawer: NavDrawer,
    AppNavBar: NavBar,
    AppFooter: Footer,
  },
};
</script>

<style>
  html{
    overflow-y: auto;
  }
</style>
