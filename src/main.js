import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
import DataTable from 'vue-bulma-table'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
Vue.use(Buefy)
Vue.component('data-table', DataTable)
Vue.use(VueGeolocation)
Vue.use(axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxIMKoylQDF95h470TiD9CNgOBLfvVYdM'
  },
  installComponents: true
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
