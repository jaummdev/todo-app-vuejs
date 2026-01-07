# 📝 Todo App - Vue.js

Um aplicativo de lista de tarefas (Todo List) desenvolvido com Vue.js 3, utilizando a **Options API (Vue JS)** e **Vuex** para gerenciamento de estado e **Tailwind CSS** para estilos. Este projeto foi desenvolvido com foco em aprendizado e prática dos conceitos fundamentais do Vue.js.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Vuex 4** - Gerenciamento de estado centralizado
- **Vue CLI** - Ferramenta de desenvolvimento oficial
- **Tailwind CSS v4** - Framework CSS utility-first
- **Axios** - Cliente HTTP para requisições à API
- **PostCSS** - Processamento de CSS
- **ESLint** - Linter para qualidade de código

## 📚 Conceitos Aprendidos e Praticados

### Options API

Este projeto utiliza a **Options API** do Vue.js, que é uma forma mais tradicional e declarativa de escrever componentes Vue. Através dela, pratiquei:

- **Data Properties**: Gerenciamento de estado reativo local nos componentes
- **Methods**: Definição de métodos para manipulação de eventos e lógica de negócio
- **Lifecycle Hooks**: Uso de hooks como `created()` para carregar dados iniciais
- **Computed Properties**: Propriedades computadas (quando necessário)
- **Props**: Passagem de dados entre componentes pai e filho

### Estrutura de Componentes Vue

Aplicação dos princípios de **componentização** e **reutilização**:

- **Componentes Reutilizáveis**: Criação de componentes modulares e independentes
- **Comunicação entre Componentes**: Uso de props e eventos para comunicação
- **Single File Components (SFC)**: Organização de template, script e style em um único arquivo `.vue`
- **Hierarquia de Componentes**: Estrutura clara de componentes pais e filhos

### Vuex - Gerenciamento de Estado

Implementação completa do padrão **Flux** com Vuex:

- **State**: Estado centralizado da aplicação (lista de todos)
- **Mutations**: Modificações síncronas do estado (storeTodos, storeTodo, deleteTodo)
- **Actions**: Operações assíncronas (getTodos, addTodo, updateTodo, deleteTodo)
- **Getters**: Acesso computado ao estado (quando necessário)
- **Integração com API**: Uso de Axios dentro das actions para comunicação com backend

### Requisições HTTP

- Integração com API REST usando **Axios**
- Tratamento de requisições assíncronas
- Gerenciamento de loading states
- Tratamento de erros

### Estilização com Tailwind CSS

- Uso de classes utilitárias do Tailwind CSS v4
- Design responsivo com breakpoints
- Customização de temas e cores
- Componentes estilizados de forma moderna e limpa

## ✨ Funcionalidades

- ✅ **Adicionar tarefas**: Criação de novas tarefas na lista
- ✅ **Listar tarefas**: Visualização de todas as tarefas cadastradas
- ✅ **Editar tarefas**: Edição inline do título das tarefas
- ✅ **Marcar como concluída**: Alternar status de conclusão das tarefas
- ✅ **Excluir tarefas**: Remoção de tarefas da lista
- ✅ **Estado de loading**: Feedback visual durante carregamento de dados
- ✅ **Interface responsiva**: Design adaptável para diferentes tamanhos de tela

## 🎯 Objetivos de Aprendizado Alcançados

✅ Compreensão da estrutura e organização de projetos Vue.js  
✅ Domínio da Options API e seus recursos  
✅ Implementação de gerenciamento de estado com Vuex  
✅ Criação de componentes reutilizáveis e modulares  
✅ Integração com APIs REST  
✅ Estilização moderna com Tailwind CSS  
✅ Boas práticas de desenvolvimento Vue.js

---

**Desenvolvido por João Carlos (Baseado em curso).**
