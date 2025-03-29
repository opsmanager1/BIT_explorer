<script setup lang="ts">
import { themeChange } from 'theme-change';
import { onMounted, ref } from 'vue';
import TxDialog from './components/TxDialog.vue';

const isDark = ref(false);

onMounted(() => {
  themeChange(false);
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
});
</script>

<template>
  <div :class="{ 'dark': isDark }">
    <RouterView />
    <TxDialog />
  </div>
</template>
