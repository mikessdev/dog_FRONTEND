<script setup lang="ts">
import { useBreedStore, type Breed } from "@/stores/breedStore";
import { ref, onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";

const numberItemsByPage = 10;

const breedStore = useBreedStore();

const listOnDisplay = ref<Breed[]>([]);
const pageLength = ref<number>(0);

onMounted(async () => {
  await breedStore.getAllBreeds();
  listOnDisplay.value = breedStore.listOFBreeds.slice(
    0,
    numberItemsByPage
  ) as unknown as Breed[];
  setupPagination();
});

const setupPagination = () => {
  pageLength.value = Math.ceil(
    Number(breedStore.listOFBreeds.length / numberItemsByPage)
  );
};

const reloadPageContent = (number: number) => {
  const last = numberItemsByPage * number;
  const first = last - numberItemsByPage;
  listOnDisplay.value = breedStore.listOFBreeds.slice(
    first,
    last
  ) as unknown as Breed[];
};
</script>

<template>
  <main class="home-view">
    <div class="home-header">
      <h1 class="home-title">Dog API</h1>
      <router-link to="/dogs">
        <div class="home-car">
          <span>Carrinho</span>
          <img src="../assets/doguinho.png" width="80" />
        </div>
      </router-link>
    </div>
    <Table :list="listOnDisplay" />
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
  color: #31394d;
}
</style>
