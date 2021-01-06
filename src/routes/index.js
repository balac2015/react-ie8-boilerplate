/* eslint-disable react/jsx-filename-extension */
// We only need to import the modules necessary for initial render
import React from "react"
import { Router, Route, browserHistory, hashHistory, IndexRoute, Redirect } from "react-router"
import App from "../components/App"
import Inbox from "../components/Inbox"
import Message from "../components/Message"
import Count from "../components/Count"
import Echarts from "../components/Echarts"
import Video from "../components/Video"
import Video2 from "../components/Video2"
import Video3 from "../components/Video3"
import Video4 from "../components/Video4"
import { Menu, Icon } from "antd"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const Routes1 = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Inbox} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
            <Route path="count" component={Count} />
            <Route path="chart" component={Echarts} />
            <Route path="video" component={Video} />
            <Route path="video2" component={Video2} />
            <Route path="video3" component={Video3} />
            <Route path="video4" component={Video4} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)

class Routes extends React.Component {
    state = {
        current: "app",
    }

    handleClick(e) {
        console.log("click", e)
        // this.setState({
        //     current: e.key
        // })
        state = {
            current: e.key,
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Menu mode="horizontal" theme="dark" onClick={this.handleClick}>
                    <Menu.Item key="mail">
                        <Route type="mail" path="/" component={App} />
                    </Menu.Item>
                    <Menu.Item key="count">
                        <Route type="count" path="count" component={Count} />
                    </Menu.Item>
                </Menu>
                <Redirect from="*" to="/" />
            </Router>
        )
    }
}

// export default Routes
export default Routes1
