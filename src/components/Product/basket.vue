<template>
  <v-container v-if="!emptyCart">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 d-inline-block v-for="(item, index) in cart" :key="index">
        <v-card class="elevation-18 mb-2 pa-3 mr-2">
          <v-img :src="item.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{item.title}}</div>
              <h4>{{item.price}} $</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn  :to="'/product/' + item.id">To order</v-btn>
            <v-spacer></v-spacer>
         <v-btn @click="delCart(item)" flat round icon><i class="material-icons">close</i></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout row>
      <v-flex xs12 class="text-xs-center pt-5">
        <h1 color="white">Cart empty</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      emptyCart: false
    };
  },
  mounted() {
    if (this.cart.length == 0) {
      this.emptyCart = true;
    } else {
      this.emptyCart = false;
    }
  },
  computed:{
    cart(){
      return this.$store.getters.cart
    }
  },
  methods:{
    delCart(item){
      const cart = this.cart 
      const cartIndex = cart.indexOf(item);
      cart.splice(cartIndex, 1)
      this.$store.commit('delToCart');
    }
  }
};
</script>


<style lang="css" scoped>
h1 {
  color: #ffffff;
}
</style>