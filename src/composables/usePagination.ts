import { onMounted, ref } from "vue";

const currentPageKey = "currentPage";
const currentPage = ref(parseInt(localStorage.getItem(currentPageKey)) || 1);

const usePagination = () => {
  onMounted(() => {
    localStorage.setItem(currentPageKey, currentPage.value.toString());
  });

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
