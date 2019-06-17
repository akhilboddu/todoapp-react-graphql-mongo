const Todo = require('../models/todos.model')

const TodosResolver =  {
    Query: {
        todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async (_, { text }) => {
            const todo = new Todo({ text, complete: false}) //create instance
            await todo.save() //returns a promise, so have to await //save to DB
            return todo //return it
        },
        updateTodo: async (_, { id, complete }) => {
            await Todo.findByIdAndUpdate(id, { complete }) 
            return true
        },
        removeTodo: async (_, { id }) => {
            await Todo.findByIdAndRemove(id) 
            return true
        }
    }
};

module.exports = TodosResolver