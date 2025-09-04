import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MovieSelect from '../views/MovieSelect.vue';
import SeatReservation from '../views/SeatReservation.vue';
import ReservationConfirm from '../views/ReservationConfirm.vue';
import AIChat from '../views/AIChat.vue';
import MyPage from '../views/MyPage.vue'; 

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/movies', name: 'MovieSelect', component: MovieSelect },
    { path: '/seats/:movieId', name: 'SeatReservation', component: SeatReservation, props: true },
    { path: '/confirm', name: 'ReservationConfirm', component: ReservationConfirm },
    { path: '/aichat', name: 'AIChat', component: AIChat },
    { path: '/mypage', name: 'MyPage', component: MyPage } 
  ]
});





