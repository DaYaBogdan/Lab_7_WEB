import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Welcome from '@/components/Welcome.vue'
import Album from '@/components/Album.vue'
import Contacts from '@/components/Contacts.vue'
import NotFound from '@/components/NotFound.vue'
import EnlargedPicture from '@/components/EnlargedPicture.vue'
import History from '@/components/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Album',
      name: 'Album',
      component: Album,
      children: [
        {
          path: ':id',
          name: 'EnlargedPicture',
          component: EnlargedPicture,
          props: true,
        },
      ],
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/History',
      name: 'History',
      component: History,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
