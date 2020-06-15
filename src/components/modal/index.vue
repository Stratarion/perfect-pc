<template>
    <div 
        v-if="modalShow"
        class="modal-wrap"
        @mousedown.self="hideModal"
    >
        <div class="modal">
            <div class="modal-window">
                <slot name="modalSlotMain"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modalShow'],
    methods: {
        hideModal() {
            this.$emit('hideModal')
        }
    }
}
</script>

<style lang="sass">
    .modal
        width: 800px
        background-color: #fff
        z-index: 56
        min-height: 300px
        margin: 200px auto
        &-wrap
            position: fixed
            top: 0
            left: 0
            height: 100%
            width: 100%
            border: 1px solid red
            background-color: #09090990
            z-index: 55

</style>