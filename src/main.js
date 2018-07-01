import Vue from 'vue';
import App from './App.vue';
import VueSocketio from 'vue-socket.io';

const socketServer = 'http://localhost:3000';
Vue.use(VueSocketio, socketServer);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
