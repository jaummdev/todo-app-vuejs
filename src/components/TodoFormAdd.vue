<template>
    <form @submit.stop.prevent="addTodo"
        class="flex items-center px-4 bg-gray-900 h-15 rounded-md border-l-2 border-blue-400 mb-3">
        <input v-model="title" placeholder="Adicione um novo item ..." type="text"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3">

        <button :disabled="!title"
            class="text-blue-400 hover:bg-blue-400/25 disabled:text-gray-500 disabled:hover:bg-transparent  px-4 py-2 rounded-full text-sm disabled:cursor-not-allowed cursor-pointer font-semibold focus:outline-none"
            type="submit">
            Adicionar
        </button>
    </form>
</template>

<script>
export default {
    name: "TodoFormAdd",
    data() {
        return {
            title: "",
        }
    },
    methods: {
        addTodo() {
            if (!this.title) return;

            this.$store.dispatch("addTodo", {
                title: this.title,
                completed: false,
            }).finally(() => this.title = '')
        }
    }
}
</script>