<template>
  <v-container v-if="loading">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-3">Create New Product</h1>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex xs12 dark>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :counter="40"
                  label="Title Product"
                  required
                  color="white"
                  dark
                ></v-text-field>

                <v-textarea
                  v-model="description"
                  :rules="descriptionRules"
                  label="Description Product"
                  dark
                  required
                  color="white"
                ></v-textarea>

                <v-text-field
                  v-model="price"
                  :rules="priceRules"
                  label="Price"
                  required
                  type="number"
                  color="white"
                  dark
                ></v-text-field>
                <v-select
                  :items="items"
                  label="Category"
                  color="white"
                  :rules="[v => !!v || 'Category is required']"
                  v-model="category"
                  dark
                ></v-select>
                <v-text-field
                  v-model="src"
                  :rules="srcRules"
                  label="Link Image Product"
                  required
                  color="white"
                  dark
                ></v-text-field>
                <v-switch label="Disabled" v-model="disable"></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
          <v-spacer></v-spacer>
          <v-btn
            @click="addProduct"
            color="success"
            :disabled="!valid"
            :loading="!loading"
          >Add product</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
<Loader v-else/>
</template>



<script>
import Loader from '../UI/Loader'
export default {
  data: () => ({
    valid: false,
    title: "",
    description: "",
    titleRules: [
      v => !!v || "Title is required",
      v => v.length <= 40 || "Title must be less than 40 characters"
    ],
    price: null,
    descriptionRules: [v => !!v || "Descriprion Product is required"],
    items: ["men", "women", "boys", "girls"],
    priceRules: [v => !!v || "Price is required"],
    src: "",
    srcRules: [v => !!v || "Link Image Product is required"],
    items: ["men", "women", "boys", "girls"],
    category: "",
    disable: false
  }),
  methods: {
    addProduct() {
      const product = {
        title: this.title,
        description: this.description,
        price: this.price,
        category: this.category,
        src: this.src,
        disable: this.disable
      };
      this.$store.dispatch("saveProduct", product);
      this.$router.push("/");
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  components:{
    Loader,
  }
};
</script>

<style lang="css" scoped>
h1 {
  color: #ffffff;
}
</style>