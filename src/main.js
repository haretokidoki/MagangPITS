import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import UniqueId from 'vue-unique-id'
//import socketio from 'socket.io';
//import VueSocketIO from 'vue-socket.io';
//import router from './router/router'

//export const SocketInstance = socketio('http://35.202.174.163:3030/');
//const UniqueId = require('vue-unique-id')

loadFonts()

createApp(App)
//     {router,
//     render: h => h(App)
//     }

  .use(vuetify, UniqueId //VueSocketIO, SocketInstance
  )
  .mount('#app')

//createApp.config.productionTip = false
