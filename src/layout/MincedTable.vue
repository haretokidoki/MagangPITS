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
                    :key="item.id"
                  >
                    <td>{{ item.date }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.url }}</td>
                    <td>
                      <v-row>
                        <v-col v-for="apv in item.approvalsList"
                        :key="apv.id">
                          <v-card style="width: 80%;">
                            <v-card-text>
                              <p>{{ apv.id.substring(0,8) + ".." }}</p>
                              <v-icon
                                v-show="apv.status === 1"
                                large
                                color="green darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.stat === 2"
                                large
                                color="red darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.stat === 0"
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
            "id": "020af62c-bef0-4fa4-a968-f449452137d0",
            "no": 10,
            "date": "2023-02-07T18:44:55.753Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 1,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:44:55.753Z",
            "updated_at": "2023-02-07T18:44:55.753Z",
            "approvalsList": [
              {
                "id": "4f675942-a549-4d38-9939-82d128196ea9",
                "status": 1,
                "level": 2,
                "note": "-",
                "created_at": "2023-02-07T18:44:55.753Z",
                "updated_at": "2023-02-07T18:44:55.753Z"
              },
              {
                "id": "79490d19-6c9a-4dd4-a163-8f163fa87458",
                "status": 1,
                "level": 1,
                "note": "-",
                "created_at": "2023-02-07T18:44:55.753Z",
                "updated_at": "2023-02-07T18:44:55.753Z"
              }
            ]
          },
          {
            "id": "209defa7-33b1-4bd1-95b0-4f57e5614584",
            "no": 7,
            "date": "2023-02-07T18:43:34.178Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 2,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:43:34.178Z",
            "updated_at": "2023-02-07T18:43:34.178Z",
            "approvalsList": []
          },
          {
            "id": "68b3d18c-6645-4ca5-8411-791009450651",
            "no": 8,
            "date": "2023-02-07T18:44:55.753Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 2,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:44:55.753Z",
            "updated_at": "2023-02-07T18:44:55.753Z",
            "approvalsList": []
          },
          {
            "id": "79ea7977-ad42-439d-92fe-96504eed69fe",
            "no": 5,
            "date": "2023-02-07T18:42:08.459Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 1,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:42:08.459Z",
            "updated_at": "2023-02-07T18:42:08.459Z",
            "approvalsList": []
          },
          {
            "id": "ac5ee303-6843-4f31-a448-08ecd9c5fb55",
            "no": 1,
            "date": "2023-02-07T18:30:53.357Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 2,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:30:53.357Z",
            "updated_at": "2023-02-07T18:30:53.357Z",
            "approvalsList": [
              {
                "id": "20bda546-e8ef-4078-b566-1d280fbd5f52",
                "status": 1,
                "level": 1,
                "note": "-",
                "created_at": "2023-02-07T18:30:53.357Z",
                "updated_at": "2023-02-07T18:30:53.357Z"
              },
              {
                "id": "37d32e54-ab02-4cbf-8e96-42e3fceee63c",
                "status": 1,
                "level": 2,
                "note": "-",
                "created_at": "2023-02-07T18:30:53.357Z",
                "updated_at": "2023-02-07T18:30:53.357Z"
              }
            ]
          },
          {
            "id": "be25e797-24dc-4611-a727-1ad94f931b4f",
            "no": 6,
            "date": "2023-02-07T18:42:08.459Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 2,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:42:08.459Z",
            "updated_at": "2023-02-07T18:42:08.459Z",
            "approvalsList": []
          },
          {
            "id": "c7a65fa2-90b4-4f6c-9138-bf4a9c55a574",
            "no": 4,
            "date": "2023-02-07T18:42:08.459Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 2,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:42:08.459Z",
            "updated_at": "2023-02-07T18:42:08.459Z",
            "approvalsList": []
          },
          {
            "id": "f434f006-3891-4e30-9fa9-0b815a70b641",
            "no": 9,
            "date": "2023-02-07T18:44:55.753Z",
            "name": "Dokumen Negara",
            "url": "localhost",
            "type": 1,
            "status": "0",
            "created_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "updated_by": "843438ee-69cb-493f-8812-71f0c7462f2f",
            "created_at": "2023-02-07T18:44:55.753Z",
            "updated_at": "2023-02-07T18:44:55.753Z",
            "approvalsList": [
              {
                "id": "a1441807-4592-4c63-997c-1b93ee86423d",
                "status": 1,
                "level": 2,
                "note": "-",
                "created_at": "2023-02-07T18:44:55.753Z",
                "updated_at": "2023-02-07T18:44:55.753Z"
              },
              {
                "id": "c525e9fa-ee09-44cc-a165-bcc05627a630",
                "status": 1,
                "level": 1,
                "note": "-",
                "created_at": "2023-02-07T18:44:55.753Z",
                "updated_at": "2023-02-07T18:44:55.753Z"
              }
            ]
          }
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