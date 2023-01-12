<template>
  <div>
    <span v-for="(item, index) in items" :key="index">
    <div class="w-3/4 h-auto bg-gray-400 py-10 px-4 flex flex-col space-y-4 rounded-xl justify-end items-center">
        <div class="flex flex-row justify-between w-full h-full bg-gray-50 rounded-md p-4">
            <div class="w-3/4">
                <div class="flex flex-col">
                    <p>{{item.line_1}}, {{item.line_2}}</p>
                    <p>{{item.city}}-{{item.pincode}}, {{item.state}}</p>
                    <p class="text-xs font-medium text-gray-700">{{item.country}}</p>
                </div>
            </div>
            <div @click="editAddress()" class="bg-yellow-500 text-red-900 hover:text-red-50 py-3 px-6 rounded-lg cursor-pointer hover:bg-yellow-600 flex justify-center items-center"><p>E</p></div>
        </div>
        <div class="flex flex-col justify-between w-full h-full bg-gray-200 rounded-md p-4">
            <div><p>Total bill</p></div>
            <div><p>₹400</p></div>
        </div>
        <div class="bg-green-600 flex items-center justify-center text-white px-6 py-2 rounded-md"><p>Pay now</p></div>
        <div><p><span></span></p></div>
    </div>
    </span>
  </div>
</template>

<script>
export default {
  components:{

  },
  data() {
    return {
      items:[],
      isLoading: false,
    };
  },
  created(){
    this.isLoading = true;
    this.$store
      .dispatch("order/getAll")
      .then((response) => {
        this.items = this.$store.state.order.allOrders.data;
        console.log("this.items = " + this.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

}
</script>

<style>

</style>