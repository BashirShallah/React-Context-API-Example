import React from 'react';

function Two(Props) {
  return (
    <div>
        <h2 style={{color: Props.theme === 'dark' ? 'white' : 'blue'}}>Hi from Two.</h2>
        
        <p>theme: {Props.theme}</p>
    </div>
  );
}

export default Two;
