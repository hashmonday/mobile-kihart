<template>
  <div>
    <div class="pt-2">
      <button
        @click="cancle"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ยกเลิก
      </button>
      <button
        @click="create"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        บันทึก
      </button>
      <button
        @click="extractDataFromIDCard"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ดึงข้อมูลจากบัตร
      </button>
    </div>

    <div class="pt-2" v-if="errors.length">
      <div class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: solid/x-circle -->
            <svg
              class="h-5 w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">ข้อผิดพลาด</h3>
            <div class="mt-2 text-sm text-red-700">
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button
                @click="closeErrors"
                class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: solid/x -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
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

                <div class="col-span-6 sm:col-span-1">
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

                <div class="col-span-6 sm:col-span-1">
                  <div>
                    <label
                      for="gender"
                      class="block text-sm font-medium text-gray-700"
                      >เพศ</label
                    >
                    <select
                      v-model="gender"
                      id="gender"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option
                        v-for="(gender, index) in genders"
                        :key="index"
                        :value="gender.code"
                      >
                        {{ gender.name_th }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="age_year"
                    class="block text-sm font-medium text-gray-700"
                    >อายุ (ปี)</label
                  >
                  <input
                    :value="$dayjs().diff(date_of_birth, 'year') || ''"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <div>
                    <label
                      for="right"
                      class="block text-sm font-medium text-gray-700"
                      >สิทธิ์</label
                    >
                    <select
                      v-model="right"
                      id="right"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option
                        v-for="(right, index) in rights"
                        :key="index"
                        :value="right.id"
                      >
                        {{ right.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back Modal -->
    <div v-if="back_modal">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >
          </transition>

          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Heroicon name: outline/exclamation -->
                  <svg
                    class="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    แจ้งเตือน
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      มีข้อมูลที่ยังไม่ได้ถูกบันทึก
                      คุณยืนยันที่จะไม่บันทึกข้อมูล
                      แล้วย้อนกลับไปหน้าแรกหรือไม่?
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <NuxtLink to="/">
                  <button
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    ยืนยัน
                  </button>
                </NuxtLink>
                <button
                  @click="back_modal = false"
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!--/ Back Modal -->
  </div>
</template>

<script>
const errMsg1 = 'หมายเลขบัตรประจำตัวประชาชน กรุณากรอกแต่ตัวเลข'
const errMsg2 = 'ระบุหมายเลขประจำตัวประชาชนไม่ถูกต้อง'
const errMsg3 = 'มีหมายเลขบัตรประชาชนนี้ในฐานข้อมูลแล้ว'
const errMsg4 = 'กรุณากรอกข้อมูลให้ครบทุกช่อง'
export default {
  data() {
    return {
      back_modal: false,

      // Options
      errors: [],
      genders: [],
      rights: [],

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
    }
  },
  async fetch() {
    this.genders = await this.$strapi.find('genders')
    this.rights = await this.$strapi.find('rights')
  },
  watch: {
    date_of_birth() {
      if (this.$dayjs(this.date_of_birth, 'YYYY-MM-DD').isValid()) {
        if (this.$dayjs(this.date_of_birth) > this.$dayjs()) {
          this.date_of_birth = this.$dayjs(this.date_of_birth)
            .subtract(543, 'year')
            .format('YYYY-MM-DD')
        }
      }
    },

    async identification_number() {
      if (this.identification_number) {
        if (/^\d+$/.test(this.identification_number)) {
          let index = this.errors.indexOf(errMsg1)
          if (index > -1) this.errors.splice(index, 1)

          // ตรวจสอบความถูกต้องของหมายเลขบัตรประชาชน
          if (this.identification_number.length == 13) {
            let total = 0
            let iPID
            let chk
            let Validchk
            iPID = this.identification_number
            Validchk = iPID.substr(12, 1)
            let j = 0
            let pidcut
            for (let n = 0; n < 12; n++) {
              pidcut = parseInt(iPID.substr(j, 1))
              total = total + pidcut * (13 - n)
              j++
            }

            chk = 11 - (total % 11)

            if (chk == 10) {
              chk = 0
            } else if (chk == 11) {
              chk = 1
            }
            if (chk == Validchk) {
              let index = this.errors.indexOf(errMsg2)
              if (index > -1) this.errors.splice(index, 1)

              //ตรวจสอบหมายเลขบัตรประจำตัวประชาชนใน Database ว่ามีแล้วหรือไม่
              let countData = await this.$strapi
                .count('persons', {
                  identification_number: this.identification_number,
                })
                .catch((error) => {
                  console.log(error.original.data)
                })
              if (countData > 0) {
                if (this.errors.indexOf(errMsg3) == -1)
                  this.errors.push(errMsg3)
              } else {
                let index = this.errors.indexOf(errMsg3)
                if (index > -1) this.errors.splice(index, 1)
              }
            } else {
              if (this.errors.indexOf(errMsg2) == -1) this.errors.push(errMsg2)
            }
          }
        } else {
          if (this.errors.indexOf(errMsg1) == -1) this.errors.push(errMsg1)
        }
      }
    },
  },
  methods: {
    async extractDataFromIDCard() {
      await this.$axios
        .$get('http://localhost:5000/get_data')
        .then((data) => {
          if (data.status == 'active') {
            this.identification_number = data.cid
            this.date_of_birth = this.$dayjs(data.dob, 'YYYYMMDD').format(
              'YYYY-MM-DD'
            )
            this.gender = data.gender
            this.title_th = data.title_th
            this.title_en = data.title_en
            this.first_name_th = data.first_name_th
            this.last_name_th = data.last_name_th
            this.first_name_en = data.first_name_en
            this.last_name_en = data.last_name_en
            this.address = data.address
          } else if (data.status == 'inactive') {
            this.identification_number = ''
            this.date_of_birth = ''
            this.gender = ''
            this.title_th = ''
            this.title_en = ''
            this.first_name_th = ''
            this.last_name_th = ''
            this.first_name_en = ''
            this.last_name_en = ''
            this.address = ''
          }
        })
        .catch(() => {
          this.errors.push(
            'ระบบดึงข้อมูลจากบัตรประชาชนไม่พร้อมใช้งาน กรุณาแจ้งเจ้าหน้าที่ไอทีให้ตรวจสอบ'
          )
        })
    },
    async create() {
      if (
        this.identification_number &&
        this.date_of_birth &&
        this.gender &&
        this.title_th &&
        this.title_en &&
        this.first_name_th &&
        this.first_name_en &&
        this.last_name_th &&
        this.last_name_en &&
        this.address &&
        this.telephone_number &&
        this.right
      ) {
        let index = this.errors.indexOf(errMsg4)
        if (index > -1) this.errors.splice(index, 1)
        let countData = await this.$strapi
          .count('persons', {
            identification_number: this.identification_number,
          })
          .catch((error) => {
            console.log(error.original.data)
          })
        if (countData > 0) {
          if (this.errors.indexOf(errMsg3) == -1) this.errors.push(errMsg3)
        } else {
          let index = this.errors.indexOf(errMsg3)
          if (index > -1) this.errors.splice(index, 1)
          await this.$strapi
            .create('persons', {
              identification_number: this.identification_number,
              date_of_birth: this.date_of_birth,
              gender: this.gender,
              title_th: this.title_th,
              title_en: this.title_en,
              first_name_th: this.first_name_th,
              last_name_th: this.last_name_th,
              first_name_en: this.first_name_en,
              last_name_en: this.last_name_en,
              address: this.address,
              telephone_number: this.telephone_number,
              created_date: this.$dayjs().format('YYYY-MM-DD'),
              right: this.right,
            })
            .then((result) => {
              return this.$router.push(`/person/${result.id}`)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      } else {
        if (this.errors.indexOf(errMsg4) == -1) this.errors.push(errMsg4)
      }
    },
    closeErrors() {
      this.errors = []
    },
    cancle() {
      if (
        Boolean(this.identification_number) ||
        Boolean(this.date_of_birth) ||
        Boolean(this.gender) ||
        Boolean(this.title_th) ||
        Boolean(this.title_en) ||
        Boolean(this.first_name_th) ||
        Boolean(this.last_name_th) ||
        Boolean(this.first_name_en) ||
        Boolean(this.last_name_en) ||
        Boolean(this.address) ||
        Boolean(this.telephone_number) ||
        Boolean(this.right)
      ) {
        this.back_modal = true
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>
