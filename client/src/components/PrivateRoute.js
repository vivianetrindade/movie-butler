import React from "react";
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = ( {component, ...args}) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component/>
};

export default PrivateRoute
