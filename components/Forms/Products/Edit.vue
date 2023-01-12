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
            <div class="flex w-full flex-row justify-between space-x-5">
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
            <div class="mt-4 flex w-full flex-row justify-between space-x-5">
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
              @click.prevent="editProduct()"
              class="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white"
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
    props:[
        'selectedProduct'
    ],
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
    created() {
    //   console.log(this.$route);
    //   var token = JSON.parse(localStorage.getItem("shToken"));
    //   this.$axios
    //     .get(
    //       `https://ortigan-e-shop.herokuapp.com/admin/products/${this.$route.params.id}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     )
        
          console.log(this.selectedProduct);
          this.name = this.selectedProduct.name;
          this.category = this.selectedProduct.category;
          this.description = this.selectedProduct.description;
          this.price = this.selectedProduct.price;
          this.quantity = this.selectedProduct.quantity;
        
    },
    methods: {
      editProduct() {
        const data = {
          name: this.name,
          category: this.category,
          description: this.description,
          price: this.price,
          quantity: this.quantity,
        };
        const navaData = {
          prod_id: this.selectedProduct.prod_id,
          formChaPurnaData: data
        }
        console.log(navaData);
        var token = JSON.parse(localStorage.getItem("shToken"));
        console.log(token);
        // this.$axios
        //   .put(
        //     `/${process.env.BASE_URL}/admin/products/edit?prod_id=${this.$route.params.id}`,
        //     data,
        //     {
        //       headers: {
        //         Authorization: "Bearer " + token,
        //       },
        //     }
        //   )
        this.$store.dispatch('products/updateProd', navaData)
          .then((response) => {
            console.log("edit zala");
            console.log(response);
            this.$emit('closKarModal')
          })
  
          .catch((error) => {
            console.log(error);
            console.log("edit madhe gadbad zaliye");
          });
      },
    },
  };
  </script>
  
  <style>
  </style>