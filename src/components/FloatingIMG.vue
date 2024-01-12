<script setup lang="ts">
const props = defineProps({
  showImage: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "",
  },
  breedName: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close", "save"]);

const close = () => {
  emit("close");
};

const save = () => {
  emit("save");
};
</script>
<template>
  <div class="breed-image-container" v-show="showImage">
    <div class="commands-container">
      <span @click="close" class="save-image">Salvar</span>
      <span @click="close" class="close-image">Fechar</span>
    </div>
    <img :src="image" alt="dog image" width="200" />
    <span class="commands-container">{{ breedName }}</span>
  </div>
</template>

<style scoped>
.breed-image-container {
  position: absolute;
  z-index: 9999;
  padding: 10px;
  top: 760px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.breed-image-container img {
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.commands-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #bdbdbd;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #31394d;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.close-image {
  cursor: pointer;
}

.save-image {
  cursor: pointer;
}
</style>
