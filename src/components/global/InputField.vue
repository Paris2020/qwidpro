<script setup>
    import { reactive } from 'vue';

    const props = defineProps({
        label: String,
    });

    const state = reactive({
        inputValue: ""
    });

</script>

<template>
    <label class="input-wrapper">
        <input class="form-input" :class="{'move-up': state.inputValue.length}" v-model="props.inputValue" />
        <span class="input-label">{{ props.label }}</span>
    </label>
</template>
