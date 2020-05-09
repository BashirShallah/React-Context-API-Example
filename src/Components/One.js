import React from 'react';
import Two from './Two';

function One(Props) {
  return (
    <div>
        <h1>Hi from One.</h1>
        <Two theme={Props.theme} />
    </div>
  );
}

export default One;
