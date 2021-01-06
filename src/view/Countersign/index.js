// 工艺会签列表

import React from "react"
import { Icon, Table, Button, Tooltip, Menu, message, Dropdown, Breadcrumb } from "antd"
import Mock from "mockjs"

const columns = [
    {
        title: "",
        key: "flag",
        dataIndex: "flag",
        render: (text = "smile-circle") => <Icon type={text} />,
    },
    {
        title: "名称",
        dataIndex: "name",
        width: 280,
        render: text => <a href="#">{text}</a>,
    },
    {
        title: "",
        key: "tooltip",
        dataIndex: "tooltip",
        render: text => <Icon type={text || "info-circle"} />,
    },
    {
        title: "",
        key: "flag2",
        dataIndex: "flag2",
        render: text => <Icon type={text || "camera"} />,
    },
    {
        title: "主题",
        dataIndex: "theme",
        render: text => `${text}工艺查看`,
    },
    {
        title: "状态",
        dataIndex: "status",
    },
]
// const data = [
//     {
//         key: '1',
//         flag: '',
//         tooltip: '',
//         flag2: '',
//         name: '胡彦斌',
//         theme: 'theme',
//         status: 'status',
//     }
// ];

const mockData = Mock.mock({
    "tableData|10-200": [
        {
            "id|+1": 1,
            "key|+1": 1,
            "flag|1": ["android", "apple", "area-chart"],
            "tooltip|1": ["question-circle-o", "question-circle", "info-circle", "info-circle-o"],
            "flag2|1": ["mobile", "notification", "paper-clip", "picture"],
            name: "@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle@ctitle",
            theme: /[A-Z]/, //  + '工艺查看',
            "status|1": ["正在审核", "开启"],
        },
    ],
})
const data = mockData.tableData
console.log(data)

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
    onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
    },
    onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows)
    },
    onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows)
    },
}

const text = <span>搜索</span>
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/">批量修改</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="/">删除</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">导出为 Excel</Menu.Item>
    </Menu>
)

class Countersigns extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit() {
        console.log("确定")
    }
    baseInfoData() {}

    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>工艺会签列表</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        marginTop: "10px",
                        borderTop: "1px solid #ddd",
                        background: "#f6f8fa",
                    }}
                >
                    <Tooltip placement="bottom" title={text}>
                        <Button type="ghost" icon="calendar" style={{ border: "none" }}></Button>
                    </Tooltip>
                    <Button type="ghost" icon="hdd" style={{ border: "none" }}></Button>
                    <Button type="ghost" icon="folder" style={{ border: "none" }}></Button>
                    <Button type="ghost" icon="credit-card" style={{ border: "none" }}></Button>
                    <Button type="ghost" icon="exception" style={{ border: "none" }}></Button>
                    <Tooltip placement="bottom" title={text}>
                        <Button type="ghost" icon="search" style={{ border: "none" }}></Button>
                    </Tooltip>

                    <Dropdown overlay={menu} trigger={["click"]}>
                        <a className="toolbar-operation" href="#">
                            操作 <Icon type="caret-down" style={{ transform: "scale(0.5)" }} />
                        </a>
                    </Dropdown>
                </div>
                <Table
                    size="small"
                    bordered={false}
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default Countersigns
