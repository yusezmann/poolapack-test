<template>
  <div class="flex flex-row relative">
    <div
      class="border-2 rounded-t-xl rounded-r-xl bg-yellow border-yellow shadow-lg w-11 h-7 text-center z-[99]"
    >
      {{ timer }}
    </div>
    <div
      class="border-2 absolute bg-yellow border-yellow rounded-tl-xl rounded-br-xl rounded-bl-xl w-7 h-11"
    >
      <span class="absolute left-1 top-6 text-[.5rem]">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
    },
    title: {
      type: String,
      default: () => 'label',
    },
  },
}
</script>

<style></style>
