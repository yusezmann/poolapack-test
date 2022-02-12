<template>
  <div v-if="isResetPassword">
    <div
      class="modal text-center w-screen h-screen flex absolute justify-center items-center bg-transparent"
    >
      <div
        class="border-2 px-9 py-8 shadow-lg rounded-2xl bg-white w-[499px] h-[290px]"
      >
        <h1 class="font-bold text-lg text-left mb-2">Lupa Password</h1>
        <p class="text-left text-secondary mb-4">
          Masukkan email terdaftar dan kami akan mengirimkan link verifikasi
          untuk mengubah password
        </p>
        <div class="mb-4 cols">
          <label for="email" class="text-left">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent"
          />
        </div>
        <div>
          <button
            class="border rounded-md text-yellow px-12 py-2 border-yellow"
          >
            Batal
          </button>
          <button
            @click="showLoading"
            class="rounded-md text-white px-12 py-2 bg-yellow"
          >
            Verifikasi
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="loadingProses"
      class="modal text-center w-screen h-screen flex absolute justify-center items-center bg-transparent bottom-52"
    >
      <div
        class="border-2 px-9 py-9 shadow-lg rounded-2xl bg-white w-[499px] h-[96px]"
      >
        <p class="text-left">Sedang memproses...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isResetPassword: false,
      email: '',
    }
  },
  computed: {
    isResetPassword() {
      return this.$store.getters.showResetPassword
    },
    loadingProses() {
      return this.$store.getters.showLoadingProses
    },
  },
  methods: {
    showLoading() {
      // setInterval(this.$store.commit('isShowLoading', true), 1000)

      this.$store.commit('showEmailSent', true)
      this.$store.commit('isResetPassword', false)
    },
  },
}
</script>
