<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { themeChange } from 'theme-change'
import TxDialog from './components/TxDialog.vue'


const theme = ref(localStorage.getItem('theme') || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

onMounted(() => {

  document.documentElement.setAttribute('data-theme', theme.value)
  themeChange(false) 
})
</script>

<template>
  <div :data-theme="theme">
    <RouterView />
    <TxDialog />
  </div>
</template>

<style>

html.dark {
  @apply bg-base-100;
}

html {
  @apply bg-white;
  transition: background-color 0.3s;
}
</style>
