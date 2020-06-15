<template>
    <div class="products_list-wrap">
        <div class="products_list">
            <div class="products_list-item" v-for="(product, index) in productsList" :key="index">
                <ProductsListItem
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>

import ProductsListItem             from './productsListItem'

export default {
    computed: {
        activeType() {return this.$route.params.part},
        productsList() {
            return this.$store.state.products[this.activeType]
        }

    },
    components: {
        ProductsListItem
    },
    methods: {
        setProducts() {
            this.$store.commit('products/setActiveType', this.$route.params.part)
            this.$store.dispatch('products/setProtuctByActiveType')
        }
    },
    beforeMount() {
        this.setProducts()
    },
    updated() {
        this.setProducts()
    }
}
</script>

<style lang="sass">
    .products_list
        border: 1px solid black
        display: flex
        flex-wrap: wrap
        padding: 5px
        &-wrap
            height: 100%;
            position: fixed;
            overflow: auto;
            width: 1400px
            padding-bottom: 150px;
            &::-webkit-scrollbar
                width: 0

</style>