import React from "react";
import { Redirect, Route,Navigate } from "react-router-dom";
// import { Layout } from "../../components"
function ProtectedRoute(props) {
  const {Component} = props
  const isAuthenticated = localStorage.getItem("isAuthenticated");
console.log(isAuthenticated)
console.log( Boolean(isAuthenticated))
console.log(typeof Boolean(isAuthenticated))
  return (
    <Route
   
      render={(props) =>
        isAuthenticated==='true' ?
          // <Layout>
            <Component {...props} />
          // </Layout>
          : <Navigate to="/Login_main" />
      }
    />
  );
}

export default ProtectedRoute;