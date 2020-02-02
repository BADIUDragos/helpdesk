<template>
  <v-card class="mx-4">
    <v-card-title>
      <h1>
        {{ $t('pages.about') }}
      </h1>
    </v-card-title>
    <v-card-text>
      <hr class="mb-3 lighten-5">
      <p class="ma-0">
        Quisque venenatis accumsan efficitur. Donec blandit nec dolor
        id lobortis. Proin vel suscipit sapien. Nulla enim nisi,
        bibendum et dapibus id, malesuada ac eros. Vivamus ac mollis
        eros. Etiam aliquet eget massa ut cursus. Nam sollicitudin orci
        vel tellus placerat egestas. Quisque scelerisque, quam non
        dignissim mollis, nisl enim congue diam, sit amet pellentesque
        nibh tortor a mi. Quisque iaculis est lorem. Ut augue enim,
        tincidunt in pulvinar eu, rhoncus quis erat. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec bibendum, leo quis pretium accumsan, odio ex lobortis
        odio, eget facilisis mi felis in augue. Ut tempor lectus venenatis
        dignissim ornare. Maecenas eu nibh laoreet, volutpat tellus non,
        pharetra est. Sed mi lacus, malesuada quis ipsum ut, cursus
        malesuada tortor. Pellentesque id rhoncus sem, nec auctor metus.
        <br><br>
        Curabitur convallis cursus sagittis. Vivamus ut imperdiet dolor,
        a lacinia tortor. Etiam justo nibh, pretium vel nisi vitae,
        convallis tincidunt nisi. Ut orci erat, rutrum in finibus ac,
        facilisis et neque. Donec sodales est orci, ac rhoncus odio
        dapibus in. Cras varius sapien sit amet rhoncus auctor. Quisque
        porta dolor eget purus dapibus, at pellentesque dolor commodo.
        Aliquam ultrices ultricies libero eget feugiat.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About',

  metaInfo() {
    return {
      title: this.$t('pages.about'),
      titleTemplate: '%s - helpdesk',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
