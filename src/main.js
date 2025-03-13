import './assets/main.css'

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
//import { createMemoryHistory, createRouter } from 'vue-router';
//import Home from './components/Home.vue';
import App from './App.vue'


// const routes = [
//     { path: '/', component: App },
//     { path: '/home', component: Home },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

createApp(App).mount('#app')
//createApp(App).use(router).mount('#app')
