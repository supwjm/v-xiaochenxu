import shop from '@/api/shop'
import { SHOP_LIST,CLEAR_SHOP_LIST } from '@/store/mutations-type'

const state = {
  shopList:{}
}

const mutations = {
  [CLEAR_SHOP_LIST] (state,data) {
    return state.shopList = {};
  },
  [SHOP_LIST] (state, { data }) {
    state.shopList = data
  }
}

const actions = {
  async getList ({ state, commit }, param) {
    let data = await shop.getList(param)
    commit(SHOP_LIST, {data})
  }
}

export default {
  state,
  mutations,
  actions
}
