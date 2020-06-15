import Vue from 'vue'
const state = () => ({
    setup: {
        processor: [],
        motherboard: [],
        ram: [],
        graphics_card: [],
        cooling_system: [],
        power_supply: [],
        case_block: [],
        periphery: []
    },
    showSetupState: false
})


const mutations = {
    showSetup(state) {
        state.showSetupState = true
    },
    hideSetup(state) {
        state.showSetupState = false
    },
    toggleSetupState(state) {
        state.showSetupState = !state.showSetupState
    },
    // Переписать позицию, исопльзую продукт
    setProtuct(state, product) {
        state.setup[product.type] = product
    },
    // Добавить продукт в позицию
    pushProduct(state, {product, amount}) {
        const storeProduct = state.setup[product.type].find(item => item.name === product.name)
        const computedAmount = amount || 1
        if (storeProduct) {
            Vue.set(storeProduct, 'amount', storeProduct.amount + computedAmount)
            return
        }
        product.amount = computedAmount
        state.setup[product.type].push(product)
    },
    // Полная очистка позиции
    clearProductType(state, productType) {
        state.setup[productType] = []
    },
    clearProductByNameAndType(state, attr) {
        const indexToDelete = state.setup[attr.productType].findIndex(item => {
            return item.name === attr.productName
        })
        state.setup[attr.productType].splice(indexToDelete, 1);
    },
    // Удалить 1 элемент по его имени
    deleteProduct(state, product) {
        const storeProduct = state.setup[product.type].find(item => item.name === product.name)

        if (product.amount > 1) {
            storeProduct.amount -= 1
            return
        }
        state.setup[product.type] = state.setup[product.type].filter(item => item.name !== product.name)
    }
}

const actions = {
    showSetup({commit}) {
        commit('showSetup')
    },
    hideSetup({commit}) {
        commit('hideSetup')
    },
    toggleSetupState({commit}) {
        commit('toggleSetupState')
    },
    // Переписать позицию, исопльзую продукт
    setProtuct({commit}, product) {
        commit('setProtuct', product)
    },
    // Добавить продукт в позицию
    pushProduct({commit}, product) {
        commit('pushProduct', product)
    },
    // Полная очистка позиции
    clearProductType({commit}, productType) {
        commit('clearProductType', productType)
    },
    // Удаление продукта из корзины
    clearProductByNameAndType({commit}, attr) {
        commit('clearProductByName', attr)
    },
    // Удалить 1 элемент по его имени
    deleteProduct({commit}, product) {
        commit('deleteProduct', product)
    }
}

const getters = {
    processor: s => s.setup.processor,
    motherboard: s => s.setup.motherboard,
    ram: s => s.setup.ram,
    graphics_card: s => s.setup.graphics_card,
    cooling_system: s => s.setup.cooling_system,
    power_supply: s => s.setup.power_supply,
    case_block: s => s.setup.case_block,
    periphery: s => s.setup.periphery,
    setupOptions: s => s.setup,
    showSetupState: s => s.showSetupState,
    getProduct: s => product => { return s.setup[product.type].find(item => item.name === product.name)},
    getProductAmount: s => product => {
        const currentProduct = s.setup[product.type].find(item => item.name === product.name)
        return currentProduct.amount;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}