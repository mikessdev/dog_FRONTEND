<script setup lang="ts">
import usePagination from "@/composables/usePagination";

const props = defineProps({
  pageAmount: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["click"]);

const firstPage = 1;

const onClick = (number: number) => {
  usePagination.setCurrentPage(number);
  emit("click", number);
};

const nextPage = () => {
  const nextPage = usePagination.getCurrentPage() + 1;
  usePagination.setCurrentPage(nextPage);
  emit("click", usePagination.getCurrentPage());
};

const previousPage = () => {
  const previusPage = usePagination.getCurrentPage() - 1;
  usePagination.setCurrentPage(previusPage);
  emit("click", usePagination.getCurrentPage());
};
</script>
<template>
  <nav class="pagination-container">
    <ul class="pagination">
      <li
        v-show="usePagination.getCurrentPage() != firstPage"
        class="pagination-before"
        @click="previousPage()"
      >
        <a>Anterior</a>
      </li>
      <li
        :class="[
          number === usePagination.getCurrentPage()
            ? 'current-pagination'
            : 'pagination-number',
        ]"
        v-for="(number, index) in pageAmount"
        :key="index"
        @click="onClick(number)"
      >
        <a class="page-link">{{ number }}</a>
      </li>
      <li
        v-show="usePagination.getCurrentPage() != pageAmount"
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

.pagination-next:active {
  color: #31394d;
}

.pagination-before:active {
  color: #31394d;
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
