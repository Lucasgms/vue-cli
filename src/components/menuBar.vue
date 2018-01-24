<template>
  <div class="">
    <nav class="menu">
      <router-link to="/" class="brand">
        <img src="../assets/logo.png">
      </router-link>
      <ul>
          <li v-for="item in items" v-bind:key="item.title">
            <a v-bind:href="item.link" @click="openCart">{{ item.title }}</a>
          </li>
        </ul>
    </nav>
    <shopping-cart ref="shoppingCart" v-show="showCart"/>
  </div>
</template>

<script>
import shoppingCart from './shoppingCart';

export default {
  name: 'MenuBar',
  components: {
    shoppingCart,
  },
  data() {
    return {
      msg: 'This is a menu',
      items: [
        { title: 'Filmes', link: '/Produtos' },
        { title: 'Categorias', link: '/Categorias' },
        { title: 'Promoções', link: '/Promocoes' },
        { title: 'Carrinho', link: '#', action: 'openCart' },
      ],
      showCart: false,
    };
  },
  methods: {
    openCart() {
      event.preventDefault();
      const linkLeftPosition = event.target.offsetLeft;
      const cart = this.$refs.shoppingCart;
      const windowWidth = window.innerWidth;
      const leftPosition = windowWidth - linkLeftPosition - 75;
      this.showCart = !this.showCart;
      cart.$el.style.right = `${leftPosition}px`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/components/menu-bar";
</style>
