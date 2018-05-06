import Vue from 'vue'
import Router from 'vue-router'
import VueParticels from 'vue-particles'
import VueCookies from 'vue-cookies'
import App from './App.vue'

Vue.use(Router)
Vue.use(VueCookies)
Vue.use(VueParticels)

const routes = [
  { path: '/', component: require('./components/Top.vue').default },
  { path: '/about', component: require('./components/About.vue').default },
  { path: '/work', component: require('./components/Work.vue').default },
  { path: '/contact', component: require('./components/Contact.vue').default },
  { path: '/not_found', component: require('./components/NotFound.vue').default },
  { path: '*', redirect: '/not_found' }
]

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
