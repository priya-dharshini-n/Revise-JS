import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    console.log(name, pwd, 'test');
    if (name == '' || pwd == '') setError('Mandatory fields are missing');
    else setError('Your data is submitted');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>
          Enter your name:
          <input
            placeholder="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter your Password:
          <input
            placeholder="Password"
            value={pwd}
            type={'password'}
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
      <h2>{error}</h2>
    </div>
  );
}
