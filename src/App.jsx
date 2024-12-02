import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/carousel';
import LoginModal from './components/LoginModal';
import AdminPanel from './components/AdminPanel';
import VendorPanel from './components/VendorPanel';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null); // { username: 'admin', role: 'adm' }

  return (
    <div className="App">
      <Header />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Carousel />
        {!loggedUser && <LoginModal onLogin={setLoggedUser} />}
        {loggedUser?.role === 'adm' && <AdminPanel />}
        {loggedUser?.role === 'vendedor' && <VendorPanel />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
