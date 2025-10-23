import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
