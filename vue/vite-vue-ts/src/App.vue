<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import styled from './windboxes';

const logoLayoutClasses = styled('mb-10 flex align-center justify-center');

const logoClasses = 'w-20 h-20 m-5'.split(' ');
const viteLogoClasses = styled([...logoClasses, 'hover:drop-shadow-[0_0_2em_#646cffaa]']);
const vueLogoClasses = styled([...logoClasses, 'hover:drop-shadow-[0_0_2em_#42b883aa]']);
</script>



<template>
  <div :class="logoLayoutClasses">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" :class="viteLogoClasses" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" :class="vueLogoClasses" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
