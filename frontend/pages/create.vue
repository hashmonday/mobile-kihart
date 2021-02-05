<template>
  <div>
    <div class="pt-2">
      <NuxtLink to="/">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ยกเลิก
        </button>
      </NuxtLink>
      <button
        @click="create"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        บันทึก
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
                {{ date_of_birth }} : {{ date_of_birth_checked }}
              </p>
            </div>

            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="identification_number"
                    class="block text-sm font-medium text-gray-700"
                    >หมายเลขบัตรประจำตัวประชาชน</label
                  >
                  <input
                    v-model="identification_number"
                    type="text"
                    id="identification_number"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    maxlength="13"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="date_of_birth"
                    class="block text-sm font-medium text-gray-700"
                    >วันเดือนปีเกิด</label
                  >
                  <input
                    v-model="date_of_birth"
                    type="date"
                    id="date_of_birth"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-2">
                  <div>
                    <label
                      for="gender"
                      class="block text-sm font-medium text-gray-700"
                      >เพศ</label
                    >
                    <select
                      id="gender"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option>ชาย</option>
                      <option>หญิง</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name_th"
                    class="block text-sm font-medium text-gray-700"
                    >ชื่อ (ไทย)</label
                  >
                  <input
                    type="text"
                    id="first_name_th"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name_th"
                    class="block text-sm font-medium text-gray-700"
                    >นามสกุล (ไทย)</label
                  >
                  <input
                    type="text"
                    id="last_name_th"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name_en"
                    class="block text-sm font-medium text-gray-700"
                    >ชื่อ (อังกฤษ)</label
                  >
                  <input
                    type="text"
                    id="first_name_en"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name_en"
                    class="block text-sm font-medium text-gray-700"
                    >นามสกุล (อังกฤษ)</label
                  >
                  <input
                    type="text"
                    id="last_name_en"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identification_number: '',
      date_of_birth: '',
      date_of_birth_checked: '',
    }
  },
  watch: {
    date_of_birth() {
      if (this.$dayjs(this.date_of_birth, 'YYYY-MM-DD').isValid()) {
        if (this.$dayjs(this.date_of_birth) > this.$dayjs()) {
          let adDate = this.$dayjs(this.date_of_birth).subtract(543, 'year')
          if (adDate > this.$dayjs()) {
            console.log(this.date_of_birth_checked)
            this.date_of_birth = this.date_of_birth_checked
          } else {
            this.date_of_birth_checked = adDate.format('YYYY-MM-DD')
            this.date_of_birth = this.date_of_birth_checked
          }
        } else {
          this.date_of_birth_checked = this.date_of_birth
        }
      }
      console.log
    },
  },
  methods: {
    create() {
      console.log(this.date_of_birth)
    },
  },
}
</script>
