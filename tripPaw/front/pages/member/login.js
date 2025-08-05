import React from 'react';
import AuthLayout from './loginLayout';
import LoginForm from '../../components/member/LoginForm'; 

function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;