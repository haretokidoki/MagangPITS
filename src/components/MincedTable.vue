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
                    :key="item.pengaju"
                  >
                    <td>{{ item.pengaju }}</td>
                    <td>{{ item.subjek }}</td>
                    <td>{{ item.dokumen }}</td>
                    <td>
                      <v-row>
                        <v-col v-for="apv in item.approv"
                        :key="apv.spv">
                          <v-card style="width: 80%;">
                            <v-card-text>
                              <p>{{ apv.spv }}</p>
                              <v-icon
                                v-show="apv.stat === 'approved'"
                                large
                                color="green darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.stat === 'disapproved'"
                                large
                                color="red darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.stat === 'waiting'"
                                large
                                color="yellow darken-2"
                                class="pa-2"
                              >
                               mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.stat === 'invalid'"
                                large
                                color="grey darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col>
                  <form :action="sendMessage" @click.prevent="onSubmit">
                    <label>Input message: </label>
                    <input v-model="message" type="text">
                    <input type="submit" 
                    @click="sendMessage" 
                    variant="tonal" 
                    style="background-color:aqua" 
                    class="pa-2 ml-16" 
                    value="Send">
                  </form>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>
                    Message Received : {{ rcvMessage["greeting"] }}
                  </h3>  
                </v-col>
              </v-row>
              
            </v-card-actions>
          </v-card>
        </div>
</template>

<script>
  
  export default {
    components: {
    },
    data () {
      return {
        dialog: false,
        message: "",
        connecti: null,
        rcvMessage: [],
        approvals: [
          {
            pengaju: 'Anto Nugroho',
            subjek: 'Dana Perpustakaan',
            dokumen: '-',
            approv: [
              {
                spv: 'Nugroho',
                stat: 'approved' 
              },{
                spv: 'Krisna',
                stat: 'waiting'
              },{
                spv: 'Mardi',
                stat: 'waiting'
              }
            ]
          },
          {
            pengaju: 'Enrico Pucci',
            subjek: 'Arsip CD',
            dokumen: '-',
            approv: [
              {
                spv: 'Nugroho',
                stat: 'approved' 
              },{
                spv: 'Krisna',
                stat: 'disapproved'
              },{
                spv: 'Mardi',
                stat: 'invalid'
              }
            ]
          },
          {
            pengaju: 'Jolyne Widyastuti',
            subjek: 'Lorem Ipsum',
            dokumen: '-',
            approv: [
              {
                spv: 'Nugroho',
                stat: 'disapproved' 
              },{
                spv: 'Krisna',
                stat: 'invalid'
              },{
                spv: 'Mardi',
                stat: 'invalid'
              }
            ]
          },
        ]
      }
    },
    mounted() {
      this.connecti = new WebSocket("ws://localhost:8080")
      this.connecti.onmessage = (msg) => {
        console.log(msg.data)
        this.rcvMessage = JSON.parse(msg.data)
      }
    },
    methods: {
      sendMessage() {
        // let msg = {
        //   sender : 'userA',
        //   "greeting" : this.message,
        // }
        this.connecti.send(JSON.stringify(this.approvals))
      },
      
    }
  }
</script>