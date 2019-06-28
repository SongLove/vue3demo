import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/home.vue'
import NewsChat from './views/NewsChat/newsChat.vue'
import Upload from './views/Upload/upload.vue'
import Search from './views/Search/search.vue'
import MyPage from './views/MyPage/myPage.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    { path: '/', name: Home.name, component: Home },
    { path: '/news', name: NewsChat.name, component: NewsChat },
    { path: '/upload', name: Upload.name, component: Upload },
    { path: '/search', name: Search.name, component: Search },
    { path: '/mypage', name: MyPage.name, component: MyPage }
  ]
})

export default router
