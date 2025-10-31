# Day 14
## Handling Forms in React with TypeScript

Learn how to build controlled forms in React using TypeScript, handle form submission, manage multiple input fields, and implement basic validation.

#### Controlled Forms in React:

- Form input values are controlled by React state using useState.

- Every change triggers an onChange handler that updates state.

- Form submission is handled with an onSubmit handler.

- TypeScript provides type safety for form data and events.​

#### Key Event Types in TypeScript:

- React.ChangeEvent<HTMLInputElement> - for input changes

- React.ChangeEvent<HTMLTextAreaElement> - for textarea changes

- React.FormEvent<HTMLFormElement> - for form submission

#### Build a Contact Form with Validation
- 1️⃣ Define Form Data Interface
- 2️⃣ Create the Contact Form Component


| Feature           | Implementation                                      | Purpose                    |
| ----------------- | --------------------------------------------------- | -------------------------- |
| Type Safety       | Interface for form data & errors                    | Catch bugs at compile-time |
| Controlled Inputs | valueandonChangeon each field                       | React manages input state  |
| Validation        | Check required fields, email format, message length | Ensure data quality        |
| Error Display     | Show errors below each field                        | User-friendly feedback     |
| Success Message   | Show confirmation after submit                      | Better UX                  |
| Dynamic Styling   | Red border on error fields                          | Visual error indication    |


##### Homework:
- Add more fields: Phone number, subject dropdown, checkbox for "Subscribe to newsletter"

- Implement real-time validation: Validate as user types (on onChange instead of just onSubmit)

- Add a character counter: Show remaining characters for the message field (e.g., "150/500 characters")

- Try a form library: Install and try react-hook-form with TypeScript for cleaner code


- Bonus Challenge - Using React Hook Form:

```bash
npm install react-hook-form
```
```tsx
import { useForm } from "react-hook-form";

const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

const onSubmit = (data: ContactFormData) => {
  console.log(data);
};


<input {...register("name", { required: "Name is required" })} />
```

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
