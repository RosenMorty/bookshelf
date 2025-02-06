import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

export interface Book {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const useBookshelfStore = defineStore("book", () => {
  const books = ref<Book[]>([]);

  function addBook(book: Book) {
    books.value.unshift(book);
  }

  function removeBook(book: Book) {
    const index = books.value.indexOf(book);
    books.value.splice(index, 1);
  }

  function hasBook(book: Book) {
    return books.value.includes(book);
  }

  async function loadProducts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    const limitedData = data.slice(0, 15);
    books.value = limitedData;
  }

  return {
    books,
    addBook,
    removeBook,
    hasBook,
    loadProducts,
  };
});
