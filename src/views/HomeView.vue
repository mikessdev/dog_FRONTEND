<script setup lang="ts">
import { useBreedStore, type Breed } from "@/stores/breedStore";
import { ref, onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
import FloatingIMG from "@/components/FloatingIMG.vue";
import Header from "@/components/Header.vue";

const breedStore = useBreedStore();

const numberItemsByPage = 10;
const listOnDisplay = ref<Breed[]>([]);
const pageLength = ref<number>(0);
const showImage = ref<boolean>(false);

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

const loadImageByBreed = async (breed: string) => {
  await breedStore.getImageByBreed(breed);
  showImage.value = true;
};
</script>

<template>
  <main class="home-view">
    <Header />
    <Table :list="listOnDisplay" @click="(e) => loadImageByBreed(e)" />
    <Pagination @click="(e) => reloadPageContent(e)" :pageAmount="pageLength" />
    <FloatingIMG
      v-if="showImage"
      @close="showImage = false"
      :image="breedStore.breedImage"
      :showImage="showImage"
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
