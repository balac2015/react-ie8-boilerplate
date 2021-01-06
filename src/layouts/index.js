import React from "react"
import { Menu } from "antd"
import ReactRouter, { browserHistory } from "react-router"

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }
    handleMenu({ item, key, keyPath }) {
        browserHistory.push(key)
    }
    handleMenuItem(...args) {
        console.log(args)
    }

    render() {
        return (
            <div>
                <header style={{ height: "46px", background: "#fafafa", border: "1px solid #ddd" }}>
                    <h1>工艺会签管理</h1>
                </header>
                <div style={{ position: "relative", width: "100%" }}>
                    <Menu
                        onClick={this.handleMenu}
                        style={{ width: "185px", position: "absolute", top: "0", left: "0" }}
                    >
                        <Menu.Item key="/" path="/">
                            待办任务列表
                        </Menu.Item>
                        <Menu.Item key="/enquiry" path="/enquiry">
                            会签查询
                        </Menu.Item>
                    </Menu>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: "185px",
                            right: 0,
                            padding: "10px",
                        }}
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
