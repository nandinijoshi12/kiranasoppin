<template>
  <div>
    <div class="w-full h-screen">
            <div class="mx-auto h-full flex justify-center items-center">
              <div class="container mx-auto">
                <XyzTransition appear-visible>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-2xl font-bold px-5 text-center text-coolGray-800  "
                >
                Login  To your Account  <i class="fas fa-cogs"></i>
                </p>
                </XyzTransition>
                <p
                  xyz="fade down ease-in-out-back out-delay-5 "
                  class="text-sm px-5 text-center text-coolGray-500 mb-6 mt-1"
                >
                  Hey there! Welcome back. Good to see you again.
                </p>
                <div class="flex justify-center">
                  <div class="w-full flex justify-center">
                    <div class="w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
                      <ValidationObserver v-slot="{ invalid }">
                      <form class="px-6 overflow-y-hidden">
                        <div class="mb-4 relative">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="email">
                            Email
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs  leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            v-model="email"
                            name="Email"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 relative mt-2">
                          <ValidationProvider rules="required" v-slot="{ errors }">
                          <label class="text-xs font-base text-coolGray-800" for="password">
                            Password
                          </label>
                          <input
                            class="w-full mt-1 px-3 py-2 text-xs leading-tight shadow appearance-none focus:outline-none focus:shadow-outline border-none"
                            id="password"
                            type="password"
                            placeholder="******************"
                            v-model="password"
                            name="Password"
                            @keyup.enter="login()"
                          />
                          <div class="text-red-500 font-base text-xs absolute mt-1">{{ errors[0] }}</div>
                          </ValidationProvider>
                        </div>
                        <div class="mb-4 text-center mt-6">
                          <button
                            :disabled="invalid || loading ==  true"
                            :class="invalid ? 'flex justify-center w-full px-4 py-2 bg-coolGray-300 text-white rounded focus:outline-none focus:shadow-outline cursor-not-allowed' : 'flex justify-center w-full px-4 py-2 bg-coolGray-800 text-white rounded focus:outline-none focus:shadow-outline' "
                            type="button"
                            class=""
                            @click.prevent="login()"
                          >
                          <p class="text-sm">Login</p>
                          <p v-if="loading" class="ml-2"><half-circle-spinner
                                  :animation-duration="1000"
                                  :size="20"
                                  :color="'#fff'"/>
                          </p>
                          </button>
                        </div>
                        <hr class="mb-4 border-t border-coolGray-300" />
                        <div class="text-center text-coolGray-800 text-xs">
                          New here?
                          <nuxt-link to="/register" class="inline-block text-xs text-coolGray-600 align-baseline hover:text-coolGray-800">
                                Register
                          </nuxt-link>
                        </div>
                        <div class="text-center text-xs">
                          <nuxt-link :to="{ path:'/forgetpassword' }" class="inline-block text-coolGray-500 align-baseline hover:text-coolGray-800">
                                Forgot Password?
                          </nuxt-link>
                        </div>
                        <div class="flex flex-col justify-center rounded items-center mt-4 bg-gray-100 p-2 text-gray-500 text-xs">
                          <div>Email: shubham123@gmail.com</div>
                          <div>Password: shubham</div>
                        </div>
                      </form>
                      </ValidationObserver>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  layout:"full",
  // middleware:"checkAuth",
  components:{
    ValidationProvider,
    ValidationObserver,
  },
    data(){
        return {
          email: "shubham123@gmail.com",
          password: "shubham",
          loading: false,
          ghe_data: null,
          ghe_aatla_data: null,
          
        }
  },
	methods:{
		login(){
      console.log("ok1");
      const data={email:this.email, password:this.password}
      this.$axios.post(`${process.env.BASE_URL}user/login`, data)
      .then((response)=>{
        console.log("ok2");
        this.ghe_data=response;
        console.log(JSON.stringify(response.data));
        localStorage.setItem("shToken", JSON.stringify(response.data.token));
        this.$axios.get(`${process.env.BASE_URL}user`, {headers:{
          Authorization: 'Bearer ' + response.data.token,
        }}
        )
        .then((response2)=>{
          console.log("ok3");

          // console.log(response2.data.data);
          localStorage.setItem("user", JSON.stringify(response2.data.data))
        })
        console.log("ok4");

        this.loading = false
        // console.log(token);
        this.$toast.success('Login Successfull',{
          position: 'top-right'
        })
        setTimeout(()=>{
          this.$router.push({
          path: '/'
        })
        },2000)
                          
      })      
      .catch((error)=>{
        console.log("ok error");
        this.loading = false
        this.$toast.error('Some error occured',{
          position: 'top-right'
        })
      }) 
    },
	}
}
</script>