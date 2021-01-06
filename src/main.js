/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/index"
// import App from './components/Root'
// import App from './view/TestPage'
import App from "./view/App"
import "antd/dist/antd.min.css"
import "./global.css"

const MOUNT_NODE = document.getElementById("container")

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        MOUNT_NODE,
    )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__) {
    if (module.hot) {
        // Development render functions
        const renderApp = render
        const renderError = error => {
            const RedBox = require("redbox-react").default

            ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
        }

        // Wrap render in try/catch
        render = () => {
            try {
                renderApp()
            } catch (error) {
                renderError(error)
            }
        }

        // Setup hot module replacement
        module.hot.accept("./routes/index", () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE)
                render()
            }),
        )
    }
}

render()
