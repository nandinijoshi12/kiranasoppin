<template>
  <div>
    <div class="min-h-screen w-full bg-white p-6 pb-40 shadow-xl">
      <div class="w-full flex flex-row justify-between font-semibold">
        <!-- <button class="px-6 py-2 bg-red-200" @click="countlocal++">
          {{ countlocal }}
        </button> -->
        <p>Products</p>
        <!-- <NuxtLink to="/products/add"> -->
          <button @click="showModal = true" class="rounded-lg border-2 border-gray-600 bg-yellow-50 px-5 py-2 text-xs font-semibold text-gray-800 hover:cursor-pointer hover:bg-red-200 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </button>
        <!-- </NuxtLink> -->
      </div>
      <div v-if="isLoading">getting data...</div>
      <div  v-else class="h-full w-full flex items-center justify-center">
      <div class="grid w-full grid-cols-1 sm:grid-cols-4 gap-10">
        <span v-for="(item, index) in items" :key="index">
          <!-- <NuxtLink :to="`/products/${item.prod_id}/view`"> -->
            <div class="hover:shadow-3xl group mt-4 flex h-96 flex-col overflow-hidden rounded-xl bg-yellow-50 items-center border-2 border-gray-600 text-gray-700 shadow-lg">
              <div class="relative z-20 h-1/2 w-full">
                <!-- <img src="https://imgs.search.brave.com/eqGcBtIBQhNfZfLlvLsgKAdmzAaTY-5fugG09w_A1iY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZG92ZS5jb20vY29u/dGVudC9kYW0vdW5p/bGV2ZXIvZG92ZS91/bml0ZWRfc3RhdGVz/X29mX2FtZXJpY2Ev/cGFja19zaG90L2Zy/b250L2hhaXJfY2Fy/ZS93YXNoX2FuZF9j/YXJlL2RvdmVfaW50/ZW5zaXZlX3JlcGFp/cl9zaGFtcG9vXzEy/X296L0RvdmVfSW50/ZW5zaXZlX1JlcGFp/cl9TaGFtcG9vXzEy/X296XzEwMDQ1ODkz/MDgwNTM4LTM5Nzk3/Ni5QTkc" alt="" class="h-full w-full rounded-xl object-cover transition-all duration-100 ease-in group-hover:scale-110" /> -->
                <!-- <div @click.prevent="Remove(item.prod_id)" class="absolute top-2 right-3 h-6 w-6 rounded-full bg-red-400 hover:bg-red-700"></div> -->
              </div>
              <div class="h-1/2 w-full flex flex-col items-center overflow-hidden rounded-xl bg-red-200 border-t border-gray-600 justify-center">
                <div class="text-center text-xl font-semibold text-gray-700">{{ item.name }} {{ item.category }}</div>
                <div class="text-xxs font-normal text-gray-700">{{ item.description }}</div>
                <div class="mt-1 flex w-1/2 flex-row justify-between text-base font-normal text-gray-700">
                  <p class="flex flex-row">
                    <span
                      ><svg width="25px" height="25px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve">
                        <path fill="#000000" fill-opacity="0.203922" stroke-width="0.2" stroke-linejoin="round" d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z " />
                        <path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z " /></svg></span
                    >{{item.price}}
                  </p>
                  <p>Q-{{item.stock}}</p>
                </div>
                <div class="mt-2 flex w-3/4 flex-row justify-between space-x-2">
                  <div v-if="item.stock > 0" @click="addToCart(item)" class="cursor-pointer rounded-md border-2 border-gray-600 bg-lime-300 py-1 px-6 text-xs text-black">Add to cart</div>
                  <div v-else class="cursor-not-allowed rounded-md border-2 border-gray-600 bg-orange-200 py-1 px-6 text-xs text-black">Out of stock</div>
                  <!-- <nuxt-link :to="`/products/${item.id}/view`"> -->
                    <div @click="view(item)" class="cursor-pointer rounded-md border-2 border-gray-600 bg-yellow-50 py-1 px-6 text-xs">View</div>
                  <!-- </nuxt-link> -->
                </div>
                <!-- <div class="mt-1 flex w-3/4 items-end justify-end text-xs">{{ item.ua }}</div> -->
              </div>
            </div>
          <!-- </NuxtLink> -->
        </span>
      </div>
      </div>
      <!-- view modal -->
      <Modal v-if="isViewActive" @close="isViewActive = false">
        <template v-slot:title> View product </template>
        <template v-slot:body>
         <div>
          <ViewProductForm :selectedProduct="selectedProduct" @closKarModal="isViewActive = false"></ViewProductForm>
          <!-- <EditProductForm :selectedProduct="selectedProduct" @closKarModal="isViewActive = false"></EditProductForm>  -->
         </div> 
        </template>
      </Modal>
    </div>
  </div>
