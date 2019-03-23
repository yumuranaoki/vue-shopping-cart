import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface CartItem {
  id: number,
  name: string,
  amount: number,
}

interface State {
  selected: Array<CartItem>
}

const state: State = {
  selected: [],
}

export default new Vuex.Store({
  state,
  getters: {
    count: (state: State) => state.selected.length,
    selected: (state: State) => state.selected
  },
  mutations: {
    add(state, payload) {
      let isNew = true
      state.selected.forEach((element, index, array) => {
        if (element.id === payload.id) {
          array[index].amount += 1
          isNew = false
        }
      })
      if (isNew) {
        state.selected.push(payload)
      }
    },
    remove(state, payload) {
      state.selected.forEach((element, index, array) => {
        if (element.id === payload.id) {
          array.splice(index, 1)
        }
      })
      console.log(state.selected)
    }
  },
  actions: {}
});
