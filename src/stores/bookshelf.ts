import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import Logout from "@/components/Logout.vue";
// import { useBasketStore } from "./basket";

export interface Book {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: string;
  genres: [string];
  plot: string;
  runtime: number;
  budget: null;
  revenue: null;
  homepage: string;
  status: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  trailerYouTubeId: string;
  tmdbRating: number;
  searchL: string;
  keywords: [];
  countriesOfOrigin: [];
  languages: [];
  cast: [];
  director: string;
  production: null;
  awardsSummary: null;
}

export const useBookshelfStore = defineStore("book", () => {
  const books = ref<Book[]>([]);
  const sortedBooks = ref(books);
  const countBooks = ref(0);
  const { isAuthorized } = storeToRefs(useAuthStore());

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
    const res = await fetch("https://cinemaguide.skillbox.cc/movie");
    const data = await res.json();
    books.value = data.sort((a, b) => b.tmdbRating - a.tmdbRating).slice(0, 10);
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
