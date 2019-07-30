import React from "react";
import { Skeleton, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Skeleton </Divider>
    <div>
      <Skeleton active />
    </div>
  </>
);
