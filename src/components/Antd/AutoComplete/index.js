import React from "react";
import { AutoComplete, Divider } from "antd";

class Complete extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
    );
  }
}

export default () => (
  <>
    <Divider orientation="left">AutoComplete</Divider>
    <div>
      <Complete />
    </div>
  </>
);
