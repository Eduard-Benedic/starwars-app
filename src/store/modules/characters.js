import data from "../../data/characters";
const state = {
    characters: [],
    filteredCharacters: []
};

const getters = {
    allCharacters: (state) => state.characters,
    filteredCharacters: (state) => state.filteredCharacters
};

const actions = {
    getAllCharacters({ commit }) {
        data.getCharacters(characters => {
            commit('SET_ALL_CHARACTERS', characters)
        })
    },
    filterCharacters({ commit }, filter) {
        var filteredList = state.characters.filter(character => {
            console.log(character.name.toLowerCase().match(''))
            return character.name.toLowerCase().match(filter);
        });
        commit('FILTERED_CHARACTERS', filteredList);
    },
    addFavouriteCard: ({ commit }, card) => {
        commit('ADD_CARD', card);
    }

}
const mutations = {
    'SET_ALL_CHARACTERS': (state, characters) => {
        state.characters = characters;
        state.filteredCharacters = characters;
    },
    'FILTERED_CHARACTERS': (state, newCharacters) => {
        state.filteredCharacters = newCharacters
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}