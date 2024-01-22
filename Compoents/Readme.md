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