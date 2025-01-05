<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted, computed } from 'vue';
import { useBaseStore } from '@/stores';

const themeMap: Record<string, string> = {
    system: 'mdi-laptop',
    light: 'mdi-weather-sunny',
    dark: 'mdi-weather-night',
};
const baseStore = useBaseStore();
const theme = computed(() => baseStore.theme);

// Функция для изменения темы
const changeMode = (val?: 'dark' | 'light') => {
    let value: 'dark' | 'light' = val || theme.value;

    if (value === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }
    document.documentElement.setAttribute('data-theme', value);
    window.localStorage.setItem('theme', value); // Сохраняем тему в localStorage
    baseStore.theme = value;
};

onMounted(() => {
    // Проверяем, есть ли тема в localStorage
    const storedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null;

    if (storedTheme) {
        // Если тема сохранена в localStorage, применяем её
        changeMode(storedTheme);
    } else {
        // Если в localStorage нет сохранённой темы, устанавливаем светлую по умолчанию
        changeMode('light');
    }
});
</script>

<template>
    <div class="tooltip tooltip-bottom delay-1000">
        <button
            class="btn btn-ghost btn-circle btn-sm mx-1"
            @click="changeMode()"
        >
            <Icon :icon="themeMap[theme]" class="text-2xl text-gray-500 dark:text-gray-400" />
        </button>
    </div>
</template>

