import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router';
import routes from './routes';
import NavBarComponent from './components/NavBarComponent.vue';
import TestComponent from './components/TestComponent.vue';
import HelloWorld from './components/HelloWorld.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.use(Vuetify)


let app = new Vue({
    el: '#app',
    components: {
        NavBarComponent,
        TestComponent,
        HelloWorld
    },

    router: new VueRouter(routes)
});
