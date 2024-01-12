import { ref } from "vue";
import { type Dog } from "@/interfaces/Dog";

const dogStorageKey = "dogStorage";
const dogStorage = ref(JSON.parse(localStorage.getItem(dogStorageKey)) || []);

const useDogStorage = () => {
  const setCurrentDogs = (dogs: Dog[]) => {
    dogStorage.value = dogs;
    localStorage.setItem(dogStorageKey, JSON.stringify(dogStorage.value));
  };

  const addDog = (dog: Dog) => {
    dogStorage.value.push(dog);
    setCurrentDogs(dogStorage.value);
  };

  const getAllDogs = () => {
    return dogStorage.value;
  };

  return {
    getAllDogs,
    setCurrentDogs,
    addDog,
  };
};

export default useDogStorage();
