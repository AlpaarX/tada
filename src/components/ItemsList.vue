<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import items from '@/items.json';
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
