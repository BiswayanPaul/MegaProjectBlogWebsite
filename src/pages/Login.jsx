import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
