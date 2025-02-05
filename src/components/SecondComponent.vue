<template>
  <h1>First component</h1>
  <p>My count: {{ store.count }}</p>
  <p>My count: {{ store.doubleCount }}</p>
  <button @click="store.increment">+1</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>

<style scoped></style>
