import React from "react";
import { Button, notification, Divider } from "antd";

const openNotificationWithIcon = type => {
  notification[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  });
};

export default () => (
  <>
    <Divider orientation="left">Notification</Divider>
    <div>
      <Button onClick={() => openNotificationWithIcon("success")}>
        Success
      </Button>
      <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
      <Button onClick={() => openNotificationWithIcon("warning")}>
        Warning
      </Button>
      <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
    </div>
  </>
);
