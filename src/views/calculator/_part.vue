<template>
  <div>
    <ProductsList/>
    <router-view />

  </div>
</template>


<script>

import ProductsList from '@/components/products/productsList'
export default {
  components: {
    ProductsList
  }

}
</script>