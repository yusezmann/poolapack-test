<template>
  <div class="header">
    <div class="icon__menu">
      <router-link to="#">
        <div class="rows">
          <img src="../../static/icons/clipboard.svg" alt="" /> Sample
        </div>
      </router-link>
      <router-link to="#">
        <div class="rows ml-4">
          <img src="../../static/icons/heart.svg" alt="" /> Wishlist
        </div>
      </router-link>
      <router-link to="#">
        <div class="rows ml-4">
          <img src="../../static/icons/3d-square.svg" alt="" />
        </div>
      </router-link>
      <router-link to="#">
        <div class="rows ml-4">
          <img src="../../static/icons/sms-notification.svg" alt="" />
        </div>
      </router-link>
      <router-link to="#">
        <div class="rows ml-4 mr-[92px]">
          <img src="../../static/icons/user-square.svg" alt="" /> User
        </div>
      </router-link>
    </div>
    <div class="rows list-category">
      <img class="logo" src="../../static/img/Logo.png" alt="" />
      <div class="relative md:w-[154px] mt-2">
        <select>
          <option selected>Kategori</option>
          <option value="1">Kategori 2</option>
          <option value="2">Kategori 3</option>
          <option value="3">Kategori 4</option>
        </select>
      </div>
      <div class="relative">
        <input class="input__search" placeholder=" Search..." type="text" />
        <button class="btn">
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #fff; transform: ; msfilter: "
            >
              <path
                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <router-link class="ml-4" to="/keranjang">
        <img src="../../static/icons/Frame 771.svg" alt="" />
      </router-link>
    </div>
    <div class="rows md:mx-[98px] mx-4 mb-4">
      <div class="rows">
        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.25"
            y1="0.588623"
            x2="1.25"
            y2="19.5886"
            stroke="#383535"
            stroke-width="1.5"
          />
        </svg>
        <router-link class="md:mx-10 mx-4 md:text-base text-xs" to="#"
          >Tentang Kami</router-link
        >
      </div>
      <div class="rows">
        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.25"
            y1="0.588623"
            x2="1.25"
            y2="19.5886"
            stroke="#383535"
            stroke-width="1.5"
          />
        </svg>
        <router-link class="md:mx-10 mx-4 md:text-base text-xs" to="#"
          >Cara Belanja</router-link
        >
      </div>
      <div class="rows">
        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.25"
            y1="0.588623"
            x2="1.25"
            y2="19.5886"
            stroke="#383535"
            stroke-width="1.5"
          />
        </svg>
        <router-link class="md:mx-10 mx-4 md:text-base text-xs" to="#"
          >Referal</router-link
        >
      </div>
      <div class="rows">
        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.25"
            y1="0.588623"
            x2="1.25"
            y2="19.5886"
            stroke="#383535"
            stroke-width="1.5"
          />
        </svg>
        <router-link class="md:mx-10 mx-4 md:text-base text-xs" to="#"
          >Blog</router-link
        >
      </div>
      <div class="rows">
        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.25"
            y1="0.588623"
            x2="1.25"
            y2="19.5886"
            stroke="#383535"
            stroke-width="1.5"
          />
        </svg>
        <router-link class="md:mx-10 mx-4 md:text-base text-xs" to="#"
          >RFQ</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>
