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
    import MincedTable from "../layout/MincedTable.vue";
    import SidebarPop from "../components/SidebarPop.vue";
  
    export default {  
        name: 'HomePage',
        components: {
            MincedTable,
            SidebarPop
        },
    }
  </script>