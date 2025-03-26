<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { connecToServe } from "../socket-client";

defineProps<{ msg: string }>();

const socket = connecToServe();

const isConnected = ref(false);

onMounted(() => {
  socket.on("connect", () => {
    isConnected.value = true;
  });

  socket.on("disconnect", () => {
    isConnected.value = false;
  });
});

onUnmounted(() => {
  socket.off("connect");
  socket.off("disconnect");
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <h3>{{ isConnected ? "Connected" : "Offline" }}</h3>

  <ul>
    <li>{{ socket.id }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
