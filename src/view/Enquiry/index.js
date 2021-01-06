// 工艺会签结果查询
import React from "react"
import {
    Icon,
    Table,
    Button,
    message,
    DatePicker,
    Checkbox,
    Breadcrumb,
    Form,
    Select,
    Input,
} from "antd"
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
import Mock from "mockjs"

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
}

const p1 = Mock.Random.cparagraph()

const columns = [
    {
        title: "机型",
        key: "models",
        dataIndex: "models",
    },
    {
        title: "会签数据包",
        dataIndex: "cad",
    },
    {
        title: "会签数据包名称",
        key: "name",
        dataIndex: "name",
    },
    {
        title: "状态",
        dataIndex: "status",
    },
    {
        title: "会签结论",
        key: "conclusion",
        dataIndex: "conclusion",
    },
    {
        title: "会签意见",
        key: "opinion",
        dataIndex: "opinion",
    },
    {
        title: "数据包创建时间",
        key: "createDate",
        dataIndex: "createDate",
    },
    {
        title: "完成时间",
        key: "finishDate",
        dataIndex: "finishDate",
    },
    {
        title: "查看完成会签意见",
        key: "query",
        dataIndex: "query",
        render: (text, row, index) => (
            <a href="#" onClick={() => handleLink(row, index)}>
                查看
            </a>
        ),
    },
]

function handleLink(row, index) {
    console.log(row)
}

function makeData(count = "10-200") {
    const mockData = Mock.mock({
        [`tableData|${count}`]: [
            {
                id: "@guid",
                key: "@guid",
                models: "@guid",
                cad: /[A-Z]/,
                "name|1": "@ctitle()",
                "status|1": ["正在审核", "开启"],
                "conclusion|1": ["通过", "驳回"],
                "opinion|1": ["设计合理", "有缺陷"],
                createDate: '@date("yyyy-MM-dd")',
                finishDate: '@date("yyyy-MM-dd")',
                query: "",
            },
        ],
    })

    return mockData.tableData
}
let data = makeData()

class Enquiry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            models: "",
            code: "",
            conclusion: "",
            name: "",
            status: "",
            date: "",
            checked: false,
        }
    }
    exportExcel() {
        message.info("功能正在开发中……")
    }
    handleSubmit() {
        data = makeData("1-5")
    }
    render() {
        const { models, code, conclusion, name, status, date, checked } = this.state
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>工艺会签结果查询</Breadcrumb.Item>
                </Breadcrumb>

                <Form
                    className="clearfix"
                    style={{ marginTop: "10px" }}
                    onSubmit={this.handleSubmit}
                >
                    <FormItem
                        className="fl"
                        label="机型"
                        required
                        {...formItemLayout}
                        style={{ width: "300px" }}
                    >
                        <Input placeholder="请输入该字段" defaultValue={models} />
                    </FormItem>
                    <FormItem
                        className="fl"
                        label="工艺会签数据包编号"
                        required
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 15 }}
                        style={{ width: "400px" }}
                    >
                        <Input placeholder="请输入该字段" defaultValue={code} />
                    </FormItem>
                    <FormItem
                        className="fl"
                        label="会签结论"
                        required
                        {...formItemLayout}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 18 }}
                        style={{ width: "350px" }}
                    >
                        <Input placeholder="请输入该字段" defaultValue={conclusion} />
                    </FormItem>
                    <FormItem
                        className="fl"
                        label="工艺会签数据包名称"
                        required
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 15 }}
                        style={{ width: "400px" }}
                    >
                        <Input placeholder="请输入该字段" defaultValue={name} />
                    </FormItem>
                    <FormItem
                        className="fl"
                        label="状态"
                        required
                        {...formItemLayout}
                        style={{ width: "300px" }}
                    >
                        <Input placeholder="请输入该字段" defaultValue={status} />
                    </FormItem>
                    <FormItem
                        className="fl"
                        label="创建时间"
                        required
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 18 }}
                        style={{ width: "350px" }}
                    >
                        <RangePicker />
                    </FormItem>
                    <FormItem
                        className="fl"
                        wrapperCol={{ span: 18, offset: 2 }}
                        style={{ width: "180px" }}
                    >
                        <Checkbox>查询历史会签意见</Checkbox>
                    </FormItem>
                    <FormItem className="fl" style={{ display: "inline-block" }}>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </FormItem>
                    <FormItem
                        className="fl"
                        wrapperCol={{ offset: 1 }}
                        style={{ display: "inline-block" }}
                    >
                        <Button type="primary" onClick={this.exportExcel}>
                            导出到 Excel
                        </Button>
                    </FormItem>
                </Form>
                <Table size="small" bordered={false} columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Enquiry
