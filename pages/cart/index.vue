<template>
  <div class="relative">
    <div>
      <div v-if="isLoading2">deleting...</div>
      <div class="relative min-h-screen w-full bg-white p-6 pb-40 shadow-xl">
        <div class="w-full flex flex-row justify-between font-semibold">
          <p>Cart</p>
          <!-- <NuxtLink to="/products/add"> -->
          <button @click="redirectt()" class="rounded-lg border-2 border-gray-600 bg-lime-200 px-5 py-2 text-xs font-semibold text-gray-800 hover:cursor-pointer hover:bg-yellow-200 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
             </svg>
          </button>
        </div>
        <div v-if="isLoading">getting data...</div>
        <div v-else>
          <div v-if="items.length>0" class="flex flex-col space-y-4">
            <span v-for="(item, index) in items" :key="index" class="w-full sm:w-3/4 pr-0 sm:pr-8 mt-3">
              <!-- <NuxtLink :to="`/products/${item.prod_id}/view`"> -->
              <CartItemCard :cartChaItem="item" />
              <!-- </NuxtLink> -->
            </span>
            <div class="absolute bottom-0 right-0 sm:top-16 sm:right-4 flex h-full w-full sm:w-1/4 flex-col sm:justify-start justify-end">
            <div class="h-auto rounded-xl border-2 border-gray-700 bg-yellow-50 px-4 py-4">
              <div v-if="placingOrder">Placing Order...</div>
              <div class="rounded-sm p-2">
                <div><p class="text-xl font-medium">Bill</p></div>
                <div class="">
                  <span v-for="(prod, i) in $store.state.cart.allCartProducts" :key="i" class="flex flex-row justify-between">
                    <!-- {{prod}} -->
                    <div><p>{{prod.name}}</p></div>
                    <div><p>{{prod.prod_price*prod.prod_quantity}}</p></div>
                  </span>
                </div>
                <div class="mt-2 flex w-full justify-end">
                  <p class="text-lg">₹{{total}}</p>
                </div>
              </div>
              <!-- <span v-for="(selectedAddress, index2) in selectedAddresss" :key="index2"> -->
              <!-- <div class="mt-3 cursor-pointer rounded-md bg-gray-400 p-2">
                <div class="flex items-center justify-center"><p class="text-gray-600">{{selectedAddress.id}}</p></div>
              </div> -->
              <div @click="selectAddress()" class="flex flex-row justify-between px-4 mt-3 cursor-pointer rounded-md hover:text-gray-500 border-2 border-gray-700 hover:border-gray-500 p-2">
                <div class="flex items-center justify-center"><p class="">Select Address</p></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                </div>
              </div>
              <div v-if="$store.state.cart.selectedAddress.length==0" class="mt-3 cursor-not-allowed rounded-md border-2 border-gray-700 bg-orange-200 p-2">
                <div class="flex items-center justify-center"><p class="text-gray-600">Pay Now</p></div>
              </div>
              <div @click="payNow($store.state.cart.selectedAddress)" v-else class="mt-3 cursor-pointer rounded-md border-2 border-gray-700 bg-lime-200 p-2">
                <div class="flex items-center justify-center"><p class="">Pay Now</p></div>
              </div>
              <!-- </span> -->
            </div>
          </div>
          </div>
          <div v-else class="">Cart is empty. Add products to Cart!</div>
        </div>
        <!-- Select Address  -->
        <Modal v-if="showAddressModal" @close="showAddressModal = false" @click="editAction(item)">
          <template v-slot:title> Addresses </template>
          <template v-slot:body>
            <div>
              <All type="modal" @closKarModal="showAddressModal = false"></All>
            </div>
          </template>
        </Modal>
        <!-- Naveen modal -->
        <ModalDone v-if="DoneModal" @close="DoneModal = false">
          <template v-slot:title> Order has been Placed</template>
          <!-- <template v-slot:body>
             <div>
              <All type="modal" @closKarModal="DoneModal = false"></All> 
             </div> 
            </template> -->
        </ModalDone>
      </div>
    </div>
  </div>
</template>

<script>
import ScreenLoad from '../../components/Utils/ScreenLoad.vue';
import Modal from '../../components/Utils/Modal.vue';
import ModalDone from '../../components/Utils/ModalDone.vue';
import CartItemCard from '../../components/CartItemCard.vue'
import All from '../../components/Addresses/All.vue';
export default {
  components: {
    ScreenLoad,
    Modal,
    CartItemCard,
    All,
    ModalDone
},
data() {
    return {
        selectedAddress:[],
        selectedProducts:[],
        placingOrder: false,
        isLoading: false,
        id: 1,
        isLoading2: false,
        price: null,
        countlocal:1,
        localcoumt:1,
        showModal: false,
        showEditModal: false,
        showAddressModal: false,
        items:[],
        allCartProducts:[],
        address: false,
        prod_price:null,
        DoneModal: false,
        total: 0,
        x: 0,
        // prod_quantity: null,
    }
    },
methods: {
  redirectt(){
    this.$router.push({path:'/products'})
    console.log("redirect zala");
  },
  checkOut(){
    this.$router.push({path:'/address'})
    console.log("Select address");
  },
  selectAddress(){
    console.log("address kara aata select");
    this.showAddressModal= true;
  },
  payNow(data){
    console.log("pay now");
    console.log(data);
      console.log(data, "ha data");
      this.$store.dispatch('order/add', data)
      .then((response)=>{
        console.log("address gelay");
        this.DoneModal= true;
        this.items=[]      
      })
      .catch((error)=>{
        console.log("address naahi gelay");
        this.placingOrder= false
      })
  }
},
created() {
  // this.prod_quantity=this.selectedProductquantity;
    this.isLoading = true;
    this.$store
      .dispatch("cart/getAll")
      .then((response) => {
        this.isLoading = false;
        console.log("get all zaalet cart madhe");
        this.items = this.$store.state.cart.allCartProducts;
        console.log(this.items, this.items.length, this.total, "itemssa");
        
        for(let i=0; i<this.items.length; i++){
          this.total=(this.items[i].prod_price*this.items[i].prod_quantity)+this.total
        }
        console.log("hi total", this.total);
        // this.DoneModal= true;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error,"naahi getall naahi");
      });
      // get all addresses
      this.$store
      .dispatch("address/getAll")
      .then((response) => {
        this.selectedAddresss = this.$store.state.address.allAdresses.data;
        console.log("this.addressitems = " + this.addressitems);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading2 = false;
      });
      // get all products
      // this.$store
      // .dispatch("producr/getAll")
      // .then((response) => {
      //   this.selectedProducts = this.$store.state.product.allProducts.data;
      //   console.log("this.productitems borgir" + this.selectedProducts);
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
      // .finally(() => {
      //   this.isLoading2 = false;
      // });
  },
}
</script>

<style>

</style>