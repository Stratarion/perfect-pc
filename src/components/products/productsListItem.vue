<template>
  <div class="product_list_item">
    <h3>{{ product.name }}</h3>
    <Info :product="product" :withoutDetails="true" />
    <Price :pricelist="product.price" />
    <div class="product_list_item-bottom">
      <Counter
        @increment="increment"
        @discrement="discrement"
        :initialCount="localCounter"
        :withLocalCounter="true"
      >
        <template slot="additionalButtons">
          <button class="counter-button counter-button-additional" @click="addProduct">add</button>
          <router-link
            tag="button"
            class="counter-button counter-button-additional"
            :to="{ name: 'product_details', params: { name: product.name} }"
          >details</router-link>

        </template>
      </Counter>
    </div>
  </div>
</template>

<script>

import Price            from '@/components/utils/productPrice';
import Counter          from '@/components/utils/counter';
import Info             from '@/components/utils/productInfo';

export default {
  props: ['product'],
  data() {
    return {
      localCounter: 1
    }
  },
  components: {
    Price,
    Counter,
    Info
  },
  methods: {
    addProduct() {
      const attr = {
        product: this.product,
        amount: this.localCounter
      }
      this.$store.commit('active_setup/pushProduct', attr)
    },
    increment() {
      this.localCounter++
    },
    discrement() {
      if (this.localCounter > 1) {
        --this.localCounter
      }
    }
  }
}
</script>

<style lang="sass">
  .product_list_item
    border: 1px solid #00f
    width: 270px
    height: 270px
    margin: 5px 3px
    padding: 10px
    position: relative
    &-bottom
      position: absolute
      width: 100%
      bottom: 0
      left: 0
      padding: 5px 10px
      border-top: 1px solid blue
</style>