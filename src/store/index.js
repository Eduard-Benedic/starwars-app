import Vuex from 'vuex';
import Vue from 'vue';
import characters from './modules/characters.js';
import selected from './modules/selected.js';

// Load Vuex

Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        characters,
        selected
    }
})