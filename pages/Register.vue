<template>
  <div>
    <div class="rows justify-between md:mx-17 mx-5 my-9">
      <img class="w-[239px] h-[56px]" src="../static/img/Icon.png" alt="logo" />
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
          <h1 class="font-bold text-2xl">Masuk Akun</h1>
          <span class="text-base text-secondary"
            >Isi email untuk daftar atau
            <nuxt-link class="text-yellow" to="login"
              >masuk akun</nuxt-link
            ></span
          >
          <div class="mt-14 flex flex-col">
            <label for="email">Email</label>
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent"
            />
          </div>
          <div class="mt-6 flex flex-col relative">
            <!-- <label for="sandi">Kata Sandi</label>
            <input
              :type="show ? 'password' : 'text'"
              placeholder="Masukkan kata sandi"
              v-model="password"
              class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent mb-2"
            />
            <span class="text-xs text-secondary font-normal mb-6"
              >Kombinasi angka, huruf besar dan huruf kecil</span
            > -->
            <span class="text-base text-secondary mb-8"
              >Lupa sandi? Silahkan ke halaman
              <a class="text-yellow" href="">lupa password</a></span
            >
          </div>
          <button
            @click="login()"
            class="border-2 border-yellow p-3 mb-14 w-full bg-yellow text-white rounded-lg"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
    <div class="md:mx-17 my-7 md:flerows md:justify-between">
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
</template>

<script>
export default {
  data() {
    return {
      email: '',
      // password: '',
      show: true,
    }
  },
  methods: {
    login() {
      // Authenticate user against API
      if (this.email && this.password != 0) {
        let isLoggedIn = true
        this.$store.commit('setLoggedIn', isLoggedIn)
        // console.log(isLoggedIn)
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>
