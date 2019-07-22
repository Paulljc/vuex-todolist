import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toDoList: [],
  },
  mutations: {
    initItems(state, payload){
      state.toDoList = payload.data
    },
    completeItem(state, payload){
      state.toDoList.forEach(item => {
        if(item.id === payload.data.id){
          item.isCompleted = !item.isCompleted;
        }
      });
    },
    editItem(state, payload){
      state.toDoList.forEach(item => {
        if(item.id === payload.data.id){
          item.content = payload.data.content;
        }
      });
    },
    deleteItem(state, payload){
      state.toDoList.splice(state.toDoList.indexOf(payload.data), 1)
    },
    createNewItem(state, payload){
      state.toDoList.unshift(payload.data)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
