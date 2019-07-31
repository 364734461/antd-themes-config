import React, { Component } from "react";
import { Row, Layout, message, Icon } from "antd";

import Navbar from "../Navbar";
import AntdMain from "../Antd";
import InputVar from "../InputVar";

import "./index.less";
import initialValue from "../../initialValue";

const { Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    let vars = {};
    try {
      vars = Object.assign(
        {},
        initialValue,
        JSON.parse(localStorage.getItem("app-theme"))
      );
    } finally {
      this.state = { vars, initialValue };
      window.less
        .modifyVars(vars)
        .then(() => {})
        .catch(error => {
          message.error("更新主题失败");
        });
    }
  }

  onChangeComplete = (varName, color) => {
    const { vars } = this.state;
    vars[varName] = color;
    this.setState({ vars });
  };

  handleChange = (varname, color) => {
    const { vars } = this.state;
    if (varname) vars[varname] = color;
    console.log(vars);
    window.less
      .modifyVars(vars)
      .then(() => {
        this.setState({ vars });
        localStorage.setItem("app-theme", JSON.stringify(vars));
      })
      .catch(error => {
        message.error("更新主题失败");
      });
  };

  getInitValueItem = key => {
    return initialValue[key];
  };

  getColorPicker = (varName, position) => (
    <InputVar
      key={varName}
      varName={varName}
      data={this.state.vars[varName]}
      position={position || "right"}
      handleChange={this.handleChange}
      initValue={this.getInitValueItem(varName)}
    />
  );

  resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    console.log(this.state.vars, this.state.initialValue);
    this.setState({ vars: { ...this.state.initialValue } });
    window.less.modifyVars(this.state.initialValue).catch(error => {
      message.error("重置主题失败");
    });
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const varsArr = Object.keys(this.state.vars);
    const colorPickers = varsArr.map((varName, index) => {
      return this.getColorPicker(
        varName,
        index > 3 ? (index < varsArr.length - 4 ? "right" : "bottom") : "top"
      );
    });

    const { collapsed } = this.state;
    const width = 700;
    const collapsedWidth = 60;

    return (
      <Layout className="app">
        <Navbar resetTheme={this.resetTheme} />
        <Content className="content" style={{ position: "relative" }}>
          <Layout>
            <Sider
              theme="dark"
              breakpoint="lg"
              collapsedWidth={collapsedWidth}
              width={width}
              collapsed={collapsed}
              onBreakpoint={broken => {
                this.onCollapse(broken);
              }}
              onCollapse={this.onCollapse}
              style={{
                overflow: "auto",
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0
              }}
            >
              <Row className="theme-heading">
                {
                  <Icon
                    type={collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={() => this.onCollapse(!collapsed)}
                  />
                }
              </Row>
              {colorPickers}
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                marginLeft: !collapsed ? width : collapsedWidth
              }}
            >
              <AntdMain />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default App;
