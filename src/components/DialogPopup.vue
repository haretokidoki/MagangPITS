<template>
    <div 
    class="ma-4">
      <v-dialog
        v-model="dialog"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Open
          </v-btn>
        </template>
  
        <v-card>
          <v-card-text>
            <img src="https://www.sampletemplatess.com/wp-content/uploads/2018/01/business-proposal-sample-letter-draft-naeqv-new-business-proposal-template-16-free-sample-example-format-of-business-proposal-sample-letter-draft-kgpwv.jpg" />
          </v-card-text>
          <v-card-actions
          class="d-flex align-center">
            <button class="pa-4" @click="dialog = false">
                <v-icon
                    large
                    color="green darken-2"
                    class="pa-2"
                >
                    mdi-check
                </v-icon>
                APPROVE
                </button>
                <button class="pa-4" @click="dialog = false">
                <v-icon
                    large
                    color="red darken-2"
                    class="pa-2"
                >
                    mdi-cancel
                </v-icon>
                DECLINE
                </button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>