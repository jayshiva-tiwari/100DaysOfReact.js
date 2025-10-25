# Day 08 of React.js


## Conditional Rendering
Learn how to show or hide components dynamically based on conditions using React's conditional rendering techniques.

### What is Conditional Rendering?  
Conditional rendering in React allows you to display different UI elements based on specific conditions or states. It makes your applications interactive by adapting to user actions and data changes.

#### Common Techniques: 
- if/else statements - Best for complex conditions
- Ternary operator (? :) - Concise inline rendering
- Logical AND (&&) - Render only when condition is true
- Element variables - Store JSX in variables


##  Extended Practice Exercise

Create a Login/Logout component:

- Show "Welcome User!" message when logged in

- Show "Please login" when logged out

- Button text changes: "Login" / "Logout"

- Use conditional rendering for displaying user profile card

#### Key Takeaways

- Use && when you only want to render something if a condition is true

- Use ternary ? : when you want to render one thing OR another

- Use if/else for complex multi-condition logic [source:][source:][source:]

### Task :

- Create a component that shows/hides a user profile card

- Add multiple conditions: show different messages for "Guest", "Member", and "Admin"

- Style the visible/hidden states with smooth CSS transitions