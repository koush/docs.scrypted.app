<template>
    <img :src="src" @click="click" :style="style">
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps<{
    src: string
}>();

const full = ref(false);
const focusId = current++;

const style = computed(() => {
    if (!full.value || focusId !== focused.value)
        return;

    return {
        left: 0,
        'z-index': 100,
        position: 'absolute',
        width: '100% !important',
    }
});

function click() {
    if (focused.value !== focusId || !full.value) {
        focused.value = focusId;
        full.value = true;
        return;
    }

    full.value = false;
}
</script>
<script lang="ts">
let current = 0;
const focused = ref<number>();
</script>
