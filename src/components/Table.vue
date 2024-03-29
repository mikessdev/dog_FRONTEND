<script setup lang="ts">
import { useBreedStore, type Breed } from "@/stores/breedStore";
import { ref } from "vue";

const breedStore = useBreedStore();

const selectedRow = ref<string>("");
const breedImage = ref<string>("");
const inputBreed = ref<string>("");

const emit = defineEmits(["click"]);

const props = defineProps({
  list: {
    type: Array<Breed>,
    default: [],
  },
});

const onClick = (name: string) => {
  selectedRow.value = name;
  loadImageByBreed(name);
};

const rowHover = (name: string) => {
  inputBreed.value = name;
};

const saveBreed = (breed: string) => {
  emit("click", { name: breed, image: breedImage.value });
};

const loadImageByBreed = async (breed: string) => {
  breedImage.value = await breedStore.getImageByBreed(breed);
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
        @mouseover="rowHover(breed.name)"
        @mouseleave="rowHover(breed.name)"
      >
        <td @click="onClick(breed.name)">
          <span class="breed-name"> {{ breed.name }} </span>
        </td>

        <td @click="onClick(breed.name)">
          <span v-for="(sub, index2) in breed.subBreed" :key="index2"
            >{{ sub
            }}<span v-if="breed.subBreed && breed.subBreed.length > 1">, </span>
          </span>
        </td>
        <td class="breed-image" @click="onClick(breed.name)">
          <img
            v-show="selectedRow === breed.name"
            :src="breedImage"
            height="100"
          />
        </td>
        <td class="push-to-car" v-if="selectedRow == breed.name">
          <span
            @click="saveBreed(selectedRow)"
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
  cursor: pointer;
}
.isSelected {
  transform: scale(1.05);
  background-color: rgb(112, 112, 112);
  color: #e2e3ea;
  cursor: pointer;
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

.push-to-car {
  text-align: center;
}
</style>
