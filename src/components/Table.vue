<script setup lang="ts">
import { useBreedStore, type Breed } from "@/stores/breedStore";
import { reactive, ref } from "vue";
import useDogStorage from "@/composables/useDogStorage";
import type { Dog } from "@/interfaces/Dog";

const selectedRow = ref<string>("");

const breedStore = useBreedStore();

const emit = defineEmits(["click"]);

const props = defineProps({
  list: {
    type: Array<Breed>,
    default: [],
  },
});

const onClick = (name: string) => {
  selectedRow.value = name;
  emit("click", name);
};

const inputBreed = ref<string>("");
const rowHover = (name: string) => {
  inputBreed.value = name;
};

const saveBreed = (breedInfo: Dog) => {
  const breedAlreadyExist = useDogStorage.checkIfDogExist(breedInfo.name);
  console.log(breedAlreadyExist);

  if (breedAlreadyExist) {
    useDogStorage.addDog(breedInfo);
  }

  if (!breedAlreadyExist) {
    useDogStorage.removeDog(breedInfo);
    useDogStorage.addDog(breedInfo);
  }
};
</script>
<template>
  <table class="table-breed">
    <thead class="">
      <tr>
        <th>Raça</th>
        <th>Sub Raças</th>
        <th>Imagem</th>
      </tr>
    </thead>
    <tbody>
      <tr
        :class="[breed.name === selectedRow ? 'isSelected' : 'NoSelected']"
        v-for="(breed, index) in list"
        :key="index"
        @click="onClick(breed.name)"
        @mouseover="rowHover(breed.name)"
        @mouseleave="rowHover(breed.name)"
      >
        <td>
          <span class="breed-name"> {{ breed.name }} </span>
        </td>

        <td>
          <span v-for="(sub, index2) in breed.subBreed" :key="index2"
            >{{ sub }}<span v-if="breed.subBreed?.length > 1">, </span>
          </span>
        </td>
        <td class="breed-image">
          <img
            v-show="selectedRow === breed.name"
            :src="breedStore.breedImage"
            height="100"
          />
        </td>
        <td v-if="selectedRow == breed.name">
          <span
            @click="saveBreed({} as unknown as Dog)"
            class="material-symbols-outlined addToCar"
          >
            add_shopping_cart
          </span>
        </td>
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
  margin-right: 4px;
}

.NoSelected {
  transition: transform 0.2s;
  background-color: rgb(189, 189, 189);
}
.isSelected {
  transform: scale(1.05);
  background-color: rgb(112, 112, 112);
  color: #e2e3ea;
}

.table-breed tbody tr:hover {
  transform: scale(1.02);
  background-color: rgb(112, 112, 112);
  color: #e2e3ea;
}

.table-breed td {
  padding: 10px;
  border-radius: 4px;
}

.inputIsHover {
  color: #e2e3ea;
}

.inputNotHover {
  color: black;
}

.base-input:focus-visible {
  outline: none;
}

.addToCar {
  cursor: pointer;
}

.breed-image {
  display: flex;
  justify-content: center;
}
</style>
