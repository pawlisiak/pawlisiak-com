// Import global styles
import '@/assets/styles/styles.scss'

// Import Vue library
import Vue from 'vue'

// Import main component
import App from '@/App.vue'

// Import store & workers
import store from '@/store'
import './registerServiceWorker'

// Import UI components
import '@/components/ui'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
