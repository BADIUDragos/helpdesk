<template>
  <v-list nav>
    <app-nav-drawer-item
      :text="$t('pages.home')"
      icon="mdi-home"
      page="home" />
    <app-nav-drawer-item
      :text="$t('pages.issues')"
      icon="mdi-alert"
      page="issues" />
    <app-nav-drawer-item
      :text="$t('pages.about')"
      icon="mdi-account"
      page="about" />
  </v-list>
</template>

<script>
import NavDrawerItem from './NavDrawerItem.vue';

export default {
  name: 'NavDrawerContent',

  components: {
    appNavDrawerItem: NavDrawerItem,
  },
};
</script>
