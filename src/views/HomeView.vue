<script setup lang="ts">
import { useBreedStore } from "@/stores/breedStore";
import { ref, onMounted } from "vue";
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";

const numberItemsByPage = 6;

const breedStore = useBreedStore();

const listOnDisplay = ref<String[]>([]);
const pageLength = ref<number>(0);

onMounted(async () => {
  await breedStore.getAllBreeds();
  listOnDisplay.value = breedStore.listOFBreeds.slice(0, 6);
  setupPagination();
});

const setupPagination = () => {
  pageLength.value = Number(
    (breedStore.listOFBreeds.length / numberItemsByPage).toFixed()
  );
};

const reloadPageContent = (number: number) => {
  const last = 6 * number;
  const first = last - 6;
  listOnDisplay.value = breedStore.listOFBreeds.slice(first, last);
};
</script>

<template>
  <main class="home-view">
    <div class="home-header">
      <h1 class="home-title">Dog API</h1>
      <div class="home-car">
        <spa>Carrinho</spa>
        <img src="../assets/doguinho.png" width="80" />
      </div>
    </div>
    <div class="list-of-breed-container">
      <ul class="list-of-breed">
        <li class="breed" v-for="(breed, index) in listOnDisplay" :key="index">
          <Card :breed="breed" />
        </li>
      </ul>
    </div>

    <Pagination @click="(e) => reloadPageContent(e)" :pageAmount="pageLength" />
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.home-header {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.home-title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}

.home-car {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}

.list-of-breed-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 40px;
}
.list-of-breed {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
}
</style>
