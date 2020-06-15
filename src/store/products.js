import FakeData                     from '@/fake_data/products'

const state = () => ({
    activeType: '',
    processor: [],
    motherboard: [],
    ram: [],
    graphics_card: [],
    cooling_system: [],
    power_supply: [],
    case_block: [],
    periphery: [],
})


const mutations = {
    setActiveType(state, activeType) {
        state.activeType = activeType
    },
    setProtuctByActiveType(state, products) {
        state[state.activeType] = products
    }
    
}
const actions = {
    // пример асинхронного action
    // async fetch({commit}, activeType) {
    //     const activeType = ''
    //     commit('setActiveType', activeType)
    // }
    setProtuctByActiveType({commit, state}) {
        const freshProducts = FakeData[state.activeType]
        commit('setProtuctByActiveType', freshProducts)
    }
}

const getters = {
    getProduct: s => product => { return s[product.type].find(item => item.name === product.name)},
    activeType: s => s.activeType
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}