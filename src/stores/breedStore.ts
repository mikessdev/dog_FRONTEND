import { ref } from "vue";
import { defineStore } from "pinia";

const URL: string = "https://dog.ceo/api/breed";

export interface Breed {
  name: string;
  subBreed?: string[];
}

export const useBreedStore = defineStore("breed", () => {
  const listOFBreeds = ref<Breed[]>([]);
  const breedImage = ref<string>("");

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

  const getImageByBreed = async (breed: string) => {
    try {
      const response = await fetch(URL + "/" + breed + "/images/random");
      const object = await response.json();
      const succes = object["status"] === "success";
      if (succes) {
        return (breedImage.value = object["message"]);
      }
    } catch (error) {}
  };

  const convertObjectToList = (object: object) => {
    const list: Breed[] = Object.keys(object).map((key) => {
      return { name: key, subBreed: object[key] } as Breed;
    });

    return list;
  };

  return { listOFBreeds, breedImage, getAllBreeds, getImageByBreed };
});
