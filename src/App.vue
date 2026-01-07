<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <h1 class="text-xl text-center text-white font-bold mb-4">Todo App - Vue JS</h1>
      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoFormAdd />

        <TodoItems v-if="$store.state.todos.length" />

        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoEmpty from './components/TodoEmpty.vue';
import TodoItems from './components/TodoItems.vue';

export default {
  name: 'App',
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoEmpty,
    TodoItems
  },
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('getTodos').finally(() => this.loading = false)
  }
}
</script>