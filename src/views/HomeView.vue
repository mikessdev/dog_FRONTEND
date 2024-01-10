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
    <ul class="list-of-breed">
      <li
        class="breed"
        v-for="(breed, key) in breedStore.listOFBreeds"
        :key="key"
      >
        <Card :breed="key" :sub-breed="breed" />
      </li>
    </ul>
  </main>
</template>

<style scoped>
.home-view {
  background-color: #eaeae8;
  display: flex;
  justify-content: center;
}
.list-of-breed {
  width: 400px;
}

.breed {
  margin: 10px 0px;
}
</style>
