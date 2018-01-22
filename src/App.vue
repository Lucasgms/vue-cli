<template>
  <div id="app">
    <menu-bar />
      <catalogue />
    <!-- <footer-bar/> -->
  </div>
</template>

<script>
import menuBar from './components/menuBar';
import footerBar from './components/footerBar';
import catalogue from './components/catalogue';

export default {
  name: 'App',
  components: {
    menuBar,
    footerBar,
    catalogue,
  },
};
</script>

<style lang="scss">
  @import "styles/globals.scss";
</style>
