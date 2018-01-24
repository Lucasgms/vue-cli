<template>
  <div class="shopping-cart">
    <h3 class="cart--title">Carrinho <span><i class="fa fa-shopping-cart"></i></span></h3>
    <div class="cart--items">
      <cart-item v-for="movie in movies" :key="movie.name" :movie="movie">
      </cart-item>
    </div>
    <div class="cart--message" v-show="movies.length === 0">
      <p>Não há items adicionados</p>
    </div>
    <router-link type="button" to="/profile" class="cart--action">
      <span>Ir para o carrinho</span>
    </router-link>
  </div>
</template>

<script>
import cartItem from './cartItem';

export default {
  name: 'shoppingCart',
  components: {
    cartItem,
  },
  computed: {
    movies() {
      return this.$store.state.cartMovies;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/mixins";
  @import '../styles/components/shopping-cart';
</style>
