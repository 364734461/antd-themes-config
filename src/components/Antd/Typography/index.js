import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Divider orientation="left">Typography</Divider>
    <Typography>
      <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
      </div>
      <Paragraph>In the process of internal desktop</Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to{" "}
        <Text strong>
          and liberate the resources of design and front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        quality design resources (<Text code>Sketch</Text> and{" "}
        <Text code>Axure</Text>), to help people creat
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <a href="/docs/spec/proximity">Principles</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">Patterns</a>
          </li>
          <li>
            <a href="/docs/resource/download">Resource Download</a>
          </li>
        </ul>
      </Paragraph>

      <Divider />

      <Title>介绍</Title>
      <Paragraph>
        同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </Paragraph>
      <Paragraph>
        逐步打磨出一个服务于企业级产品的设计体系 Ant Design。基于
        <Text mark>『确定』和『自然』</Text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
        <Text strong>更好的用户体验</Text>。
      </Paragraph>
      <Title level={2}>设计资源</Title>
      <Paragraph>
        佳实践和设计资源文件（<Text code>Sketch</Text> 和{" "}
        <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <a href="/docs/spec/proximity">设计原则</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">设计模式</a>
          </li>
          <li>
            <a href="/docs/resource/download">设计资源</a>
          </li>
        </ul>
      </Paragraph>
    </Typography>
  </>
);
