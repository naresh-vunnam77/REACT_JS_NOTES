# Components

- React components use three concepts to implement these features.

 - Properties- Allows the component to accept input.
 - Events- Make the component capable of controlling DOM events and user interaction.
 - State- Allows the component to continue being stateful. With regard to its state, a stateful component modifies its user interface.


## Class Components

### Basic React Class Components:



**1. Class Component Syntax:**



- Define a class component by extending Component.



```

class MyComponent extends Component {

render() {

return <p>Hello, Class Component!</p>;

}

}

```

**2. Constructor and State:**



- Use the constructor to initialize state and bind event handlers.



```

class Counter extends Component {

constructor(props) {

super(props);

this.state = { count: 0 };

}

// ...

}

```



**3. Lifecycle Methods:**


- Class components have lifecycle methods like componentDidMount and componentDidUpdate.


```

class LifecycleComponent extends Component {

componentDidMount() {

// Executed after the component is first rendered

}



componentDidUpdate(prevProps, prevState) {

// Executed after a component's state or props change

}

}

  ```


###  Intermediate React Class Components:



**1. Event Handling:**



- Handle events using methods within the class.



```

class ButtonClick extends Component {

handleClick() {

// Handle button click

}



render() {

return <button onClick={ this.handleClick }>Click me</button>;

}

}

```

**2. Conditional Rendering in Class Components:**



- Use conditional statements for rendering different content based on state or props.



```

class ConditionalRendering extends Component {

render() {

return this.props.isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;

}

}

```

**3. Props in Class Components:**



- Access props using this.props within class components.



```

class Greeting extends Component {

render() {

return <p>Hello, { this.props.name }!</p>;

}

}



```



### Advanced React Class Components:



**1. Higher - Order Components(HOCs):**



- Use HOCs to enhance class components with additional functionality.

```

const withLogger = (WrappedComponent) => {

return class WithLogger extends Component {

// Add logging functionality

render() {

return <WrappedComponent { ...this.props } />;

}

};

};



const EnhancedComponent = withLogger(MyComponent);

```



**2. Context API in Class Components:**



- Access the Context API in class components using the Consumer component.



```

const MyContext = React.createContext();



class ContextConsumer extends Component {

render() {

return (

<MyContext.Consumer>

{ (value) => <p>Context Value: { value }</p> }

</MyContext.Consumer>

);

}

}

```

**3. Error Boundaries in Class Components:**



Implement error boundaries to catch and handle errors in class components.



```

class ErrorBoundary extends Component {

componentDidCatch(error, errorInfo) {

// Log the error or display a fallback UI

}



render() {

return this.props.children;

}

}

```



### Mastery of React Class Components:



**1. Composition in Class Components:**

- Use composition to combine multiple class components and create a more complex UI.



```

class App extends Component {

render() {

return (

<>

<Header />

<Content />

<Footer />

</>

);

}

}

```

**2. Container Components:**



- Separate container components(handling data and logic) from presentational components for better organization.



```

class ContainerComponent extends Component {

// Data fetching and logic

render() {

return <PresentationalComponent { ...this.props } />;

}

}

```



**3. Class Components and Hooks Integration:**


- Use class components alongside hooks by utilizing the useEffect hook and other hooks within functional components.



```

function FunctionalComponent() {

useEffect(() => {

// Effect logic here

}, []);

// ...

}

```

**4. Lifecycle Methods in Depth:**



in -depth understanding of various lifecycle methods and their use cases, including shouldComponentUpdate for optimization.



**5. Class Component Refs:**



Use refs with class components to access and interact with the DOM or child components.

```

class MyComponent extends Component {

constructor(props) {

super(props);

this.myRef = React.createRef();

}



render() {

return <div ref={ this.myRef }>My Component</div>;

}

}

```

**6. Optimizing Class Component Performance:**



Optimize class component performance by memoizing components using React.memo and other optimization techniques.

## Functional Component

### Basic Functional Component Concepts:

1.  **Functional Component Syntax:**

    -   Functional components are declared using arrow functions or function declarations.


    ```import React from 'react';

    const MyFunctionalComponent = () => {
      return <p>Hello, Functional Component!</p>;
    }; ```

2.  **Props in Functional Components:**

    -   Access props using the function's parameters in functional components.


    ```const Greeting = (props) => {
      return <p>Hello, {props.name}!</p>;
    };```

3.  **State in Functional Components (useState Hook):**

    -   Use the ```useState``` hook to introduce state in functional components.


    ```
    import React, { useState } from 'react';

    const Counter = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };```


### Intermediate Functional Component Concepts:

4.  **Effect Hook in Functional Components (```useEffect```):**

    -   Implement side effects in functional components using the ```useEffect``` hook.


    ```
    import React, { useEffect } from 'react';

    const SideEffectComponent = () => {
      useEffect(() => {
        // Side effect logic
      }, [/* dependencies */]);

      return <p>Functional Component with Side Effect</p>;
    };
    ```

5.  **Context API in Functional Components:**

    -   Access the Context API in functional components using the ```useContext``` hook.


    ```
    import React, { useContext } from 'react';

    const MyContext = React.createContext();

    const ContextConsumer = () => {
      const contextValue = useContext(MyContext);
      return <p>Context Value: {contextValue}</p>;
    };
    ```

6.  **Custom Hooks in Functional Components:**

    -   Define and use custom hooks in functional components for reusable logic.


    ```
    import React from 'react';
    import useCustomHook from './useCustomHook';

    const ComponentWithCustomHook = () => {
      const customValue = useCustomHook();
      return <p>Custom Value: {customValue}</p>;
    };
    ```


### Advanced Functional Component Concepts:

7.  **Use of Refs in Functional Components (```useRef```):**

    -   Employ the ```useRef``` hook for accessing and interacting with DOM elements in functional components.


    ```
    import React, { useRef } from 'react';

    const RefComponent = () => {
      const myRef = useRef();

      const handleClick = () => {
        myRef.current.focus();
      };

      return (
        <>
          <input ref={myRef} />
          <button onClick={handleClick}>Focus Input</button>
        </>
      );
    };
    ```

8.  **State Management with useReducer:**

    -   Manage more complex state logic using the ```useReducer``` hook in functional components.


    ```
    import React, { useReducer } from 'react';

    const initialState = { count: 0 };

    const reducer = (state, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        default:
          return state;
      }
    };

    const ReducerComponent = () => {
      const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        </>
      );
    };
    ```

9.  **Memoization with React.memo:**

    -   Use ```React.memo``` to memoize functional components for performance optimization.


    ```
    import React from 'react';
    const MemoizedComponent = React.memo(({ data }) => {
      // Component logic
    });
    ```


### Mastery of Functional Component Concepts:

10.  **Advanced Hook Combinations:**

  - Combine multiple hooks in intricate ways to achieve complex functionalities.

    ```
    import React, { useState, useEffect, useContext } from 'react';

    const AdvancedHookComponent = () => {
      const [data, setData] = useState([]);
      const { user } = useContext(UserContext);

      useEffect(() => {
        // Fetch data based on user context
        fetchData(user);
      }, [user]);

      return <p>Advanced Hook Component</p>;
    };
    ```

11.  **Testing Strategies for Functional Components:**

  -  Master testing strategies for functional components, including unit tests and integration tests.


    `// Write effective tests for functional components using testing libraries like Jest and React Testing Library.`

12.  **Server-Side Rendering (SSR) Considerations:**

  -  Understand considerations and best practices for server-side rendering when using functional components.


    `// Address SSR considerations, including data fetching and component hyd`