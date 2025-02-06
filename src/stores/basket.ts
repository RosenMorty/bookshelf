import { defineStore, storeToRefs } from "pinia";
import { useAuthStore } from "./auth";
import { useBookshelfStore, type Book } from "./bookshelf";
import { ref } from "vue";

export const useBasketStore = defineStore("basket", () => {
  const { isAuthorized } = storeToRefs(useAuthStore());
  const { books } = storeToRefs(useBookshelfStore());
  const booksInBasket = ref<Book[]>([]);
  const isInBasket = ref<boolean>(false);

  const addInBasket = (book: Book) => {
    if (isAuthorized.value) {
      if (booksInBasket.value.some((el: Book) => el.id === book.id)) {
        booksInBasket.value = booksInBasket.value.filter(
          (el) => el.id !== book.id
        );
      } else {
        booksInBasket.value.push(book);
        isInBasket.value = false;
      }
    }
  };

  function removeBook(book: Book) {
    const index = booksInBasket.value.indexOf(book);
    booksInBasket.value.splice(index, 1);
  }

  return { booksInBasket, addInBasket, isInBasket, books, removeBook };
});
