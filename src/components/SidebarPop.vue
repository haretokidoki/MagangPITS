<template>
    <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item          >
              <v-list-item-title>{{ email }}</v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Approvals" value="approvals" href="#/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Documents" value="documents" href="#/document"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Login" value="starred" href="#/login"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Logout" value="starred" @click="this.logout()"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
  export default{
    data(){
      return{
        avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
        userdata: JSON.stringify(localStorage.getItem('userdata')),
        token: localStorage.getItem('token')
        //email: this.userdata.email
      }
    },
    methods: {
      log(){
        console.log(this.userdata); 
      },
      async logout(){
        this.$axios.delete('http://tsic.hanaemi.my.id/authentication/'+this.token)
        .then(response => {
          localStorage.removeItem('token')
          console.log(JSON.stringify(response.data))
          console.log(localStorage.getItem('token'))
        })
        .catch(error => {
          console.error(error)
        })
      }
    }
  }
</script>