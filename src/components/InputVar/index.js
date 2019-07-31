import React from "react";
import { Row, Col, Input, Button } from "antd";

import ColorPicker from "../ColorPicker";
import AllList from "../../initialValue";

function getColor(varName, mappings = AllList) {
  const color = mappings[varName];
  if (color in mappings) {
    return getColor(color, mappings);
  } else {
    return color;
  }
}

function isValidColor(color) {
  if (!color || color.match(/px/g)) return false;
  if (color.match(/colorPalette|fade|tint/g)) return true;
  if (color.charAt(0) === "#") {
    color = color.substring(1);
    return (
      [3, 4, 6, 8].indexOf(color.length) > -1 && !isNaN(parseInt(color, 16))
    );
  }
  return /^(rgb|hsl|hsv)a?\((\d+%?(deg|rad|grad|turn)?[,\s]+){2,3}[\s\/]*[\d\.]+%?\)$/i.test(
    color
  );
}

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

  handleChangeCancel = () => {
    this.setState({ value: this.props.data });
  };

  onChangeComplete = color => {
    this.setState({ value: color });
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  resetValue = () => {
    const { handleChange, varName } = this.props;
    handleChange(varName, this.props.initValue);
  };

  render() {
    const { position, varName, data } = this.props;
    const color = getColor(this.state.value) || this.state.value;
    return (
      <Row className="color-row">
        <Col xs={2} className="color-palette">
          {isValidColor(color) && (
            <ColorPicker
              type="chrome"
              small
              color={color}
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
              <>
                <Button
                  size="small"
                  type="primary"
                  onClick={this.handleChange}
                  style={{
                    cursor: "pointer",
                    display: this.state.value === data ? "none" : "inline-block"
                  }}
                >
                  更新
                </Button>
                <Button
                  size="small"
                  onClick={this.handleChangeCancel}
                  style={{
                    cursor: "pointer",
                    display: this.state.value === data ? "none" : "inline-block"
                  }}
                >
                  取消
                </Button>
                <Button
                  size="small"
                  onClick={this.resetValue}
                  style={{
                    cursor: "pointer",
                    display: this.state.value !== data ? "none" : "inline-block"
                  }}
                >
                  重置
                </Button>
              </>
            }
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
