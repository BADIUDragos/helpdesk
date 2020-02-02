<template>
  <v-container
    id="languageSwitcher"
    class="pa-2">
    <p class="text-center my-0 grey--text">
      {{ $t('languages.text') }}
    </p>
    <v-btn
      text
      block
      @click="$i18n.locale === 'en'
                  ? $i18n.locale = 'fr'
                  : $i18n.locale = 'en' "
      class="text-none">
      {{ $t('languages.other') }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'NavDrawerLanguage',
};
</script>

<style scoped>
  #languageSwitcher {
    position: absolute;
    bottom: 0;
  }
</style>
