import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/carousel';
import AdminPanel from './components/AdminPanel';
import VendorPanel from './components/VendorPanel';
import './App.css';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null); // Estado do usuário logado

  return (
    <div className="App">
      <Header />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Carousel />
        {!loggedUser && <p>Por favor, faça login para acessar as funções do sistema.</p>}
        {loggedUser?.role === 'adm' && <AdminPanel />}
        {loggedUser?.role === 'vendedor' && <VendorPanel />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
