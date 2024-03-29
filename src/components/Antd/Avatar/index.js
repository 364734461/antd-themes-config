import React from "react";
import { Avatar, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Avatar</Divider>
    <div>
      <div>
        <Avatar size={64} icon="user" />
        <Avatar size="large" icon="user" />
        <Avatar icon="user" />
        <Avatar size="small" icon="user" />
      </div>
      <div>
        <Avatar shape="square" size={64} icon="user" />
        <Avatar shape="square" size="large" icon="user" />
        <Avatar shape="square" icon="user" />
        <Avatar shape="square" size="small" icon="user" />
      </div>
    </div>
  </>
);
