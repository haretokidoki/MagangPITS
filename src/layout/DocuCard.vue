<template>
    <v-container>
      <v-row class="justify-center pa-10">
        <v-col >
            <v-card>
                <v-card-title>
                    Ajukan Dokumen
                </v-card-title>
                <v-card-text>
                    <SubmitPage/>
                </v-card-text>
            </v-card>
          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    import SubmitPage from "../components/SubmitPage.vue";
  
    export default {
        components: {
            SubmitPage
        },
    }
  </script>