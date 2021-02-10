<template>
  <div>
    <div class="pt-2">
      <div class="grid grid-cols-9 gap-2">
        <div class="col-span-6 md:col-span-2">
          <NuxtLink to="/create">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10"
            >
              สร้าง
            </button>
          </NuxtLink>

          <button
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10"
            @click="onExport"
          >
            Export
          </button>
        </div>
        <div class="col-span-6 md:col-span-3">
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
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md h-10"
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
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-auto sm:text-sm border-indigo-300 rounded-md h-10"
              />
            </div>
          </div>
        </div>
        <div class="col-span-6 md:col-span-1">
          <div class="flex-1 min-w-0 text-gray-900">
            <label for="sort_by" class="sr-only">เรียงตาม</label>
            <div class="relative rounded-md shadow-sm">
              <select
                v-model="sort_by"
                id="sort_by"
                class="focus:ring-indigo-900 focus:border-indigo-500 block w-full px-auto sm:text-sm border-indigo-300 rounded-md h-10"
              >
                <option value="updated_at_descending">แก้ไขล่าสุด</option>
                <option value="updated_at_asscending">แก้ไขแรกสุด</option>
                <option value="created_at_descending">สร้างล่าสุด</option>
                <option value="created_at_asscending">สร้างแรกสุด</option>
              </select>
            </div>
          </div>
        </div>
        <div class="invisible md:visible md:col-span-1">
          <div class="flex justify-end">
            <button
              @click="refresh"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10"
            >
              {{ filterPersons.length }} / {{ lists.length }}
              <!-- Heroicon name: refresh -->
              <svg
                class="ml-3 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
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
                          `${list.no} : ${list.title_th} ${list.first_name_th} ${list.last_name_th}`
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
                          <svg
                            v-if="
                              list.telephone != null &&
                              list.telephone_number.length > 10
                            "
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

                          <svg
                            v-else
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {{
                            list.telephone != null &&
                            list.telephone_number.length > 10
                              ? 'ข้อมูลครบถ้วน'
                              : 'ข้อมูลไม่ครบถ้วน'
                          }}
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
import XLSX from 'xlsx'
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
    let data = await this.$strapi.find('persons', {
      created_date: this.created_date,
      _limit: -1,
    })

    let n = 1
    data.forEach((el, i) => {
      data[i].no = n
      n++
    })
    this.lists = data
  },
  watch: {
    async created_date() {
      let data = await this.$strapi.find('persons', {
        created_date: this.created_date,
        _limit: -1,
      })
      let n = 1
      data.forEach((el, i) => {
        data[i].no = n
        n++
      })
      this.lists = data
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
  methods: {
    async refresh() {
      let data = await this.$strapi.find('persons', {
        created_date: this.created_date,
        _limit: -1,
      })
      let n = 1
      data.forEach((el, i) => {
        data[i].no = n
        n++
      })

      this.lists = data
    },
    async onExport() {
      let data = await this.$strapi.find('persons', {
        created_date: this.created_date,
        _limit: -1,
      })
      let data2 = []
      let n = 1
      data.forEach((el, i) => {
        data2.push({
          ลำดับที่: n,
          'ชื่อ-นามสกุล (ไทย)': `${el.title_th} ${el.first_name_th} ${el.last_name_th}`,
          'ชื่อ-นามสกุล (อังกฤษ)': `${el.title_en} ${el.first_name_en} ${el.last_name_en}`,
          หมายเลขบัตรประจำตัว: el.identification_number,
          เพศ: `${el.gender.name_th}`,
          'วันเดือนปีเกิด (พ.ศ.)': this.$dayjs(el.date_of_birth).format(
            'MM/DD/BBBB'
          ),
          'วันเดือนปีเกิด (ค.ศ.)': this.$dayjs(el.date_of_birth).format(
            'MM/DD/YYYY'
          ),
          'อายุ (ปี)': this.$dayjs(el.created_at).diff(
            el.date_of_birth,
            'year'
          ),
          ที่อยู่: el.address,
          เบอร์โทรศัพท์: el.telphone_number,
        })
        n++
      })

      const dataWS = XLSX.utils.json_to_sheet(data2)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb, `mobile-kihart ${this.created_date}.xlsx`)
    },
  },
}
</script>
