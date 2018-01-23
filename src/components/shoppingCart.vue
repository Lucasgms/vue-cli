<template>
  <div class="shopping-cart">
    <h3 class="cart--title">Carrinho <span><i class="fa fa-cart-plus"></i></span></h3>
    <div class="cart--items">
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  data() {
    return {
      message: 'carrinho',
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../styles/components/shopping-cart';
</style>
