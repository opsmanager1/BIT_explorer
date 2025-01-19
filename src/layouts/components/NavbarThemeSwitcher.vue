<script setup lang="ts">
import { defineStore } from 'pinia';
import { Icon } from '@iconify/vue';
import { onMounted, computed } from 'vue';
import { useBaseStore } from '@/stores';

// Карта иконок для тем
const themeMap: Record<'light' | 'retro', string> = {
    light: 'mdi-weather-sunny',
    retro: 'mdi-weather-night',
};

// Хранилище

export const useBaseStore = defineStore('base', {
    state: () => ({
        theme: 'light' as 'light' | 'dark' | 'retro', // Добавляем 'retro'
    }),
    actions: {
        setTheme(newTheme: 'light' | 'dark' | 'retro') {
            this.theme = newTheme;
        },
    },
});

// Получаем текущую тему из хранилища
const theme = computed(() => baseStore.theme as 'light' | 'dark' | 'retro');

// Функция переключения темы
const changeMode = (val?: 'retro' | 'light') => {
    let value: 'retro' | 'light' = 'retro';
    const currentValue: 'retro' | 'light' = val || theme.value;

    // Логика переключения
    if (currentValue === 'retro') {
        value = 'light';
    }

    if (value === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('retro');
    } else {
        document.documentElement.classList.add('retro');
        document.documentElement.classList.remove('light');
    }

    // Устанавливаем тему в localStorage и обновляем хранилище
    document.documentElement.setAttribute('data-theme', value);
    window.localStorage.setItem('theme', value);
    baseStore.theme = value;
};

// При загрузке инициализируем тему
onMounted(() => {
    const savedTheme = window.localStorage.getItem('theme') as 'retro' | 'light';
    if (savedTheme && (savedTheme === 'retro' || savedTheme === 'light')) {
        changeMode(savedTheme);
    } else {
        changeMode('light'); // Устанавливаем тему по умолчанию
    }
});
</script>

<template>
    <div class="tooltip tooltip-bottom" data-tip="Switch Theme">
        <button
            class="btn btn-ghost btn-circle btn-sm mx-1"
            @click="changeMode()"
        >
            <Icon :icon="themeMap[theme]" class="text-2xl text-gray-500" />
        </button>
    </div>
</template>
