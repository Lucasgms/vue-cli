<template>
  <div class="profile">
    <sidebar-menu class="col-xs-4"></sidebar-menu>
  </div>
</template>

<script>
import sidebarMenu from './sidebarMenu';

export default {
  name: 'Profile',
  components: {
    sidebarMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
