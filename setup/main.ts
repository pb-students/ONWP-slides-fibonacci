import { defineAppSetup } from '@slidev/types'
import VueKatex from '@hsorby/vue3-katex'

export default defineAppSetup(({ app, router }) => {
  app.use(VueKatex)
})
