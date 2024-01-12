<script setup lang="ts">
import type { Dog } from "@/interfaces/Dog";
import type { PropType } from "vue";

const props = defineProps({
  breed: {
    type: Object as PropType<Dog>,
    default: {},
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
      v-if="breed.image"
      class="breed-image"
      :src="breed.image"
      :alt="breed + 'image'"
      width="300"
      height="200"
    />
    <img
      v-else
      class="breed-image"
      src="../assets//icon-image-not-found-free-vector.jpg"
      :alt="breed + 'image'"
      width="300"
      height="200"
    />
    <div class="breed-info">
      <span class="breed-title"> {{ breed.breed }}</span>

      <div class="card-adictional-info">
        <span class="breed-title">Apelido: {{ breed.name }}</span>
        <br />
        <span class="breed-title">Cor: {{ breed.color }}</span>
        <br />
        <span class="breed-title">Idade: {{ breed.age }}</span>
        <br />
        <span class="breed-title">Tamanho: {{ breed.size }}</span>
      </div>
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
  transition: transform 0.2s;

  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.card-container:hover {
  transform: scale(1.1);
  background-color: #e2e3ea;
  color: #31394d;
}
.breed-image {
  border-radius: 8px 8px 0px 0px;
}

.breed-info {
  display: flex;
  flex-direction: column;
}
.breed-title {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px auto 0 auto;
}

.card-adictional-info {
  margin-top: 20px;
  margin-left: 10px;
  text-align: left;
}
</style>
