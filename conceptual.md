### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library used for building frontend interfaces.
- What is Babel?
Babel is a JavaScript compiler that offers browser support.
- What is JSX?
JSX is JavaScript Syntax Extension, a language - similar to HTML - used to describe the appearance of frontend interfaces.
- How is a Component created in React?
A component is created by declaring a JavaScript function that returns readable JSX.
- What are some difference between state and props?
Props are hard-coded properties of a component, where state describes elements of a component that can change based off of user input.
- What does "downward data flow" refer to in React?
Downward data flow refers to the passing-down of props from a parent component to a child component.
- What is a controlled component?
Controlled components are determined by their state.
- What is an uncontrolled component?
Uncontrolled components have their own state.
- What is the purpose of the `key` prop when rendering a list of components?
Key props help to organize an array of elements.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
The key prop in one component may not have the same index as the key prop in another.
- Describe useEffect.  What use cases is it used for in React components?
useEffect allows a component to use "side-effects" outside of their state.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows you to reference a value in a component without re-rendering.
- When would you use a ref? When wouldn't you use one?

- What is a custom hook in React? When would you want to write one?
Custom hooks are used to reduce redundancy of code, where multiple components share the same business logic that is not necessarily addressed with native hooks.