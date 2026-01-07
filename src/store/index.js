import { createStore } from 'vuex'
import axios from "axios"

const API_URL = 'http://localhost:3000'

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
      return axios.get(API_URL + '/todos')
        .then(response => {
          commit('storeTodos', response.data)
        })
    },
    addTodo({ commit }, data) {
      return axios.post(API_URL + '/todos', data).then((response) => {
        commit('storeTodo', response.data)
      })
    },
    updateTodo({ commit }, { id, data }) {
      return axios.put(API_URL + `/todos/${id}`, data).then((response) => {
        commit('storeTodo', response.data)
      })
    },
    deleteTodo({ commit }, id) {
      return axios.delete(API_URL + `/todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
