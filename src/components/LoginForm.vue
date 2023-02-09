<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="4">
        <div>
          <p v-show="isConnected">We're connected to the server!</p>
          <p>Message from server: "{{socketMessage}}"</p>
        </div>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: '',
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
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data
    }
  },
}
</script>
