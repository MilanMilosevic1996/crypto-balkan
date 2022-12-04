import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/menu-views/Home.vue'
import Articles from '../views/menu-views/Articles.vue'
import News from '../views/menu-views/News.vue'
import Explained from '../views/menu-views/Explained.vue'
import Cryptomarket from '../views/menu-views/Cryptomarket.vue'
import Exchanges from '../views/menu-views/Exchanges.vue'
import Cryptopedia from '../views/menu-views/Cryptopedia.vue'
import Begginersguide from '../views/menu-views/Begginersguide.vue'
import Singlecurrency from '../views/widgets/Singlecurrency.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Articles',
    name: 'articles',
    component: Articles
  },                                  
  {
    path: '/News',
    name: 'news',
    component: News
  },
  {
    path: '/Explained',
    name: 'explained',
    component: Explained
  },
  {
    path: '/Cryptomarket/:id',
    name: 'cryptomarket',
    component: Cryptomarket
  },
  {
    path: '/Exchanges',
    name: 'exchanges',
    component: Exchanges
  },
  {
    path: '/Cryptopedia',
    name: 'cryptopedia',
    component: Cryptopedia
  },
  {
    path: '/Begginersguide',
    name: 'begginersguide',
    component: Begginersguide
  },
  {
    path: '/Cryptomarket/:id/:currency',
    name: 'singlecurrency',
    component: Singlecurrency
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
