<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400">
    <v-card-title>
      <v-icon
        large
        left>
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "This is vuetiful."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{msg}}</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end>
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Issues',

  metaInfo() {
    return {
      title: this.$t('pages.issues'),
      titleTemplate: '%s - helpdesk',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
  computed: {
    msg() {
      return 'karlito';
    },
  },
};
</script>
