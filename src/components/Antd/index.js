import React from "react";
import { Row, Col, Spin } from "antd";

import Button from "./Button";
import Breadcrumb from "./Breadcrumb";
import Dropdown from "./Dropdown";
import Typography from "./Typography";
import Menu from "./Menu";
import Pagination from "./Pagination";
import PageHeader from "./PageHeader";
import Steps from "./Steps";
import AutoComplete from "./AutoComplete";
import Checkbox from "./Checkbox";
import Cascader from "./Cascader";
import DatePicker from "./DatePicker";
import Form from "./Form";
import InputNumber from "./InputNumber";
import Input from "./Input";
import Mentions from "./Mentions";
import Rate from "./Rate";
import Radio from "./Radio";
import Switch from "./Switch";
import Slider from "./Slider";
import Select from "./Select";
import TreeSelect from "./TreeSelect";
import Transfer from "./Transfer";
import TimePicker from "./TimePicker";
import Upload from "./Upload";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Comment from "./Comment";
import Collapse from "./Collapse";
import Carousel from "./Carousel";
import Card from "./Card";
import Calendar from "./Calendar";
import Descriptions from "./Descriptions";
import Empty from "./Empty";
import List from "./List";
import Popover from "./Popover";
import Statistic from "./Statistic";

const AntdComponents = [
  Button,
  Typography,
  Breadcrumb,
  Dropdown,
  Menu,
  Pagination,
  PageHeader,
  Steps,
  AutoComplete,
  Checkbox,
  Cascader,
  DatePicker,
  Form,
  InputNumber,
  Input,
  Mentions,
  Rate,
  Radio,
  Switch,
  Slider,
  Select,
  TreeSelect,
  Transfer,
  TimePicker,
  Upload,
  Avatar,
  Badge,
  Comment,
  Collapse,
  Carousel,
  Card,
  Calendar,
  Descriptions,
  Empty,
  List,
  Popover,
  Statistic
];

export default class extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <Spin spinning={this.state.isLoading}>
        <Row>
          {AntdComponents.map((item, index) => {
            const Item = item;
            return (
              <Col key={index} span={24} style={{ marginBottom: 24 }}>
                <Item
                // isLoading={this.state.isLoading}
                />
              </Col>
            );
          })}
        </Row>
      </Spin>
    );
  }
}
