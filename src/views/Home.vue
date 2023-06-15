<script setup>
    import { reactive, onMounted, computed } from "vue";
    import { useStore } from 'vuex';

    import NavSection from "../components/sections/NavSection.vue";
    import BannerSection from "../components/sections/BannerSection.vue";
    import ProfileCard from "../components/global/ProfileCard.vue";
    import FooterSection from "../components/sections/FooterSection.vue";

    const store = useStore();

    // COMPUTED PROPERTIES
    const profiles = computed(() => {
        return store.state.profiles;
    });

    onMounted (()=> {
        /* in order to maintain reactivity we cannot do it this way */
        //console.log(store.state.profiles);
    });
</script>

<template>
    <nav-section></nav-section>
    <banner-section></banner-section>
        
    <section class="profile-cards">
        <div class="wrapper">
            <profile-card v-for="(card, index) in profiles" :key="index" :profile="card"></profile-card>
            <!-- END. Profile Cards -->
        </div>
    </section>
    <!-- END. Profiles -->
      
    <footer-section></footer-section>
</template>