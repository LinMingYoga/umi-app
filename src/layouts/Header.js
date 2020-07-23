import React from 'react'
import { Layout } from 'antd';
import { Menu, Dropdown, Icon, Affix } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const logo = require('@/assets/logo.png');




function Headers({ location }) {
  const { Header } = Layout;
  const MuneItem = Menu.Item;
  const menu = (
    <Menu>
      <MuneItem>退出</MuneItem>
    </Menu>
  );
  return (
    <Affix offsetTop={0}>
      <Header className="lm-header">
        <div className="lm-header-left">
          <div className="lm-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="lm-menu">
            <Menu
              className="lm-menus"
              theme="dark"
              mode="horizontal"
              selectedKeys={[location.pathname]}
            >
              <MuneItem key="/">
                <Link to="/">首页</Link>
              </MuneItem>
            </Menu>
          </div>
        </div>
        <div className="lm-header-right">
          <Dropdown overlay={menu}>
            <span>
              <Icon type="user" style={{ marginRight: '10px' }} />
              Admin
            </span>
          </Dropdown>
        </div>
      </Header>
    </Affix>
  );
}

export default withRouter(Headers);