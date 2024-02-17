## Why Portals
Portals provides a first class way to render children in to the DOM node that exists outside of Dom hierarchy of parent component still it can use all the functionalities of Main Dom 

This portal component will be same react children and can access the patent state whenever required
but it will appreact in different dom node in browser 

Node here is the element in the dom tree of page

**syntax**
```javascript
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const { type, msg} = props;

  return ReactDOM.createPortal(
    <div className={`modal-wrap ${type}`} > 
      <h1> { msg } </h1>
    </div>,
    // where we want to place the element in DOM tree 
    document.getElementById('portal'));
} 
export default Modal;

```

**Usage** 
- Rendering to a different part of the DOM
- Rendering a modal dialog with a portal
- Rendering React components into non-React server markup
- Rendering React components into non-React DOM nodes
