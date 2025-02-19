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
    <h2>Reading List:</h2>
    <h4>Books in: {{ bookStore.countBooks }}</h4>
    <div class="basketBook">
      <ReadingList
        class="adds-basket-book"
        v-for="book in basketStore.booksInBasket"
        :key="book.id"
        :book="book"
      >
        {{ book }},
      </ReadingList>
    </div>
  </div>
  <h1>Discover:</h1>
  <div class="top-films">Топ 10 фильмов</div>
  <div class="list">
    <BookCard v-for="book in bookStore.books" :key="book.id" :book="book" />
  </div>
</template>

<script setup lang="ts">
import ReadingList from "./components/ReadingList.vue";
import BookCard from "./components/BookCard.vue";
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { useBookshelfStore } from "./stores/bookshelf";
import { useAuthStore } from "./stores/auth";
import { useBasketStore } from "./stores/basket";

const authStore = useAuthStore();
const bookStore = useBookshelfStore();
const basketStore = useBasketStore();

onMounted(() => {
  bookStore.loadProducts();
});
</script>

<style scoped>
.top-films {
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 10px;
}
</style>
