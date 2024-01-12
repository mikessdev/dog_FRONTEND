<script setup lang="ts">
import useDogStorage from "@/composables/useDogStorage";
import Card from "@/components/Card.vue";
import Filter from "@/components/Filter.vue";
import { type Dog } from "@/interfaces/Dog";
import { ref } from "vue";

const dogsList = ref(useDogStorage.getAllDogs());

const filter = (arr: Dog[]) => {
  dogsList.value = arr;
};

const sort = (arr: Dog[]) => {
  console.log(arr);
  dogsList.value = arr;
};
</script>

<template>
  <main class="dogs-view">
    <router-link to="/">
      <div class="back">
        <span class="material-symbols-outlined"> arrow_back_ios </span>
        <a>Voltar</a>
      </div>
    </router-link>
    <h1>Aqui estão todos os doguinhos que foram selecionados.</h1>
    <div class="filter-container">
      <Filter text="" @filter="(e) => filter(e)" @sort="(e) => sort(e)" />
    </div>
    <ul class="card-group">
      <li v-for="(dog, index) in dogsList" :key="index">
        <Card :breed="dog" />
      </li>
    </ul>
  </main>
</template>

<style>
.dogs-view {
  padding: 20px 20px;
}

.back {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
}
.dogs-view h1 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 100px;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.filter-container {
  margin: 60px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
