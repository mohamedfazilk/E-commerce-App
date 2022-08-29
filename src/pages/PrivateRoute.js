import React from 'react'
import { Route, Navigate } from 'react-router-dom'
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = () => {
  return <h4>Private Route</h4>;
};

export default PrivateRoute