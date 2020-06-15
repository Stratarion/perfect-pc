<template>
    <div>
        {{ groupName }} :
        <div v-for="(product, index) in productGroup" :key="index">
            <ActiveSetupItem :initialProduct="product" />
        </div>
        <hr>
    </div>
</template>

<script>

import ActiveSetupItem from '@/components/activeSetup/activeSetupItem'

export default {
    props: ['initialProductGroup', 'groupName'],
    components: {
        ActiveSetupItem
    },
    computed: {
        productGroup() {return this.initialProductGroup}
    }
}
</script>