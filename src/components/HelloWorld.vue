<template>
    <h1>{{ msg }}</h1>
    <s-button></s-button>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import SButton from '../button/src/Button'
defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
