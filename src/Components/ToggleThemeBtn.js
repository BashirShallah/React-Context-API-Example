import React from 'react';

function ToggleThemeBtn(Props) {
  return (
    <div>
        <button onClick={Props.toggleTheme}>
            Toggle Theme
        </button>
    </div>
  );
}

export default ToggleThemeBtn;
