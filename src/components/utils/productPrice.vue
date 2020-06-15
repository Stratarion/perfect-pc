<template>
  <div class="price">
    <div class="price-range">
      <span>cost-range: {{ minCost }} - {{ maxCost }}</span>
      <button
        @click="toggleMoreInfo"
      >details</button>
    </div>
    <div class="price-details" v-if="showMoreInfo">
      <div
        v-for="point in pricelist"
        :key="point.shop"
      >
        {{ point.shop }} ({{ lastData(point.last_data) }}) - {{ point.cost }}
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  props: ['pricelist'],
  data() {
    return {
      showMoreInfo: false,
    }
  },
  computed: {
    costList() {return this.pricelist.map(item => item.cost)},
    minCost() {return Math.min.apply(null, this.costList)},
    maxCost() {return Math.max.apply(null, this.costList)},
  },
  methods: {
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo
    },
    lastData(data) {return moment(data).startOf('day').fromNow();}

  }
}
</script>

<style lang="sass" scoped>
  .price
    &-range
      display: flex
      justify-content: space-between
      align-items: center
      margin: 10px 0 0
</style>
