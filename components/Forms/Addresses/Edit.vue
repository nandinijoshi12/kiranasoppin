<template>
  <div class="w-full flex-row rounded-lg border bg-white px-8 py-5 text-gray-700 dark:bg-gray-900 dark:text-gray-500">
    <ScreenLoad v-if="isLoading">updating data</ScreenLoad>
    <div class="flex w-3/4 items-center justify-center">
      <form action="" class="w-full">
        <div class="">
          <!-- Name-->
          <div class="flex w-full flex-row justify-between space-x-5">
            <div class="w-1/2">
              <label for="" class="mb-2 block text-sm font-semibold">Name of Location</label>
              <input name="line_1" v-model="line_1" type="text" class="w-full rounded-lg border-gray-300 bg-gray-100 py-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
            </div>
            <div class="w-1/2">
              <label for="" class="mb-2 block text-sm font-semibold">Line_2</label>
              <input name="line_2" v-model="line_2" type="text" class="w-full rounded-lg border-gray-300 bg-gray-100 py-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
            </div>
          </div>
          <!-- Large input -->
          <div class="mt-6 w-full">
            <label for="" class="mb-2 block text-sm font-semibold">City</label>
            <input name="city" v-model="city" type="text" class="w-full rounded-lg border-gray-300 bg-gray-100 py-4 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
          </div>
          <!-- Name2 -->
          <div class="mt-4 flex w-full flex-row justify-between space-x-5">
            <div class="w-1/3">
              <label for="" class="mb-2 block text-sm font-semibold">Pincode</label>
              <input name="pincode" v-model="pincode" type="number" class="w-full rounded-lg border-gray-300 bg-gray-100 py-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
            </div>
            <div class="w-1/3">
              <label for="" class="mb-2 block text-sm font-semibold">State</label>
              <input name="state" v-model="state" type="text" class="w-full rounded-lg border-gray-300 bg-gray-100 py-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
            </div>
            <div class="w-1/3">
              <label for="" class="mb-2 block text-sm font-semibold">Country</label>
              <input name="country" v-model="country" type="text" class="w-full rounded-lg border-gray-300 bg-gray-100 py-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800" />
            </div>
          </div>
          <!-- Submit -->
          <button @click.prevent="editAddress()" class="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white">Submit</button>
          <!-- Submit -->
          <button class="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white">Select Location</button>
        </div>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    layout: "custom",
    props:[
        'selectedAddress'
    ],
    data() {
      return {
        isLoading: false,
        line_1: null,
        line_2: null,
        city: null,
        pincode: null,
        state: null,
        country: null,
        prod_ghe: null,
      };
    },
    created() {
      console.log(this.selectedAddress);
      this.line_1 = this.selectedAddress.line_1;
      this.line_2 = this.selectedAddress.line_2;
      this.city = this.selectedAddress.city;
      this.pincode = this.selectedAddress.pincode;
      this.state = this.selectedAddress.state;
      this.country = this.selectedAddress.country;        
    },
    methods: {
      editAddress() {
        this.isLoading= true
        const data = {
          line_1: this.line_1,
          line_2: this.line_2,
          city: this.city,
          pincode: this.pincode,
          state: this.state,
          country: this.country,
        };
        const mothaData = {
          id: this.selectedAddress.id,
          formChaPurnaData: data
        }
        console.log(mothaData);
        var token = JSON.parse(localStorage.getItem("shToken"));
        console.log(token);
        this.$store.dispatch('address/updateAddress', mothaData)
          .then((response) => {
            console.log("edit zala");
            console.log(response);
            this.$emit('closKarModal')
          })
  
          .catch((error) => {
            console.log(error);
            console.log("edit address madhe gadbad zaliye");
          })
          .finally(() => {
            this.isLoading=false
          })
      },
    },
  };
  </script>
  
  <style>
  </style>