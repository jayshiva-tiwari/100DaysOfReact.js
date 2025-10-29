# State with useState

Learn how to use the React hook useState to add and manage local component state for interactive UI.

### What is useState?

- useState is a React Hook that lets functional components hold and update state (data that can change over time).
- It returns an array with two elements: the current state value and a function to update it.

```ts
const [count, setCount] = useState(initialValue);
```

- count is the current state.
- setCount updates the state.
- When setCount is called, React re-renders the component with the new value.


## Simple Counter App

Build a small counter that increments and decrements the count using React state:


#####  Extra work:
- Add a reset button that sets the counter back to zero. ✅
- Add min/max limits for the counter (e.g., cannot go below 0 or above 10). ✅
- Display a message when limits are reached. ✅