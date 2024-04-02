import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchToken }from '@/store/moudle/user'
import { useNavigate } from 'react-router-dom/dist';

const LoginForm = () => {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = async () => {
    const formValue = await form.validateFields();
    console.log(formValue, 'formValue');
    await dispatch(fetchToken(formValue));
    nav('/layout');
  }

  return <div>
    <Form
      name="basic"
      form={form}
      autoComplete="off"
    >
      <Form.Item
        name="mobile"
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
        ]}
      >
        <Input placeholder='请输入手机号' />
      </Form.Item>

      <Form.Item
        name="code"
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]}
      >
        <Input placeholder='请输入验证码' />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" onClick={submit}>
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default LoginForm;