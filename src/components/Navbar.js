import React from 'react';

function Navbar({ setSelectedPlatform }) {
  return (
    <div className="navbar">
      <button onClick={() => setSelectedPlatform('twitter')}>Twitter</button>
      <button onClick={() => setSelectedPlatform('facebook')}>Facebook</button>
      <button onClick={() => setSelectedPlatform('instagram')}>Instagram</button>
      <button onClick={() => setSelectedPlatform('linkedin')}>LinkedIn</button>
    </div>
  );
}

export default Navbar;
