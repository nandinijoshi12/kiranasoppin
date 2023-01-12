<template>
  <div>
    <transition name="modal">
      <div
        v-if="active"
        tabindex="-1"
        class="flex items-center justify-center fixed inset-0 bg-transparent cursor-default h-screen w-full"
        style="z-index:99" @click.self="closeModal()"
      >
        <div
          :class="fullScreen ? `w-11/12 ` : `w-11/12 lg:w-1/2`"
          class="modal items-center flex justify-center rounded"
        >
        <div v-if="imageOnly" class="relative  object-cover" >
            <div class="flex justify-center">
              <button
                @click="closeModal()"
                class="bg-white text-gray-100 absolute right-0 -mt-2 -mr-2 font-light p-1 px-2 text-xs rounded"
              >
                <i class="fas fa-times"></i>
              </button>
              <picture class="h-full w-full object-cover">
                <slot name="image" />
              </picture>
            </div>
        </div>
          <div v-else class="w-full bg-white rounded-xl border-2 border-gray-700">
            <div class="w-full flex items-center justify-between rounded-xl bg-white py-3 px-4">
              <p class="text-gray-700 text-base font-medium">
                <slot name="title"></slot>
              </p>
              <button
                @click="closeModal()"
                class="bg-primaryLight  font-light p-1 px-2 text-xs rounded h-6"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
            </div>
            <div class="my-4 px-4 min-h-0 max-h-96 overflow-y-scroll">
              <slot name="body" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      tabindex="-1"
      class="flex items-center justify-center fixed inset-0 modal-bg cursor-default h-screen w-full"
      style="z-index:9"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    fullScreen: {
      dafault: false,
      type: Boolean
    },
    imageOnly: {
      dafault: false,
      type: Boolean
    },
  },
  mounted(){
     window.addEventListener('keydown', (e) => {
      if(this.active){
        if(e.keyCode == '27'){
          this.active = false;
          this.$emit("close");
        }
      }
    });
  },
  methods: {
    closeModal() {
      this.active = false;
      this.$emit("close");
    }
  },
  data() {
    return {
      active: true
    };
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
  /* make scrollbar transparent */
}
.modal-bg {
  backdrop-filter: saturate(180%) blur(5px);
  background-color: rgba(0, 0, 0, 0.2);
}
.modal {
  animation: openModal 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0 !important;
}
.modal-enter .modal {
  transform: scale(0.9) !important;
}
.modal-leave-to .modal {
  transform: scale(0.9) !important;
}
@keyframes openModal {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>