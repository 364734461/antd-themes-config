import React, { Component } from "react";
import { ChromePicker, SketchPicker } from "react-color";

const noop = () => {};

const pickers = {
  chrome: ChromePicker,
  sketch: SketchPicker
};

class ColorPicker extends Component {
  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    position: "bottom"
  };

  constructor(props) {
    super();
    this.state = {
      displayColorPicker: false,
      color: props.color
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color });
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChange = color => {
    this.setState({ color: color.hex });
    this.props.onChange(color.hex, color);
  };
  handleChangeComplete = color => {
    this.setState({ color: color.hex });
    this.props.onChangeComplete(color.hex);
  };
  render() {
    const { small, type, position } = this.props;

    const Picker = pickers[type];

    const styles = {
      color: {
        width: small ? "16px" : "120px",
        height: small ? "16px" : "24px",
        borderRadius: "2px",
        background: this.state.color
      },
      swatch: {
        padding: "4px",
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer"
      },
      popover: {
        position: "absolute",
        zIndex: "2"
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      },
      wrapper: {
        position: "inherit",
        zIndex: "100"
      }
    };

    if (position === "top") {
      styles.wrapper.transform = "translate(0%, 10%)";
      styles.wrapper.paddingBottom = 8;
    } else if (position === "bottom") {
      styles.wrapper.transform = "translate(0%, -100%)";
      styles.wrapper.paddingTop = 8;
    } else {
      styles.wrapper.transform = "translate(13%, -50%)";
    }

    let className = "";
    if (this.state.color.match(/colorPalette/g)) {
      const reg = /@\{(.+)\}/;
      const reg2 = /,\s?(\d{1})/;
      const m1 = this.state.color.match(reg);
      const m2 = this.state.color.match(reg2);
      if (m1 && m2) {
        className = "colorPalette-" + m1[1] + "-" + m2[1].replace(/\s*/g, "");
      }
    } else if (this.state.color.match(/fade/g)) {
      const reg = /\((.+),/;
      const reg2 = /,\s?(\d+)/;
      const m1 = this.state.color.match(reg);
      const m2 = this.state.color.match(reg2);
      if (m1 && m2) {
        className =
          "fade-" +
          m1[1].substring(1, m1[1].length) +
          "-" +
          m2[1].replace(/\s*/g, "");
      }
    } else if (this.state.color.match(/tint/g)) {
      const reg = /\((.+),/;
      const reg2 = /,\s?(\d+)/;
      const m1 = this.state.color.match(reg);
      const m2 = this.state.color.match(reg2);
      if (m1 && m2) {
        className =
          "tint-" +
          m1[1].substring(1, m1[1].length) +
          "-" +
          m2[1].replace(/\s*/g, "");
      }
    }

    const swatch = (
      <div style={styles.swatch} onClick={this.handleClick}>
        <div style={styles.color} className={className} />
      </div>
    );
    const picker = this.state.displayColorPicker ? (
      <div style={styles.popover}>
        <div style={styles.cover} onClick={this.handleClose} />
        <div style={styles.wrapper}>
          <Picker
            {...this.props}
            color={this.state.color}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    ) : null;

    if (position === "top") {
      return (
        <div>
          {picker}
          {swatch}
        </div>
      );
    } else if (position === "bottom") {
      return (
        <div>
          {picker}
          {swatch}
        </div>
      );
    }
    return (
      <div>
        {swatch}
        {picker}
      </div>
    );
  }
}
export default ColorPicker;
