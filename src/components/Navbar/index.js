import React, { useState } from "react";
import { Layout, Menu, Drawer, Icon, Button } from "antd";

import { Mobile, Default } from "../Responsive";

import "./index.less";

const { Header } = Layout;

const Navbar = props => {
  const [visible, setVisible] = useState(false);
  const menu = (
    <Menu
      theme="dark"
      mode={visible ? "vertical" : "horizontal"}
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">Antd组件</Menu.Item>
      <Menu.Item key="2" disabled>
        行业二部
      </Menu.Item>
      <Menu.Item key="3" onClick={props.resetTheme}>
        重置样式
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header">
      <div className="logo">主题配置</div>

      <Button
        type="primary"
        shape="round"
        icon="download"
        onClick={() => {
          props.downloadFn();
        }}
        style={{ marginRight: 12 }}
      >
        下载配置
      </Button>
      <Button
        shape="round"
        icon="download"
        onClick={() => {
          props.downloadFn("default");
        }}
      >
        下载默认配置
      </Button>
      <Default>{menu}</Default>
      <Mobile>
        <Icon
          type="bars"
          size="large"
          className="nav-icon"
          onClick={() => setVisible(true)}
        />
        <Drawer
          title=""
          placement="right"
          closable
          onClose={() => setVisible(false)}
          visible={visible}
          className="nav-drawer"
        >
          <div className="logo">主题配置</div>
          {menu}
        </Drawer>
      </Mobile>
    </Header>
  );
};

export default Navbar;
