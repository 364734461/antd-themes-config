import React from "react";
import { Slider, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Slider</Divider>
    <div>
      <Slider defaultValue={30} />
    </div>
  </>
);
