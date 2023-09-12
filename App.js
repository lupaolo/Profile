import React from 'react';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        imageUrl="URL_DA_IMAGEM"
        nome="Nome do Usuário"
        email="email@exemplo.com"
        idade={30}
      />
    </div>
  );
}

export default App;

