<template>
    <div class="calculator_header">
        <h4>Active item: {{ activePart }}</h4>
        <button @click.prevent="changeSetupWindowState" class="calculator_header-showppc-btn">Show my PPC</button>
    </div>
</template>

<script>

export default {
    computed: {
        activePart() {return this.$store.getters['products/activeType']},
        setupOptions() {return this.$store.getters['active_setup/setupOptions']}
    },
    methods: {
        changeSetupWindowState() {
            this.$store.commit('active_setup/toggleSetupState')
        }
    }
}
</script>

<style lang="sass">
    .calculator_header
        display: flex
        justify-content: space-between
        align-items: center
        padding: 10px 20px
        &-showppc-btn
            border: 1px solid black
            padding: 5px 10px
            cursor: pointer
</style>