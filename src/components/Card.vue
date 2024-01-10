<script setup lang="ts">
const props = defineProps({
  breed: {
    type: String,
    default: "",
  },
  subBreed: {
    type: Array<String>,
    default: [],
  },
});
</script>

<template>
  <div class="card-container">
    <img
      class="breed-image"
      src="https://images.dog.ceo/breeds/bouvier/PXL_20220130_185250212.jpg"
      :alt="breed + 'image'"
      width="300"
      height="200"
    />
    <div class="breed-info">
      <span class="breed-title"> {{ breed }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background-color: #31394d;
  width: 300px;
  height: 400px;
  cursor: pointer;
  color: #e2e3ea;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.breed-image {
  border-radius: 8px 8px 0px 0px;
}

.breed-info {
  display: flex;
}
.breed-title {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px auto 0 auto;
}
</style>
