<template>
  <div class="rows my-2">
    <img src="../../static/img/RFQQ.jpg" class="w-9 h-9" alt="" />
    <div class="col-span-3">
      <h1 class="font-bold text-base text-footer">Bahtera Bara</h1>
      <span class="font-normal text-xs text-secondary">Kab.Bandung</span>
      <span class="rows">
        <Rating
          :class="[rates ? 'hidden' : 'block', 'h-3']"
          :stars="5"
          :maxStars="5"
        />
        <h1
          :class="[
            ulasan ? 'hidden' : 'block',
            'font-normal',
            'text-xs',
            'align-text-bottom',
            'text-secondary',
          ]"
        >
          (100 Ulasan)
        </h1>
      </span>
    </div>
    <img src="../../static/img/Group.png" class="w-14 h-4" alt="" />
  </div>
</template>

<script>
import Rating from '../parts/Rating.vue'
export default {
  props: {
    rates: {
      type: Boolean,
      default: () => false,
    },
    ulasan: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    Rating,
  },
}
</script>

<style></style>
