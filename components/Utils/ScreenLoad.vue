<template>
  <div>
    <div tabindex="-1" class="fixed inset-0 flex h-screen w-full cursor-default items-center justify-center bg-transparent" style="z-index:999">
      <div class="flex items-center justify-between rounded-md bg-gray-800 p-4 text-center text-white">
        <p class="mr-2"><slot></slot></p>
        <div class="spinner"></div>
      </div>
    </div>
    <div tabindex="-1" class="fixed inset-0 flex h-screen w-full cursor-default items-center justify-center bg-gray-800 opacity-25" style="z-index:99"></div>
  </div>
</template>
<script>
// import Spinner from './spinner.vue'
export default {
    // components:{
    //   Spinner
    // }
}
</script>
<style>
  .spinner {
  border: 3px solid #fff;
  border-radius: 50%;
  border-top: 3px solid #f97316;
  /* border-bottom: 3px solid blue; */
  width: 20px;
  height: 20px;
  -webkit-animation: spin .6s linear infinite;
  animation: spin .6s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
