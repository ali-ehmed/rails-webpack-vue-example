/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'application' %> (and
// <%= stylesheet_pack_tag 'application' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'

import Turbolinks from "turbolinks";
Turbolinks.start();

import Vue from 'vue/dist/vue.esm';

import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

// Components
import Ratings from '../components/books/Ratings.vue';
import ReadMore from '../components/books/ReadMore.vue';

// Register Components
Vue.component('ratings', Ratings);
Vue.component('read-more', ReadMore);

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]',
  });
  
  console.log(app);
});


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../components/app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   document.body.appendChild(document.createElement('app'))
//   const app = new Vue({
//     el: 'app',
//     template: '<App />',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })

