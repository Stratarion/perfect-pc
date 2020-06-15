<template>
  <div class="counter">
    <button class="counter-button" @click="discrementCounter">-</button>
    {{ withLocalCounter ? initialCount : counter }}
    <button class="counter-button" @click="incrementCounter">+</button>
    <slot name="additionalButtons" />
  </div>
</template>

<script>

export default {
  props: ['initialCount', 'withLocalCounter'],
  data() {
    return {
      counter: 0
    }
  },
  mounted() {this.counter = this.initialCount},
  methods: {
    incrementCounter() {
      this.counter++
      this.$emit('increment')
    },
    discrementCounter() {
      this.counter--
      this.$emit('discrement')
    }
  }
}
</script>

<style lang="sass" scoped>
.counter
  display: inline-flex
  align-items: center
  &-button
    margin: 0 5px
    border-radius: 50%
    line-height: 1
    width: 25px
    height: 25px
    display: flex
    justify-content: center
    align-items: center
    &-additional
      width: auto
      border-radius: 8px
</style>