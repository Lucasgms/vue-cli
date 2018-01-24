<template>
<div class="card">
  <figure class="card--figure">
    <img :src="movie.img" alt="">
  </figure>
  <btn-cart :selected="selected" v-on:add="addToCart" v-on:remove="removeToCart"></btn-cart>
  <button type="button" name="button" class="btn--rate">{{ movie.rate }}</button>
  <div class="card--content">
    <h3 class="content--title">{{ movie.name }}</h3>
    <p class="content--description">
      {{ movie.description }}
    </p>
    <i class="fa fa-angle-down"></i>
  </div>
</div>
</template>

<script>
import btnCart from './addToCartButton';

export default {
  name: 'Card',
  components: {
    btnCart,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selected() {
      const index = this.$store.state.cartMovies.indexOf(this.movie);
      if (index !== -1) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {

    };
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.movie);
    },
    removeToCart() {
      this.$store.commit('removeToCart', this.movie);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/components/card';
</style>
