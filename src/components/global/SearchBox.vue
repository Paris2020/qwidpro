<script setup>
    import Icon from '../global/Icon.vue';
    import { reactive, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const state = reactive({
        searchInput: '',
        hasResults: false,
        hasFocus: false,
        resultsHasFocus: false
    });

    const focus = (value) => {
		state.hasFocus = value;
	};

    const resultsFocus = (value) => {
		state.resultsHasFocus = value;
	};

    const onInputChange = () => {
        clearTimeout(this.debounceRef);

        store.commit('search/shouldShowResults', false);
		store.commit('search/hasResults', false);

        this.debounceRef = setTimeout(() => {
			store.dispatch('search/getSearchPhrases', state.searchInput);
		}, 1000)
    };

    // COMPUTED PROPERTIES
    const hasResults = computed(() => store.state.hasResults);

    const shouldShowResults = computed(() => store.state.shouldShowResults);
</script>

<template>
    <div class="search-box">
        <form class="search-box-inner" :class="{'toggle-icon': state.searchInput.length }">
            <icon name="search" class="search"></icon>

            <label class="input-wrapper">
                <input type="text" max-length="30" v-model="state.searchInput" class="search-input" 
                       @focusin="focus(true)" @focusout="focus(false)" @input="onInputChange" />
                <span class="input-label" :class="{'hide': state.searchInput}">Search talent...</span>
            </label>
            <!-- END.input-wrapper -->

            <div class="search-suggestions" :class="[{'results': hasResults}, {'no-results': !hasResults}]"
                 v-if="state.searchInput.length > 3 && shouldShowResults && (state.hasFocus || state.resultsHasFocus)"
                 @mouseenter="resultsFocus(true)" @mouseleave="resultsFocus(false)">
                
                <div class="inner no-results" v-if="state.searchInput.length > 3 && !hasResults">
                    <h4>Sorry, there are no suggestions containing {{ state.searchInput }}</h4>
                </div>
                <!-- END.inner-no-results -->

                <div class="inner results" v-if="state.searchInput.length && hasResults">
                    <h4>Top suggestions containing {{ state.searchInput }}</h4>
                    <ul>
                        <li class="search-item">
                            <a href="#" target="_blank"></a>
                        </li>
                    </ul>
                </div>
                <!-- END.inner-results -->
            </div>
            <!-- END. search-suggestions -->
        </form>
    </div>
</template>