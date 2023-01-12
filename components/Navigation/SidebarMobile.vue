<template>
  <div>
    <div class="bg-fuchsia-200 absolute h-screen min-h-screen w-full" style="z-index: 999999">
      <aside id="sidebar" class="flex h-screen min-h-screen px-40 flex-col justify-between overflow-y-hidden md:hidden">
        <div>
          <!-- User Details -->
          <!-- <div class="m-2 rounded-md p-2">
            <div class="flex flex-col rounded p-2 text-center text-white">
              <p class="flex justify-center font-bold italic tracking-wider">Ortigan</p>
              <hr class="border-coolGray-300 border-t" />
            </div>
          </div> -->
          <!-- Menu -->
          <span v-for="(item, index) in menu" :key="index">
            <ul
              class="list-reset mt-4 flex w-full flex-col items-center justify-center"
              :class="
                  getPath == '/' + item.path
                    ? 'py-2  border-b-4 border-coolGray-700 font-medium'
                    : 'font-base'
                "
              style="transition-duration: 0.1s"
            >
              <div>
                <li class="h-full w-full" @click="closeEevnt()">
                  <nuxt-link :to="`/${item.path}`">
                    <div class="dropdown-btn text-coolGray-800 text-base">
                      <div class="flex flex-col">
                        <p class="text-center">
                          <i
                            :class="
                                getPath == '/' + item.path
                                  ? `text-coolGray-600  fas fa-${item.icon}`
                                  : `text-coolGray-800  fas fa-${item.icon}`
                              "
                          ></i>
                        </p>
                        <p
                          :class="
                              getPath == '/' + item.path
                                ? `text-coolGray-800 `
                                : `text-coolGray-600`
                            "
                        >
                          {{ item.header }}
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </div>
            </ul>
          </span>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import menuItems from "./menuItems";
export default {
  data() {
    return {
      menu: menuItems,
      theme: "",
    };
  },
  methods: {
    closeEevnt() {
      this.$emit("closeSideBar");
    },
    getAvatar() {
      return this.$store.state.activeUser.avatar != null
        ? this.$store.state.activeUser.avatar
        : "https://avatars.dicebear.com/api/avataaars/default.svg";
    },
    toggleTheme() {
      this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
      this.$store.commit("theme/SET_THEME", this.theme);
    },
  },
  computed: {
    getPath() {
      return this.$route.path;
    },
    currentUser() {
      return this.$store.state.activeUser.name;
    },
    userScope() {
      return this.$store.state.activeUser.scope;
    },
  },
};
</script>

