# Day 17
## Local State Management - Counter with Multiple Components

Learn "lifting state up" pattern where state is managed in a parent component and shared with multiple child components. Build a counter app with separate display and control components.

#### Local State Management:

- State lives in the closest common ancestor of components that need it

- Parent holds state, children receive it via props

- Children can modify parent state via callback functions passed as props

- This is called "lifting state up"


## Why Lift State Up?

- Single source of truth - Avoids data inconsistency

- Shared state - Multiple components can access same data

- Synchronized updates - All components reflect latest state

- Better data flow - Clear parent-to-child communication


### Counter with Multiple Components
We'll build a counter where:

- Parent (App) holds the count state

- CounterDisplay shows the current count

- CounterControls has buttons to modify count

- CounterInfo shows additional stats


| Concept                | Implementation                           | Purpose                               |
| ---------------------- | ---------------------------------------- | ------------------------------------- |
| State Lifting          | useStatein parent (App)                  | Single source of truth                |
| Props (Data)           | count={count}                            | Pass data down to children            |
| Props (Callbacks)      | onIncrement={handleIncrement}            | Children trigger parent state updates |
| Type Safety            | Interface for each component's props     | TypeScript ensures correct prop types |
| Separation of Concerns | Each component has single responsibility | Maintainable, reusable code           |




        App (Parent)
     [count state: 0]
           |
    +------+------+
    |      |      |
    v      v      v
Display Controls Info
(read)  (modify) (read)


Flow:

- Parent holds state

- Display & Info read state via props

- Controls modify state via callback props

- Parent updates state

- All children re-render with new state


work:
- Add History Feature: Track all count values in an array

```tsx
const [history, setHistory] = useState<number[]>([0]);

const handleIncrement = () => {
  const newCount = count + 1;
  setCount(newCount);
  setHistory([...history, newCount]);
};
```
- Add Undo/Redo: Implement undo and redo buttons using history

- Add Multiple Counters: Create a parent that manages multiple independent counters

- Add Input Field: Let user set count to specific value via text input

- Add Limits: Prevent count from going below 0 or above 100

### Practice Challenge
- Create a Temperature Converter with lifted state:

- Parent holds temperature in Celsius

- One child shows Celsius input

- Another child shows Fahrenheit (calculated)

- User can edit either, both stay in sync