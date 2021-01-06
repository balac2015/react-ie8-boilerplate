import React from "react"
import Layout from "../layouts"
import { Router, Route, browserHistory, hashHistory, IndexRoute, Redirect } from "react-router"
import Countersign from "./Countersign"
import Enquiry from "./Enquiry"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(e) {
        console.log(e)
    }
    handleSubmit(e) {
        console.log(this.props.children)
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Countersign} />
                    <Route path="/enquiry" component={Enquiry} />
                </Route>
                <Redirect from="*" to="/" />
            </Router>
        )
    }
}

export default App
