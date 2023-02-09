<template>
  <v-card>
    <v-layout>
      <SidebarPop />
      <v-main>
          <DocuCard/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import SidebarPop from "../components/SidebarPop.vue";
  import DocuCard from "../layout/DocuCard.vue";

  export default {
    name: 'DocumentPage',  
    components: {
        SidebarPop,
        DocuCard
    },
  }
</script>