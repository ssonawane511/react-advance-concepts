import { useEffect } from "react"

const withLogger = (WrappedComponent) => {
    const loggerMessage = (state) => {
        console.log(`${WrappedComponent.name} Component ${state}`);
    } 

    const WithLogger = (props) => {

        useEffect(() =>{
            loggerMessage('mounted')
            return () => {
                loggerMessage('unmounted')
            }
        },[])
    
        useEffect(() => {
            loggerMessage('updated')
        })

        return <WrappedComponent {...props} />
    }

    return WithLogger
}

export default withLogger