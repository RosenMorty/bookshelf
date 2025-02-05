import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthorized = ref<boolean>(true);

  const changeRegistr = () => {
    isAuthorized.value = !isAuthorized.value;
    console.log("Текущее значение isRegistr:", isAuthorized.value);
  };

  return { isAuthorized, changeRegistr };
});
