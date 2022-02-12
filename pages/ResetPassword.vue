<template>
  <div>
    <div v-if="isLoginModalOpen">
      <div class="rows justify-between md:mx-17 mx-5 my-9">
        <img
          class="w-[239px] h-[56px]"
          src="../static/img/Icon.png"
          alt="logo"
        />
        <router-link to="login" class="mt-3 font-bold md:text-2xl"
          >Masuk Akun</router-link
        >
      </div>
      <div class="md:grid md:grid-cols-12">
        <div class="col-span-1"></div>
        <div class="col-span-5">
          <img class="mb-14 mt-[135px]" src="../static/img/RFQQ.jpg" alt="" />
          <h3 class="md:mx-20 mb-3 text-center font-bold text-2xl">
            Kemudahan Mencari Bahan Baku
          </h3>
          <router-link
            to="#"
            class="md:mx-48 mb-33 ml-40 items-center text-secondary text-base font-normal"
          >
            One Click to Industry
          </router-link>
        </div>
        <div class="col-span-1"></div>
        <div
          class="col-span-5 md:mr-17 mx-5 my-40 border-2 shadow-lg rounded-2xl"
        >
          <div id="login" class="mx-9 mt-12">
            <h1 class="font-bold text-left text-2xl">Buat Sandi Baru</h1>
            <span class="text-base text-left text-secondary"
              >Silahkan masukkan password baru untuk dapat menggunakan akun
              michael@gmail.com</span
            >
            <div class="mt-6 flex flex-col relative">
              <label for="sandi">Password Baru</label>
              <input
                :type="show ? 'password' : 'text'"
                placeholder="Masukkan kata sandi"
                v-model="password"
                class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent mb-2"
              />
              <span class="text-xs text-secondary font-normal mb-6"
                >Kombinasi angka, huruf besar dan huruf kecil</span
              >
            </div>
            <div class="mt-6 flex flex-col relative">
              <label for="sandi">Konfirmasi Password Baru</label>
              <input
                :type="show ? 'password' : 'text'"
                placeholder="Masukkan kata sandi"
                v-model="password"
                class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent mb-2"
              />
              <span class="text-xs text-secondary font-normal mb-6"
                >Kombinasi angka, huruf besar dan huruf kecil</span
              >
            </div>
            <button
              @click="updatePassword"
              class="border-2 border-yellow p-3 mb-14 w-full bg-yellow text-white rounded-lg"
            >
              Selesaikan
            </button>
          </div>
        </div>
      </div>
      <div class="md:mx-17 my-7 md:rows md:justify-between">
        <p class="font-medium text-center text-base text-footer">
          © 2021 - Poolapack.com
        </p>
        <div class="rows ml-8">
          <router-link class="ml-9 font-normal text-base text-coklat" to="#"
            >Hubungi Kami</router-link
          >
          <router-link class="ml-9 font-normal text-base text-coklat" to="#"
            >Laporkan Masalah</router-link
          >
          <router-link class="ml-9 font-normal text-base text-coklat" to="#"
            >Karir</router-link
          >
        </div>
      </div>
    </div>
    <NewPassword />
  </div>
</template>

<script>
import NewPassword from '~/components/modal/NewPassword.vue'
export default {
  components: { NewPassword },
  data() {
    return {
      password: '',
      confirmPassword: '',
      show: true,
    }
  },
  computed: {
    isLoginModalOpen() {
      return this.$store.getters.isLoginModalOpen
    },
  },
  methods: {
    updatePassword() {
      this.$store.commit('showModalPassword', true)
      this.$store.commit('showLoginModal', false)
    },
  },
}
</script>
