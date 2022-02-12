<template>
  <div
    :class="[isEmailSent ? 'block' : 'hidden']"
    class="modal text-center w-screen h-screen flex absolute justify-center items-center bg-transparent"
  >
    <div class="border-2 shadow-lg rounded-2xl bg-white w-[499px] h-[516px]">
      <div
        class="flex justify-center items-center mb-14 bg-yellowsky rounded-t-2xl py-11"
      >
        <img
          src="../../static/img/sms-tracking.png"
          class="w[131px] h-[131px]"
          alt=""
        />
      </div>
      <div class="px-9">
        <h1 class="font-bold text-lg mb-2">Link Verifikasi Terkirim</h1>
        <p class="text-center text-secondary mb-14">
          Silahkan cek dan klik link verifikasi yang telah kami kirimkan ke
          test@example.com
        </p>
        <div>
          <button
            v-if="!isResetPassword"
            @click="goToLogin"
            class="border w-full text-yellow rounded-md px-12 py-2 border-yellow"
          >
            Saya Mengerti
          </button>
          <button
            v-if="isResetPassword"
            @click="resetPassword"
            class="border w-full text-yellow rounded-md px-12 py-2 border-yellow"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isEmailSent() {
      return this.$store.getters.isEmailSent
    },
    isResetPassword() {
      return this.$store.getters.showResetPassword
    },
  },
  beforeMount() {
    this.$store.commit('showLoginModal', true)
    // this.$store.commit('isResetPassword', true)
  },
  methods: {
    goToLogin() {
      if (this.isResetPassword || this.isEmailSent) {
        this.$store.commit('showLoginModal', true)
        this.$store.commit('showEmailSent', false)
        this.$store.commit('showModal', false)
        this.$store.commit('isShowLoading', false)
      } else {
        this.$store.commit('showLoginModal', true)
        this.$store.commit('isResetPassword', true)
        this.$router.push('/ResetPassword')
      }
    },
    resetPassword() {
      this.$router.push('/ResetPassword')
    },
  },
}
</script>
