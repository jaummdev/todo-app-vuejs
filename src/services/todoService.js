const STORAGE_KEY = 'todos-app';
const API_DELAY = 500; // 500ms de delay para simular latência da API

// Função helper para simular delay de rede
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const todoService = {
    async getTodos() {
        await delay(API_DELAY);
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        return Promise.resolve({ data: todos });
    },

    async addTodo(todo) {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const newTodo = {
            id: Date.now(),
            ...todo,
            createdAt: new Date().toISOString()
        };
        todos.push(newTodo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        return Promise.resolve({ data: newTodo });
    },

    async updateTodo(id, updates) {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const index = todos.findIndex(t => t.id === id);
        if (index >= 0) {
            todos[index] = { ...todos[index], ...updates };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
            return Promise.resolve({ data: todos[index] });
        }
        return Promise.reject(new Error('Todo não encontrado'));
    },

    async deleteTodo(id) {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const filtered = todos.filter(t => t.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return Promise.resolve({ data: {} });
    }
};