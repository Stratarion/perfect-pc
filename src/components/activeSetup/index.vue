<template>
    <div>
        <Modal
            :modalShow="showSetupState"
            @hideModal="hideSetupWindow"
        >
            <template v-slot:modalSlotMain>
                <div v-for="(group, index) of setupOptions" :key="index">
                    <ActiveSetupGroup v-if="group.length !== 0" :initialProductGroup="group" :groupName="index"/>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>

import Modal                    from '@/components/modal'
import ActiveSetupGroup         from '@/components/activeSetup/activeSetupGroup'
import { mapState }             from 'vuex'


export default {
    data() {
        return {

        }
    },
    components: {
        Modal,
        ActiveSetupGroup
    },
    computed: {
        ...mapState({
            setupOptions: state => state.active_setup.setup,
            showSetupState: state => state.active_setup.showSetupState
        })
    },
    methods: {
        hideSetupWindow() {
            this.$store.commit('active_setup/toggleSetupState')
        },
    }
}
</script>

<style lang="sass">

</style>