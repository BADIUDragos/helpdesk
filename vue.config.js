const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },

  configureWebpack: process.env.NODE_ENV === 'production' ? {
    plugins: [
      new WebpackObfuscator({
        deadCodeInjection: true,
        disableConsoleOutput: true,
        selfDefending: true,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '-',
      },
    },
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js',
    },
  } : {
    devServer: {
      hot: true,
    },
  },
};
