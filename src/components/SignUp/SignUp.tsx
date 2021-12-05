import React from 'react';
import { NavLink } from 'react-router-dom';

import { Form } from '../Login';

export const SignUp: React.FC = () => {
  return (
    <div>
      <h3>Sign-up</h3>
      <Form>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        <label htmlFor="email">email address</label>
        <input type="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <button type="submit">submit</button>
      </Form>
      <p>
        Already a member?
        <NavLink to="/login"> Login</NavLink>
      </p>
    </div>
  );
};
