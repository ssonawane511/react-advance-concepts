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