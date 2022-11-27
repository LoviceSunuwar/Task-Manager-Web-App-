import React from "react";
import { Navigate } from "react-router-dom";
export default function PublicRouting({ children, auth }) {
  return auth ? <Navigate to={"/"} /> : children;
}
