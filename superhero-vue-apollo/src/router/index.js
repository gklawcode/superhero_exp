import Vue from 'vue'
import Router from 'vue-router'
import SuperheroList from '@/components/SuperheroList'
import SuperheroDetail from '@/components/SuperheroDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SuperheroList
    },
    {
      path: '/:id',
      component: SuperheroDetail
    }
  ]
})
