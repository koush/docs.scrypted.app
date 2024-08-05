<template>
    <img :src="src" @click="full = !full" :style="style">
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps<{
    src: string
}>();

const full = ref(false);

const style = computed(() => {
    if (!full.value)
        return;
    return {
        left: 0,
        
        position: 'absolute',
        width: '100% !important',
    }
})
</script>
