<script setup lang="ts">
import { ref } from "vue";
import useDogStorage from "@/composables/useDogStorage";

const emit = defineEmits(["filter", "sort"]);

const text = ref("");

const filter = () => {
  const arr = useDogStorage
    .getAllDogs()
    .filter((e: { name: string }) => e.name === text.value);
  emit("filter", arr);
};

const sort = () => {
  const arr = useDogStorage
    .getAllDogs()
    .sort((a, b) => a.name.localeCompare(b.name));
  emit("sort", arr);
};
</script>

<template>
  <div class="filter">
    <input placeholder="coloque um apelido" v-model="text" />
    <button @click="filter">Filtrar</button>
    <span @click="sort" class="material-symbols-outlined"> sort_by_alpha </span>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
}
.filter input {
  margin-right: 30px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e2e3ea;
  background-color: #31394d;
  border-color: #e2e3ea;
  font-size: 16px;
  color: #e2e3ea;
}

.filter input:focus {
  outline: none;
}

.filter button,
.filter span {
  margin-right: 10px;
  align-items: center;
  background-color: #31394d;
  color: #e2e3ea;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
}

.filter button:hover,
.filter button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.filter button:hover {
  transform: translateY(-1px);
}
</style>
