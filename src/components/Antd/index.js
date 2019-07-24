import React from "react";
import { Row, Col, Spin } from "antd";

import Button from "./Button";
import Breadcrumb from "./Breadcrumb";
import Dropdown from "./Dropdown";

const AntdComponents = [Breadcrumb, Button, Dropdown];

export default class extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <Spin spinning={this.state.isLoading}>
        <Row>
          {AntdComponents.map((item, index) => {
            const Item = item;
            return (
              <Col key={index} span={24} style={{ marginBottom: 24 }}>
                <Item
                // isLoading={this.state.isLoading}
                />
              </Col>
            );
          })}
        </Row>
      </Spin>
    );
  }
}
