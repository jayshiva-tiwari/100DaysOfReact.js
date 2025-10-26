# Day 09 of React js

### Passing Data Between Parent and Child — Theme Toggle

Learn how to pass data (props) from parent to child and use it to build a Theme Toggle feature.

##### React’s Data Flow:


- Data flows one-way: from parent to child via props
- Parents own state, children receive data and functions as props.
- To let a child update parent state, pass a function prop from parent down.

## Example—Theme Toggle:

Let’s build a two-component theme toggler:
- Parent holds the theme state (“light” or “dark”) and passes it (and a toggle function) down.
- Child receives the theme and toggle function as props, and lets user click to toggle.


#### Toggle Theme Demo
- 1️⃣ Parent Component (App.js)
- 2️⃣ Child Component (ThemeToggle.js)

### Key Points
- Parent controls core state, passes it down as props.
- Child components use the data and can trigger functions to update state in parent.
- This pattern (passing state & updater function as props) is the backbone of React’s “lifting state up” architecture.

### Practice Challenges
- Add a theme icon that changes (sun/moon) when theme is toggled.
- Add more themes (e.g., "blue", "green") using a dropdown.
- Ensure all UI components adapt their styles based on the selected theme.
