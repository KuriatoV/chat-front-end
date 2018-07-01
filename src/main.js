import Vue from 'vue';
import App from './App.vue';
import VueSocketio from 'vue-socket.io';

console.log('process env', process.env);
const socketServer = `https://localhost:3000`;
// const socketServer = `process.env:${process.env.PORT}`;
Vue.use(VueSocketio, socketServer);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
