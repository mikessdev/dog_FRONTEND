<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  options: {
    type: Array<String>,
    default: [],
  },
});

const selectText = ref<String>(props.title);
const showOptions = ref(false);

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};
</script>

<template>
  <div @click="toggleOptions" class="dropdown-container">
    <div class="dropdown-title">
      <span class="dropdown-toggle">{{ selectText }} </span>
      <span class="dropdown-icon material-symbols-outlined">
        chevron_right
      </span>
    </div>
    <div class="dropdown-options-container">
      <ul v-if="showOptions" class="dropdown-options">
        <li
          class="dropdown-option"
          v-for="(option, index) in options"
          :key="index"
          @click="() => (selectText = option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown-title {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}
.dropdown-icon {
  transform: rotate(90deg);
}

.dropdown-options-container {
  display: flex;
  justify-content: center;
  background-color: #707070;
  z-index: 10;
  position: relative;
  border-radius: 8px;
}
.dropdown-options {
  width: 100%;
  top: 36px;
  color: #e2e3ea;
}

.dropdown-option {
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
}
.dropdown-option:hover {
  cursor: pointer;
  color: #31394d;
  background-color: #e2e3ea;
}
</style>
