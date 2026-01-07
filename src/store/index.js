import { createStore } from 'vuex'
import { todoService } from '../services/todoService'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },

    storeTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.push(payload)
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    }
  },
  actions: {
    getTodos({ commit }) {
      return todoService.getTodos()
        .then(({ data }) => commit('storeTodos', data))
    },
    addTodo({ commit }, data) {
      return todoService.addTodo(data).then(({ data }) => {
        commit('storeTodo', data)
      })
    },
    updateTodo({ commit }, { id, data }) {
      return todoService.updateTodo(id, data).then(({ data }) => {
        commit('storeTodo', data)
      })
    },
    deleteTodo({ commit }, id) {
      return todoService.deleteTodo(id).then(() => {
        commit('deleteTodo', id)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
