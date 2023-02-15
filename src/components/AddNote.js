import { DatePicker, Input, Row, Col, Select } from 'antd';

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

    return (
        <form>
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
                    <div style={style}>Actions</div>
                </Col>
            </Row>

        </form>
    );
};

export default AddNote;