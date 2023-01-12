<template>
  <div class="w-full mt-2">
    <div class="flex h-auto w-full flex-col space-y-4 rounded-xl border-2 border-gray-700 bg-lime-200 p-6">
      <!-- <div @click="remov(cartChaItem.id)" class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm bg-red-500 text-xs text-white">D</div> -->
      <div class="flex w-full flex-row justify-between">
        <div class="flex flex-row space-x-4">
          <div class="h-20 w-20 sm:h-28 sm:w-28 rounded-md border-2 border-gray-700 bg-yellow-50"></div>
          <div class="flex flex-col text-tiny sm:text-base">
            <div class="">{{ cartChaItem.name }} {{ cartChaItem.category }}</div>
            <div class="mt-4 flex flex-row items-center space-x-4">
              <div>
                <p>₹{{ cartChaItem.price }}/-</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-end justify-between">
          <div class="text-lg sm:text-2xl"><p>Total</p></div>
          <div class="text-base"><p>₹{{ cartChaItem.price*cartChaItem.prod_quantity }}</p></div>
          <div class="flex flex-row items-center space-x-4">
            <div @click="remov(cartChaItem.id)" class="flex cursor-pointer items-center justify-center rounded-sm text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </div>
            <div class="border-1 grid py-1 w-20 sm:w-32 grid-cols-3 items-center justify-center rounded-md bg-yellow-50 border-2 border-gray-700">
              <p @click="decr(cartChaItem.prod_quantity)" class="flex cursor-pointer items-center justify-center">-</p>
              <p class="flex h-6 w-full justify-center text-tiny sm:text-base">{{ cartChaItem.prod_quantity }}</p>
              <p @click="incr(cartChaItem.prod_quantity)" class="flex cursor-pointer items-center justify-center">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartChaItem"],
  data: {
    isLoading2: false,
  },
  methods: {
    decr(quantity) {
      this.update(--quantity);
    },
    incr(quantity) {
      console.log("entered incr");
      // this.$store.commit('CHANGE_COUNT', ++this.countlocal)
      this.update(++quantity);
    //   this.update();
    },
    custt() {
      console.log("welcome to custt fucntion");
    },
    update(quantity) {
      const data = {
        prod_quantity: quantity,
        id: this.cartChaItem.id
      };
      console.log(data);
      this.$store
        .dispatch("cart/updateCart", data)
        .then((response) => {
          console.log("updated ok/increased/decreased");
        })
        .catch((error) => {
          console.log("not nahi hua update");
        })
        .finally(() => {
          console.log("finalllyyyy updated cart");
          // this.isLoading2=false;
        });
    },
    remov(id){
    this.isLoading2=true,
    console.log("remove", id);
    this.$store.dispatch('cart/delete', id)
      .then((response)=>{
        console.log("deleteddd");
      })
      .catch((error)=>{
        console.log("not deleted");
      })
      .finally(()=>{
        console.log("finalllyyyy");
        this.isLoading2=false;
      })      
  },
  },
};
</script>

<style>
</style>