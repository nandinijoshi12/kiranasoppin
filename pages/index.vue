<template>
  <div class="flex min-h-screen w-full flex-col space-y-4 items-center p-6 pb-40">
    <div class="flex h-56 w-full flex-row space-x-4 items-center justify-between">
      <div class="h-full w-1/6 border-2 border-gray-700 bg-lime-200 rounded-xl"></div>
      <div class="flex w-3/6 flex-col items-start justify-between">
        <p class="font-serif text-3xl sm:text-9xl">k i r a n a</p>
        <p class="text-tiny sm:text-lg">He Aahe kirana store. ithun gharghuti goshti vikat ghetlya jau shaktil ani olakh asli tar dar kami suddha karnyat yetil.</p>
      </div>
      <div class="h-full w-1/6 space-x-4 border-2 border-gray-700 bg-purple-200 rounded-xl"></div>
      <div class="h-full w-1/6 space-x-4 border-2 border-gray-700 bg-pink-200 rounded-xl"></div>
    </div>
    <div class="h-44 w-full border-2 border-gray-700 bg-yellow-100 rounded-xl"></div>
    <div class="h-56 sm:h-56 w-full flex flex-col space-y-4 sm:space-y-0 sm:flex-row space-x-0 sm:space-x-6 items-center">
      <div class="h-full w-full border-2 border-gray-700 rounded-xl overflow-hidden"><img src="https://res.cloudinary.com/ortigan/image/upload/v1672921313/0_Tyx1qvO1OTC8XB6j_aqsslk.jpg" alt="" class="h-full w-full object-cover"></div>
      <div class="h-full w-full border-2 border-gray-700 rounded-xl overflow-hidden"><img src="https://res.cloudinary.com/ortigan/image/upload/v1672919868/ethnic_me_qymlhu.png" alt="" class="h-full w-full object-cover"></div>
      <div class="h-full w-full border-2 border-gray-700 rounded-xl overflow-hidden"><img src="https://res.cloudinary.com/ortigan/image/upload/v1672919869/shengule_xjkywi.png" alt="" class="h-full w-full object-cover"></div>
    </div>
    <!-- <div class="flex h-auto w-1/2 flex-col items-center border-2 border-gray-900 bg-gray-50 py-16 px-12">
      <div class="flex w-3/4 flex-row items-center justify-around">
        <div class="flex flex-row items-center space-x-3">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="accountType" value="feedback">
            <span class="ml-2">Feedback</span>
          </label>
        </div>
        <div class="flex flex-row justify-center items-center space-x-3">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="accountType" value="bug">
            <span class="ml-2">Report a bug</span>
          </label>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="accountType" value="bug">
            <span class="ml-2">Request a feature</span>
          </label>
        </div>
      </div>
      <div class="ml-36 mt-2 flex w-3/4 justify-start"><p class="text-sm font-medium text-red-500">Select one from these three*</p></div>
      <div class="w-3/4 flex flex-col space-y-4">
        <label for="desc"><p class="mt-6 text-2xl font-medium">Description</p></label>
        <input type="text" class="bg-gray-300 h-32 "/>
      </div>
      <div class="mt-4 flex w-3/4 justify-end">
        <button class="bg-blue-500 px-6 py-1 text-white rounded-sm">Submit</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "default",
  middleware:"checkAuth",
  data() {
    return {
      isLoading: false,
      ghe_data:null,
      countlocal: 0,
    };
  },
  created(){
        // this.countlocal=this.$store.state.count
        // console.log(this.$store);
        this.countlocal=this.$store.getters['MALA_DATA_DE']
      },
  methods:{
    // getapi(){
    //   this.$axios.post(`${process.env.BASE_URL}/allproducts`, {data:formData})
    //   .then((response)=>{
    //     this.ghe_data=response;
    //     console.log(response);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    // },
    increament(){
      this.$store.commit('CHANGE_COUNT', ++this.countlocal)

    }
  }
};
</script>

<style></style>
