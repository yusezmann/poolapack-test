<template>
  <div>
    <div
      :class="[isModalOpen ? 'block' : 'hidden']"
      class="modal text-center w-screen h-screen flex absolute justify-center items-center bg-transparent"
    >
      <div
        class="border-2 px-9 py-12 shadow-lg rounded-2xl bg-white w-[499px] h-[290px]"
      >
        <h1 class="font-bold text-lg mb-2">Email Belum Terdaftar</h1>
        <p class="text-center text-secondary mb-14">
          Silahkan lanjutkan pendaftaran untuk membuat akun baru atau ubah untuk
          menggunakan email lain
        </p>
        <div>
          <button
            class="border rounded-md text-yellow px-12 py-2 border-yellow"
          >
            Ubah
          </button>
          <button
            @click="showLoading"
            class="rounded-md text-white px-2 py-2 bg-yellow"
          >
            Lanjut Pendaftaran
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
  computed: {
    isModalOpen() {
      return this.$store.getters.isModalOpen
    },
    loadingProses() {
      return this.$store.getters.showLoadingProses
    },
  },
  methods: {
    showLoading() {
      setInterval(this.$store.commit('isShowLoading', true), 5000)

      this.$store.commit('showEmailSent', true)
    },
  },
  // updated() {
  // },
}
</script>
