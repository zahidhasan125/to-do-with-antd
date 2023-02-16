import React from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Creation Time',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => a.createdAt.localeCompare(b.createdAt)
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title)
  },
  {
    title: 'Description',
    dataIndex: 'details',
    key: 'details',
    sorter: (a, b) => a.details.localeCompare(b.details)
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
                {tag}
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
        <a onClick={()=>handleEdit()}><EditOutlined /></a>
        <a onClick={()=>handleDelete()}><DeleteOutlined /></a>
      </Space>
    ),
  },
];

const handleEdit = (e) => {
  console.log(e);
}
const handleDelete = (e) => {
  console.log(e);
}

const TableNew = ({toDoValue}) => {
  return (
    <div>
      <h3 align='left'>List To-Do</h3>
      <Table
        columns={columns}
        dataSource={toDoValue}
      />;
    </div>
  );
};

export default TableNew;