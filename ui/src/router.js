import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '/journey',
      name: 'journey-page',
      // route level code-splitting
      // this generates a separate chunk (reg-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "reg-page" */ './views/JourneyPage'),
    },
    {
      path: '/state',
      name: 'state-page',
      // route level code-splitting
      // this generates a separate chunk (reg-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "state-page" */ './views/StatePage'),
    },
    {
      path: '/votersupport',
      name: 'support-page',
      // route level code-splitting
      // this generates a separate chunk (reg-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "reg-page" */ './views/SupportPage'),
    },
    {
      path: '/whyvote',
      name: 'why-page',
      // route level code-splitting
      // this generates a separate chunk (reg-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "reg-page" */ './views/WhyVotePage'),
    },
    {
      // will match everything
      path: '*',
      component: () => import(/* webpackChunkName: "reg-page" */ './views/NotFoundPage'),
    },
  ],
});
router.beforeEach((to, from, next) => {
  try {
    window.goatcounter?.count({ path: to.path });
  } catch (e) {
    // console.warn(e);
  }
  next();
});
export default router;
