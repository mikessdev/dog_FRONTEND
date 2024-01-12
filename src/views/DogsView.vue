<script setup lang="ts">
import useDogStorage from "@/composables/useDogStorage";
import Card from "@/components/Card.vue";
</script>

<template>
  <main class="dogs-view">
    <h1>Aqui estão todos os doguinhos que foram selecionados.</h1>

    <ul>
      <li v-for="(dog, index) in useDogStorage.getCurrentDogs()" :key="index">
        <Card :breed="dog.name" />
      </li>
    </ul>
  </main>
</template>

<style>
.dogs-view h1 {
  text-align: center;
  margin-top: 40px;
}
</style>
