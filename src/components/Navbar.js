import { Breadcrumb, Input, Layout, Menu, Space, theme } from 'antd';
import TableNew from './TableNew';
import { AudioOutlined } from '@ant-design/icons';
import AddNote from './AddNote';
import { useState } from 'react';
const { Search } = Input;
const { Header, Content, Footer } = Layout;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const currentTime = new Date();
const timeStamp = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}--${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

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

const onSearch = (value) => console.log(value);


const Navbar = () => {
  const [toDoValue, setToDoValue] = useState(data)
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
        }}
      >
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold'
            
          }}
        >
          <p style={{
            margin: '0',
            padding: '0',
            lineHeight: 1.4
          }}>ME-TODO</p>
        </div>
        
        <Space direction="vertical" style={{
          float: 'right',
          height: 31,
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.2)',
        }}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>

      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >

          <AddNote toDoValue={toDoValue} setToDoValue={setToDoValue} />
          <TableNew toDoValue={toDoValue} setToDoValue={setToDoValue} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Navbar;