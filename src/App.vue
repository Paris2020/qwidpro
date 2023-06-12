<script setup>
  import { reactive } from "vue";
  import IconSymbols from "./components/global/IconSymbols.vue";
  import NavSection from "./components/sections/NavSection.vue";
  import BannerSection from "./components/sections/BannerSection.vue";
  import ProfileCard from "./components/global/ProfileCard.vue";
  import DetailsCard from "./components/global/DetailsCard.vue";
  import PortfolioCard from "./components/global/PortfolioCard.vue";
  import FooterSection from "./components/sections/FooterSection.vue";

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
                    link: "https://"
                },
                {
                    id: 1,
                    label: "Website 2",
                    thumbnail: "project_02",
                    link: "https://"
                },
                {
                    id: 2,
                    label: "Website 3",
                    thumbnail: "project_03",
                    link: "https://"
                },
            ],
            moreDetails: [
                {
                  id: 0,
                  title: "Bio",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
                },
                {
                    id: 1,
                    title: "Experience",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
                },
                {
                  id: 2,
                  title: "Experience",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
                }
            ]
        },
        /* Will be mioved to separate file */
        profiles: [
            {
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
                status: false
            },
            {
                id: 1,
                profileDetails: {
                    name: "Teddy",
                    surname: "Town",
                    role: "Social Media Ambassador",
                    description: "Social Campaigns, Social Marketing Content",
                },
                activeProjects: 5,
                completedProjects: 3,
                teams: 1,
                status: true
            },
            {
                id: 2,
                profileDetails: {
                    name: "Sandy",
                    surname: "Michaels",
                    role: "UX DesigneR",
                    description: "User Experience of Apps and Web Applications",
                },
                activeProjects: 3,
                completedProjects: 2,
                teams: 1,
                status: true
            }
        ]
    })
</script>

<template>
  <div class="container">
        <icon-symbols></icon-symbols>
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
                    <a class="btn small clear">Send An Offer</a>
                    <a class="btn small clear">Message</a>
                    <a class="btn small clear">Share</a>
                </div>
                <!-- END.Action buttons -->
            </div>
        </header>
        <!-- END. Header Section-->

        <main class="content">
            <div class="wrapper">
                <section class="portfolio">
                    <h3>Portfolio</h3>
                    <div class="wrap">
                        <portfolio-card :portfolio="state.profile.portfolio"></portfolio-card>
                    </div>
                </section>
                <!-- END. Portfolio Section -->

                <section class="experience">
                    <h3>Experience</h3>
                    <div class="wrap">
                        <details-card></details-card>
                    </div>
                </section>
                <!-- END. Experience Section -->
            </div>
        </main>
      
        <footer-section></footer-section>
  </div>
</template>

<style lang="scss">
  @import 'scss/style'
</style>
