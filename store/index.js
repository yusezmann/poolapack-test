  export const state = () => ({
    products: [
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "CHECK PRINT SHIRT",
			"price": 1100000
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "GLORIA HIGH LOGO SNEAKER",
			"price": 910000
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "CATE RIGID BAG",
			"price": 9400000
		},
		{
			"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "GUESS CONNECT WATCH",
			"price": 438.900
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "'70s RETRO GLAM KEFIAH",
			"price": 200000
		}
	],
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

  // export const actions = {
  //   async getProduct({commit}) {
  //       await this.$axios
  //           .get('arrayOfProducts')
  //           .then((res) => {
  //               const product = res.data
  //               commit('setDtProduct', product)
  //           })
  //   },
    // async nuxtServerInit({ commit }) {
    //   const res = await this.$axios.get('user')
    //   commit("SET_USER", res.data)
    //   console.log(res.data);
    // },

  // }
