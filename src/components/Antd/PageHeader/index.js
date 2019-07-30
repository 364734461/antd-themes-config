import React from "react";
import { PageHeader, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">PageHeader</Divider>
    <PageHeader
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  </>
);
