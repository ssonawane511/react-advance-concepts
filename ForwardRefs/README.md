## Forward ref
It's the dom element reference returned by child element to parent, Suppose a example if we want to focus a input field in a child element on chick of a button in which is in parent component. It is possible using forward ref.

You will have to create a ref variable in parent pass if as ref to child as we pass props
The child forward ref will attach the ref to input field of child

**Chid forward ref**
```javascript
import {forwardRef} from 'react'
const Child = forwardRef( (props,ref) => {
  return (
    <div>
        <label> Enter the name </label>
        <input ref={ref} type="text"/>
    </div>
  )
})
export default Child;
```

**Parent component**
```javascript
import { useRef } from 'react';
import Child from './Child'
const Parent = (props) => {
  const ref = useRef();
  return (
    <div>
        <Child ref={ref} />
    </div>
  )
}
export default Parent;
```

**Usage** 
- Exposing a DOM node to the parent component 
By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into 
