import { ref, computed } from "vue";
import { defineStore } from "pinia";

const URL: string = "https://dog.ceo/api/breed";

export const useBreedStore = defineStore("breed", () => {
  const listOFBreeds = ref<String[]>([]);

  const getAllBreeds = async () => {
    try {
      const response = await fetch(URL + "s" + "/list/all");
      const object = await response.json();

      const succes = object["status"] === "success";

      if (succes) {
        return (listOFBreeds.value = convertObjectToList(object["message"]));
      }

      return (listOFBreeds.value = []);
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

  const getImageBybreed = async (breed: string) => {
    try {
      const response = await fetch(URL + "/" + breed + "/images/random");
      const object = await response.json();
      const succes = object["status"] === "success";
      if (succes) {
        return object["message"];
      }
    } catch (error) {}
  };
  return { listOFBreeds, getAllBreeds, getImageBybreed };
});
