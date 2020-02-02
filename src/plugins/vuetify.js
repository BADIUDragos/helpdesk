import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LRU from 'lru-cache';

Vue.use(Vuetify);

const cache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
});


export default new Vuetify({
  theme: {
    dark: false,
    options: {
      cache,
      minifyTheme(css) {
        return process.env.NODE_ENV === 'production'
          ? css.replace(/[\r\n|\r|\n]/g, '')
          : css;
      },
    },
    themes: {
      light: {
        primary: '#41b883',
        secondary: '#35495e',
      },
      dark: {
        primary: '#41b883',
        secondary: '#35495e',
      },
    },
  },
});
