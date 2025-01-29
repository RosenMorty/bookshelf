<template>
  <header>
    <div class="container">
      <button class="logout" v-if="!isRegistr" @click="changeRegistr">
        Войти
      </button>
      <button v-else class="logout" @click="changeRegistr">Выйти</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const isRegistr = ref(false);

const changeRegistr = () => {
  isRegistr.value = !isRegistr.value;
  console.log("Текущее значение isRegistr:", isRegistr.value);
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: flex-end;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.logout {
  padding: 10px 15px;
  border: 0px;
  line-height: 1;
  border-radius: 3px;
  background: rgb(241, 242, 247);
  color: rgb(67, 68, 73);
  /* margin-left: 10px; */
  margin-right: 10px;
  width: 100px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
