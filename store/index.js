  export const state = () => ({
    products: '',
    isLoggedIn: false,
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openModal: false,
      openEmailSent: false,
      openSignupModal: false,
      openCheckoutModal: false
    },
    showLoading: false,
    resetPassword: false,
    newPassword: false,
  })

  export const getters = {
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isModalOpen: state => {
      return state.systemInfo.openModal;
    },
    isEmailSent: state => {
      return state.systemInfo.openEmailSent;
    },
    showLoadingProses: state => {
      return state.showLoading;
    },
    showResetPassword: state => {
      return state.resetPassword;
    },
    showNewPassword: state => {
      return state.newPassword;
    },
  }

  export const  mutations = {
    setDtProduct(state, payload) {
        state.products = payload
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showModal: (state, show) => {
      state.systemInfo.openModal = show;
    },
    showModalPassword: (state, show) => {
      state.newPassword = show;
    },
    isResetPassword: (state, show) => {
      state.resetPassword = show;
    },
    showEmailSent: (state, show) => {
      state.systemInfo.openEmailSent = show;
    },
    isShowLoading: (state, show) => {
      state.showLoading = show;
    },
  }

  export const actions = {
    async getProduct({commit}) {
        await this.$axios
            .get('arrayOfProducts')
            .then((res) => {
                const product = res.data
                commit('setDtProduct', product)
            })
    },
    // async nuxtServerInit({ commit }) {
    //   const res = await this.$axios.get('user')
    //   commit("SET_USER", res.data)
    //   console.log(res.data);
    // },

  }
