import React from 'react';

import ThemeContext from '../Context/ThemeContext';

class ToggleThemeBtn extends React.Component{

  componentDidUpdate(){
    console.log("ToggleThemeBtn Component " + this.context.theme);
  }

  render() {
    return (
      <div>
        <button onClick={this.context.toggleTheme}>
            Toggle Theme to {this.context.theme === 'dark' ? 'light' : 'dark'}
        </button>
      </div>
    );
  }

}

ToggleThemeBtn.contextType = ThemeContext;

export default ToggleThemeBtn;
