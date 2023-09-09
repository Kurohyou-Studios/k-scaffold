import { pug, js, scss, build } from './data'

export default {
  load(watchedFiles) {
    return { pug, js, scss, build }
  }
}