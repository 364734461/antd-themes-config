import React from "react";
import { Breadcrumb, Divider } from "antd";

function renderItem() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default () => {
  return (
    <>
      <Divider orientation="left">Breadcrumb</Divider>
      {renderItem()}
    </>
  );
};
