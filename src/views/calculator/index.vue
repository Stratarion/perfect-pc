<template>
  <div class="calculator">
    <div class="calculator-left">
      <CalculatorMenu />
    </div>
    <div class="calculator-right">
      <CalculatorHeader />
      <CalculatorFilter />
      <router-view />
    </div>
  <ActiveSetup />
  </div>
</template>

<script>

import ActiveSetup                  from '@/components/activeSetup'
import CalculatorMenu               from '@/components/navigation/calculatorMenu'
import CalculatorFilter             from '@/components/filters/calculatorFilter'
import CalculatorHeader             from '@/components/calculatorHeader'


export default {
  components: {
    ActiveSetup,
    CalculatorMenu,
    CalculatorFilter,
    CalculatorHeader
  },
}
</script>

<style lang="sass">
  .calculator
    display: flex
    &-left
      width: 200px
      border: 1px solid #0f0
    &-right
      width: 1400px
      border: 1px solid #ff0
      &::-webkit-scrollbar
        width: 0
</style>