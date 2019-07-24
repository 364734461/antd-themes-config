import React from "react";
import { Button, Divider } from "antd";

function renderItem(size, ghost, disabled) {
  const style = { marginRight: 5 };
  return (
    <div>
      <p>{`Props: size={${size}} ghost={${ghost}} disabled={${disabled}}`}</p>
      <Button
        type="primary"
        size={size}
        ghost={ghost}
        disabled={disabled}
        style={style}
      >
        Primary
      </Button>
      <Button size={size} ghost={ghost} disabled={disabled} style={style}>
        Default
      </Button>
      <Button
        type="dashed"
        size={size}
        ghost={ghost}
        disabled={disabled}
        style={style}
      >
        Dashed
      </Button>
      <Button
        type="danger"
        size={size}
        ghost={ghost}
        disabled={disabled}
        style={style}
      >
        Danger
      </Button>
      <Button
        type="link"
        size={size}
        ghost={ghost}
        disabled={disabled}
        style={style}
      >
        Link
      </Button>
      <p>{``}</p>
    </div>
  );
}

export default () => {
  return (
    <>
      <Divider orientation="left">Button</Divider>
      {renderItem("large")}
      {renderItem("default")}
      {renderItem("small")}
      {renderItem("default", true)}
      {renderItem("default", true, true)}
      {renderItem("default", false, true)}
    </>
  );
};
