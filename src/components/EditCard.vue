<script setup lang="ts">
const props = defineProps({
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
  <main class="card-background">
    <div class="card-container">
      <img
        v-if="image"
        class="breed-image"
        :src="image"
        alt="brred image"
        width="300"
        height="200"
      />
      <img
        v-else
        class="breed-image"
        src="../assets//icon-image-not-found-free-vector.jpg"
        alt="brred image"
        width="300"
        height="200"
      />
      <div class="breed-info">
        <span class="breed-title"> {{ breedName }}</span>

        <div class="card-adictional-info">
          <span class="breed-title">Apelido: </span>
          <br />
          <span class="breed-title">Cor: </span>
          <br />
          <span class="breed-title">Idade: </span>
          <br />
          <span class="breed-title">Tamanho: </span>
        </div>
      </div>
    </div>
    <div class="commands-container">
      <span @click="save" class="save">Salvar</span>
      <span @click="close" class="close">Fechar</span>
    </div>
  </main>
</template>

<style scoped>
.card-background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
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

.commands-container {
  display: flex;
  width: 300px;
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

.close {
  cursor: pointer;
}

.close:hover {
  color: red;
}

.save {
  cursor: pointer;
}

.save:hover {
  color: rgb(49, 150, 2);
}
</style>
