<template>
  <div>
    <Nav v-if="isUserLoggedIn" />
    <main>
      <nuxt />
    </main>
    <Footer v-if="isUserLoggedIn" />
  </div>
</template>

<script>
import Nav from '~/components/header/Nav.vue'
import Footer from '~/components/footer/Footer.vue'
export default {
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
  },
  components: { Nav, Footer },
}
</script>

<style></style>
