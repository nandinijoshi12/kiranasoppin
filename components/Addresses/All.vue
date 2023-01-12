<template>
  <div class="mt-4 grid w-full gri-cols-1 sm:grid-cols-2 gap-4">
    <span v-for="(item, index) in items" :key="index">
      <div v-if="index%3==1">
        <div class="relative flex h-28 w-full flex-row justify-between space-x-2 rounded-xl bg-pink-200 border-2 border-gray-700 p-4">
        <!-- <div class="h-full w-1/6 rounded-lg bg-gray-200">{{ item.id }}</div> -->
        <div class="flex h-full w-3/4 sm:w-4/5 flex-row items-center rounded-lg">
          <div class="flex flex-col text-tiny sm:text-base">
            <p>{{ item.line_1 }}, {{ item.line_2 }}</p>
            <p>{{ item.city }}-{{ item.pincode }}, {{ item.state }}</p>
            <p class="text-xs font-medium text-gray-700">{{ item.country }}</p>
          </div>
          <div @click="addAddress(item)" class="absolute top-10 right-20 sm:right-1/4 flex h-6 w-6 cursor-pointer border-2 border-gray-700 items-center justify-center rounded-md bg-white p-2">
            <p class="text-xs font-bold">+</p>
          </div>
        </div>
        <div class="flex h-full w-1/5 flex-row items-center justify-between rounded-lg p-2">
          <div @click.prevent="edit(item)" class="flex h-12 w-10 mr-2 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </div>
          <div @click="remove(item.id)" class="flex h-12 w-10 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
        </div>
      </div>
      </div>      
      <div v-else-if="index%3==2">
        <div class="relative flex h-28 w-full flex-row justify-between space-x-2 rounded-xl bg-fuchsia-200 border-2 border-gray-700 p-4">
        <!-- <div class="h-full w-1/6 rounded-lg bg-gray-200">{{ item.id }}</div> -->
        <div class="flex h-full  w-3/4 sm:w-4/5 flex-row items-center rounded-lg">
          <div class="flex flex-col text-tiny sm:text-base">
            <p>{{ item.line_1 }}, {{ item.line_2 }}</p>
            <p>{{ item.city }}-{{ item.pincode }}, {{ item.state }}</p>
            <p class="text-xs font-medium text-gray-700">{{ item.country }}</p>
          </div>
          <div @click="addAddress(item)" class="absolute top-10 right-20 sm:right-1/4 flex h-6 w-6 cursor-pointer border-2 border-gray-700 items-center justify-center rounded-md bg-white p-2">
            <p class="text-xs font-bold">+</p>
          </div>
        </div>
        <div class="flex h-full w-1/5 flex-row items-center justify-between rounded-lg p-2">
          <div @click.prevent="edit(item)" class="flex h-12 w-10 mr-2 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </div>
          <div @click="remove(item.id)" class="flex h-12 w-10 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
        </div>
      </div>
      </div>      
      <div v-else>
        <div class="relative flex h-28 w-full flex-row justify-between space-x-2 rounded-xl bg-blue-200 border-2 border-gray-700 p-4">
        <!-- <div class="h-full w-1/6 rounded-lg bg-gray-200">{{ item.id }}</div> -->
        <div class="flex h-full  w-3/4 sm:w-4/5 flex-row items-center rounded-lg">
          <div class="flex flex-col text-tiny sm:text-base">
            <p>{{ item.line_1 }}, {{ item.line_2 }}</p>
            <p>{{ item.city }}-{{ item.pincode }}, {{ item.state }}</p>
            <p class="text-xs font-medium text-gray-700">{{ item.country }}</p>
          </div>
          <div @click="addAddress(item)" class="absolute top-10 right-20 sm:right-1/4 flex h-6 w-6 cursor-pointer border-2 border-gray-700 items-center justify-center rounded-md bg-white p-2">
            <p class="text-xs font-bold">+</p>
          </div>
        </div>
        <div class="flex h-full w-1/5 flex-row items-center justify-between rounded-lg p-2">
          <div @click.prevent="edit(item)" class="flex h-12 w-10 mr-2 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </div>
          <div @click="remove(item.id)" class="flex h-12 w-10 cursor-pointer items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
        </div>
      </div>
      </div>      
    </span>
    <!-- hfeeb -->
    <!-- End of Address Card -->
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:title>Add Address</template>
      <template v-slot:body>
        <AddAddressesForm @closKarModal="showModal = false"/>
      </template>
    </Modal>
    <Modal v-if="showEditModal" @close="showEditModal = false" @click="edit(item)">
      <template v-slot:title>Edit Address</template>
      <template v-slot:body>
        <EditAddressesForm :selectedAddress="selectedAddress" @closKarModal="showEditModal = false"/>
      </template>
    </Modal>
  </div>
</template>

<script>

import EditAddressesForm from '../Forms/Addresses/Edit.vue';
export default {
    props:["type"],
    components: {
    EditAddressesForm,
  },
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      ghe_data: null,
      countlocal: 0,
      showModal: false,
      showEditModal: false,
      items: [],
      adresses: null,
    };
  },
  created() {
    this.isLoading = true;
    this.$store
      .dispatch("address/getAll")
      .then((response) => {
        // this.isLoading = false;
        // this.ghe_products=this.$store.state.products.allProducts;
        this.items = this.$store.state.address.allAdresses.data;
        console.log("this.items = " + this.items);
      })
      .catch((error) => {
        // this.isLoading = false;
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    edit(address) {
      console.log("ok", address);
      this.selectedAddress = address;
      console.log("ok2", this.selectedAddress);
      this.showEditModal = true;
      // this.$store.state.cart.selectedAddress = data;
    },
    remove(id) {
      this.isLoading2 = true;
      console.log("delete karnaar");
      this.$store
        .dispatch("address/remove", id)
        .then((response) => {
          console.log("then executed");
        })
        .catch((error) => {
          console.log("error aala aahe");
        })
        .finally(() => {
          this.isLoading2 = false;
        });
    },
    addAddress(data) {
      console.log("ORDER madhe entry");
      console.log(data);
      this.$store.state.cart.selectedAddress = data;
      this.$emit('closKarModal')
    },
  },
};
</script>

<style></style>
