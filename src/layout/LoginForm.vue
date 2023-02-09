<template>
    <v-container>
      <v-row class="justify-center pa-11">
        <v-col cols="12" sm="8" md="4">
            <v-card>
                <v-card-title>
                    Login Account
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        type="email"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                        ></v-text-field>
            
                        <v-btn color="primary" @click="submit">Login</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
      name: 'LoginPage',
      data() {
          return {
              socekt: null,
              email: '',
              password: '',
              valid: false,
              emailRules: [
                  v => !!v || 'Email is required',
                  v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
              ],
              passwordRules: [
                  v => !!v || 'Password is required',
                  v => (v && v.length >= 6) || 'Password must be at least 6 characters'
              ]
          }
      },
      methods: {
          submit() {
              if (this.$refs.form.validate()) {
                    this.socket = new WebSocket("http://35.202.174.163:3030/")
                    this.socket.emit(
                        'create',
                        'authentication',
                        {
                            strategy: 'local',
                            email: "{{ email }}",
                            password: "{{ password }}"
                        },
                        function (error, authResult) {
                            console.log(authResult)
                        }
                    )
                }
          }
      }
  }
  </script>
  