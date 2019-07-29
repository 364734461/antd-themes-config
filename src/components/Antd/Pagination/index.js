import React from "react";
import { Pagination, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Pagination</Divider>
    <div>
      <Pagination showSizeChanger defaultCurrent={3} total={500} />
      <br />
      <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
      <br />
      <Pagination size="small" total={50} />
      <br />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <br />
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  </>
);
