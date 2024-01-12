import { ref } from "vue";

const currentPageKey = "currentPage";
const storedPage = localStorage.getItem(currentPageKey);
const initialPage = storedPage ? parseInt(storedPage) : 1;

const currentPage = ref(initialPage);

const usePagination = () => {
  const setCurrentPage = (number: number) => {
    currentPage.value = number;
    localStorage.setItem(currentPageKey, currentPage.value.toString());
  };

  const getCurrentPage = () => {
    return currentPage.value;
  };

  return {
    getCurrentPage,
    setCurrentPage,
  };
};

export default usePagination();
