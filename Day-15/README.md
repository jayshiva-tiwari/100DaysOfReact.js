# Day 15 of ReactJS
## What are React Fragments?
React Fragments let you group multiple elements together without adding extra nodes to the DOM. They solve the problem of JSX requiring a single parent element.
### Why Use Fragments Instead of <div>?

- ✅ No extra DOM nodes - Cleaner, lighter DOM tree

- ✅ Better performance - Less memory usage, faster rendering

- ✅ Preserves CSS layouts - Doesn't break Flexbox/Grid parent-child relationships

- ✅ Semantic HTML - Doesn't add unnecessary markup

- ✅ Accessibility - Better for screen readers

### Two Ways to Write Fragments
 - 1. Full Syntax
 ```js
 import React from "react";

const UserInfo: React.FC = () => {
  return (
    <React.Fragment>
      <h2>John Doe</h2>
      <p>Software Engineer</p>
      <p>Mumbai, India</p>
    </React.Fragment>
  );
};

 ```
 - 2. Short Syntax
 ```js
const UserInfo: React.FC = () => {
  return (
    <>
      <h2>John Doe</h2>
      <p>Software Engineer</p>
      <p>Mumbai, India</p>
    </>
  );
};
 ```
with second method you cannot accept props like key. 

