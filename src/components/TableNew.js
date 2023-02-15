import React from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Creation Time',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => <a>{text}</a>,
    sorter: {
      compare: (a, b) => a.text - b.text,
      multiple: 3,
    },
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
    sorter: {
      compare: (a, b) => a.title - b.title,
      multiple: 3,
    },
  },
  {
    title: 'Description',
    dataIndex: 'details',
    key: 'details',
    sorter: {
      compare: (a, b) => a.details - b.details,
      multiple: 3,
    },
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
    sorter: {
      compare: (a, b) => a.dueDate - b.dueDate,
      multiple: 3,
    },
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    filters: [
      {
        text: 'Open',
        value: 'Open',
      },
      {
        text: 'Working',
        value: 'Working',
      },
      {
        text: 'Done',
        value: 'Done',
      },
      {
        text: 'Over Due',
        value: 'Over Due',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><EditOutlined /></a>
        <a><DeleteOutlined /></a>
      </Space>
    ),
  },
];


const currentTime = new Date();
const timeStamp = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}--${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
console.log(timeStamp);
const data = [
  {
    key: '1',
    createdAt: timeStamp,
    title: 'Create The APP',
    details: 32,
    dueDate: timeStamp,
    tags: ['nice', 'developer'],
    status: 'Open'
  },
  {
    key: '2',
    createdAt: timeStamp,
    title: 'Test The App',
    details: 42,
    dueDate: timeStamp,
    tags: ['loser'],
    status: 'Open'
  },
  {
    key: '3',
    createdAt: timeStamp,
    title: 'Deploy The App',
    details: 32,
    dueDate: timeStamp,
    tags: ['cool', 'teacher'],
    status: 'Open'
  },
];

const TableNew = () => {
  return (
    <div>
      <h3 align='left'>List To-Do</h3>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default TableNew;