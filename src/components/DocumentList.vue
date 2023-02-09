<template>
<v-card>
        <v-card-title>
          Waiting List
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
            v-for="item in approvals"
            :key="item.pengaju"
            >
              <v-card>
                <v-card-title>{{ item.subjek }}</v-card-title>
                <v-card-text>
                  {{ item.pengaju }}
                </v-card-text>
                <v-card-action>
                  <DialogPopup />
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
</template>

<script>

</script>