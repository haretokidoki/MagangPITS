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
  import MincedTable from "./components/MincedTable.vue";
  import SidebarPop from "./components/SidebarPop.vue";

  export default {
    components: {
      MincedTable,
      SidebarPop
    },
  }
</script>