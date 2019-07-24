import React from "react";
import { Dropdown, Divider, Menu, Icon } from "antd";

export default class extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        <Divider orientation="left">Dropdown</Divider>
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
                Hover me <Icon type="down" />
              </span>
            </Dropdown>
          )}
        </div>
      </>
    );
  }
}
