<template>
  <v-card>
    <v-card-title><h1>Search Product</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="products" :search="search">
      <template slot="items" slot-scope="props">
        <td><v-btn flat outline  :to="'/product/' + props.item.id">
             {{ props.item.title }} 
            </v-btn></td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">{{ props.item.category }}</td>
        <td class="text-xs-left">{{ props.item.price }}$</td>
        <td class="text-xs-left"><img :src="props.item.src" width="70" height="60"></td>
      </template>
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Title",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "Description", value: "description" },
        { text: "Category", value: "category" },
        { text: "Price", value: "price" },
        { text: "Image", value: "src" }
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getProduct");
  },
  computed: {
    products() {
      return this.$store.getters.PRODUCTS
    }
  }
};
</script>

