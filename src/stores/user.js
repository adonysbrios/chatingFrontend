import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', () => {
  const count = ref(0)
  const setUsername = (username) => {
    count.value = username
  }
  return { username, setUsername }
})
