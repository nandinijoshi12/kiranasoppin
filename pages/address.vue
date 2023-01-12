<template>
  <div class="min-h-screen w-full flex flex-col items-center p-6 pb-40">
    <div v-if="isLoading2">deleting...</div>
    <div class="w-full flex flex-row justify-between font-semibold">
      <p>Addresses</p>
      <!-- <NuxtLink to="/products/add"> -->
      <button @click="showModal = true" class="rounded-lg border-2 border-gray-600 bg-yellow-50 px-5 py-2 text-xs font-semibold text-gray-800 hover:cursor-pointer hover:bg-red-200 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
         </svg>
      </button>
    </div>
    <!-- card for Address -->
    <div v-if="isLoading" class="w-full items-start">getting data...</div>
    <div v-else class="w-full">      
      <All type="allAddresses"/>      
    </div>
    <!-- End of Address Card -->
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:title>Add Address</template>
      <template v-slot:body>
        <AddAddressesForm @closKarModal="showModal = false"/>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Utils/Modal.vue';
import AddAddressesForm from '../components/Forms/Addresses/Add.vue';
import EditAddressesForm from '../components/Forms/Addresses/Edit.vue';
import ScreenLoad from '../components/Utils/ScreenLoad.vue';
import All from '../components/Addresses/All.vue';
export default {
  components: {
    Modal,
    AddAddressesForm,
    EditAddressesForm,
    ScreenLoad,
    All
},
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      ghe_data:null,
      countlocal: 0,
      showModal: false,
      showEditModal: false,
      items:[],
      adresses:null,
    };
  },
  created(){
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
 methods:{
  edit(address){
    console.log('ok',address);
    this.selectedAddress = address;
    console.log('ok2',this.selectedAddress);
    this.showEditModal= true;
  },
  remove(id){
  this.isLoading2=true;
  console.log("delete karnaar");
  this.$store.dispatch('address/remove', id)
      .then((response)=>{
        console.log("then executed");
      })
      .catch((error)=>{
        console.log("error aala aahe");
      })
      .finally(()=>{
        this.isLoading2=false;
      })
 },
  addAddress(data){
    console.log("ORDER madhe entry");
    console.log(data);
    // const payload = {
    //     id: data.id,
    //   }
    //   console.log(payload, "ha payload");
      
    //   console.log(address_id, "ha address");
    this.$store.state.cart.selectedAddress=data;
    
    // this.$router.push({path:'/checkout/preview'})
      // this.$store.dispatch('order/add', payload)
      // .then((response)=>{
      //   console.log("address gelay");
      //   this.$router.push({path:'/checkOut'})
      // })
      // .catch((error)=>{
      //   console.log("address naahi gelay");
      // })
  }
 },
 
}
</script>

<style>

</style>