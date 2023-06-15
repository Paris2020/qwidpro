<script setup>
    import SearchBox from "../global/SearchBox.vue";
</script>

<template>
    <nav class="navigation">
        <div class="wrapper">

            <a href="/" class="logo">
                <img src="/images/logo.svg" width="160" alt="logo" />
            </a>

            <!-- SearchBox -->
            <div class="search-box">
                <search-box ></search-box>
            </div>

            <ul class="menu">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/messages">Messages</router-link></li>
                <li><router-link to="/notification">Notification</router-link></li>
                <li><router-link to="/post-projects">Post Project</router-link></li>
            </ul>
        </div>
    </nav>
</template>