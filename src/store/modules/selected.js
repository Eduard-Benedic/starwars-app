// import axios from 'axios';
const state = {
    characters: [],
    films: []
}
const getters = {
    allFavCharacters: (state) => state.characters,
    allFavFilms: (state) => state.films
};
const actions = {
    removeCard({ commit }, name) {
        var newArr = state.characters.filter(character => {
            return !character.character.name.match(name);
        })
        commit("REMOVE_CARD", newArr);
    }
    // ,
    // addFilm({ commit }, identifier) {
    //     var movies = state.characters.filter(character => {
    //         return character.character.name === identifier
    //     });
    //     console.log(movies);


    //     commit('ADD_FILM', movies);
    //     // endpoints.forEach(endpoint => {
    //     //     return moviesList.push(axios.get(endpoint));
    //     // });
    //     // Promise.all(moviesList).then(function (res) {
    //     //     commit('ADD_FILM', res);
    //     // })
    // }


}
const mutations = {
    "ADD_CARD"(state, card) {
        return state.characters.push(card);
    },
    "ADD_FILM": (state, films) => {
        return state.films.push(films)
    },
    "REMOVE_CARD": (state, newCharacters) => {
        return state.characters = newCharacters;
    },
    "REMOVE_FILM": (state, splicedFilms) => {
        return state.films = splicedFilms
    }
}
export default {
    mutations,
    actions,
    getters,
    state
}