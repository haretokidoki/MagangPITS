<template>
    <div class="d-flex flex-column pa-6">
          <v-card>
            <v-card-title>
              Tes
            </v-card-title>
            <v-card-subtitle>
              <v-breadcrumbs :items="['User', 'Approval']"></v-breadcrumbs>
            </v-card-subtitle>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      Pengaju
                    </th>
                    <th class="text-left">
                      Subjek
                    </th>
                    <th class="text-left">
                      Dokumen
                    </th>
                    <th class="text-left">
                      Approval
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in approvals"
                    :key="item.name"
                  >
                    <td>{{ item.pengaju }}</td>
                    <td>{{ item.subjek }}</td>
                    <td>{{ item.dokumen }}</td>
                    <td>{{ item.approv.spv1 }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-actions>
              <form :action="sendMessage" @click.prevent="onSubmit">
                <input v-model="message" type="text">
                <input type="submit" @click="sendMessage" variant="tonal" style="background-color:aqua" class="pa-3" value="Send">
              </form>
              <h4>{{ message }}</h4>
              <h3>
                Message Received : {{ rcvMessage }}
              </h3>
            </v-card-actions>
          </v-card>
        </div>
</template>

<script>
  export default {
    data () {
      return {
        message: "",
        connecti: null,
        rcvMessage: "",
        approvals: [
          {
            pengaju: 'Anto Nugroho',
            subjek: 'Dana Perpustakaan',
            dokumen: '-',
            approv: [
              {
                spv1: 'Nugroho,approved',
                spv2: 'Krisna,waiting',
                spv3: 'Mardi,waiting'
              }
            ]
          },
          {
            pengaju: 'Enrico Pucci',
            subjek: 'Arsip CD',
            dokumen: '-',
            approv: [
              {
                spv1: 'Nugroho,approved',
                spv2: 'Krisna,disapproved',
                spv3: 'Mardi,invalid'
              }
            ]
          },
          {
            pengaju: 'Anto Nugroho',
            subjek: 'Dana Perpustakaan',
            dokumen: '-',
            approv: [
              {
                spv1: 'Nugroho,disapproved',
                spv2: 'Krisna,invalid',
                spv3: 'Mardi,invalid'
              }
            ]
          },
        ]
      }
    },
    mounted() {
      this.connecti = new WebSocket("ws://localhost:8080")
      this.connecti.onmessage = (msg) => {
        this.rcvMessage = msg.data
      }
    },
    methods: {
      sendMessage() {
        let msg = {
          "greeting" : this.message
        }
        this.connecti.send(JSON.stringify(msg))
      },
      
    }
  }
</script>