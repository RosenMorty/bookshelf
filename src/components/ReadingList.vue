<template>
  <div class="wrapper">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Redhead_Cat_%28%D0%A0%D1%8B%D0%B6%D0%B8%D0%B9_%D0%9A%D0%BE%D1%82%29.jpg"
      :alt="book.title + ' Cover'"
      class="img"
    />
    <div class="text-block">
      <div>
        <h2 class="albumId">Id: {{ book.id }}</h2>
        <h2 class="title">Название: {{ book.title }}</h2>
        <div class="position-btn">
          <button
            class="add-to-list"
            v-if="isAuthorized === true"
            @click=""
          ></button>
          <button
            class="delete-at-list"
            v-if="isAuthorized === true"
            @click="
              bookStore.addBook(book);
              basketStore.removeBook(book);
              basketStore.descending();
            "
            style="margin-left: 10px"
          ></button>
        </div>
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
.delete-at-list {
  background: url("https://cdn-icons-png.flaticon.com/512/1665/1665612.png")
    no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
}
.position-btn {
  display: flex;
  justify-content: flex-end;
}
.add-to-list {
  background: url("https://cdn-icons-png.flaticon.com/512/117/117885.png")
    no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
}

.wrapper {
  margin: 10px;
  display: flex;
  align-items: center;
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  overflow: hidden;
  border: 2px solid;
}

.img {
  width: 100px;
  height: 130px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-block {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.albumId {
  font-size: 14px;
  font-weight: bold;
  color: #555;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #1a202c;
  margin-top: 4px;
}
</style>
