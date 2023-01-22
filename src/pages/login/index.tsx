import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn('email', { email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
      <h1 className="text-lg mb-2">Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
        Login
      </button>
      <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-200" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </form>
  );
};

export default Login;