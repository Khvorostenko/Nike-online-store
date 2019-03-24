<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                :rules="loginRules"
                v-model="username"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                :counter="6"
                :rules="passwordRules"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <h4>
              No account?
              <v-btn flat :to="'/registration'">
                <span class="buttonRegistration">Sign Up</span>
              </v-btn>
            </h4>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" :loading="!loading" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
      valid: true,
      loginRules: [v => !!v || "Login is required"],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must be equal or than 6 characters"
      ],
      error: []
    };
  },
  props: {
    source: String
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    async login() {
      const authData = {
        email: this.username,
        password: this.password,
        returnSecureToken: true
      };
      try {
        const response = await axios.post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCT9atmCdag08uHD7GRo5mCAAJplzBief0",
          authData
        );
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<style lang="css">
.buttonRegistration {
  color: orange;
  text-decoration: none;
  text-transform: none;
}
</style>