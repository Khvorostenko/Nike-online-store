<template>
  <v-container v-if="loading">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 d-inline-block v-for="(product, id) in products" :key="id">
        <v-card class="elevation-18 mb-2 pa-3 mr-2">
          <v-img :src="product.src" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{product.title}}</div>
              <h3>{{product.price}} $</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn :to="'/product/' + product.id">To order</v-btn>
            <v-btn color="purple" @click="addToCart(product)" :disabled="product.disable">
              <v-icon color="white">shopping_cart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card>
      <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ text }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-card>
  </v-container>
 <Loader v-else/>
</template>

<script>
import Loader from '../UI/Loader'
export default {
  data: () => ({
    show: false,
    snackbar: false,
    y: "top",
    x: null,
    mode: "",
    timeout: 1000,
    text: "Product added to cart"
  }),
  mounted() {
    this.$store.dispatch("getProduct");
  },
  computed: {
    products() {
      return this.$store.getters.PRODUCTS.filter(
        product => product.category == "girls"
      );
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
      this.snackbar = true;
      product.disable = true;
    }
  },
  components:{
    Loader,
  }
};
</script>

<style lang="css" scoped>
</style>