</template>
  
<script>
import AddProductForm from "../../components/Forms/Products/Add.vue";
import EditProductForm from "../../components/Forms/Products/Edit.vue";
import ViewProductForm from "../../components/Forms/Products/View.vue"
export default {
  layout: "default",
  data() {
    return {
      show: false,
      showEditModal: false,
      selectedProduct: null,
      showModal: false,
      isLoading: false,
      isViewActive: false,
      ghe_products: null,
      countlocal: 0,
      items: [],
      isCartItemDuplicate: false,
    };
  },
  components: {
    AddProductForm,
    EditProductForm,
    ViewProductForm
  },
  created() {
    this.isLoading = true;
    this.$store
      .dispatch("product/getAll")
      .then((response) => {
        this.isLoading = false;
        // this.ghe_products=this.$store.state.products.allProducts;
        this.items = this.$store.state.product.allProducts;
        console.log(this.items);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
  },
  methods: {
    view(item){
      console.log("view aalat");
      this.selectedProduct=item
      console.log(this.selectedProduct);
      this.isViewActive=true;
    },
    editAction(product){
      console.log('ok',product);
      this.selectedProduct = product;
      console.log('ok2',this.selectedProduct);
      this.showEditModal= true;
    },
    showForm() {
      console.log("show form madhe aahat");
    },
    addToCart(data) {      
      console.log(data.prod_id);
      console.log("add to cart madhe aahat");
      // const sendKaraychaData=data
      const payload = {
        prod_id: data.prod_id,
        prod_quantity: 1,
      }
      console.log(this.$store.state.cart.allCartProducts.length, data.prod_id);
      for (var i = 0; i < this.$store.state.cart.allCartProducts.length; i++) {
        console.log(data.prod_id);
        console.log(this.$store.state.cart.allCartProducts[i].prod_id);
        if(data.prod_id == this.$store.state.cart.allCartProducts[i].prod_id)
        {
          console.log(this.$store.state.cart.allCartProducts[i].prod_id);
          console.log("if add madhe aahe");
          var add_quantity = 1 + this.$store.state.cart.allCartProducts[i].prod_quantity
          console.log(data);
          console.log(this.$store.state.cart.allCartProducts[i].prod_quantity);
          console.log(add_quantity);
          const payload2 = {
          id: this.$store.state.cart.allCartProducts[i].id,
          prod_quantity: add_quantity,
          }
          this.isCartItemDuplicate=true;
          this.$store.dispatch('cart/addSame', payload2)
          .then((response)=>{
          console.log("cart madhe add zalay");
          // console.log(prod_quantity);
          })
          .catch((error)=>{
          console.log("cart madhe add naahi zala");
          })
        }
        else{
          console.log("else add madhe aahe");
          // state.allCartProducts.unshift(data.data);
        }
      }
      if(!this.isCartItemDuplicate)
      {this.$store.dispatch('cart/add', payload)
      .then((response)=>{
        console.log("cart madhe add zalay");
        // console.log(prod_quantity);
      })
      .catch((error)=>{
        console.log("cart madhe add naahi zala");
      })}
    },
    Remove(id) {
      console.log("Has entered into remove function!", id);
      //get Index of the item
      this.$store.dispatch('product/delete', id)
      .then((response)=>{
        console.log("then executed");
      })
      .catch((error)=>{
        console.log("error aala aahe");
      })
    },
  },
};
</script>
  
<style></style>
  