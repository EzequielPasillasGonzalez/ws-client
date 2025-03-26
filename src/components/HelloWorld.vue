<script setup lang="ts">
import { ref } from "vue";
import { connecToServe } from "../socket-client";

defineProps<{ msg: string }>();

connecToServe();
</script>

<template>
  <h1>{{ msg }}</h1>

  <h3>Offline</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
