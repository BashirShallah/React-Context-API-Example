import React from 'react';
import ToggleThemeBtn from './ToggleThemeBtn';
import Two from './Two';

function One() {
  return (
    <div>
        <h1>Hi from One.</h1>

        <Two />

        <ToggleThemeBtn />
    </div>
  );
}

export default One;
