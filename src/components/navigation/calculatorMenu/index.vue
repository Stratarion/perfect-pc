<template>
  <div class="calculatorMenu-wrap">
    <div class="calculatorMenu">
      <div
        class="calculatorMenu-item"
        v-for="(menuItem, index) in menuList"
        :key="index"
        
      >
        <router-link
          :to="{ name: '_part', params: { part: menuItem } }"
          class="calculatorMenu-item-link"
          tag="div"
          active-class="open"
        >
          {{ menuItem }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

const MENULIST = [
    'processor',
    'motherboard',
    'ram',
    'graphics_card',
    'cooling_system',
    'power_supply',
    'case_block',
    'periphery'
]

export default {
  data() {
    return {
      menuList: MENULIST
    }
  },
  computed: {
    activeType() {{return this.$store.getters['products/activeType']}}
  },
  methods: {
    openCalculatorItem(menuItem) {
      this.$store.commit('products/setActiveType', menuItem)
    }
  }
}
</script>

<style lang="sass">
  .calculatorMenu-wrap::-webkit-scrollbar
    width: 0px;
  .calculatorMenu
    display: flex
    width: 100%
    flex-direction: column
    justify-content: flex-start
    &-wrap
      height: calc( 100vh - 60px )
      position: fixed
      overflow: auto
    .open
      background-color: #aeaeae
      color: blue
    &-item
      border: 1px solid red
      display: flex
      justify-content: center
      align-items: center
      height: 200px
      width: 200px
      cursor: pointer
      color: red
      &-link
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
</style>