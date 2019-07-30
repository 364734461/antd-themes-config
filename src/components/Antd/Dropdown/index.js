import React from "react";
import { Dropdown, Divider, Menu, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

export default class extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <>
        <Divider orientation="left">Dropdown</Divider>
        <div style={{ marginBottom: 100 }}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <div id="dropdown-test" style={{ height: 200 }}>
          {!this.state.isLoading && (
            <Dropdown
              visible
              getPopupContainer={() => document.getElementById("dropdown-test")}
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      1st menu item
                    </a>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      2nd menu item
                    </a>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3" disabled>
                    3rd menu item（disabled）
                  </Menu.Item>
                </Menu>
              }
            >
              <span>
                Down now <Icon type="down" />
              </span>
            </Dropdown>
          )}
        </div>
      </>
    );
  }
}
