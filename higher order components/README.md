
## Benefits of Using Higher-Order Components in React
- **Reusability** : HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
- **Flexibility**: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
- **Separation of concerns**: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
- **Composition**: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.

Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

## How to create a higher order component - WithLogger ( logs weather a component is mounted or not )

```javascript

const withLogger = ( WrappedComponent ) => {
  
  // Log function take state as paramert
  const logMessage = (state) => {
    console.log(`${WrappedComponent.name} is ${state}`);
  }

  // Hoc arroud component
  const WithLogger = (props) => {

    // effect trigger when first time component mounted and unmounted on browser
    useEffect(() => {
      
      logMessage("Mounted");

      return (() => {
        logMessage("unmounted");
      })
      
    },[])
    // return WrappedComponent with props passed to the HOC
    return <WrappedComponent {...props} />}
  }

  return WithLogger 
}

export default withLogger;
```
