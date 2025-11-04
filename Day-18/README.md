# Day 18
## Component Hierarchy & Structure

 Learn how to organize components effectively, establish clear component hierarchy, refactor messy code into reusable, composable components, and follow best practices for scalable React architecture with TypeScript.

#### Component Hierarchy Principles:

- Top-down thinking: Break UI into nested components​

- Single responsibility: Each component does one thing well

- Composition over inheritance: Build complex UIs by combining simple components​

- Proper folder structure: Organize by feature or file type depending on scale​

#### Best Practices:

- Identify common patterns → Extract reusable components

- Keep components small → Easier to test and maintain

- Clear naming → Component name reflects its purpose​

- Logical nesting → Parent manages state, children receive props​


| Aspect          | Before                   | After                              |
| --------------- | ------------------------ | ---------------------------------- |
| Lines per file  | 80+                      | 15-30 (each component)             |
| Reusability     | None                     | All subcomponents reusable         |
| Testability     | Hard (one big component) | Easy (test each piece)             |
| Maintainability | Low                      | High                               |
| Readability     | Cluttered                | Clear purpose per file             |
| Type Safety     | Mixed                    | Dedicated interfaces per component |


work:
- Add More Features: Create ProductBadge for "New", "Sale", "Popular" labels

- Extract Styles: Create a styles.ts file with shared style objects

- Add Tests: Write unit tests for each small component

- Create Layout Component: Extract card container into reusable Card wrapper​

- Build Product Grid: Create ProductGrid component that displays multiple