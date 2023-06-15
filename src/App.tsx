import logo from "./logo.svg";
import "./App.css";
// import { Button } from "antd";

// import { useForm } from "antd/es/form";
import { Input, Button, Form } from "antd";

const FormExample = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormExample />
      </header>
    </div>
  );
}

export default App;
