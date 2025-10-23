#  Events & Handlers
 Learn how to respond to user actions in React using event handlers (like button clicks) and see how React manages events differently than plain HTML.


### Event Handling in React
- React uses its synthetic event system, ensuring events work consistently across browsers.

- Event attributes are named using camelCase (e.g. onClick, onChange).

- To respond to user action, attach handlers in curly braces:

```js
<button onClick={handleClick}>Click Me</button>
```

- Handlers can be regular functions or arrow functions.

###  Button Click Counter
Let’s make a simple counter that increases every time a button is clicked.
- 1️⃣ Create CounterButton.js:
- 2️⃣ Use in App.js:


#### Key Points
- Event handlers must be passed as references, not called directly.
Example: onClick={handleClick} is correct; onClick={handleClick()} is incorrect.

- You can pass arguments via inline arrow functions:

```js
<button onClick={() => handleClick("Hello!")}>Click</button>
```
- Use state (useState) inside handlers for interactive UI.

##### Challenge
Change the counter to decrement when you click a second button.
Try making a button that alerts a custom message using onClick.
