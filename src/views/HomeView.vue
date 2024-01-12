<script setup lang="ts">
import { useBreedStore, type Breed } from "@/stores/breedStore";
import { ref, onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
import Header from "@/components/Header.vue";
import EditCard from "@/components/EditCard.vue";
import usePagination from "@/composables/usePagination";
import type { Dog } from "@/interfaces/Dog";

const breedStore = useBreedStore();

const numberItemsByPage = 14;
const listOnDisplay = ref<Breed[]>([]);
const pageLength = ref<number>(0);
const showEditCard = ref<boolean>(false);
const breed = ref<Dog>({} as Dog);

onMounted(async () => {
  await breedStore.getAllBreeds();
  reloadPageContent(usePagination.getCurrentPage());
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
    <Header />
    <Table
      :list="listOnDisplay"
      @click="
        (e) => {
          showEditCard = true;
          breed = { breed: e.name, image: e.image } as Dog;
        }
      "
    />
    <Pagination @click="(e) => reloadPageContent(e)" :pageAmount="pageLength" />
    <EditCard
      v-if="showEditCard"
      :breedName="breed.breed"
      :image="breed.image"
      @close="showEditCard = false"
      @save="showEditCard = false"
    />
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}
</style>
