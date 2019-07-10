// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import {ButtonsInstaller} from '@progress/kendo-buttons-vue-wrapper'
import { Chat, ChatInstaller } from '@progress/kendo-chat-vue-wrapper'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import headerPartial from './components/headerPartial'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(ButtonsInstaller)
Vue.use(ChatInstaller)
Vue.component(Calendar.name, Calendar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Calendar,
    headerPartial,
    Chat
  },
  methods: {
    onPost: function (ev) {
      console.log('A message has been posted to the Chat widget!')
    },
    onSendMessage: function (ev) {
      console.log('A message has been posted to the Chat widget using the message box!')
    },
    onActionClick: function (ev) {
      console.log('The user clicked an action button in attachment template, or selected a suggestedAction!')
    },
    onTypingStart: function (ev) {
      console.log('The user started typing in the Chat message box!')
    },
    onTypingEnd: function (ev) {
      console.log('The user cleared the Chat message box!')
    }
  }
})
