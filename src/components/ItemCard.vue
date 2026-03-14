<script setup lang="ts">
import { defineProps } from 'vue';

interface Item {
  id: number;
  name: string;
  description: string;
}

const props = defineProps<{
  item: Item;
}>();
</script>

<template>
  <RouterLink :to="{ name: 'ItemDetails', params: { id: props.item.id } }">
    <div class="border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-md p-4">
      <h2 class="text-lg font-bold mb-2">{{ props.item.name }}</h2>
      <p class="text-gray-600 mb-4">{{ props.item.description }}</p>
    </div>
  </RouterLink>
</template>
