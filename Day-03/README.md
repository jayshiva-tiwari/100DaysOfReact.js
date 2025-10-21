## what functional components are and how to compose a UI using multiple reusable parts
### Functional components:
#### Functional Components are the simplest way to write components in React — just plain JavaScript functions that return JSX. They help structure your UI into small, independent, and reusable pieces.

example:
```
function Welcome() {
  return <h1>Hello, React Learner!</h1>;
}

export default Welcome;
```

##### A functional components is a JavaScript function returning JSX.
Can receive input data via props.

##### Must start with a capital letter (e.g., Header, not header).

#### functional components form the backbone of modern React apps, where components receive props, return JSX, and React’s virtual DOM keeps updating the view efficiently.

### Create a Header and Footer Component
- Create Header.js
- Create Footer.js
- Update App.js


###### For practice task
- Change the title text in Header dynamically using a variable.

- Add a current year in the Footer using JavaScript expression: {new Date().getFullYear()}.

- Add an extra component (like Content) between Header and Footer for practice.