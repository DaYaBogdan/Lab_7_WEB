import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Welcome from '@/components/Welcome.vue'
import Album from '@/components/Album.vue'
import Contacts from '@/components/Contacts.vue'
import NotFound from '@/components/NotFound.vue'
import EnlargedPicture from '@/components/EnlargedPicture.vue'

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
    },
    {
      path: '/Album/:id',
      name: 'EnlargedPicture',
      component: EnlargedPicture,
      props: true,
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
