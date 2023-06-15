export const state = () => ({
    searchWords: false,
    hasResults: false,
    shouldShowResults: false
});

export const getters = {
    searchWords: state => state.searchWords,
    hasResults: state => state.hasResults,
    shouldShowResults: state => state.shouldShowResults,
};

export const mutations = {
    setPhrases(state, phrase) {
		state.searchWords = phrase;
	},
    hasResults(state, hasResults) {
		state.hasResults = hasResults;
	},
    shouldShowResults(state, showResults) {
		state.shouldShowResults = showResults;
	},
};

export const actions = {
	getSearchPhrases({commit}, data) {
        
    }
};