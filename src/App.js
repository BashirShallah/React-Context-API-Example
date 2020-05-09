import React from 'react';
import One from './Components/One';
import ToggleThemeBtn from './Components/ToggleThemeBtn';

class App extends React.Component {

  state = {
    theme: 'dark'
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    });
  };

  render() {
    return (
      <div style={{background: this.state.theme === 'dark' ? 'blue' : 'white'}}>
        <h1>Hi from App</h1>
        <One theme={this.state.theme} />

        <ToggleThemeBtn toggleTheme={this.toggleTheme} />
      </div>
    );  
  }
  
}

export default App;
