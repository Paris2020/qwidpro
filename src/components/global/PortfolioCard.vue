<script setup>
    import Icon from "../global/Icon.vue";

    const props = defineProps({
        portfolio: Array
    })
</script>

<template>
    <a class="portfolio" v-for="(project, index) in props.portfolio" :key="index" :href="`https://www.${project.link}`">
        <picture>
            <source media="(min-width: 601px)" :srcset="`/images/portfolio/${project.thumbnail}.jpg`">
            <!-- <source media="(max-width: 600px)" srcset="name.jpg"> -->
            <img :src="`/images/portfolio/${project.thumbnail}.jpg`" width="400" alt="portfolio image" />
        </picture>
        <p class="label">{{ project.label }}</p>
    </a>
</template>