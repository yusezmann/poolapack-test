<template>
  <div
    :class="[isNewPassword ? 'block' : 'hidden']"
    class="modal text-center w-screen h-screen flex absolute justify-center items-center bg-transparent"
  >
    <div class="border-2 shadow-lg rounded-2xl bg-white w-[499px] h-[411px]">
      <div
        class="flex justify-center items-center mb-14 bg-success rounded-t-2xl py-11"
      >
        <img
          src="../../static/img/checklist.png"
          class="w[131px] h-[131px]"
          alt=""
        />
      </div>
      <div class="px-9">
        <h1 class="font-bold text-lg mb-2">Password Berhasil Diperbaharui</h1>
        <p class="text-center text-secondary mb-14">
          Mohon menunggu, anda akan otomatis dialihkan ke halaman Masuk untuk
          mengakses Poolapack
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isNewPassword() {
      return this.$store.getters.showNewPassword
    },
  },
}
</script>
