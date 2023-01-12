<template>
  <div>
    <button v-if="show" @click="show = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default bg-black opacity-0"></button>
    <nav class="w-full rounded-md border-2 border-gray-600 bg-red-200 shadow sm:fixed md:static" id="mainNav">
      <div class="flex flex-row items-center justify-between px-4 py-1 text-base text-gray-700">
        <!-- Menu Items for desktop -->
        <div class="hidden sm:block h-full w-full sm:w-1/2">
        <div class="flex h-full w-full flex-row items-center justify-around">
          <span v-for="(item, index) in menu" :key="index">
            <ul class="list-reset flex w-full flex-row items-center justify-center" :class="getPath == '/'+item.path ? ' border-b-4 border-gray-800' : 'font-normal' " style="transition-duration: 0.1s">
              <div>
                <li class="h-full w-full">
                  <nuxt-link :to="`/${item.path}`">
                    <div class="dropdown-btn text-coolGray-800 text-xs sm:text-base">
                      <div class="flex flex-row">
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
        </div></div>
        <!-- Menu Items For Mobile -->
        <div @click="show=!show" class="block lg:hidden">
          <div class="h-6 w-6">
            <svg v-if="!show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>            
          </div>
        </div>
        <!-- end of mobile items for mobile view  -->
        <div class="flex flex-row items-center justify-center">
          <div class="mr-8 flex h-7 flex-row items-center justify-between rounded-sm px-3">
            <!-- <div class="flex h-6 w-6 items-center justify-center rounded-full bg-white p-2 text-xs text-gray-700">{{getCartCount}}</div> -->
            <div @click="getit()" class="ml-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <p class="mr-4 hidden text-sm lg:inline-block">Hello, {{ name === undefined ? "Human" : name }}</p>
            <div>
              <AccountSettings />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile ONLY -->
    <section>
      <transition name="slide-fade">
        <SidebarMobile v-if="show" @closeSideBar="show = !show" />
      </transition>
    </section>
  </div>
</template>
<script>
import AccountSettings from './AccountSettings'
import SidebarMobile from '../../components/Navigation/SidebarMobile'
import menuItems from './menuItems'
import MobileNav from './MobileNav.vue'

export default {
    components:{
        AccountSettings,
        SidebarMobile,
        MobileNav
    },
  data() {
    return {
      isOpen: false,
      showItems:false,
      show: false,
      aatlaData: {},
      name: "Human",
      countLocal:0,
      menu:  menuItems,
      theme: ''
    }
  },
  computed:{
    getCartCount(){
      console.log(this.$store.getters);
      return this.$store.getters['cart/GET_CART_COUNT']
    }
  },
  methods:{
    hamborgir(){
      console.log("borgir");
      // this.$router.push({path:'/MobileNav'})
      
    },
    getAvatar(){
            return this.$store.state.activeUser.avatar != null ? this.$store.state.activeUser.avatar : 'https://avatars.dicebear.com/api/avataaars/default.svg'
        },
    toggleTheme(){
          this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
          this.$store.commit('theme/SET_THEME', this.theme)
      },
    ghe_name(){
      var aatlaData=JSON.parse(localStorage.getItem("user"))
      // aatlaData=localStorage.getItem("aatlaData")
      console.log(aatlaData); 
      this.name = aatlaData.name;
    },
      toggleSideBar(){
        var state = this.$store.state.navigation.sideBarState
        this.$store.commit('navigation/SET_SIDEBAR_STATE', !state)
      },
    getit(){
      console.log("u r inside the cart button now redirecting...");
      this.$router.push({path: '/cart'})
    }
      
  },
  created(){
      console.log("");
      this.ghe_name()
      this.$store
      .dispatch("cart/getAll")
      .then((response) => {
        this.isLoading = false;
        // this.ghe_products=this.$store.state.products.allProducts;
        this.items = this.$store.state.cart.allCartProducts;
        console.log(this.items);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
      },
      computed:{
        getPath(){
            return this.$route.path
        },
        getUser(){
            return this.$auth.user.email.substring(0, this.$auth.user.email.lastIndexOf("@"))
        },
        userScope(){
            return this.$store.state.activeUser.scope
        }
    }
}
</script>
<style scoped>
*{
    transition: all ease-in-out 0.1s;
}

#mobileSideNav{
    display:none;
}
.slide-fade-enter-active {
  /* transition: all .3s ease; */
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
.slide-fade-leave-active {
  transition: all ease-out 0.2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>