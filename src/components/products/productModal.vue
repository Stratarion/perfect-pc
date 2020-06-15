<template>
  <div class="product-modal">
    <Modal
      :modalShow="true"
      @hideModal="hideModal"
    >
      <template v-slot:modalSlotMain>
        {{ product.name }}
        <Info
          :product="product"
        />
      </template>
    </Modal>
  </div>
</template>

<script>

import Modal            from '@/components/modal'
import Info             from '@/components/utils/productInfo';

export default {
  components: {
    Modal,
    Info
  },
  computed: {
    productName() {return this.$route.params.name},
    productType() {return this.$route.params.part},
    product() {
      const options = {
        type: this.productType,
        name: this.productName
      }
      return this.$store.getters['products/getProduct'](options)},
  },
  methods: {
    hideModal() {
      this.$router.push({ name: '_part', params: { part: this.productType } })
    }
  }
}
</script>