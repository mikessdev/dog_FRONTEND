<script setup lang="ts">
import type { Breed } from "@/stores/breedStore";
import { ref } from "vue";
import DropDown from "@/components/DropDown.vue";

const options = ["Marrom", "preto", "branco", "caramelo"];
const selectedRow = ref<string>("");

const emit = defineEmits(["click"]);

const props = defineProps({
  list: {
    type: Array<Breed>,
    default: [],
  },
});

const onClick = (name: string) => {
  emit("click", name);
};
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
      <tr
        :class="[breed.name === selectedRow ? 'isSelected' : 'NoSelected']"
        v-for="(breed, index) in list"
        :key="index"
        @click="() => (selectedRow = breed.name)"
      >
        <td class="breed-name" @click="onClick(breed.name)">
          {{ breed.name }}
        </td>
        <td>
          <span v-for="(sub, index2) in breed.subBreed" :key="index2"
            >{{ sub }}<span v-if="breed.subBreed?.length > 1">, </span>
          </span>
        </td>
        <td><DropDown title="Selecione uma cor" :options="options" /></td>
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

.breed-name {
  cursor: pointer;
}

.NoSelected {
  transition: transform 0.2s;
  background-color: rgb(189, 189, 189);
}
.isSelected {
  transform: scale(1.05);
  background-color: rgb(112, 112, 112);
  color: white;
}

.table-breed tbody tr:hover {
  transform: scale(1.05);
  background-color: rgb(112, 112, 112);
  color: #e2e3ea;
}

.table-breed td {
  padding: 10px;
  border-radius: 4px;
}
</style>
