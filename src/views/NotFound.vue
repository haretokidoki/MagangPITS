<template>
    <v-card>
      <v-layout>
        <SidebarPop />
        <v-main>
            <h1>PAGE NOT FOUND</h1>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
    import SidebarPop from "../components/SidebarPop.vue";
  
    export default {  
        name: 'NotFound',
        components: {
            SidebarPop
        },
    }
  </script>