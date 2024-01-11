<script setup lang="ts"></script>
<template>
  <div class="home-header">
    <h1 class="home-title">Dog API</h1>
    <router-link to="/dogs">
      <div class="home-car">
        <span>Carrinho</span>
        <img src="../assets/doguinho.png" width="80" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.home-header {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.home-title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}

.home-car {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: #31394d;
}
</style>
