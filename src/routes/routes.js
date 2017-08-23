import Home from '@/pages/home'
import List from '@/pages/list'
import Store from '@/pages/store'
import Me from '@/pages/me'
const routes = [
  {
    Cmp: Home,
    path: '/home',
    text: 'Home'
  },
  {
    Cmp: List,
    path: '/list',
    text: 'List'
  },
  {
    Cmp: Store,
    path: '/store',
    text: 'Store'
  },
  {
    Cmp: Me,
    path: '/me',
    text: 'Me'
  }
]

export default routes
