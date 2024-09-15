"use client"
import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and sign-up logic here
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // Handle sign-up logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="w-full max-w-md p-6 bg-[#1f1f1f] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white mb-6">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-[#2c2c2c] p-2 rounded-md">
            <User size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
          <div className="flex items-center bg-[#2c2c2c] p-2 rounded-md">
            <Mail size={20} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
          <div className="flex items-center bg-[#2c2c2c] p-2 rounded-md">
            <Lock size={20} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
          <div className="flex items-center bg-[#2c2c2c] p-2 rounded-md">
            <Lock size={20} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4A90E2] text-white py-2 rounded-md hover:bg-[#357ABD] transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-400">Already have an account? </span>
          <a href="/sign-in" className="text-[#4A90E2] hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
