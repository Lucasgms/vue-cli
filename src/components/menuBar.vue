<template>
  <nav class="menu">
    <div class="brand">
      <img src="../assets/logo.png">
    </div>
    <ul>
        <li v-for="item in items" v-bind:key="item.title">
          <a v-bind:href="item.link">{{ item.title }}</a>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      msg: 'This is a menu',
      items: [
        { title: 'Filmes', link: '/Produtos' },
        { title: 'Categorias', link: '/Categorias' },
        { title: 'Promoções', link: '/Promocoes' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/components/menu-bar";
</style>
