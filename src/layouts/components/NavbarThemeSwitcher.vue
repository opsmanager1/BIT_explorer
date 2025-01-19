<script setup lang="ts">
import { defineStore } from 'pinia';
import { Icon } from '@iconify/vue';
import { onMounted, computed } from 'vue';
import { useBaseStore } from '@/stores';

const themeMap: Record<'light' | 'retro', string> = {
    light: 'mdi-weather-sunny',
    retro: 'mdi-weather-night',
};

const theme = computed(() => baseStore.theme as 'light' | 'retro');

export const useBaseStore = defineStore('base', {
    state: () => ({
        theme: 'light' as 'light' | 'retro', // Ограничиваем возможные значения
    }),
    actions: {
        setTheme(newTheme: 'light' | 'retro') {
            this.theme = newTheme;
        },
    },
});

const changeMode = (val?: 'retro' | 'light') => {
    let value: 'retro' | 'light' = 'retro';
    const currentValue: 'retro' | 'light' = val || theme.value;

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

    document.documentElement.setAttribute('data-theme', value);
    window.localStorage.setItem('theme', value);
    baseStore.theme = value;
};

onMounted(() => {
    // Инициализируем тему при загрузке
    const savedTheme = window.localStorage.getItem('theme') as 'retro' | 'light';
    if (savedTheme && (savedTheme === 'retro' || savedTheme === 'light')) {
        changeMode(savedTheme);
    } else {
        // Устанавливаем начальную тему (например, 'light')
        changeMode('light');
    }
});
</script>

<template>
    <div class="tooltip tooltip-bottom" data-tip="Switch Theme">
        <button
            class="btn btn-ghost btn-circle btn-sm mx-1"
            @click="changeMode()"
        >
            <Icon :icon="themeMap?.[theme]" class="text-2xl text-gray-500" />
        </button>
    </div>
</template>
