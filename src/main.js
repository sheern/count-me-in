import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
    store,
    render(h) {
        return h(App)
    },
}).$mount('#app')

