import React from "react"
import {
    Card,
    Form,
    Collapse,
    Input,
    Row,
    Col,
    Select,
    Upload,
    message,
    Button,
    Icon,
    Table,
} from "antd"
import BaseInfo from "./BaseInfo"
import MainContent from "./MainContent"

const FormItem = Form.Item
const Option = Select.Option
const Panel = Collapse.Panel

const CardExtra = props => {
    return (
        <a
            href="#"
            onClick={e => {
                e.stopPropagation()
                e.preventDefault()
            }}
        >
            创建并编辑会签数据
        </a>
    )
}

function handleSelectChange(value) {
    console.log(`selected ${value}`)
}

const columns = [
    {
        title: "姓名",
        dataIndex: "name",
        render: text => <a href="#">{text}</a>,
    },
    {
        title: "年龄",
        dataIndex: "age",
    },
    {
        title: "住址",
        dataIndex: "address",
    },
]
const data = [
    {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
    },
    {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
    },
    {
        key: "3",
        name: "李大嘴",
        age: 32,
        address: "西湖区湖底公园1号",
    },
]

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
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const MainPanelHeader = () => {
    return (
        <div>
            主要内容
            <a
                href="#"
                style={{ float: "right", marginRight: 15 }}
                onClick={e => {
                    e.stopPropagation()
                }}
            >
                创建并编辑会签数据
            </a>
        </div>
    )
}

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit() {
        console.log("确定")
    }
    baseInfoData() {}

    render() {
        return (
            <div style={{ padding: 15 }}>
                <Collapse defaultActiveKey={["base-info", "main-content", "list"]}>
                    <Panel header="基本信息" key="base-info">
                        <BaseInfo changeData={this.baseInfoData} />
                    </Panel>
                    <Panel header={<MainPanelHeader />} key="main-content">
                        <MainContent />
                    </Panel>
                    <Panel header="列表信息" key="list">
                        <Table
                            size="small"
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={data}
                        />
                    </Panel>
                </Collapse>

                <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                    确定
                </Button>
            </div>
        )
    }
}

export default Routes
