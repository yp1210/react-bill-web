import React from 'react';
import { Card } from 'antd';
import './index.scss'
import LoginForm from './components/LoginForm';

const Login = () => {

  return <div className='loginWrap'>
    <Card className='login-container'>
      <h1 className='login-title'>记账管理系统</h1>
      <LoginForm />
    </Card>
  </div>
}

export default Login;