import React from "react"
import { Form, Input, Row, Col, Select } from "antd"
const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
}

class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "名称",
            code: "自动生成",
            checkType: "审签包类型",
            models: "机型",
            security: "密级",
            instructions: "说明",
        }
    }
    formItemChange(value) {
        this.setState(Object.assign(this.state, value))
    }
    handleSubmit(e) {
        console.log(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={12}>
                        <FormItem label="名称" required {...formItemLayout}>
                            <Input
                                placeholder="请输入名称"
                                defaultValue={this.state.name}
                                onChange={e => this.formItemChange({ name: e.target.value })}
                            />
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="编码" required {...formItemLayout}>
                            <p className="ant-form-text" id="userName" name="userName">
                                {this.state.code}
                            </p>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="审签包类型" required {...formItemLayout}>
                            <Select
                                size="large"
                                defaultValue="lucy"
                                defaultValue={this.state.checkType}
                                onChange={e => this.formItemChange({ checkType: e })}
                            >
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled" disabled>
                                    disabled
                                </Option>
                                <Option value="审签包类型">审签包类型</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="机型" required {...formItemLayout}>
                            <Select
                                size="large"
                                defaultValue={this.state.models}
                                onChange={e => this.formItemChange({ models: e })}
                            >
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled" disabled>
                                    disabled
                                </Option>
                                <Option value="机型">机型</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="密级" required {...formItemLayout}>
                            <Select
                                size="large"
                                defaultValue={this.state.security}
                                onChange={e => this.formItemChange({ security: e })}
                            >
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled" disabled>
                                    disabled
                                </Option>
                                <Option value="密级">密级</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={24}>
                        <FormItem
                            label="说明"
                            required
                            labelCol={{ span: 2 }}
                            wrapperCol={{ span: 21 }}
                        >
                            <Input
                                type="textarea"
                                rows={4}
                                placeholder="请输入名称"
                                defaultValue={this.state.instructions}
                                onChange={e =>
                                    this.formItemChange({ instructions: e.target.value })
                                }
                            />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default BaseInfo
