import Home from './components/routes/Home.vue';
import Favourite from './components/routes/Favourite.vue';
export const routes = [
    { path: '/', component: Home },
    { path: '/my-list', component: Favourite }
]