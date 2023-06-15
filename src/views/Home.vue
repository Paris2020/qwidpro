<script setup>
    import { reactive, onMounted, computed } from "vue";
    import { useStore } from 'vuex';

    import NavSection from "../components/sections/NavSection.vue";
    import BannerSection from "../components/sections/BannerSection.vue";
    import ProfileCard from "../components/global/ProfileCard.vue";
    import DetailsCard from "../components/global/DetailsCard.vue";
    import PortfolioCard from "../components/global/PortfolioCard.vue";
    import FooterSection from "../components/sections/FooterSection.vue";


    const store = useStore();

    const state = reactive({
        profile: {
            id: 0,
            profileDetails: {
                name: "Cindy",
                surname: "Ndlovu",
                role: "Graphic Designer, Web Developer",
                description: "Website Developer, Frontend Developer, IT Professional"
            },
            activeProjects: 2,
            completedProjects: 2,
            teams: 3,
            status: false,
            portfolio: [
                {
                    id: 0,
                    label: "Website 1",
                    thumbnail: "project_01",
                    link: "project_name.co.za"
                },
                {
                    id: 1,
                    label: "Website 2",
                    thumbnail: "project_01",
                    link: "project_name.com"
                },
                {
                    id: 2,
                    label: "Website 3",
                    thumbnail: "project_01",
                    link: "project_name.co.za"
                },
            ],
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            moreDetails: [
                {
                    id: 0,
                    title: "Experience",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                  id: 1,
                  title: "Experience",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        },
    });

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
        
        <header class="header-content">
            <div class="wrapper">
                <profile-card 
                    :profileDetails="state.profile.profileDetails"
                    :activeProjects="state.profile.activeProjects"
                    :completedProjects="state.profile.completedProjects"
                    :teams="state.profile.teams"
                    :status="state.profile.status">
                </profile-card>
                <!-- END. Profile Card -->

                <div class="actions">
                    <a class="btn small clear" href="#">Send An Offer</a>
                    <a class="btn small clear" href="#">Message</a>
                    <a class="btn small clear" href="#">Share</a>
                </div>
                <!-- END.Action buttons -->
            </div>
        </header>
        <!-- END. Header Section-->

        <main class="content">
            <div class="wrapper">
                <section class="projects">
                    <div class="wrap">
                        <portfolio-card :portfolio="state.profile.portfolio"></portfolio-card>
                    </div>
                </section>
                <!-- END. Portfolio Section -->

                <section class="experience">
                    <div class="details bio">
                        <dl>
                            <dt>Bio</dt>
                            <dd>{{ state.profile.bio }}</dd>
                        </dl>
                    </div>

                    <div class="wrap">
                        <details-card :moreDetails="state.profile.moreDetails"></details-card>
                    </div>
                </section>
                <!-- END. Experience Section -->
            </div>
        </main>
        <!-- END. Main Section -->
      
        <footer-section></footer-section>
</template>