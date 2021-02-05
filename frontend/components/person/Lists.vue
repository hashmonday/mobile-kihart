<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <li v-for="(list, index) in lists" :key="index">
        <a href="#" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">
                    {{
                      `${list.personal_title.title_th} ${list.first_name_th} ${list.last_name_th}`
                    }}
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <!-- Heroicon name: identification -->
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                    <span class="truncate">{{
                      list.identification_number
                    }}</span>
                  </p>
                </div>

                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      แก้ไขเมื่อ
                      <time datetime="2021-01-07 8:15"
                        >7 มกราคม 2564 เวลา 8:15 น.</time
                      >
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <!-- Heroicon name: solid/check-circle -->
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ข้อมูลครบถ้วน
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    }
  },
  async fetch() {
    this.lists = await this.$strapi.find('persons', { _limit: -1 })
  },
}
</script>
