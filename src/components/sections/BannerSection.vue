<script setup>
    import { reactive } from "vue";
    import Icon from "../global/Icon.vue";

    const props = defineProps({
        banner: String,
    });
</script>

<template>
    <header class="header-banner">
        <div class="wrapper">
           <picture>
                <source media="(min-width: 601px)" srcset="/images/banners/banner_01.jpg">
                <!-- <source media="(max-width: 600px)" srcset="img_car.jpg"> -->
                <img src="/images/banners/banner_01.jpg" width="1340" alt="banner image" loading="lazy">
            </picture>
        </div>
    </header>
</template>