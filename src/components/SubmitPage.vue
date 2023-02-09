<template>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Document Title"
              v-model="document.name"
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
              v-model="document.signer"
              :items="signer"
              item-title="name"
              label="Signer"
              return-object
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col>
          <!-- <v-col cols="12">
            <v-select
              v-model="document.lvl2signer"
              :items="signerLv2"
              item-title="name"
              label="Signer Lv 2"
              return-object
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="document.lvl3signer"
              :items="signerLv3"
              item-title="name"
              label="Signer Lv 3"
              return-object
              multiple
              chips
              hint="To whose this document should signed?"
              persistent-hint
            ></v-select>
          </v-col> -->
          
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
        // signerlv1: Object.entries(this.signer).map((arr) => ({
        //   id: arr[0],
        //   name: arr[1],
        //   level: arr[2],
        // })),
        document: {
          id: '',
          no: '',
          date: '',
          name: '',
          url: '',
          type: '',
          status: '0',
          created_by: 'user1',
          updated_by: 'user1',
          created_at: '',
          updated_at: '',
          signer: []
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
      this.document.date = this.getDate()
      this.document.created_at = this.getDate()
      this.document.updated_at = this.getDate()
    },
    computed: {
      signerLv1(){
        return this.signer.filter(signer => signer.level === 1)
      },
      signerLv2(){
        return this.signer.filter(signer => signer.level === 2)
      },
      signerLv3(){
        return this.signer.filter(signer => signer.level === 3)
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
            },
            window.location.href = '#/'
          )
        )
      },
      getDate(){
        return new Date().toISOString()
      }
    }
  }
  </script>
