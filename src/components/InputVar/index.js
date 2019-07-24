import React from "react";
import { Row, Col, Input } from "antd";

import ColorPicker from "../ColorPicker";
import whiteList from "./isColorVar";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.data };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({ value: this.props.data });
    }
  }

  handleChange = () => {
    const { handleChange, varName } = this.props;
    handleChange(varName, this.state.value);
  };

  onChangeComplete = color => {
    this.setState({ value: color });
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    const { position, varName, data } = this.props;
    return (
      <Row className="color-row">
        <Col xs={2} className="color-palette">
          {whiteList[varName] && (
            <ColorPicker
              type="chrome"
              small
              color={this.state.value}
              position={position || "right"}
              presetColors={[
                "#F5222D",
                "#FA541C",
                "#FA8C16",
                "#FAAD14",
                "#FADB14",
                "#A0D911",
                "#52C41A",
                "#13C2C2",
                "#1890FF",
                "#2F54EB",
                "#722ED1",
                "#EB2F96"
              ]}
              onChangeComplete={this.onChangeComplete}
            />
          )}
        </Col>
        <Col className="color-name" xs={10}>
          {varName}
        </Col>
        <Col className="color-name" xs={12}>
          <Input
            value={this.state.value}
            addonAfter={
              <span
                onClick={this.handleChange}
                style={{
                  cursor: "pointer",
                  display: this.state.value === data ? "none" : "block"
                }}
              >
                更新
              </span>
            }
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
