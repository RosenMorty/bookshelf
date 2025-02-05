<template>
  <div class="wrapper">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Redhead_Cat_%28%D0%A0%D1%8B%D0%B6%D0%B8%D0%B9_%D0%9A%D0%BE%D1%82%29.jpg"
      :alt="book.title + ' Cover'"
      class="img"
    />
    <div class="text-block">
      <div>
        <h2 class="talbumId">Id альбома: {{ book.albumId }}</h2>
        <h2 class="title">Название: {{ book.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "@/stores/bookshelf";
import { defineProps } from "vue";

const props = defineProps<{
  book: Book;
}>();
</script>

<style scoped>
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
  border: 3px solid;
  border-image: #8a00ff;
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

.talbumId {
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
