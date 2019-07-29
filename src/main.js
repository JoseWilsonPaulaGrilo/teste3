import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '.app.vue'

import SignIn from './views/signIn.vue'
import SignUp from './views/signUp.vue'
import Menu from './views/menu/menu.vue'
import Deposit from './views/menu/deposit.vue'
import Pay from './views/menu/pay.vue'
import Transfer from './views/menu/transfer.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },
    {
        path: '/deposit',
        name: 'deposit',
        component: Deposit
    },
    {
        path: '/pay',
        name: 'pay',
        component: Pay
    },
    {
        path: '/transfer',
        name: 'transfer',
        component: Transfer
    }
]

const router = new VueRouter(
    {
        routes,
        mode: 'history'
    }
)

new Vue (
    {
        el: '#app',
        router,
        render: h => h(App)
    }
).$mount('#app')