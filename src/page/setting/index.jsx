import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";

function Setting() {
  const [color, setColor] = useState("#FFFFFF");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!color) {
        setColor("#FFFFFF");
    }
  }, [color])

  const onFinish = (values) => {
    console.log(values, color);
    setVisible(false)
  };

  const onChange = (values) => {
    setVisible(true);
  };

  const rulReq = {
    required: true,
    message: "Must have something",
  };

  const ruleValidateEmail = {
    required: true,
    message: "Must have something",
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <Col span={24} md={12}>
        <Form name="form" onFinish={onFinish} onChange={onChange}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label="Title" required rules={[rulReq]} name={"title"}>
                <Input label="title" type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="E-mail" required name={"email"}>
                <Input
                  label="e-mail"
                  type="email"
                  rules={[ruleValidateEmail]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <Row span={12}>
                <Col span={20}>
                  <Input
                    defaultValue={color}
                    value={color}
                    label="hex code"
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    type="color"
                    label="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Form.Item label="Date" required rules={[rulReq]} name={"date"}>
                <Input type="date" label="date" />
              </Form.Item>
            </Col>
          </Row>
          {visible && (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </Form>
      </Col>
    </div>
  );
}

export default Setting;
