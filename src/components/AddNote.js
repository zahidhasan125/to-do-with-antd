import { DatePicker, Input, Row, Col, Select, Button, Form, Space, Tooltip, Typography } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import React from 'react';
const { TextArea } = Input;
const style = {
    background: '#fff',
    padding: '8px 0',
};
const AddNote = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onFinish = e => {

        console.log('Received values of form: ', e);

    }

    return (
        <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 1200,
            }}
        >
            <h3 align='left'>Add To-Do</h3>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={5}>
                    <Form.Item label="Title">
                        <Space>
                            <Form.Item
                                name="title"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Title is required',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 160,
                                    }}
                                    placeholder="Title"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                    <Form.Item label="Description">
                        <Form.Item
                            name="description"
                            style={{
                                width: 160
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Description is required',
                                },
                            ]}
                        >
                            <TextArea
                                rows={1}
                                style={{
                                    width: 160,
                                }}
                                placeholder='Description' />
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={3}>
                    <Form.Item
                        label="Due Date"
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        <Form.Item
                            name="Due Date"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{
                                display: 'inline-block',
                                width: 'calc(50% - 8px)',
                            }}
                        >
                            <DatePicker placeholder='Due Date' />
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item label="Tags">
                        <Form.Item
                            name="tags"
                            noStyle
                            rules={[
                                {
                                    required: false,
                                    message: 'Tags is Optional.',
                                },
                            ]}
                        >
                            <TextArea
                                rows={1}
                                style={{
                                    width: 160,
                                }}
                                placeholder='Tags' />
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={3}>
                    <Form.Item label="Status">
                        <Form.Item
                            name="Status"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Status is Required.',
                                },
                            ]}
                        >
                            <Select
                                defaultValue="Open"
                                style={{
                                    width: 160,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'open',
                                        label: 'Open',
                                    },
                                    {
                                        value: 'working',
                                        label: 'Working',
                                    },
                                    {
                                        value: 'done',
                                        label: 'Done',
                                    },
                                    {
                                        value: 'overdue',
                                        label: 'OverDue',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
                {/* <h3 align='left'>Add To-Do</h3>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={5}>
                        <div style={style}>
                            <Input placeholder="Title" />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div style={style}>
                            <TextArea rows={1} placeholder='Description' />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div style={style}>
                            <DatePicker placeholder='Select Due Date' />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <TextArea rows={1} placeholder='Tags' />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div style={style}>
                            <Select
                                defaultValue="Open"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'open',
                                        label: 'Open',
                                    },
                                    {
                                        value: 'working',
                                        label: 'Working',
                                    },
                                    {
                                        value: 'done',
                                        label: 'Done',
                                    },
                                    {
                                        value: 'overdue',
                                        label: 'OverDue',
                                    },
                                ]}
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <div style={style}>
                            <a href=''>
                                <Button type="primary" >
                                    <FileAddOutlined /> ADD
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row> */}
            </Row >
        </Form>
    );
};

export default AddNote;