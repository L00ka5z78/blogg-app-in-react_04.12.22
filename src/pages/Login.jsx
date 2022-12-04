import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <p>This is error!</p>
        <span>
          {/* links user to register page */}
          Have no account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
