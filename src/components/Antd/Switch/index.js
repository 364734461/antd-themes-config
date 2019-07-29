import React from "react";
import { Switch, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Switch</Divider>
    <div>
      <Switch defaultChecked />
      <br />
      <Switch size="small" defaultChecked />
      <br />
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </div>
  </>
);
