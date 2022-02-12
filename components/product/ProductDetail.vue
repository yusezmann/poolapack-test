<template>
  <div class="container">
    <div class="col-span-4 row-span-1 md:ml-[98px] mx-4 mb-4">
      <div class="border rounded-xl w-full h-[338px] mb-3">
        <img
          class="w-full h-full"
          src="../../static/img/Frame 485.jpg"
          alt=""
        />
      </div>
      <div class="rows space-x-2">
        <div class="border rounded-xl w-[80px] h-[80px]">
          <img
            class="md:w-full md:h-full"
            src="../../static/img/Frame 485.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="col-span-5 row-span-1 mb-4 mx-4">
      <div class="w-full h-full">
        <div class="rows justify-between border-b-2">
          <div class="cols mb-4">
            <h1 class="font-bold text-lg">Poly PE MVS L158 100 / 70</h1>
            <div class="rows">
              <Rating :stars="5" :maxStars="5" />
              <span class="mt-2">
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
              </span>
              <div class="rows mt-3 mx-2 text-xs">
                100
                <h3 class="text-secondary">Ulasan</h3>
              </div>
              <span class="mt-2">
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
              </span>
              <div class="rows mt-3 mx-2 text-xs">
                100
                <h3 class="text-secondary">Terjual</h3>
              </div>
            </div>
          </div>
          <div class="cols relative">
            <h1 class="font-bold text-base mx-8">Berakhir Dalam</h1>
            <div class="rows md:w-48 md:h-16">
              <Countdown />
            </div>
          </div>
        </div>

        <div class="cols">
          <div class="rows border-2 justify-around mt-5 rounded-t-lg">
            <h1>Varian</h1>
            <h1>Harga</h1>
            <h1>Jumlah</h1>
          </div>
        </div>
        <div class="rows border-2">
          <div class="rows my-2">
            <p class="border mx-2 my-2 bg-accent px-1 py-1 h-9 rounded-lg">
              Varian
            </p>
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="70" fill="#C4C4C4" />
            </svg>
            <div class="rows">
              <BoxHarga
                class="mx-2 my-2"
                :accent="false"
                :sale="true"
                :harga="1000"
                :hargaSale="500"
                :qty="100"
              />
              <BoxHarga
                class="mx-2 my-2"
                :accent="true"
                :sale="false"
                :harga="10000"
              />
              <BoxHarga
                class="mx-2 my-2"
                :accent="true"
                :sale="false"
                :harga="20000"
              />
            </div>
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="70" fill="#C4C4C4" />
            </svg>
            <InputNumber :min="1" :value="0" class="md:ml-5 ml-2 mt-4" />
          </div>
        </div>
        <div class="rows border-2 rounded-b-lg">
          <div class="rows my-2">
            <p class="border mx-2 my-2 bg-accent px-1 py-1 h-9 rounded-lg">
              Varian
            </p>
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="70" fill="#C4C4C4" />
            </svg>
            <div class="rows">
              <BoxHarga
                class="mx-2 my-2"
                :accent="false"
                :sale="true"
                :harga="1000"
                :hargaSale="500"
                :qty="100"
              />
              <BoxHarga
                class="mx-2 my-2"
                :accent="true"
                :sale="false"
                :harga="10000"
              />
              <BoxHarga
                class="mx-2 my-2"
                :accent="true"
                :sale="false"
                :harga="20000"
              />
            </div>
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1" height="70" fill="#C4C4C4" />
            </svg>
            <InputNumber :min="1" :value="0" class="md:ml-5 ml-2 mt-4" />
          </div>
        </div>
        <div class="rows justify-around border-b-2 my-2">
          <h1>Sample:</h1>
          <img class="w-8 h-8" src="../../static/img/Frame 485.jpg" alt="" />
          <span> Lorem, ipsum.</span>
          <button
            class="border-2 border-yellow rounded-lg px-4 py-1 text-yellow mb-2"
          >
            <div class="rows">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.19444V16.8056C21.9939 19.6717 19.6717 21.9939 16.8056 22H5.19444C2.32833 21.9939 0.00611111 19.6717 0 16.8056V5.19444C0.00611111 2.32833 2.32833 0.00611111 5.19444 0H6.11111C6.44722 0 6.72222 0.275 6.72222 0.611111C6.72222 0.947222 6.44722 1.22222 6.11111 1.22222H5.19444C3.00056 1.22833 1.22833 3.00056 1.22222 5.19444V16.8056C1.22833 18.9994 3.00056 20.7717 5.19444 20.7778H16.8056C18.9994 20.7717 20.7717 18.9994 20.7778 16.8056V5.19444C20.7717 3.00056 18.9994 1.22833 16.8056 1.22222H14.0556C12.705 1.22222 11.6111 2.31611 11.6111 3.66667V11.9717L15.455 8.12167C15.6933 7.88333 16.0844 7.88333 16.3228 8.12167C16.5611 8.36 16.5611 8.75111 16.3228 8.98944L11.4339 13.8783C11.3728 13.9333 11.3056 13.9761 11.2322 14.0067C11.0856 14.0739 10.9144 14.0739 10.7678 14.0067C10.6944 13.9761 10.6272 13.9333 10.5661 13.8783L5.67722 8.98944C5.43889 8.75111 5.43889 8.36 5.67722 8.12167C5.91556 7.88333 6.30667 7.88333 6.545 8.12167L10.3889 11.9717V3.66667C10.3889 1.64389 12.0328 0 14.0556 0H16.8056C19.6717 0.00611111 21.9939 2.32833 22 5.19444Z"
                  fill="#F9BE00"
                />
              </svg>
              Request Sample
            </div>
          </button>
        </div>
        <div class="rows mx-2 my-2">
          <h1>Voucher Promo:</h1>
          <span class="border-2 border-sky bg-sky mx-4 h-14 w-52 text-center">
            Banner Promo
          </span>
        </div>
      </div>
    </div>
    <div class="col-span-3 row-span-2 mx-4">
      <div class="border w-full rounded-lg mb-2 shadow-lg">
        <div class="cols mx-3 my-4">
          <h3 class="font-bold text-sky text-sm">Ready Stock</h3>
          <h2 class="font-normal text-footer text-base">
            Minimal Order (MOQ): 100 Meter
          </h2>
          <h4 class="font-normal text-footer text-sm mb-3">
            Kelipatan Order: 100 Meter
          </h4>
          <span
            class="rows justify-between text-secondary text-sm border-b-2 mb-3 pb-3"
            >Total Kuantitas
            <h1 class="font-bold text-base text-footer">0 Meter</h1></span
          >
          <span class="rows justify-between text-secondary text-sm mb-3"
            >Total Harga
            <h1 class="font-bold text-base text-footer">Rp. 1000</h1></span
          >
          <button class="bg-yellow rounded-lg w-full px-2 py-1 mb-2 text-white">
            Beli Sekarang
          </button>
          <button
            class="rows text-center justify-center border-2 text-yellow border-yellow rounded-lg w-full px-6 py-1"
          >
            <svg
              width="29"
              height="20"
              viewBox="0 0 29 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_240)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3752 16.1784C12.0192 16.1784 12.54 16.6811 12.54 17.3027C12.54 17.9243 12.0192 18.427 11.3752 18.427C10.7312 18.427 10.2104 17.9243 10.2104 17.3027C10.2104 16.6811 10.7312 16.1784 11.3752 16.1784ZM18.2464 17.2973C18.2464 16.6757 18.7672 16.173 19.4112 16.173C20.0552 16.173 20.576 16.6757 20.576 17.2973C20.576 17.9189 20.0608 18.4216 19.4112 18.4216C18.7672 18.4216 18.2464 17.9189 18.2464 17.2973ZM16.8464 4.88108C16.8464 4.46145 16.5251 4.0917 16.1055 4.09149L6.94356 4.08687C6.4946 4.08664 6.10082 3.78723 5.98059 3.35467L5.34032 1.05112C5.22003 0.618377 4.82599 0.318919 4.37684 0.318919H1.28919C0.853332 0.318919 0.5 0.672251 0.5 1.10811C0.5 1.54397 0.853332 1.8973 1.28919 1.8973H3.12221C3.57147 1.8973 3.96558 2.1969 4.08576 2.62978L7.57288 15.19C7.63571 15.4163 7.84177 15.573 8.07665 15.573C8.52337 15.573 8.79913 16.1352 8.67401 16.564C8.60593 16.7973 8.5696 17.0432 8.5696 17.2973C8.5696 18.7892 9.824 20 11.3696 20C12.9152 20 14.1696 18.7892 14.1696 17.2973C14.1696 16.5657 14.656 15.573 15.3876 15.573C16.1192 15.573 16.6056 16.5657 16.6056 17.2973C16.6056 18.7892 17.8656 20 19.4056 20C20.9512 20 22.2056 18.7892 22.2056 17.2973C22.2056 17.0432 22.1693 16.7972 22.1012 16.5639C21.976 16.1351 22.2518 15.573 22.6984 15.573C22.9334 15.573 23.1394 15.4162 23.2022 15.1898L24.0772 12.0333C24.1881 11.6331 23.8528 11.2432 23.4376 11.2432C22.9662 11.2432 22.5266 11.53 22.4001 11.9841L22.0454 13.2575C21.9249 13.69 21.531 13.9892 21.0821 13.9892H9.69391C9.2446 13.9892 8.85045 13.6895 8.73031 13.2566L6.97266 6.92212C6.79581 6.28478 7.27535 5.6544 7.93678 5.65475L16.1212 5.65905C16.5318 5.65926 16.8464 5.29168 16.8464 4.88108ZM17.5695 7.77689C17.4478 7.54637 17.216 7.39459 16.9553 7.39459H10.1764C9.74053 7.39459 9.3872 7.74793 9.3872 8.18378C9.3872 8.61964 9.74053 8.97297 10.1764 8.97297H16.9409C17.5071 8.97297 17.8339 8.27759 17.5695 7.77689ZM20.7732 10.7047C20.7613 10.6998 20.7486 10.6973 20.7358 10.6973H10.798C10.3621 10.6973 10.0088 11.0506 10.0088 11.4865C10.0088 11.9223 10.3621 12.2757 10.798 12.2757H19.9071C20.4188 12.2757 20.8336 11.8608 20.8336 11.3491V10.7951C20.8336 10.7555 20.8097 10.7199 20.7732 10.7047ZM23.4432 8.18378C21.5504 8.18378 20.0272 6.70811 20.0272 4.88649C20.0272 3.06486 21.556 1.58919 23.4432 1.58919C25.336 1.58919 26.8648 3.06486 26.8648 4.88649C26.8648 6.7027 25.3304 8.18378 23.4432 8.18378ZM18.3864 4.88108C18.3864 7.57297 20.6544 9.76216 23.4432 9.76216C26.2376 9.76216 28.5 7.57838 28.5 4.88108C28.5 2.18919 26.232 0 23.4432 0C20.6488 0 18.3864 2.18378 18.3864 4.88108ZM21.4212 4.09189C20.9853 4.09189 20.632 4.44522 20.632 4.88108C20.632 5.31694 20.9853 5.67027 21.4212 5.67027H21.6634C22.1948 5.67027 22.6256 6.10104 22.6256 6.63243V6.77699C22.6256 7.22854 22.9917 7.59459 23.4432 7.59459C23.8947 7.59459 24.2608 7.22854 24.2608 6.77699V6.63243C24.2608 6.10104 24.6916 5.67027 25.223 5.67027H25.4652C25.9011 5.67027 26.2544 5.31694 26.2544 4.88108C26.2544 4.44522 25.9011 4.09189 25.4652 4.09189H25.223C24.6916 4.09189 24.2608 3.66112 24.2608 3.12973V2.98517C24.2608 2.53362 23.8947 2.16757 23.4432 2.16757C22.9917 2.16757 22.6256 2.53362 22.6256 2.98517V3.12973C22.6256 3.66112 22.1948 4.09189 21.6634 4.09189H21.4212Z"
                  fill="#F9BE00"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_240">
                  <rect
                    width="28"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="ml-4">Masukkan Keranjang</span>
          </button>
        </div>
      </div>
      <div class="border w-full rounded-lg shadow-lg">
        <div class="cols mx-3 my-4">
          <h2 class="text-footer font-bold text-base mb-3">Pengiriman</h2>
          <div class="rows mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8V13"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 8V13"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 13V17"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="rows ml-1 text-secondary text-sm font-normal"
              >Dikirim dari
              <p class="ml-1 text-footer">Kab.Bandung</p>
            </span>
          </div>
          <div class="rows mb-3">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 2V12C15.5 13.1 14.6 14 13.5 14H2.5V6C2.5 3.79 4.29 2 6.5 2H15.5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 14V17C22.5 18.66 21.16 20 19.5 20H18.5C18.5 18.9 17.6 18 16.5 18C15.4 18 14.5 18.9 14.5 20H10.5C10.5 18.9 9.6 18 8.5 18C7.4 18 6.5 18.9 6.5 20H5.5C3.84 20 2.5 18.66 2.5 17V14H13.5C14.6 14 15.5 13.1 15.5 12V5H17.34C18.06 5 18.72 5.39001 19.08 6.01001L20.79 9H19.5C18.95 9 18.5 9.45 18.5 10V13C18.5 13.55 18.95 14 19.5 14H22.5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 22C9.60457 22 10.5 21.1046 10.5 20C10.5 18.8954 9.60457 18 8.5 18C7.39543 18 6.5 18.8954 6.5 20C6.5 21.1046 7.39543 22 8.5 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 22C17.6046 22 18.5 21.1046 18.5 20C18.5 18.8954 17.6046 18 16.5 18C15.3954 18 14.5 18.8954 14.5 20C14.5 21.1046 15.3954 22 16.5 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 12V14H19.5C18.95 14 18.5 13.55 18.5 13V10C18.5 9.45 18.95 9 19.5 9H20.79L22.5 12Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="rows ml-1 text-secondary text-sm font-normal"
              >Pengiriman ke
              <p class="ml-1 text-footer">Kota Jakarta</p>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50002 12.8334C10.7217 12.8334 13.3334 10.2217 13.3334 7.00002C13.3334 3.77836 10.7217 1.16669 7.50002 1.16669C4.27836 1.16669 1.66669 3.77836 1.66669 7.00002C1.66669 10.2217 4.27836 12.8334 7.50002 12.8334Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.44086 6.26501L7.50002 8.31835L9.55919 6.26501"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <span class="text-left text-secondary font-normal text-sm mb-2"
            >Ongkos Kirim</span
          >
          <span class="text-right text-footer font-bold text-base mb-2"
            >Rp. 1000</span
          >
          <span
            class="rows border-b-2 text-secondary font-normal text-sm mb-2 pb-2"
            >Kargo JNE Trucking (JTR)
            <router-link to="#" class="text-yellow">Ubah</router-link>
          </span>
          <span class="text-right text-secondary font-normal text-xs"
            >Estimasi tiba 12/Des - 15/Des</span
          >
        </div>
      </div>
    </div>
    <div class="col-span-9 border-t-2 md:ml-[98px] mx-4">
      <div class="rows my-5 w-full justify-between border rounded-lg">
        <Profile />
        <div class="rows my-4">
          <div class="md:mx-2 rows">
            <span class="md:mx-2">
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
                  stroke="#D1D1D1"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <button class="rows">
              <span class="md:mx-2 mx-1">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99992 14.5C10.3258 14.8326 10.7148 15.0968 11.1441 15.2772C11.5733 15.4576 12.0343 15.5505 12.4999 15.5505C12.9656 15.5505 13.4265 15.4576 13.8558 15.2772C14.2851 15.0968 14.674 14.8326 14.9999 14.5L18.9999 10.5C19.663 9.83697 20.0355 8.93769 20.0355 8.00001C20.0355 7.06233 19.663 6.16305 18.9999 5.50001C18.3369 4.83697 17.4376 4.46448 16.4999 4.46448C15.5622 4.46448 14.663 4.83697 13.9999 5.50001L13.4999 6.00001"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.0001 10.5C13.6742 10.1674 13.2852 9.90315 12.8559 9.72276C12.4267 9.54238 11.9657 9.44946 11.5001 9.44946C11.0344 9.44946 10.5735 9.54238 10.1442 9.72276C9.7149 9.90315 9.32594 10.1674 9.00006 10.5L5.00006 14.5C4.33702 15.163 3.96452 16.0623 3.96452 17C3.96452 17.9377 4.33702 18.8369 5.00006 19.5C5.6631 20.163 6.56238 20.5355 7.50006 20.5355C8.43774 20.5355 9.33702 20.163 10.0001 19.5L10.5001 19"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.9999 21.5V19.5"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.9999 16.5H20.9999"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 8.5H5"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00008 3.5V5.5"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="md:block hidden">Copy Link</span>
            </button>
          </div>
          <div class="md:mx-2 mx-1 rows">
            <span class="md:mx-2 mx-1">
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
                  stroke="#D1D1D1"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <button class="rows">
              <span class="md:mx-2 mx-1">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 15.5C7.65685 15.5 9 14.1569 9 12.5C9 10.8431 7.65685 9.5 6 9.5C4.34315 9.5 3 10.8431 3 12.5C3 14.1569 4.34315 15.5 6 15.5Z"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 9.5C19.6569 9.5 21 8.15685 21 6.5C21 4.84315 19.6569 3.5 18 3.5C16.3431 3.5 15 4.84315 15 6.5C15 8.15685 16.3431 9.5 18 9.5Z"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 21.5C19.6569 21.5 21 20.1569 21 18.5C21 16.8431 19.6569 15.5 18 15.5C16.3431 15.5 15 16.8431 15 18.5C15 20.1569 16.3431 21.5 18 21.5Z"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.69991 11.2L15.2999 7.79999"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.69991 13.8L15.2999 17.2"
                    stroke="#0E1934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="md:block hidden">Share</span>
            </button>
          </div>
          <div class="md:mx-2 mx-1 rows">
            <span class="md:mx-2 mx-1">
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
                  stroke="#D1D1D1"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <button class="rows">
              <span class="md:mx-2 mx-1">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3001 15.7727H18.0916V16.1C15.7171 17.9545 13.4179 19.2273 12.5133 19.4091H12.3626C10.1765 19.0091 0 12.1 0 6.68182C0 3.22727 2.82681 0.5 6.40743 0.5C9.54783 0.5 11.141 2.408 12.438 3.62727C13.6983 2.44254 15.3017 0.5 18.4685 0.5C22.0491 0.5 24.8759 3.22727 24.8759 6.68182C24.8759 8.68182 23.519 10.8636 21.6722 12.8636H21.1068V12.3182C22.8406 10.4636 24.1221 8.42727 24.1221 6.68182C24.1221 3.62727 21.6345 1.22727 18.4685 1.22727C15.6586 1.22727 14.364 2.85709 12.438 4.64545C10.5097 2.85527 9.21916 1.22727 6.40743 1.22727C3.24141 1.22727 0.753815 3.62727 0.753815 6.68182C0.753815 11.4818 10.2896 18.2091 12.438 18.6818C13.2672 18.5 15.2271 17.3727 17.3001 15.7727ZM20.353 13.5909V10.6818H18.8454V13.5909H15.8301V15.0455H18.8454V17.9545H20.353V15.0455H23.3683V13.5909H20.353Z"
                    fill="#FD4A5B"
                  />
                </svg>
              </span>
              <span class="md:block hidden">Favorit (1RB)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-9 mb-12 md:ml-[98px]">
      <Tabs>
        <Tab name="Detail" selected="true">
          <DetailProduk />
        </Tab>
        <Tab name="Ulasan">
          <Ulasan />
        </Tab>
        <Tab name="Profile">
          <ProfilPacker />
        </Tab>
      </Tabs>
    </div>
    <div class="col-span-12 mb-12 md:ml-[98px] mx-4">
      <h1 class="font-bold text-normal mb-7">Produk Populer Packer</h1>
      <Cards />
    </div>
    <div class="col-span-12 mb-12 md:ml-[98px] mx-4">
      <h1 class="font-bold text-normal mb-7">Produk Terakhir Dilihat</h1>
      <Cards />
    </div>
  </div>
</template>

<script>
import DetailProduk from '../product/DetailProduk.vue'
import ProfilPacker from '../user/ProfilPacker.vue'
import Ulasan from '../user/Ulasan.vue'
import Tabs from '../parts/Tabs.vue'
import Tab from '../parts/Tab.vue'
import Profile from '../user/Profile.vue'
import InputNumber from '../parts/InputNumber.vue'
import Countdown from '../parts/Countdown.vue'
import Rating from '../parts/Rating.vue'
import Cards from '../parts/Cards.vue'
export default {
  // middleware: 'auth',
  components: {
    DetailProduk,
    ProfilPacker,
    Ulasan,
    Tabs,
    Tab,
    Profile,
    InputNumber,
    Countdown,
    Rating,
    Cards,
  },
}
</script>

<style></style>
