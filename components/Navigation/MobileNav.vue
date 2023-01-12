<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center space-y-3 bg-white opacity-80">
    <div class="flex h-full w-full flex-col items-center justify-around">
        <span v-for="(item, index) in menu" :key="index">
          <ul class="list-reset flex w-full flex-col items-center justify-center" :class="getPath == '/'+item.path ? ' border-b-4 border-gray-800' : 'font-normal' " style="transition-duration: 0.1s">
            <div>
              <li class="h-full w-full">
                <nuxt-link :to="`/${item.path}`">
                  <div class="dropdown-btn text-coolGray-800 text-xs sm:text-base">
                    <div class="flex flex-col">
                      <p class="text-center">
                        <i :class="getPath == '/'+item.path ? `text-coolGray-600  fas fa-${item.icon}` : `text-coolGray-600  fas fa-${item.icon}`"></i>
                      </p>
                      <p :class="getPath == '/'+item.path ? `text-gray-800 ` : `text-gray-600`">{{ item.header }}</p>
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </div>
          </ul>
        </span>
      </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    components:{
        Navbar
    }

}
</script>

<style>

</style>