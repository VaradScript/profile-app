import React, { useState } from 'react';
import Desktop from './components/Desktop';
import BootScreen from './components/BootScreen';
import LoginScreen from './components/LoginScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('boot'); // boot, login, desktop

  const handleBootComplete = () => {
    setGameState('login');
  };

  const handleLogin = () => {
    setGameState('desktop');
  };

  const handleLogOff = () => {
    setGameState('login');
  };

  const handleShutdown = () => {
    setGameState('shutdown');
  };

  return (
    <div className="App">
      {gameState === 'boot' && <BootScreen onComplete={handleBootComplete} />}
      {gameState === 'login' && <LoginScreen onLogin={handleLogin} onShutdown={handleShutdown} />}
      {gameState === 'desktop' && <Desktop onLogOff={handleLogOff} onShutdown={handleShutdown} />}
      {gameState === 'shutdown' && (
        <div style={{ width: '100vw', height: '100vh', background: 'black', cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Tahoma, sans-serif' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>It is now safe to turn off your computer.</h1>
            <p style={{ fontSize: '18px', color: '#ccc' }}>Thank you for visiting us.</p>
          </div>
        </div>
      )}
      <div className="crt-overlay"></div>
    </div>
  );
}

export default App;