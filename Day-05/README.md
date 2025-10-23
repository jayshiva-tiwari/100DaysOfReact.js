# Working with Lists and Keys

## Why Lists and Keys Matter:

In React, you’ll often render multiple items—like users, products, or posts—from an array. React relies on keys to track each item’s identity efficiently during updates or re-rendering.

- Use .map() to loop through arrays and return elements.
- Assign a unique key prop to each element to ensure stable performance.


```js
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

This works—but using index as a key is not ideal when items change or reorder. Instead, use a unique ID if possible.

### Task: Display a List of Users Dynamically
Let’s build a UserList component that dynamically displays users’ details using unique IDs as keys.

- 1️⃣ Create UserList.js
- 2️⃣ Update App.js
