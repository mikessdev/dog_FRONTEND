<script setup lang="ts">
import { useBreedStore } from "@/stores/breedStore";
import { ref, onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";

const numberItemsByPage = 10;

const breedStore = useBreedStore();

const listOnDisplay = ref<String[]>([]);
const pageLength = ref<number>(0);

onMounted(async () => {
  await breedStore.getAllBreeds();
  listOnDisplay.value = breedStore.listOFBreeds.slice(0, numberItemsByPage);
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
  listOnDisplay.value = breedStore.listOFBreeds.slice(first, last);
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

    <table class="table-breed">
      <thead class="">
        <tr>
          <th>Raça</th>
          <th>Sub Raças</th>
          <th>Cor</th>
          <th>Tamanho</th>
          <th>Apelido</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(breed, index) in listOnDisplay" :key="index">
          <td class="apply-border">{{ breed }}</td>
          <td>{{ breed }}</td>
          <td>{{ "" }}</td>
          <td>{{ "" }}</td>
          <td>{{ "" }}</td>
          <td>{{ "" }}</td>
        </tr>
      </tbody>
    </table>

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

.table-breed {
  margin: 0 auto;
  width: 90%;
}
.table-breed thead {
  background-color: #31394d;
  color: #e2e3ea;
  padding: 10px;
}

.table-breed thead tr th {
  padding: 10px;
  border-radius: 4px;
}

.table-breed tbody tr {
  transition: transform 0.2s;
  background-color: rgb(189, 189, 189);
}

.table-breed tbody tr:hover {
  transform: scale(1.05);
  background-color: rgb(112, 112, 112);
  color: white;
}
.table-breed td {
  padding: 10px;
  border-radius: 4px;
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
