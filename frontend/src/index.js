import Vue from 'vue'
import App from './components/Index/App.vue'
import Router from './components/Index/router.js'
import './components/resources.js'

Vue.config.debug = true
/* eslint-disable no-new */
var application = Vue.extend({
  components: {App}
})
Router.start(application, 'body')
