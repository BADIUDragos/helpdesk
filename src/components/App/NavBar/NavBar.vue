<template>
  <v-app-bar
    app
    clipped-left>
    <v-app-bar-nav-icon @click.stop="toggleOpened">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <v-toolbar-title>
      <v-img
        src="@/assets/logo.png"
        height="48px"
        contain />
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavBar',

  methods: {
    ...mapActions('navDrawer', ['toggleOpened']),
  },
};
</script>
