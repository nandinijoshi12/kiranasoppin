<template>
  <div>
    ok
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    var token = JSON.parse(localStorage.getItem("shToken"));
    this.$store.dispatch('product/getProdByid', this.$route.params.id)    
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{

    });
  },
};
</script>

<style>
</style>