<script setup lang="ts">
import { useBreedStore } from "@/stores/breedStore";
import { onMounted } from "vue";
import Card from "@/components/Card.vue";

const breedStore = useBreedStore();

onMounted(async () => {
  await breedStore.getAllBreeds();
});
</script>

<template>
  <main class="home-view">
    <h1 class="home-title">Dog API</h1>
    <div class="list-of-breed-container">
      <ul class="list-of-breed">
        <li
          class="breed"
          v-for="(breed, key) in breedStore.listOFBreeds"
          :key="key"
        >
          <Card :breed="key" :sub-breed="breed" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  background-color: #eaeae8;
  flex-direction: column;
}
.home-title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 40px;
}

.list-of-breed-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.list-of-breed {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
}
</style>
