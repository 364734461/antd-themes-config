import React from "react";
import { Tree, Divider } from "antd";

const { TreeNode } = Tree;

class Demo2 extends React.Component {
  state = {
    treeData: [
      { title: "Expand to load", key: "0" },
      { title: "Expand to load", key: "1" },
      { title: "Tree Node", key: "2", isLeaf: true }
    ]
  };

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: "Child Node", key: `${treeNode.props.eventKey}-0` },
          { title: "Child Node", key: `${treeNode.props.eventKey}-1` }
        ];
        this.setState({
          treeData: [...this.state.treeData]
        });
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });

  render() {
    return (
      <Tree loadData={this.onLoadData}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    );
  }
}

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  render() {
    return (
      <Tree
        checkable
        defaultExpandedKeys={["0-0-0", "0-0-1"]}
        defaultSelectedKeys={["0-0-0", "0-0-1"]}
        defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode
              title={<span style={{ color: "#1890ff" }}>sss</span>}
              key="0-0-1-0"
            />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

export default () => (
  <>
    <Divider orientation="left">Tree</Divider>
    <div>
      <Demo />
      <br />
      <Demo2 />
    </div>
  </>
);
