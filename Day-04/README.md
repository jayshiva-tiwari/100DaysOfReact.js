# Props & Reusable Components

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## What Are Props?

Props are inputs to React components — short for properties — that allow data to flow from parent components to child components. Props are a one-way data flow mechanism, meaning they are read-only in the child.


```ts

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Jay" />;
}

```

- Here, name is passed as a prop from App to Welcome.
- Inside the Welcome component, it’s accessed as props.name.


```js
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

###  Task: Create a Reusable ProfileCard Component
Let’s create a ProfileCard that takes three props — name, role, and image — and displays dynamic data.

1️⃣ Create a ProfileCard.js file:
2️⃣ Use this in your App.js file:

###### 💡 Practice Exercises
- Add a clickable LinkedIn button in each card using a prop for profile URL. ✅

- Add conditional rendering: if image is not provided, display a default placeholder. ✅

- Experiment with different card styles or background colors using props. ✅
