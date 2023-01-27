<template>
    <v-card>
      <v-layout>
        <SidebarPop />
        <v-main>
            <MincedTable/>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
    import SidebarPop from "./SidebarPop.vue";
import MincedTable from "./components/MincedTable.vue";
  
    export default {  
      components: {
    SidebarPop,
    MincedTable
},
    }
  </script>