<template>
  <div>
    <div class="row mb-3">
      <div class="col-sm-4">
        <b>Rate this book</b>
      </div>
      <div class="col-sm-6 rating">
        <ratings :rating-count="book.rating" :book-id="book.id"></ratings>
      </div>
    </div>
    <a href="#" v-if="!readMore" v-on:click="toggleReadMore($event)">Read More</a>
    <div class="book-details" v-if="readMore">
      <div class="row mt-3">
        <div class="col">
          <a :href="'/books/' + book.id + '/edit'">Edit Book Info</a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col text-justify">
          {{ book.description }}
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <a href="#" v-on:click="toggleReadMore($event)"> Read Less </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        readMore: false
      }
    },
    props: ['book'],
    methods: {
      toggleReadMore(e) {
        e.preventDefault();
        this.readMore = !this.readMore;
      }
    }
  }
</script>
