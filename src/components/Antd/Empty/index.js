import React from "react";
import { Empty, Divider, Button } from "antd";

export default () => (
  <>
    <Divider orientation="left">Empty</Divider>
    <div>
      <Empty />

      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60
        }}
        description={
          <span>
            Customize <a href="#API">Description</a>
          </span>
        }
      >
        <Button type="primary">Create Now</Button>
      </Empty>
    </div>
  </>
);
