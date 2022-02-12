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
            <h1 class="font-bold text-2xl">Masuk Akun</h1>
            <span class="text-base text-secondary"
              >Isi email untuk masuk atau
              <nuxt-link class="text-yellow" to="register"
                >daftarkan akun</nuxt-link
              ></span
            >
            <form @submit.prevent="checkForm" action="/" method="post">
              <div class="mt-12 cols">
                <label for="email">Email</label>
                <input
                  :class="[
                    highlightEmailWithError ? 'input is-danger' : 'input',
                  ]"
                  type="text"
                  v-model="email"
                  placeholder="Email"
                  class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent"
                />
                <p v-if="highlightEmailWithError" class="text-red-600">
                  {{ emailRequiredLabel }} !
                </p>
              </div>
              <div v-if="isFormSuccess" class="mt-6 mb-4 cols relative">
                <label for="sandi">Kata Sandi</label>
                <input
                  :class="[
                    highlightPasswordWithError ? 'input is-danger' : 'input',
                  ]"
                  :type="show ? 'password' : 'text'"
                  placeholder="Masukkan kata sandi"
                  v-model="password"
                  class="border-2 focus:placeholder-accent focus:bg-accent focus:border-accent focus:outline-none border-accent rounded-lg p-2 bg-accent mb-2"
                />
                <p v-if="highlightPasswordWithError" class="text-red-600">
                  {{ passwordRequiredLabel }} !
                </p>
                <span class="text-xs text-secondary font-normal mb-6"
                  >Kombinasi angka, huruf besar dan huruf kecil</span
                >
              </div>
              <span class="text-base text-secondary"
                >Lupa sandi? Silahkan ke halaman
                <button class="text-yellow" @click="resetPassword">
                  lupa password
                </button></span
              >
              <button
                v-if="!isFormSuccess"
                type="button"
                @click="checkEmail"
                class="border-2 border-yellow p-3 mt-6 mb-14 w-full bg-yellow text-white rounded-lg"
              >
                Selanjutnya
              </button>
              <button
                v-if="isFormSuccess"
                type="submit"
                class="border-2 border-yellow p-3 mt-6 mb-14 w-full bg-yellow text-white rounded-lg"
              >
                Selanjutnya
              </button>
            </form>
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

    <EmailNotSigned />
    <EmailSent />
    <ModalResetPassword />
  </div>
</template>

<script>
import { isValidEmail } from '@/static/js/validators'
import EmailNotSigned from '~/components/modal/EmailNotSigned.vue'
import EmailSent from '~/components/modal/EmailSent.vue'
import ModalResetPassword from '~/components/modal/ModalResetPassword.vue'
export default {
  components: { EmailNotSigned, EmailSent, ModalResetPassword },
  data() {
    return {
      emailRequiredLabel: 'Email required',
      passwordRequiredLabel: 'Password required',
      emailNotValidLabel: 'Valid email required',
      email: '',
      password: '',
      show: true,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      isFormSuccess: false,
      isEmailRegistered: false,
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
    isLoginModalOpen() {
      return this.$store.getters.isLoginModalOpen
    },
  },
  beforeMount() {
    this.$store.commit('showLoginModal', true)
  },
  methods: {
    resetPassword() {
      this.$store.commit('isResetPassword', true)

      this.$store.commit('showLoginModal', false)
    },
    checkEmail() {
      if (this.email === 'syam@test.com') {
        this.isModalOpen = true
        this.$store.commit('showModal', this.isModalOpen)
        this.$store.commit('showLoginModal', false)
        this.isFormSuccess = false
      } else {
        this.isFormSuccess = true
        this.isModalOpen = false
      }
    },

    checkForm() {
      if (this.email && this.password) {
        this.highlightEmailWithError = false
        this.highlightPasswordWithError = false
        this.isFormSuccess = true
        this.$store.commit('isUserLoggedIn', this.isFormSuccess)
        this.$router.push('/')
      }
      if (!this.email) {
        this.highlightEmailWithError = true
        if (this.email && !isValidEmail(this.email)) {
          this.emailRequiredLabel = this.emailNotValidLabel
        }
      } else {
        this.highlightEmailWithError = false
      }
      if (!this.password) {
        this.highlightPasswordWithError = true
      } else {
        this.highlightPasswordWithError = false
      }
    },
  },
}
</script>
