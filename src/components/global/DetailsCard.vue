<script setup>
    const props = defineProps({
        moreDetails: Array
    })
</script>

<template>
    <div class="details" v-for="(detail, index) in props.moreDetails" :key="index">
        <dl>
            <dt>{{ detail.title }}</dt>
            <dd>{{ detail.description }}</dd>
        </dl>
    </div>
</template>