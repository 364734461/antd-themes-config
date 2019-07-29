import React from "react";
import { Carousel, Divider } from "antd";

export default () => (
  <>
    <Divider orientation="left">Carousel</Divider>
    <div>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  </>
);
