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

  const removeDog = (dog: Dog) => {
    const index = dogStorage.value.indexOf(dog);
    if (index !== -1) {
      dogStorage.value.splice(index, 1);
      setCurrentDogs(dogStorage.value);
    }
  };

  const getAllDogs = () => {
    return dogStorage.value;
  };

  const getDogByBreed = (breed: string) => {
    return dogStorage.value.filter((dog) => dog.breed === breed);
  };

  return {
    getAllDogs,
    setCurrentDogs,
    addDog,
    removeDog,
    getDogByBreed,
  };
};

export default useDogStorage();
