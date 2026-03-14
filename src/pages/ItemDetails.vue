<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import items from '@/items.json';
const route = useRoute();
const id = computed(() => Number(route.params.id));
const item = computed(() => items.find((x) => x.id === id.value));

</script>

<template>
  <div v-if="item" class="max-w-2xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ item.name }}</h1>
    <p class="text-gray-700">{{ item.description }}</p>
  </div>
  <div v-else class="text-center p-4">
    <p class="text-gray-500">アイテムが見つかりませんでした。</p>
  </div>
</template>
