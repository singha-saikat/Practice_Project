import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your password reset logic here
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-rose-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-rose-800">
          Reset Password
        </h2>
        {!isSubmitted ? (
          <>
            <p className="text-gray-600 mb-6 text-center">
              Enter your email address and we'll send you instructions to reset your
              password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-rose-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Send Reset Instructions
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-xl mb-4">
              ✓ Reset instructions sent!
            </div>
            <p className="text-gray-600">
              Please check your email for instructions to reset your password.
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-rose-600 hover:text-rose-800 font-medium"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;