<script setup lang="ts">
import Button from './ui/Button.vue'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <header class="p-2 fixed top-0 left-0 right-0 bg-white border-b border-neutral-200 z-10">
    <div class="md:px-16">
      <div class="flex items-center justify-between py-2">
        <RouterLink to="/" class="text-2xl font-bold">Tada</RouterLink>
        <RouterLink to="/login">
          <Button> ログイン </Button>
        </RouterLink>
      </div>
      <SearchBar />
    </div>
  </header>
</template>
