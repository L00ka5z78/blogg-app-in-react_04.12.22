import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Register</button>
        <p>This is error!</p>
        <span>
          {/* links user to register page */}
          If you have account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
