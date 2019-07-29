import React from "react";
import { Rate, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Rate</Divider>
    <div>
      <Rate allowHalf defaultValue={2.5} />
    </div>
  </>
);
