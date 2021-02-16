<template>
  <div>
    <div class="pt-2">
      <NuxtLink to="/">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          กลับหน้าหลัก
        </button>
      </NuxtLink>
      <NuxtLink :to="'/person/edit/' + $route.params.id">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          แก้ไข
        </button>
      </NuxtLink>
      <button
        @click="print"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        พิมพ์สติกเกอร์
      </button>
    </div>

    <div class="pt-2">
      <div class="space-y-6">
        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-1 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                ข้อมูลผู้รับบริการ
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                ใช้สำหรับบันทึกข้อมูลของผู้เข้ารับบริการ เพื่อใช้ในการในการรักษา
              </p>
            </div>

            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="grid grid-cols-6 gap-1">
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="identification_number"
                    class="block text-sm font-medium text-gray-700"
                    >หมายเลขบัตรประจำตัว</label
                  >
                  <input
                    v-model="identification_number"
                    type="text"
                    id="identification_number"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    maxlength="13"
                  />
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="date_of_birth_bd"
                    class="block text-sm font-medium text-gray-700"
                    >วันเกิด (พ.ศ.)</label
                  >
                  <input
                    :value="$dayjs(date_of_birth).format('DD/MM/BBBB')"
                    type="text"
                    id="date_of_birth_bd"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="date_of_birth_ad"
                    class="block text-sm font-medium text-gray-700"
                    >วันเกิด (ค.ศ.)</label
                  >
                  <input
                    :value="$dayjs(date_of_birth).format('DD/MM/YYYY')"
                    type="text"
                    id="date_of_birth_ad"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <div>
                    <label
                      for="gender"
                      class="block text-sm font-medium text-gray-700"
                      >เพศ</label
                    >
                    <input
                      v-model="gender"
                      type="text"
                      id="gender"
                      autocomplete="off"
                      disabled
                      class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="age_year"
                    class="block text-sm font-medium text-gray-700"
                    >อายุ (ปี)</label
                  >
                  <input
                    :value="age"
                    type="text"
                    id="age_year"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="title_th"
                    class="block text-sm font-medium text-gray-700"
                    >คำนำหน้าชื่อ (ไทย)</label
                  >
                  <input
                    v-model="title_th"
                    type="text"
                    id="title_th"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="first_name_th"
                    class="block text-sm font-medium text-gray-700"
                    >ชื่อ (ไทย)</label
                  >
                  <input
                    v-model="first_name_th"
                    type="text"
                    id="first_name_th"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="last_name_th"
                    class="block text-sm font-medium text-gray-700"
                    >นามสกุล (ไทย)</label
                  >
                  <input
                    v-model="last_name_th"
                    type="text"
                    id="last_name_th"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="title_en"
                    class="block text-sm font-medium text-gray-700"
                    >คำนำหน้าชื่อ (อังกฤษ)</label
                  >
                  <input
                    v-model="title_en"
                    type="text"
                    id="title_en"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="first_name_en"
                    class="block text-sm font-medium text-gray-700"
                    >ชื่อ (อังกฤษ)</label
                  >
                  <input
                    v-model="first_name_en"
                    type="text"
                    id="first_name_en"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="last_name_en"
                    class="block text-sm font-medium text-gray-700"
                    >นามสกุล (อังกฤษ)</label
                  >
                  <input
                    v-model="last_name_en"
                    type="text"
                    id="last_name_en"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="Address"
                    class="block text-sm font-medium text-gray-700"
                    >ที่อยู่</label
                  >
                  <input
                    v-model="address"
                    type="text"
                    id="Adress"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="telephone_number"
                    class="block text-sm font-medium text-gray-700"
                    >เบอร์โทรศัพท์</label
                  >
                  <input
                    v-model="telephone_number"
                    type="text"
                    id="telephone_number"
                    autocomplete="off"
                    disabled
                    class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <div>
                    <label
                      for="right"
                      class="block text-sm font-medium text-gray-700"
                      >สิทธิ์</label
                    >
                    <input
                      v-model="right"
                      type="text"
                      id="right"
                      autocomplete="off"
                      disabled
                      class="bg-gray-100 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-2 w-80" v-show="false">
      <!-- SOURCE -->
      <div id="printMe">
        <div class="text-center text-xs">
          <div class="font-semibold">
            {{ title_th }} {{ first_name_th }} {{ last_name_th }}
          </div>
          <p>เลขบัตร: {{ identification_number }}</p>
          <p>
            เกิดวันที่:
            {{ $dayjs(date_of_birth).add(543, 'year').format('DD MMMM YYYY') }}
          </p>
          <p>
            อายุ: {{ $dayjs().diff(date_of_birth, 'year') }} ปี
            {{ $dayjs().diff(date_of_birth, 'month') % 12 }} เดือน
            {{ Math.floor($dayjs().diff(date_of_birth, 'day') % 30.4375) }} วัน
          </p>
          <p>[ {{ $dayjs().add(543, 'year').format('DD/MM/YY HH:mm') }} น. ]</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Personal information
      identification_number: '',
      date_of_birth: '',
      gender: '',
      title_th: '',
      title_en: '',
      first_name_th: '',
      last_name_th: '',
      first_name_en: '',
      last_name_en: '',
      address: '',
      telephone_number: '',
      right: '',
      created_date: '',
    }
  },
  async fetch() {
    const data = await this.$strapi.findOne('persons', this.$route.params.id)
    this.identification_number = data.identification_number
    this.date_of_birth = data.date_of_birth
    this.gender = data.gender.name_th
    this.title_th = data.title_th
    this.title_en = data.title_en
    this.first_name_th = data.first_name_th
    this.first_name_en = data.first_name_en
    this.last_name_th = data.last_name_th
    this.last_name_en = data.last_name_en
    this.address = data.address
    this.telephone_number = data.telephone_number
    this.right = data.right.name
    this.created_date = data.created_date

    console.log(data)
  },
  computed: {
    age() {
      return this.date_of_birth != ''
        ? this.$dayjs().diff(this.date_of_birth, 'year')
        : ''
    },
  },
  methods: {
    print() {
      this.$htmlToPaper('printMe')
    },
  },
}
</script>
