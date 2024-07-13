import Vue from 'vue';
import Router from 'vue-router';
import Votants from '../components/VotantCompo.vue';
import CreateVotant from '../components/AddVotant.vue';
import OfficesCompo from "@/components/OfficesCompo.vue";
import AddOffice from "@/components/AddOffice.vue";

Vue.use(Router);

const routes = [
    {path: '/', component: Votants},
    {path: '/create', component: CreateVotant},
    {path: '/offices', component: OfficesCompo},
    {path: '/offices/new', component: AddOffice}
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;
