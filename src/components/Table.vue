<script setup lang="ts">
import type { Breed } from "@/stores/breedStore";
import { reactive, ref } from "vue";
import DropDown from "@/components/DropDown.vue";
import useDogStorage from "@/composables/useDogStorage";
import type { Dog } from "@/interfaces/Dog";

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

const inputBreed = ref<string>("");
const rowHover = (name: string) => {
  inputBreed.value = name;
};

const rowState = reactive({
  dogIMG: {
    value: "",
  },
  color: {
    value: "",
  },
  size: {
    value: "",
  },
  name: {
    value: "",
    age: {
      value: "",
    },
  },
});

const saveBreed = (breedInfo: Dog) => {
  useDogStorage.addDog(breedInfo);
  const breedAlreadyExist = useDogStorage.getDogByBreed(breedInfo.name);
  console.log(breedAlreadyExist);
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
        @mouseover="rowHover(breed.name)"
        @mouseleave="rowHover(breed.name)"
      >
        <td class="breed-name-container" @click="onClick(breed.name)">
          <span class="breed-name"> {{ breed.name }} </span>
          <span class="material-symbols-outlined"> photo_camera </span>
        </td>
        <td>
          <span v-for="(sub, index2) in breed.subBreed" :key="index2"
            >{{ sub }}<span v-if="breed.subBreed?.length > 1">, </span>
          </span>
        </td>
        <td><DropDown title="Selecione uma cor" :options="options" /></td>
        <td>
          <div class="table-input">
            <input
              class="base-input"
              :class="[
                inputBreed == breed.name || selectedRow == breed.name
                  ? 'inputIsHover'
                  : 'inputNotHover',
              ]"
              type="text"
            />
            <span
              v-if="selectedRow == breed.name"
              class="material-symbols-outlined"
            >
              border_color
            </span>
          </div>
        </td>
        <td>
          <div class="table-input">
            <input
              class="base-input"
              :class="[
                inputBreed == breed.name || selectedRow == breed.name
                  ? 'inputIsHover'
                  : 'inputNotHover',
              ]"
              type="text"
            />
            <span
              v-if="selectedRow == breed.name"
              class="material-symbols-outlined"
            >
              border_color
            </span>
          </div>
        </td>
        <td>
          <div class="table-input">
            <input
              class="base-input"
              :class="[
                inputBreed == breed.name || selectedRow == breed.name
                  ? 'inputIsHover'
                  : 'inputNotHover',
              ]"
              type="text"
            />
            <span
              v-if="selectedRow == breed.name"
              class="material-symbols-outlined"
            >
              border_color
            </span>
          </div>
        </td>
        <td v-if="selectedRow == breed.name">
          <span
            @click="saveBreed({ name: breed.name } as Dog)"
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

.breed-name-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

.table-input {
  display: flex;
  align-items: center;
}
.base-input {
  height: 20px;
  border: none;
  background-color: transparent;
  caret-color: #e2e3ea;
  font-size: 16px;
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
</style>
