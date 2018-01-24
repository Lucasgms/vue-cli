<template>
  <div id="app">
    <menu-bar />
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
import menuBar from './components/menuBar';
import footerBar from './components/footerBar';

export default {
  name: 'App',
  components: {
    menuBar,
    footerBar,
  },
  computed: {
    key() {
      return this.$route.path.replace(/\//g, '_');
    },
  },
};
</script>

<style lang="scss">
  @import "styles/globals.scss";
</style>
