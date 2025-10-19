## Day 02 of React.js 
##### Understand JSX - JSX stands for JavaScript XML, a syntax extension that lets you write HTML-like code inside JavaScript files. It makes UI creation intuitive and readable.

example:
```const element = <h1>Hello, world!</h1>; ```

Behind the scenes, JSX is transformed into JS:

```const element = React.createElement('h1', null, 'Hello, world!');```

#### How JSX is works !
###### JSX is not understood by browsers directly — it gets converted into JavaScript using a tool called Babel. Each JSX tag represents a React element, JSX elements must return a single root element.

### Task: Display a Dynamic Welcome Message
##### Open src/App.js
##### Add a JavaScript variable for your name or time of day.
##### Embed the variable inside JSX using curly braces {}.

```
import React from "react";

function App() {
  const userName = "Jay";
  const time = new Date().getHours();
  const greeting =
    time < 12 ? "Good Morning" : time < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div>
      <h1>
        {greeting}, {userName}!
      </h1>
      <p>Welcome to Day 2 of your React Challenge.</p>
    </div>
  );
}

export default App;
```

