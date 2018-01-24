<template>
  <nav class="sidebar-menu">
    <ul>
      <li v-for="item in items" :key="item.label" :class="hasSubitems(item)">
        <router-link class="menu--item" :to="item.link">
            <span><i :class="item.icon"></i>{{ item.title }}</span>
        </router-link>
        <ul v-if="item.subitems">
            <li v-for="subitem in item.subitems" :key="subitem.title">
              <router-link class="menu--item" to="subitem.link">
                  <span><i :class="subitem.icon"></i>{{ subitem.title }}</span>
              </router-link>
            </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'sidebarMenu',
  data() {
    return {
      items: [
        {
          title: 'Perfil',
          link: '/profile/',
          subitems: [
            { title: 'Configurações', link: '/profile/account_settings' },
          ],
        },
        { title: 'Configurações', link: '/profile/account_settings' },
        { title: 'Carrinho', link: '/profile/cart' },
      ],
    };
  },
  methods: {
    hasSubitems(item) {
      if (item.subitems) {
        return 'have-children';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/globals";
  @import "../styles/components/sidebar-menu";
</style>
