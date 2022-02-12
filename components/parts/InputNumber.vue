<template>
  <div class="rows relative">
    <button
      class="btn__minus"
      :class="getBtnClass(true)"
      v-on:click="decrement()"
      :aria-label="decrementAriaLabel"
      :disabled="disabled"
    >
      <fa :icon="['fas', 'minus']" />
    </button>
    <div
      class="input__number"
      ref="spinbutton"
      role="spinbutton"
      tabindex="0"
      :aria-valuenow="value"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-label="spinButtonAriaLabel"
    >
      <slot>{{ intValue }}</slot>
    </div>
    <input type="hidden" :name="formName" :value="intValue" />
    <button
      class="btn__plus"
      :class="getBtnClass(false)"
      v-on:click="increment()"
      :aria-label="incrementAriaLabel"
      :disabled="disabled"
    >
      <fa :icon="['fas', 'plus']" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'IntegerPlusminus',
  props: {
    value: {
      default: 0,
      type: Number,
    },
    min: {
      default: 0,
      type: Number,
    },
    max: {
      default: undefined,
      type: Number,
    },
    step: {
      default: 1,
      type: Number,
    },
    stepIncrement: {
      default: 0,
      type: Number,
    },
    stepDecrement: {
      default: 0,
      type: Number,
    },
    incrementAriaLabel: {
      default: null,
      type: String,
    },
    decrementAriaLabel: {
      default: null,
      type: String,
    },
    spinButtonAriaLabel: {
      default: null,
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    formName: {
      default: 'integerPlusMinus',
      type: String,
    },
  },
  data() {
    return {
      intValue: 0,
    }
  },
  computed: {
    canIncrement() {
      if (this.disabled) return false
      return (
        this.max === undefined ||
        this.intValue + this.incrementValue <= this.max
      )
    },
    canDecrement() {
      if (this.disabled) return false
      return this.intValue - this.decrementValue >= this.min
    },
    incrementValue() {
      return this.stepIncrement > 0 ? this.stepIncrement : this.step
    },
    decrementValue() {
      return this.stepDecrement > 0 ? this.stepDecrement : this.step
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyUp)
  },
  methods: {
    keyUp(event) {
      if (this.isSpinButtonFocused()) {
        if (event.keyCode === 33 || event.keyCode === 38) {
          // page up || up arrow
          this.increment()
          event.preventDefault()
        }

        if (event.keyCode === 34 || event.keyCode === 40) {
          // page down || down arrow
          this.decrement()
          event.preventDefault()
        }

        if (event.keyCode === 36) {
          // home button
          this.setToMin()
          event.preventDefault()
        }

        // if max, set to max
        if (this.max !== undefined && event.keyCode === 35) {
          // end button
          this.setToMax()
          event.preventDefault()
        }
      }
    },
    isSpinButtonFocused() {
      return document.activeElement === this.$refs.spinbutton
    },
    getBtnClass(firstBtn) {
      let btnClass = 'int-pm-'
      if ((firstBtn && !this.vertical) || (!firstBtn && this.vertical)) {
        btnClass += 'decrement'
        if (!this.canDecrement) btnClass += ' disabled'
      } else {
        btnClass += 'increment'
        if (!this.canIncrement) btnClass += ' disabled'
      }
      return btnClass
    },
    setToMin() {
      if (this.disabled) return
      this.intValue = this.min
      this.$emit('input', this.intValue)
    },
    setToMax() {
      if (this.disabled) return
      this.intValue = this.max
      this.$emit('input', this.intValue)
    },
    increment() {
      if (this.canIncrement) {
        this.intValue = this.intValue + this.incrementValue
        this.$emit('ipm-increment', this.intValue)
        this.$emit('input', this.intValue)
      }
    },
    decrement() {
      if (this.canDecrement) {
        this.intValue = this.intValue - this.decrementValue
        this.$emit('ipm-decrement', this.intValue)
        this.$emit('input', this.intValue)
      }
    },
  },
  watch: {
    value: {
      handler: function (newVal, oldVal) {
        this.intValue = newVal
      },
    },
  },
  created() {
    this.intValue = this.value
    if (this.step < 1) this.step = 1
    if (this.stepIncrement < 0) this.stepIncrement = 0
    if (this.stepDecrement < 0) this.stepDecrement = 0
    if (this.max < this.min) this.max = undefined
  },
}
</script>
