import Vue from 'vue'
import Router from 'vue-router'
import movie from '../views/movie/root'
import cinema from '../views/cinema/root'
import pintuan from '../views/pintuan/root'
import center from '../views/center/root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path:'/movie',
    component:movie
  },
    {
      path: '/cinema',
      component:cinema
    },
    {
      path: '/pintuan',
      component:pintuan
    },
    {
    path: '/center',
    component: center
    }
  ]
})
