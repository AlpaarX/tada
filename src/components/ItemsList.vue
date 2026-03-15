<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import { defineProps } from 'vue';

const props = defineProps<{
  items: Array<{ id: number; title: string; description: string; price: number }>;
  loading: boolean;
  error: string | null;
}>();
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-16">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
