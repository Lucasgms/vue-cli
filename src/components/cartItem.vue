<template>
  <div class="cart-item">
    <div class="item--name">
        <span>{{ movie.name }}</span>
    </div>
    <button type="button" class="item--action" @click="removeToCart">
        <span><i class="fa fa-trash-o"></i></span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'cartItem',
  props: {
    movie: { type: Object, required: true },
  },
  data() {
    return {};
  },
  methods: {
    removeToCart() {
      this.$store.commit('removeToCart', this.movie);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/mixins";
  @import "../styles/components/cart-item";
</style>
