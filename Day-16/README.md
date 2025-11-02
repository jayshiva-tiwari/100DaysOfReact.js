# Day 16
## Working with Array State in React

Build a basic to-do list app that demonstrates working with dynamic arrays in state, adding items, removing items, and toggling completion status using TypeScript for type safety.

- Use useState<Type[]>([]) to manage arrays

- Never mutate state directly — use immutable operations

- Add items: Use spread operator [...array, newItem] or .concat()

- Remove items: Use .filter() to exclude the item

- Update items: Use .map() to create new array with updated item

- Always provide unique key prop when rendering lists

## Build a Basic To-Do List App

- 1️⃣ Define TypeScript Types
- 2️⃣ Create the Main TodoApp Component


| Operation    | Method          | Example                                                                     |
| ------------ | --------------- | --------------------------------------------------------------------------- |
| Add item     | Spread operator | setTodos([...todos, newTodo])                                               |
| Remove item  | .filter()       | setTodos(todos.filter(t => t.id !== id))                                    |
| Update item  | .map()          | setTodos(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t)) |
| Count items  | .length         | todos.length                                                                |
| Filter items | .filter()       | todos.filter(t => t.completed)                                              |


works:
- Add a filter feature: Show "All", "Active", or "Completed" todos
- Add edit functionality: Double-click a todo to edit its text
- Add persistence: Store todos in localStorage
- Add priority levels: Each todo has "low", "medium", "high" priority with color coding
- Add due dates: Use <input type="date"> and show overdue tasks in red

