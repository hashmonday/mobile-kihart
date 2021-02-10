<template>
  <div>
    <div class="pt-2">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-6 md:col-span-4">
          <NuxtLink to="/create">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              สร้าง
            </button>
          </NuxtLink>
        </div>
        <div class="col-span-6 md:col-span-4">
          <div class="flex-1 min-w-0">
            <label for="search" class="sr-only">ค้นหา</label>
            <div class="relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <!-- Heroicon name: mail -->
                <!-- Heroicon name: solid/search -->
                <svg
                  class="h-5 w-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                v-model="search"
                type="search"
                name="search"
                id="search"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="ค้นหา"
              />
            </div>
          </div>
        </div>
        <div class="col-span-6 md:col-span-2">
          <div class="flex-1 min-w-0 text-gray-900">
            <label for="created_date" class="sr-only">วันที่สร้าง</label>
            <div class="relative rounded-md shadow-sm">
              <input
                v-model="created_date"
                type="date"
                id="created_date"
                class="focus:ring-indigo-500 focus:border-pink-500 block w-full px-auto sm:text-sm border-indigo-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div class="col-span-6 md:col-span-2">
          <div class="flex-1 min-w-0 text-gray-900">
            <label for="sort_by" class="sr-only">เรียงตาม</label>
            <div class="relative rounded-md shadow-sm">
              <select
                v-model="sort_by"
                id="sort_by"
                class="focus:ring-indigo-900 focus:border-pink-500 block w-full px-auto sm:text-sm border-indigo-300 rounded-md"
              >
                <option value="updated_at_descending">
                  เรียงจากเแก้ไขล่าสุด
                </option>
                <option value="updated_at_asscending">
                  เรียงจากแก้ไขแรกสุด
                </option>
                <option value="created_at_descending">
                  เรียงจากสร้างล่าสุด
                </option>
                <option value="created_at_asscending">
                  เรียงจากสร้างแรกสุด
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-2">
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="(list, index) in filterPersons" :key="index">
            <NuxtLink :to="`/person/${list.id}`" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="min-w-0 flex-1 flex items-center">
                  <div
                    class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                  >
                    <div>
                      <p class="text-sm font-medium text-indigo-600 truncate">
                        {{
                          `${list.title_th} ${list.first_name_th} ${list.last_name_th}`
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
                        <div
                          v-if="
                            sort_by == 'created_at_descending' ||
                            sort_by == 'created_at_asscending'
                          "
                        >
                          <p class="text-sm text-gray-900">
                            สร้างวันที่
                            <time datetime="2021-01-07 8:15"
                              >{{
                                $dayjs(list.created_at).format('DD MMMM YYYY')
                              }}
                              เวลา
                              {{ $dayjs(list.created_at).format('HH:mm') }}
                              น.</time
                            >
                          </p>
                        </div>
                        <div v-else>
                          <p class="text-sm text-gray-900">
                            แก้ไขวันที่
                            <time datetime="2021-01-07 8:15"
                              >{{
                                $dayjs(list.updated_at).format('DD MMMM YYYY')
                              }}
                              เวลา
                              {{ $dayjs(list.updated_at).format('HH:mm') }}
                              น.</time
                            >
                          </p>
                        </div>
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
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      created_date: '',
      search: '',
      sort_by: 'created_at_descending',
    }
  },
  async fetch() {
    this.created_date = this.$dayjs().format('YYYY-MM-DD')
    this.lists = await this.$strapi.find('persons', {
      created_date: this.created_date,
      _limit: -1,
    })
  },
  watch: {
    async created_date() {
      this.lists = await this.$strapi.find('persons', {
        created_date: this.created_date,
        _limit: -1,
      })
    },
  },
  computed: {
    filterPersons() {
      let filteredLists = this.lists
      if (this.search != '') {
        filteredLists = filteredLists.filter((list) => {
          let a = list.identification_number.match(this.search)
          let b = list.first_name_th.match(this.search)
          let c = list.last_name_th.match(this.search)

          if (/^\d+$/.test(this.search)) {
            return a
          } else {
            return b || c
          }
        })
      }
      if (this.sort_by == 'updated_at_descending') {
        filteredLists = filteredLists.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        )
      } else if (this.sort_by == 'updated_at_asscending') {
        filteredLists = filteredLists.sort(
          (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
        )
      } else if (this.sort_by == 'created_at_descending') {
        filteredLists = filteredLists.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )
      } else if (this.sort_by == 'created_at_asscending') {
        filteredLists = filteredLists.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        )
      }
      return filteredLists
    },
  },
  methods: {},
}
</script>
