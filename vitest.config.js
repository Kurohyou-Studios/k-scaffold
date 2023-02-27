import { configDefaults, defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: [...configDefaults.include,'**/*.{test,spec}.{html,css}']
  },
})