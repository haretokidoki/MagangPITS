<template>
    <div class="d-flex flex-column pa-6">
          <v-card>
            <v-card-title>
              Hallo {{ userdata.email }}
            </v-card-title>
            <v-card-subtitle>
              <v-breadcrumbs :items="['User', 'Approval']"></v-breadcrumbs>
            </v-card-subtitle>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      Tanggal
                    </th>
                    <th class="text-left">
                      Nama Dokumen
                    </th>
                    <th class="text-left">
                      URL
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
                    <td>{{ item.date.substring(0,10) }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.url }}</td>
                    <td>
                      <v-row>
                        <v-col v-for="apv in item.approvalsList"
                        :key="apv.id">
                          <v-card style="width: 100px;">
                            <v-card-text>
                              <p>{{ getUserbyID(apv.id) }}</p>
                              <v-icon
                                v-show="apv.status === 1"
                                large
                                color="green darken-2"
                                class="pa-2"
                              >
                                mdi-circle
                              </v-icon>
                              <v-icon
                                v-show="apv.status === 0"
                                large
                                color="red darken-2"
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
        userdata: JSON.parse(localStorage.getItem('userdata')),
        rcvMessage: [],
        approvals: 
          this.$axios
            .get('http://tsic.hanaemi.my.id/documents', {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
            
            .then(response => {
              this.approvals = response.data.data
            })
            .catch(error => {
              console.error(error)
            })
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
      async getUserbyID(id){
        let name = "";
          this.$axios
            .get('http://tsic.hanaemi.my.id/users/'+id, {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
            
            .then(response => {
              name = response.data.data.full_name
              console.log(name)
              return name
            })
            .catch(error => {
              console.error(error)
              console.log(id)
              return id
            })
      }
      
    }
  }
</script>