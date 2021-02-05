<template>
  <div>
    <div class="pt-2">
      <NuxtLink to="/create">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          สร้าง
        </button>
      </NuxtLink>
    </div>
    <div class="pt-2">
      <PersonLists />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
