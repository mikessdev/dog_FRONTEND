import { ref, computed } from "vue";
import { defineStore } from "pinia";

const URL: string = "https://dog.ceo/api/breeds/list/all";

interface breedResponse {
  message: Object;
}

export const useBreedStore = defineStore("breed", () => {
  const listOFBreeds = ref<String[]>([]);

  const getAllBreeds = async () => {
    try {
      const response = await fetch(URL);
      const obj = (await response.json()) as breedResponse;
      listOFBreeds.value = convertObjectToList(obj.message);
    } catch (error) {
      console.error(error);
    }
  };

  const convertObjectToList = (object: object) => {
    const list: String[] = [];

    for (let atribute in object) {
      list.push(atribute);
    }

    return list as String[];
  };

  return { listOFBreeds, getAllBreeds };
});
