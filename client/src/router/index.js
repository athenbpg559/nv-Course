import { createRouter, createWebHistory } from 'vue-router'

// Users
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'

// Login
import Login from '../components/Login.vue'

// Blogs
import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

// Courses
import CourseIndex from '../components/Courses/Index.vue'
import CourseCreate from '../components/Courses/CreateCourse.vue'
import CourseEdit from '../components/Courses/EditCourse.vue'
import CourseShow from '../components/Courses/ShowCourse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    // Users
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

    // Login
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // Blogs
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },

    // Courses
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },
    {
      path: '/course/create',
      name: 'courses-create',
      component: CourseCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
  ]
})

export default router