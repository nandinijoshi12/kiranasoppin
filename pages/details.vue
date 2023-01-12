<template>
  <div>
    <div class="h-screen bg-white shadow-xl p-4">
      <div class="font-semibold">Details</div>
      <div class="w-full h-10 px-6 py-8 bg-gray-200 rounded-2xl flex flex-row items-center mt-6">
        <div class="w-3/6">customer</div>
        <div class="w-1/6">order</div>
        <div class="w-1/6">delivery status</div>
        <div class="w-1/6">actions</div>
      </div>
      
      <span v-for="(item, index) in items" :key="index">
        <div class="w-full h-10 px-6 py-8 bg-gray-100 rounded-2xl flex flex-row items-center mt-6">
          <div class="w-3/6">{{item.customer}}</div>
          <div class="w-1/6">{{item.order}}</div>
          <div class="w-1/6">{{item.status}}</div>
          <!-- <span v-for="(t, index) in todo" :key="index"> -->
            <button class="w-1/6" @click.prevent="Remove(item.id)"><p class="w-1/2 bg-yellow-400 px-2 py-1 rounded-full font-medium">remove</p></button>
          <!-- </span> -->
        </div>
      </span>
      <div v-if="all_users!=null">
        {{ all_users}}
      </div>
      <div v-else>
        No data has entered 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      todo: [],
      count: 0,
      all_users:null,
      isLoading: false,
      items:[
      {
        id: 1,
        customer: "nandini",
        order: "$1.99",
        status: "paid",
        action:"something",          
      }
    ]
    };      
  },
  methods: {
  Remove(id) {
    console.log("Has entered into remove function!", id);
    //get Index of the item
    
    var index =this.items.findIndex((i) => {
      i.id==id
    })
    this.items.splice(index,1);
   },
},
getapi(){
    this.$axios.$get(`/${process.env.BASE_URL}/admin/allusers`)
    .then((response)=>{
     this.all_users=response             
    }) 
  },
};
</script>

<style></style>
