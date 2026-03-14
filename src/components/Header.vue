<script setup lang="ts">
import Button from './ui/Button.vue'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <header class="p-2">
    <div class="flex items-center justify-between py-2">
      <RouterLink to="/" class="text-2xl font-bold">Tada</RouterLink>
      <Button> ログイン </Button>
    </div>
    <SearchBar />
  </header>
</template>
