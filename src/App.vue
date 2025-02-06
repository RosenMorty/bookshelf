<template>
  <header>
    <div class="container">
      <div v-if="authStore.isAuthorized === false">
        <button class="logout" @click="authStore.changeRegistr">Войти</button>
      </div>
      <button v-else class="logout" @click="authStore.changeRegistr">
        Выйти
      </button>
    </div>
  </header>
  <div class="card" v-if="authStore.isAuthorized === true">
    <h2>Планирую прочесть:</h2>
    <div class="basketBook">
      <BookCard
        class="adds-basket-book"
        v-for="book in basketStore.booksInBasket"
        :key="book.id"
        :book="book"
      >
        {{ book }},
      </BookCard>
    </div>
    <h1>Список книг:</h1>
    <div class="list">
      <BookCard v-for="book in bookStore.books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BookCard from "./components/BookCard.vue";
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { useBookshelfStore } from "./stores/bookshelf";
import { useAuthStore } from "./stores/auth";
import { useBasketStore } from "./stores/basket";
import Logout from "./components/Logout.vue";

const authStore = useAuthStore();
const bookStore = useBookshelfStore();
const basketStore = useBasketStore();

onMounted(() => {
  bookStore.loadProducts();
});
</script>

<style scoped>
.adds-basket-book {
  display: flex;
  margin: 10px;
  align-items: center;
  max-width: 350px;
  background: #e9e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  overflow: hidden;
  border: 2px solid;
}

.basketBook {
  display: flex;
  flex-wrap: wrap;
}

.list {
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.list div {
  width: calc(100% / 6 - 10px);
  text-align: center;
  padding: 8px;
  background-color: #f3f3f3;
  border-radius: 8px;
}

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
