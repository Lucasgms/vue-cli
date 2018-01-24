<template>
  <catalogue />
</template>

<script>
import catalogue from './catalogue';

export default {
  name: 'HelloWorld',
  components: {
    catalogue,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
