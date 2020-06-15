<template>
  <div class="button-wrap">
    <button
      :class="{
        small: modifier === 'small'
      }"
      @click="customClick"
    >{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: ['text', 'modifier'],
  computed: {

  },
  methods: {
    customClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
  .button
    &-wrap
      .small
        width: 60px
</style>