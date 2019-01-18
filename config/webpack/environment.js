const { environment } = require('@rails/webpacker');
const vue =  require('./loaders/vue');
const css =  require('./loaders/css');

environment.loaders.append('vue', vue);
environment.loaders.append('css', css);

module.exports = environment;

const webpack = require('webpack');

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    "window.jQuery": "jquery"
  })
);