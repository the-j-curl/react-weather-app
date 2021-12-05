import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { FormButton } from 'components';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnSubmit = (event: any): any => {
    event.preventDefault();
    console.log('username:', username, 'password:', password)
  };

  return (
    <div>
      <h3>Login</h3>
      <Form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          required
          min="2"
          max="30"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          required
          min="5"
          max="30"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleOnSubmit}>Sub</button>
        <FormButton text="submit" type="submit" onClickFunction={() => handleOnSubmit} />
      </Form>
      <p>Don't have an account?
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </p>
    </div>
  );
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
