import Vue from 'vue'
import Router from 'vue-router'

import homeindex from '@/components/homeindex'
import myindex from '@/components/myindex'
import contactsindex from '@/components/contactsindex'
import contractindex from '@/components/contractindex'

// import companyindex from '@/views/companyindex'
import companyConfir from '@/views/companyConfir'
import legalPerInf from '@/views/legalPerInf'
import addContact from '@/views/addContact'
import authorizer from '@/views/authorizer'

import MintUI from 'mint-ui'

Vue.use(Router)
Vue.use(MintUI)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/homeindex'
    },
    {
      path:"/homeindex",
      component:homeindex
    },
    {
      path:"/contractindex",
      component:contractindex
    },
    {
      path:"/contactsindex",
      component:contactsindex
    },
    {
      path:"/myindex",
      component:myindex
    },
    {
      path:"/companyConfir",
      component:companyConfir
    },
    {
      path:"/addContact",
      component:addContact
    },
    {
      path:"/legalPerInf",
      component:legalPerInf
    },
    {
      path:"/authorizer",
      component:authorizer
    }
  ]
    
})
