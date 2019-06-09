import Vue from 'vue'
import Router from 'vue-router'
import BasicInfo from '@/components/BasicInfo'
import Jumbotron from '@/components/Jumbotron'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicInfo',
      component: BasicInfo
    },
    {
      path: '/Jumbotron',
      name: 'Jumbotron',
      component: Jumbotron
    }
  ]
})
