import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import Logout from "@/components/Logout.vue";
// import { useBasketStore } from "./basket";

export interface Book {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const useBookshelfStore = defineStore("book", () => {
  const books = ref<Book[]>([]);
  const countBooks = ref(0);
  const { isAuthorized } = storeToRefs(useAuthStore());

  console.log(books.value.length);

  function addBook(book: Book) {
    if (isAuthorized.value) {
      books.value.unshift(book);
    }
  }

  function increment() {
    countBooks.value++;
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
    books.value = data.slice(0, 15);
    console.log(books.value.length);
  }

  return {
    books,
    countBooks,
    increment,
    addBook,
    removeBook,
    hasBook,
    loadProducts,
  };
});
