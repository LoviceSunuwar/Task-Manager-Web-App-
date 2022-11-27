import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRouting({ children, auth }) {
  return auth ? children : <Navigate to="/login" />;
}
