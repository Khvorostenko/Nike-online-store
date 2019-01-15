<template>
<div class="bg">
<v-layout row justify-center>
    <v-flex xs12 sm6 md6>
           <v-card-title primary-title>
          <div>
            <h1>{{product.title}}</h1>
            <h2>{{product.price}}$</h2>
          </div>
        </v-card-title>
        <v-img
          :src="product.src"
        >
        </v-img>
<v-flex xs12 sm6 class="py-2">
   <v-flex xs12 sm6 d-flex>
        <v-select
          :items="sizeItems"
          label="Size"
          solo
        ></v-select>
      </v-flex>
          </v-flex>
  <v-slide-y-transition>
          <v-card-text v-show="show">
           {{product.description}}
          </v-card-text>
        </v-slide-y-transition>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
<v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="purple" dark>Checkout</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Order Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                 
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Adress*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="City/Town*" type="text" required></v-text-field>
              </v-flex>
                <v-flex xs12 sm6>
                <v-text-field label="Home Phone*" type="number" required></v-text-field>
              </v-flex>
                <v-flex xs12 sm6>
                <v-text-field label="Mobile Phone*" type="number" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">To complete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-flex>
</v-layout>
</div>
</template>



<script>
export default {
    props:['id'],
    data: () => ({
        show: true,
        dialog:false,
        sizeItems:['US 7(ru 39)','US 7.5(ru 39.5)','US 8(ru 40)','US 8.5(ru 41)','US 9(ru 41.5)','US 9.5(ru 42)','US 10(ru 43)','US 11(ru 44)',]
    }),
    computed:{
        product(){
            const id = this.id
            return this.$store.getters.productById(id)
        },
    }
}
</script>

<style lang="css" scoped>
.bg {
    background: #ffffff;
    width: 100%;
    height: 100%;
}
.productSize {
    text-transform: uppercase;
    color: green;
}
h2 {
  color: green;
}
</style>