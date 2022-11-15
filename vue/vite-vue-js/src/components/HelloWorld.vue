<script setup lang="ts">
import { ref } from 'vue'
import styled from '../windboxes'

defineProps<{ msg: string }>()

const count = ref(0)



const cardClasses = styled('p-10');
const buttonClasses = styled('m-5 p-2 rounded-md border-2 border-transparent hover:bg-gray-50 hover:border-purple-200 active:bg-purple-100 duration-100');
const readTheDocsClasses = styled('text-[#888] mt-5');
</script>

<template>
  <h1>{{ msg }}</h1>

  <div :class="cardClasses">
    <button :class="buttonClasses" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      create-vue
    </a>, the official Vue + Vite starter
  </p>

  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p :class="readTheDocsClasses">Click on the Vite and Vue logos to learn more</p>
</template>
