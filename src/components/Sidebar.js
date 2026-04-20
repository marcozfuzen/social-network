import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><button onClick={() => console.log('Feed clicked')}>Feed</button></li>
        <li><button onClick={() => console.log('Perfil clicked')}>Perfil</button></li>
        <li><button onClick={() => console.log('Amigos clicked')}>Amigos</button></li>
        <li><button onClick={() => console.log('Configurações clicked')}>Configurações</button></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
