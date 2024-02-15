## pure componets
Rerender only when props or state is changes.
It shallow compare the state with new state object / props with new props object if any key value is change in any of object it will only rerender the component

**syntax**
```javascript
export default class component-name extends PureComponent { }
```

**Usage** 
- Skipping unnecessary re-renders for class components  
React normally re-renders a component whenever its parent re-renders. As an optimization, Pure component can be used a component that React will not re-render when its parent re-renders so long as its new props and state are the same as the old props and state

**Converting a purec component to a functional component**
```javascript
#pure component
class Greeting extends PureComponent {
  render(
    return (<div> </div>)
  )
}

#functional component
const Greeting = memo(function Greeting(props) {
  return( <div> </div>)
});

```

**note**
memo lets you skip re-rendering a component when its props are unchanged.
```javascript
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
````

**Memo Usage**
- Skipping re-rendering when props are unchanged
- Updating a memoized component using state
- Updating a memoized component using a context
- Minimizing props changes
- Specifying a custom comparison function
