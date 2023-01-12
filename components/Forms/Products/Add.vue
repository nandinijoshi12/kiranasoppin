<template>
    <div
      class="
        w-full
        flex-row
        rounded-lg
        border
        bg-white
        px-8
        py-5
        text-gray-700
        dark:bg-gray-900 dark:text-gray-500
      "
    >
      <div class="flex w-3/4 items-center justify-center">
        <form action="" class="w-full">
          <div class="">
            <!-- Name-->
            <div class="w-full flex flex-row space-x-5 justify-between">
              <div class="w-1/2">
                <label for="" class="mb-2 block text-sm font-semibold"
                  >Name of product</label
                >
                <input
                  name="name"
                  v-model="name"
                  type="text"
                  class="
                    w-full
                    rounded-lg
                    border-gray-300
                    bg-gray-100
                    py-1
                    focus:border-sky-500
                    dark:border-gray-500 dark:bg-gray-800
                  "
                />
              </div>
              <div class="w-1/2">
                <label for="" class="mb-2 block text-sm font-semibold"
                  >Category</label
                >
                <input
                  name="category"
                  v-model="category"
                  type="text"
                  class="
                    w-full
                    rounded-lg
                    border-gray-300
                    bg-gray-100
                    py-1
                    focus:border-sky-500
                    dark:border-gray-500 dark:bg-gray-800
                  "
                />
              </div>
            </div>
            <!-- Large input -->
            <div class="mt-6 w-full">
              <label for="" class="mb-2 block text-sm font-semibold"
                >Description
              </label>
              <input
                name="description"
                v-model="description"
                type="text"
                class="
                  w-full
                  rounded-lg
                  border-gray-300
                  bg-gray-100
                  py-4
                  focus:border-sky-500
                  dark:border-gray-500 dark:bg-gray-800
                "
              />
            </div>
            <!-- Name2 -->
            <div class="w-full flex flex-row space-x-5 justify-between mt-4">
              <div class="w-1/3">
                <label for="" class="mb-2 block text-sm font-semibold"
                  >Price</label
                >
                <input
                  name="price"
                  v-model="price"
                  type="number"
                  class="
                    w-full
                    rounded-lg
                    border-gray-300
                    bg-gray-100
                    py-1
                    focus:border-sky-500
                    dark:border-gray-500 dark:bg-gray-800
                  "
                />
              </div>
              <div class="w-1/3">
                <label for="" class="mb-2 block text-sm font-semibold"
                  >Quantity</label
                >
                <input
                  name="quantity"
                  v-model="quantity"
                  type="number"
                  class="
                    w-full
                    rounded-lg
                    border-gray-300
                    bg-gray-100
                    py-1
                    focus:border-sky-500
                    dark:border-gray-500 dark:bg-gray-800
                  "
                />
              </div>
              <div class="w-1/3">
                <label for="" class="mb-2 block text-sm font-semibold"
                  >Extra</label
                >
                <input
                  type="text"
                  class="
                    w-full
                    rounded-lg
                    border-gray-300
                    bg-gray-100
                    py-1
                    focus:border-sky-500
                    dark:border-gray-500 dark:bg-gray-800
                  "
                />
              </div>
            </div>
            <!-- Submit -->
            <button
              @click.prevent="addProduct()"
              class="bg-blue-700 text-white px-6 py-2 rounded-lg mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    layout: "custom",
    data() {
      return {
        name: null,
        category: null,
        description: null,
        price: null,
        quantity: null,
        prod_ghe: null,
      };
    },
    methods: {
      addProduct() {
        const formMadhlaData = {
          name: this.name,
          category: this.category,
          description: this.description,
          price: this.price,
          quantity: this.quantity,
        }; 
        this.$store.dispatch('products/add', formMadhlaData) 
        .then(()=>(
          this.$emit('closKarModal')
        ))    
      },
    },
  };
  </script>
    
    <style></style>
    