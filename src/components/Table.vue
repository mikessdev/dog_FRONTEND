<script setup lang="ts">
import type { Breed } from "@/stores/breedStore";

const props = defineProps({
  list: {
    type: Array<Breed>,
    default: [],
  },
});
</script>
<template>
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
      <tr v-for="(breed, index) in list" :key="index">
        <td class="apply-border">{{ breed.name }}</td>
        <td>
          <span v-for="(sub, index2) in breed.subBreed" :key="index2"
            >{{ sub }}<span v-if="breed.subBreed?.length > 1">, </span>
          </span>
        </td>
        <td>{{ "" }}</td>
        <td>{{ "" }}</td>
        <td>{{ "" }}</td>
        <td>{{ "" }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
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
</style>
