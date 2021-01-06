import React from "react"
import { Form, Input, Row, Col, Select, Upload, Button, Icon } from "antd"
const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
}

class MainContent extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSelectChange(e) {
        console.log(e)
    }
    handleSubmit(e) {
        console.log(this.props.children)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={12}>
                        <FormItem label="请选择" required {...formItemLayout}>
                            <Select
                                size="large"
                                defaultValue="lucy"
                                onChange={this.handleSelectChange}
                            >
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled" disabled>
                                    disabled
                                </Option>
                                <Option value="yiminghe">yiminghe</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="文件名" required {...formItemLayout}>
                            <Input
                                placeholder="请输入名称"
                                style={{ width: "80%", marginRight: 8 }}
                            />
                            <Upload>
                                <Button type="ghost">
                                    <Icon type="upload" />
                                    选择文件
                                </Button>
                            </Upload>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default MainContent
