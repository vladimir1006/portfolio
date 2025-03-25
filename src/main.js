import './assets/main.css'

import { createApp } from "vue";
//import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import { createMemoryHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import App from './App.vue'
import CVComponent from './components/CVComponent.vue';
import Presentation from './components/Presentation.vue';
import Projects from './Projects.vue';
import AboutMe from './components/AboutMe.vue';


const routes = [
   { path: '/', component: Home },
   {path: '/cv', component: CVComponent},
   {path: '/presentation', component: Presentation },
   {path: '/projects', component: Projects},
   {path: '/aboutme', component: AboutMe}
]

const router = createRouter({
 history: createMemoryHistory(),
 routes: routes,
})

//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
