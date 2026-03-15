<script setup lang="ts">
import { getItems } from '@/api/items';

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const item = ref(null);
onMounted(async () => {
  const id = route.params.id;
  try {
    const items = await getItems();
    item.value = items.find((i: { id: number }) => i.id === Number(id));
  } catch (e) {
    console.error(e);
  }
})

</script>

<template>
  <div v-if="item" class="max-w-2xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ item.title }}</h1>
    <p class="text-gray-700">{{ item.description }}</p>
    <p class="text-gray-900 font-bold mt-4">{{ item.price }}円</p>
  </div>
  <div v-else class="text-center p-4">
    <p class="text-gray-500">アイテムが見つかりませんでした。</p>
  </div>
</template>
