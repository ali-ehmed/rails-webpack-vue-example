<template>
  <span>
    <a href="#" class="text-warning" v-for="(item, index) in starList" v-on:click="updateStar(index, $event)">
      <i class="fa-star rating-star" v-bind:class="{ 'fas': item, 'far': !item  }"></i>
    </a>
  </span>
</template>

<script>
  import Vue from 'vue/dist/vue.esm';
  import axios from 'axios';
  import Rails from 'rails-ujs';
  export default {
    data: function () {
      return {
        starList: [false, false, false, false, false]
      }
    },
    mounted() {
      let ratingCount = this.ratingCount || 0;
      for(let i = 0; i < 5; i++) {
        Vue.set(this.starList, i, i < ratingCount);
      }
    },
    props: ['ratingCount', 'bookId'],
    methods: {
      updateStar(index, e) {
        e.preventDefault();
        let rating = index + 1;
        axios.put("/books/" + this.bookId, { format: 'json', rating: rating, authenticity_token: Rails.csrfToken() })
          .then((response) => {
            this.starList.forEach((_, i) => {
              Vue.set(this.starList, i, i < response.data.rating);
            });
          })
          .catch((error)=>{
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
