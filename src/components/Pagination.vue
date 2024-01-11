<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  pageAmount: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["click"]);

const currentPage = ref<number>(1);
const firstPage = 1;

const onClick = (number: number) => {
  currentPage.value = number;
  emit("click", number);
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
  emit("click", currentPage.value);
};

const previousPage = () => {
  currentPage.value = currentPage.value - 1;
  emit("click", currentPage.value);
};
</script>
<template>
  <nav class="pagination-container">
    <ul class="pagination">
      <li
        v-show="currentPage != firstPage"
        class="pagination-before"
        @click="previousPage()"
      >
        <a>Anterior</a>
      </li>
      <li
        :class="[
          number === currentPage ? 'current-pagination' : 'pagination-number',
        ]"
        v-for="(number, index) in pageAmount"
        :key="index"
        @click="onClick(number)"
      >
        <a class="page-link">{{ number }}</a>
      </li>
      <li
        v-show="currentPage != pageAmount"
        class="pagination-next"
        @click="nextPage()"
      >
        <a class="page-link">Próximo</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  font-weight: 800;
}

.pagination-next,
.pagination-before,
.pagination-number {
  color: #aaaaaa;
  cursor: pointer;
  user-select: none;
}

.current-pagination {
  color: #31394d;
  cursor: pointer;
}
.pagination {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
