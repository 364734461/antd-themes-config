import React from "react";
import { TimePicker, Divider } from "antd";
import moment from "moment";

export default () => (
  <>
    <Divider orientation="left">TimePicker</Divider>
    <div>
      <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="large" />
      <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
      <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="small" />
    </div>
  </>
);
