<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped fixed app temporary>
      <v-list dense>
        <v-list-tile v-for="(link, i) in links" :key="i" :to="link.url">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="./img/icons8-nike-50.png">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="hidden-sm-and-down">
        <v-btn class="menu" round flat v-for="(link, i) in links" :key="i" :to="link.url">
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-title>
       <v-toolbar-title><v-btn flat round :to="'/basket'"><v-icon left>shopping_cart</v-icon>{{cartCount}}</v-btn></v-toolbar-title>
    </v-toolbar>
    <v-content class="custom-content">
      <transition
        mode="out-in"
        enter-active-class="animated fadeInDown slower"
        leave-active-class="animated fadeOutUp slow"
      >
        <router-view></router-view>
      </transition>
    </v-content>
    <v-footer app fixed color="#fffff">
      <span>&copy; Khvorostenko Bohdan</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "+Men", icon: "", url: "/men" },
      { title: "+Women", icon: "", url: "/women" },
      { title: "+Boys", icon: "", url: "/boys" },
      { title: "+Girls", icon: "", url: "/girls" },
      // { title: "Shopping cart", icon: "shopping_cart", url: "/basket", cart: 2 },
      { title: "Search", icon: "search", url: "/search" },
      // { title: "Add Product", icon: "add", url: "/addProduct" },
      // { title: "Login", icon: "person", url: "/login" }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    cartCount() {
      return this.$store.getters.CARTCOUNT;
    }
  }
};
</script>



<style lang="css">
.custom-content {
  background-image: url("./img/section-1-bg.png");
  background-size: cover;
  background-attachment: fixed;
  font-family: "Comfortaa", cursive;
}
.menu {
  font-family: "Comfortaa";
  font-weight: bold;
}
h3 {
  color: green;
}

</style>