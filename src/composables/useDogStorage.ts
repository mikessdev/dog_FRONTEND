import { ref } from "vue";

const dogStorageKey = "dogStorage";
const dogStorage = ref(JSON.parse(localStorage.getItem(dogStorageKey)) || []);

export interface Dog {
  breed: string;
  color: string;
  name: string;
  age: number;
}

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

  const getCurrentDogs = () => {
    return dogStorage.value;
  };

  return {
    getCurrentDogs,
    setCurrentDogs,
    addDog,
    removeDog,
  };
};

export default useDogStorage();
