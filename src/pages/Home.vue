<script setup lang="ts">
import ItemsList from '@/components/ItemsList.vue';
import AddButton from '@/components/ui/AddButton.vue';

import { ref, onMounted } from 'vue'
import { getItems } from '@/api/items'

const items = ref([])
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    items.value = await getItems()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
<ItemsList :items="items" :loading="loading" :error="error"/>
<AddButton/>
</template>
