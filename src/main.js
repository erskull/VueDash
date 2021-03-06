import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import i18n from '@/plugins/i18n'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App),
  data() {
    return {}
  },
  created() {
    // Prevent blank screen in Electron builds
    // this.$router.push('/')
    this.lang = localStorage.getItem("lang") === "en"
    this.$i18n.locale = "en"
  }
}).$mount('#app')