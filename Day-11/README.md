# Day 11 of ReactJS

## Inline, External & CSS Modules

 Learn three different ways to style React components—inline styles, external CSS files, and CSS Modules—and practice applying all three in your TypeScript React project.


#### 1. Inline Styles
- Styles are written directly in JSX as an object with camelCased properties.
- Useful for quick, dynamic styling.

#### 2. External CSS
- Use standard .css files imported into your component or globally.
- Familiar way, great for global styles.

#### 3. CSS Modules
- CSS files with a .module.css extension enable scoped styles specific to the component—avoiding style conflicts.
- Popular in TypeScript as it provides type safety and encapsulation.


Method        |  Usage                |  Advantages                              |  Notes                             
--------------+-----------------------+------------------------------------------+------------------------------------
Inline        |  style={{}}           |  Dynamic styling, easy for small styles  |  No pseudo classes or media queries
External CSS  |  .css+ import         |  Familiar, global styles                 |  Risk of style conflicts           
CSS Modules   |  .module.css+ import  |  Scoped styles, type-safe in TS          |  Best for big projects             


#### Self work:
- Create a single Day11Demo.tsx that includes all three components (InlineStyled, ExternalStyled, ModuleStyled).

- Experiment with media queries in the external CSS.

- Try passing dynamic colors as props to inline styles for more practice.
