import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useColorStore = defineStore('color', () => {
  const color = ref('system');

  const storeColor = (newColor) => {
    color.value = newColor || color.value;
    document.documentElement.className = `color-${color.value}`;
  }

  return { color, storeColor }
},
{
  // Store options
  persist:{
    paths:['color']
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot))
}
