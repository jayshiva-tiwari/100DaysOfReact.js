# Day 13 of ReactJs
### Props Destructuring & Default Props in TypeScript

##### Props Destructuring:
Instead of repeatedly writing props.name, props.role, etc., you can destructure props directly in the function parameters for cleaner, more readable code.

##### Build a Team List App
- 1️⃣ Define the Types
- 2️⃣ Create the TeamMember Component with Destructuring & Defaults
- 3️⃣ Create the TeamList Component


| Concept        | Syntax                         | Benefit                                |
| -------------- | ------------------------------ | -------------------------------------- |
| Destructuring  | ({ name, role }: Props)        | Cleaner, more readable code            |
| Default Props  | ({ status = "active" }: Props) | Fallback values when props are omitted |
| Optional Props | avatar?: stringin interface    | TypeScript marks as optional with?     |
| Type Safety    | Interface definition           | Compile-time checks for prop types     |


##  Homework:
- Add more team members with different roles and statuses.

- Add a filter feature: Show only "active" or "away" members using conditional rendering.

- Create an "Add Member" button that adds a new team member to state (practice useState with arrays).

- Experiment with nested destructuring: If you have nested objects in props like user: { name, email }, try destructuring them.
