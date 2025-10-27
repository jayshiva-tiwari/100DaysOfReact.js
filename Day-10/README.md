# Day 10
## Controlled vs Uncontrolled Inputs
Learn the core differences between controlled and uncontrolled form inputs in React, and build a simple login form with a controlled approach.

## Controlled Inputs

- The value of the input is controlled by React state
- Data flows from the component’s state to the input, and from the input back to state via an onChange handler.
- You always know what value is being typed because it lives in your React state.
- Example use case: Forms that require validation, live previews, or data manipulation.

## Uncontrolled Inputs

- The value is managed by the DOM itself, not React.
- React only reads the value by using a ref to access the actual DOM node, for example on form submit.
- Useful for fast/legacy/simple forms where you don’t need live validation.
- Example use case: Contact forms that are only accessed on submit.

Aspect           |  Controlled Inputs       |  Uncontrolled Inputs   
-----------------+--------------------------+------------------------
State            |  Managed by React state  |  Managed by DOM itself 
Data Access      |  Via component state     |  Via refs / DOM access 
Live Validation  |  Easy                    |  Manual, on submit only
Default Value    |  Set via state           |  Set viadefaultValue   
Typical Usage    |  Complex/dynamic forms   |  Simple/legacy forms   

## Simple Login Form (Controlled Approach)

- 1️⃣ Controlled Login Form Example
- 2️⃣ Uncontrolled Login Example (Advanced/Optional)

#### Self work
- Add validation error messages for empty username/password in your controlled login form.

- Try building a registration form with username, email, and password, all typed and controlled.

- Experiment with <input type="checkbox"> as both controlled and uncontrolled with proper TypeScript event typing.
