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
            <v-btn :to="'/product/' + item.id">To order</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout row>
      <v-flex xs12 class="text-xs-center pt-5">
        <h1 color="white">Cart empty</h1>
        <v-progress-circular :size="100" :width="5" color="white" indeterminate></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      cart: this.$store.state.cart,
      emptyCart: false
    };
  },
  mounted() {
    if (this.cart.length == 0) {
      this.emptyCart = true;
    } else {
      this.emptyCart = false;
    }
  }
};
</script>


<style lang="css" scoped>
h1{
  color: #ffffff;
}
</style>