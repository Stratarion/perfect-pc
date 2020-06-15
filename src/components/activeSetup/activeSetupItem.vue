<template>
  <div>
    {{ product.name }}
    <Counter
      @increment="addAmount"
      @discrement="disAmount"
      :initialCount="product.amount"
    >
      <template slot="additionalButtons">
        <button class="counter-button counter-button-additional" @click="removeProduct">remove</button>
      </template>
    </Counter>
  </div>
</template>

<script>

import Counter from '@/components/utils/counter';

export default {
  props: ['initialProduct'],
  components: {
    Counter
  },
  computed: {
    product() {return this.$store.getters['active_setup/getProduct'](this.initialProduct)},
  },
  methods: {
    addAmount() {
      this.$store.commit('active_setup/pushProduct', { product: this.product })
    },
    disAmount() {
      this.$store.commit('active_setup/deleteProduct', this.product)
    },
    removeProduct() {
      const attr = {
        productName: this.product.name,
        productType: this.product.type
      }
      this.$store.commit('active_setup/clearProductByNameAndType', attr)
    }
  }
}
</script>