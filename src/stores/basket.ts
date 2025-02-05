import { defineStore, storeToRefs } from "pinia";
import { useAuthStore } from "./auth";
import type { Book } from "./bookshelf";
import { ref } from "vue";

export const useBasketStore = defineStore("basket", () => {
  const { isAuthorized } = storeToRefs(useAuthStore());
  const booksInBasket = ref<Book[]>([]);
  const isInBasket = ref(false);

  const addInBasket = (book: Book) => {
    if (isAuthorized.value) {
      if (booksInBasket.value.some((el: Book) => el.id === book.id)) {
        booksInBasket.value = booksInBasket.value.filter(
          (el) => el.id !== book.id
        );
      } else {
        booksInBasket.value.push(book);
      }
    }
  };

  return { booksInBasket, addInBasket, isInBasket };
});
