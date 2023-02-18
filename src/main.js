import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//import UniqueId from 'vue-unique-id'
import axios from 'axios'
//import socketio from 'socket.io';
//import VueSocketIO from 'vue-socket.io';
import router from './router'

//export const SocketInstance = socketio('http://35.202.174.163:3030/');
//const UniqueId = require('vue-unique-id')

loadFonts()

const app = createApp(App)

app.use(vuetify, axios, router)
app.config.globalProperties.$axios = axios
//app.config.globalProperties.$router = router
app.mount('#app')
  
  //.config.productionTip = false
  //.prototype.$axios = axios

//createApp.config.productionTip = false
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const checkToken = () => {
  if(localStorage.getItem('token') == (null || undefined) ){
      console.log('token is not there : ' + localStorage.getItem('token'));
      return false;
  }
  else{
      return true
  }
}

router.beforeEach((to, from, next) => {
  if(to.path == '/') {
    if(checkToken()) { 
        console.log('There is a token, resume. (' + to.path + ')' + 'localstorage token ' + localStorage.getItem("token"));
        next();

    } else {
        console.log('There is no token, redirect to login. (' + to.path + ')');
        router.push('/login');
    }
  }
})