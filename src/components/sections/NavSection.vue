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
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/notification">Notification</a></li>
                <li><a href="/post-projects">Post Project</a></li>
            </ul>
        </div>
    </nav>
</template>