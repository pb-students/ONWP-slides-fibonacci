<script setup lang="ts">
import { ref, computed, watch } from 'vue'
const n = ref('1')

const PHI = 1.618033988749
const sqrt5Inverse = Math.sqrt(5) ** -1

const fib1 = computed(() => Math.ceil(sqrt5Inverse * (
  PHI ** n.value - (-PHI) ** (-n.value)
)))

const fib2 = computed(() => {
  const nums = [1, 1]

  if (n.value == 0) return 0
  if (n.value < 2) return 1

  for (let count = 0; count < n.value - 2; ++count) {
  	[nums[0], nums[1]] = [nums[1], nums[0] + nums[1]] 
  }
  
  return nums[1]
})
</script>

<template>
<div :class="{ 'text-red-400': fib1 !== fib2 }">
  <span v-katex="'fib_1('" />
  <input type="text" v-model="n" class="border-b border-dashed w-3ch outline-none focus:border-blue-400" />
  <span v-katex="') = ' + fib1" />
</div>
<div>
  <span v-katex="'fib_2('" />
  <input type="text" v-model="n" class="border-b border-dashed w-3ch outline-none focus:border-blue-400" />
  <span v-katex="') = ' + fib2" />
</div>
</template>

<style scoped>
</style>