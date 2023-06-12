<script setup>

    const props = defineProps({
        label: String,
        inputValue: String
    });

</script>

<template>
    <label class="input-wrapper">
        <input class="form-input" name="name" id="name" v-model="props.inputValue" />
        <span class="input-label">{{ props.label }}</span>
    </label>
</template>