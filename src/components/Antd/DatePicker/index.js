import React from "react";
import { DatePicker, Radio, Divider } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: "default"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>

            <Radio.Button value="default">Default</Radio.Button>

            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>
        <br />
        <p>DatePicker</p>
        <DatePicker size={size} />
        <br />
        <p>MonthPicker</p>
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <p>RangePicker</p>
        <RangePicker size={size} />
        <br />
        <p>WeekPicker</p>
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
}

export default () => (
  <>
    <Divider orientation="left">DatePicker</Divider>
    <div>
      <PickerSizesDemo />
    </div>
  </>
);
