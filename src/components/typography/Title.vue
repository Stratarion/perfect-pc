<template>
  <div class="title">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="sass" scoped>
  .title
    display: flex
    align-items: center
</style>