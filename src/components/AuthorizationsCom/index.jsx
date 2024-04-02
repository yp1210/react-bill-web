import { getToken } from '@/utils';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthorizationsCom = (props) => {

  const isHasAuthorizations = getToken();
  if (!isHasAuthorizations) {
    return <Navigate to={'/login'} replace />
  }
  return <div>
    {props.children}
  </div>
}

export default AuthorizationsCom