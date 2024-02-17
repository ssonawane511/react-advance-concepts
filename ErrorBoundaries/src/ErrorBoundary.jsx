import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: '',
            errorMsg: '',
            isError: false,
        }
    }


    static getDerivedStateFromError(error)
    {
        console.log(error)
        return {isError : true }
    }

    componentDidCatch(error, info)
    {
        this.state.error = error
        this.state.errorMsg = error.message
        console.log({error, info});
    }

    render() {
        return this.state.isError ? 
        (
            <>
                <div> error occurred</div>  
                <h1>
                    {this.state.errorMsg}
                </h1> 
            </>  
        ):
        (
            this.props.children
        )
    }
}