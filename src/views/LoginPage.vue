<template>
  <v-card>
    <v-layout>
      <v-main>
        <LoginForm/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import LoginForm from "../layout/LoginForm.vue";

  export default {  
      name: 'LoginPage',
      components: {
          LoginForm
      },
  }
</script>