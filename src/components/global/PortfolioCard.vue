<script setup>

    const props = defineProps({
        portfolio: Array
    })
</script>

<template>
    <div class="portfolio" v-for="(project, index) in props.portfolio" :key="index">
        <picture>
            <source media="(min-width: 601px)" :srcset="`/images/portfolio/${project.thumbnail}.jpg`">
            <!-- <source media="(max-width: 600px)" srcset="name.jpg"> -->
            <img :src="`/images/portfolio/${project.thumbnail}.jpg`">
        </picture>
        <span>{{ project.label }}</span>
    </div>
</template>