<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Create item
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="/create" method="POST" class="space-y-6">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Title</label>
          <div class="mt-2">
            <input
              id="title"
              type="text"
              name="title"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#84B179] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm/6 font-medium text-gray-900"
            >Description</label
          >
          <div class="mt-2">
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              class="block w-full resize-none rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#84B179] sm:text-sm/6"
            ></textarea>
          </div>
        </div>

        <div>
          <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
          <div class="mt-2">
            <input
              id="price"
              type="number"
              name="price"
              required
              min="0"
              step="0.01"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#84B179] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#84B179] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#84B179] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84B179]"
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
