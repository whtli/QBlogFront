import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Blog from "../views/Blog";
import BlogRead from "../views/BlogRead";
import Category from "../views/Category";
import CategoryDetail from "../views/CategoryDetail";
import TagDetail from "../views/TagDetail";
import Tag from "../views/Tag";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/blog',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/read/:id',
    name: 'BlogRead',
    component: BlogRead
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/:id',
    name: 'CategoryDetail',
    component: CategoryDetail
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/tag/:id',
    name: 'TagDetail',
    component: TagDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Archive')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
