<template>
  <v-footer
    app
    inset
    absolute>
    <v-spacer />
    <span class="pa-3">
      {{ $t('footer.copyrights') }} - <strong>{{ $t('footer.company') }}</strong>
    </span>
    <v-spacer />
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
