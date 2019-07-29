import React from "react";
import { Badge, Divider, Icon } from "antd";

export default () => (
  <>
    <Divider orientation="left">Badge</Divider>
    <div>
      <Badge count={5}>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={0} showZero>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={<Icon type="clock-circle" style={{ color: "#f5222d" }} />}>
        <a href="#" className="head-example" />
      </Badge>

      <div>
        <Badge color="#f50" text="#f50" />
        <br />
        <Badge color="#2db7f5" text="#2db7f5" />
        <br />
        <Badge color="#87d068" text="#87d068" />
        <br />
        <Badge color="#108ee9" text="#108ee9" />
      </div>
    </div>
  </>
);
