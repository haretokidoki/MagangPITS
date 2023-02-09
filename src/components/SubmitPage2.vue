<template>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Document Title"
              v-model="document.title"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Document URL"
              v-model="document.url"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              :items="signer.name"
              v-model="document.lvl1signer"
              label="Signer Lv 1"
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col>
          <!--  <v-col cols="12">
            <v-select
              v-model="document.lvl2signer"
              :items="userlv2"
              label="Signer Lv 2"
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="document.lvl3signer"
              :items="userlv3"
              label="Signer Lv 3"
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col> -->
          <!-- <v-col cols="12">
            <v-text-field
              label="Custom Attribute Value"
              v-model="document.customAttributeValue"
            />
          </v-col> -->
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn @click="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customAttributes: [],
        document: {
          title: '',
          url: '',
          lvl1signer: [],
          lvl2signer: [],
          lvl3signer: []
        },
        signer: [
          {
            "id": "a1441807-4592-4c63-997c-1b93ee86423d",
            "name": "Marno",
            "level": 1
          },
          {
            "id": "a123317-4592-4c63-997c-1b93ee86423d",
            "name": "Marni",
            "level": 1
          },
          {
            "id": "a2351221-4592-4c63-997c-1b93ee86423d",
            "name": "Marneng",
            "level": 1
          },
          {
            "id": "b1441807-4592-4c63-997c-1b93ee86423d",
            "name": "Warino",
            "level": 2
          },
          {
            "id": "b123317-4592-4c63-997c-1b93ee86423d",
            "name": "Jumadi",
            "level": 2
          },
          {
            "id": "b2351221-4592-4c63-997c-1b93ee86423d",
            "name": "Satrio",
            "level": 2
          },
          {
            "id": "a1441807-4592-4c63-997c-1b93ee86423d",
            "name": "Suparto",
            "level": 3
          },
          {
            "id": "a123317-4592-4c63-997c-1b93ee86423d",
            "name": "Sudjatmiko",
            "level": 3
          },
          {
            "id": "a2351221-4592-4c63-997c-1b93ee86423d",
            "name": "Sutoyo",
            "level": 3
          }
        ],
      }
    },
    mounted() {
      this.connecti = new WebSocket("ws://localhost:8080")
      this.connecti.onmessage = (msg) => {
        console.log(msg.data)
      }
    },
    methods: {
      submit() {
        this.connecti.send(
          JSON.stringify(
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
              },
              body: this.document,
            }
          )
        )
      }
    }
  }
  </script>
