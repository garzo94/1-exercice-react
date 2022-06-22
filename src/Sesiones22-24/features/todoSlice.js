import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState =
{todos:[{
    id:1,
    text:'My todo 1 goes here!',
    completed: false,
   

},
{
    id:2,
    text:'My todo 2 goes here!',
    completed: false,
   
}],
filter: 'All'
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
        reducer(state, action){
            state.todos.push(action.payload)
        },
        prepare(text){
            return{
                payload:{
                    id: nanoid(),
                    text,
                    complete: false,
                   
                }
            }
        }
            
    },
      
    
    todoToggled(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    filterTodos: (state, action) => {
        state.filter = action.payload

    }
  }
})
export const selectAllTodos = (state) => state.todos;
export const { todoAdded, todoToggled, filterTodos } = todosSlice.actions
export default todosSlice.reducer