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