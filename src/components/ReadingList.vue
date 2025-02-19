<template>
  <div class="wrapper">
    <!-- Обложка (фиксированный размер 200x200) -->
    <img :src="book.posterUrl" :alt="book.title + ' Cover'" class="img" />

    <!-- Информация о книге -->
    <div class="text-block">
      <div>
        <h2 class="title">{{ book.title }}</h2>
        <p class="release-year">
          Год выпуска: <span>{{ book.releaseYear }}</span>
        </p>
        <p class="rating">
          Рейтинг: <span>{{ book.tmdbRating }}</span>
        </p>
        <p class="duration">
          Длительность: <span>{{ book.runtime }} мин</span>
        </p>

        <!-- Описание -->
        <p class="plot">{{ book.plot }}</p>
      </div>

      <!-- Кнопки -->
      <div class="buttons">
        <button v-if="isAuthorized" @click="" class="add-to-list">
          ➕ В избранное
        </button>

        <button
          v-if="isAuthorized"
          @click="
            bookStore.addBook(book);
            basketStore.removeBook(book);
            basketStore.descending();
          "
          class="delete-at-list"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookshelfStore } from "@/stores/bookshelf";
import { useBasketStore } from "@/stores/basket";
import type { Book } from "@/stores/bookshelf";
import { defineProps, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const bookStore = useBookshelfStore();
const basketStore = useBasketStore();
const { isAuthorized } = storeToRefs(useAuthStore());

const props = defineProps<{
  book: Book;
}>();
</script>

<style scoped>
/* Сброс стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: white;
}

.wrapper {
  display: flex;
  flex-direction: row; /* Горизонтальное расположение элементов */
  background-color: #1c1c1c;
  border: 4px solid #4a4a4a;
  border-radius: 16px;
  max-width: 1000px;
  width: 100%;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
}

.img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 4px solid #555555;
}

.text-block {
  padding-left: 16px;
  flex-grow: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.release-year,
.rating,
.duration {
  font-size: 1rem;
  color: #999999;
}

.plot {
  font-size: 0.9rem;
  color: #b3b3b3;
  margin-top: 16px;
  line-height: 1.5;
}

.buttons {
  margin-top: 16px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.add-to-list,
.delete-at-list {
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-list {
  background-color: #ffb84d;
  color: black;
}

.add-to-list:hover {
  background-color: #ff9e00;
}

.delete-at-list {
  background-color: #f44336;
  color: white;
}

.delete-at-list:hover {
  background-color: #d32f2f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Убираем все отступы и padding */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* 3. Убираем стили у ссылок */
a {
  text-decoration: none;
  color: inherit;
}

/* 4. Обнуляем списки */
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 5. Убираем бордеры и стили кнопок */
button,
input,
textarea,
select {
  margin: 0;
  font: inherit;
  border: none;
  background: none;
  outline: none;
}

/* 6. Базовые стили для body */
body {
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  background-color: #fff;
  color: #333;
}

/* 7. Глобальная настройка изображений */
img,
picture,
svg,
video {
  max-width: 100%;
  display: block;
}
</style>
