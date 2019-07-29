import React from "react";
import { InputNumber, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">InputNumber </Divider>
    <div>
      <InputNumber size="large" min={1} max={100000} defaultValue={3} />
      <InputNumber min={1} max={100000} defaultValue={3} />
      <InputNumber min={1} max={100000} defaultValue={3} disabled />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} />
    </div>
  </>
);
