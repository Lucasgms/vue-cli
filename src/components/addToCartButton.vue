<template>
  <button type="button" name="button" class="btn--cart" @click="handleCart">
      <i class="fa fa-cart-plus" v-if="!selected"></i>
      <i class="fa fa-check" v-if="selected"></i>
  </button>
</template>

<script>
export default {
  name: 'addToCartButton',
  props: ['selected'],
  data() {
    return {};
  },
  methods: {
    handleCart() {
      if (!this.selected) {
        this.$emit('add');
      } else {
        this.$emit('remove');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../styles/components/add-to-cart-button';
</style>
