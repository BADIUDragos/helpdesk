<template>
  <v-card class="mx-4">
    <v-card-title>
      <h1>
        {{ $t('pages.home') }}
      </h1>
    </v-card-title>
    <v-card-text>
      <hr class="mb-3 lighten-5">
      <p class="ma-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer efficitur pretium tortor id faucibus. Nam mattis
        nisi urna, sit amet lacinia augue molestie dignissim. Sed
        ullamcorper eget ipsum eu ullamcorper. Sed eu risus dolor.
        Cras aliquam lacus ac nunc varius sagittis. Nam libero dolor,
        euismod eu urna in, tincidunt tristique lorem. Mauris laoreet,
        nulla id dapibus finibus, mi justo sagittis eros, sed euismod
        ex odio non neque.
        <br><br>
        Proin vel sem lobortis dolor iaculis vulputate et non arcu.
        Nam et elit nec turpis luctus vulputate non ut lorem. In
        dapibus porttitor hendrerit. Duis finibus mattis elit. Cras
        eget nisi volutpat, convallis ex sed, mollis magna. Nam
        tristique, sem ac vulputate aliquam, urna sem pellentesque
        ante, id bibendum ligula lacus nec dui. Curabitur accumsan
        ligula nec ex blandit, a facilisis ante dapibus. Suspendisse
        tempor erat at pellentesque condimentum. Nam molestie dictum
        mauris eget vehicula. Donec dictum, neque id tristique
        bibendum, lorem augue pretium diam, et consequat diam augue
        sit amet justo. Maecenas at nibh mattis, pretium turpis at,
        interdum arcu.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Home',

  metaInfo() {
    return {
      title: this.$t('pages.home'),
      titleTemplate: '%s - helpdesk',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
