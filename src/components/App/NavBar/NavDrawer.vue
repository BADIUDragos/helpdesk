<template>
  <v-list dense>
    <v-navigation-drawer
      v-model="opened"
      mobile-break-point="768px"
      app
      clipped>
      <app-nav-drawer-content />
      <app-nav-drawer-language />
    </v-navigation-drawer>
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NavDrawerContent from '@/components/App/NavBar/NavDrawerContent.vue';
import NavDrawerLanguage from '@/components/App/NavBar/NavDrawerLanguage.vue';

export default {
  name: 'NavDrawer',

  computed: {
    ...mapGetters('navDrawer', ['isOpened']),

    opened: {
      get() {
        return this.isOpened;
      },
      set(val) {
        this.setOpened(val);
      },
    },
  },

  methods: {
    ...mapActions('navDrawer', ['setOpened']),
  },

  components: {
    AppNavDrawerContent: NavDrawerContent,
    AppNavDrawerLanguage: NavDrawerLanguage,
  },
};
</script>
