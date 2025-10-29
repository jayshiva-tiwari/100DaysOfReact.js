# Day 12
### Class vs Functional Components 
Learn the difference between React class and functional components, and practice converting an old class component (with state and props) to a modern functional component using TypeScript.

```
Feature         |  Functional Component                  |  Class Component                            
----------------+----------------------------------------+---------------------------------------------
Syntax          |  Function with typed props             |  ES6 Class extending React.Component        
State           |  React Hooks (useState,useEffect)      |  this.state,this.setState()                 
Lifecycle       |  useEffect                             |  Lifecycle methods (componentDidMount, etc.)
Event handling  |  No binding needed                     |  Must bind methods or use arrow functions   
Typing in TS    |  Props via interface, state via hooks  |  Props as generic, state object             
Boilerplate     |  Minimal                               |  More                                       
Future-proof    |  Recommended                           |  Supported but legacy                       
                |                                        |                                             
```

Example Conversion (TypeScript):


### Key Changes & Best Practices

State:
- Class: this.state.count, this.setState
- Function: useState<number>(0), setCount

Props:
- Typed using interface in both

Event handlers:
- No need for arrow function or this binding in functional.

Lifecycle:
- Use hooks like useEffect for side effects.

Cleaner code:
- Less boilerplate, more readable, fully TypeScript-typed.


###### Homework (TypeScript):
- Convert a legacy class component with both state and lifecycle methods (e.g., auto-refresh with componentDidMount) to a function using useEffect.

- Add prop types and default props in your new functional component.

- Compare bundle size and readability after conversion.

- Try using React.FC<Props> vs just plain ({prop}: Props) function signature and note TypeScript IDE support.