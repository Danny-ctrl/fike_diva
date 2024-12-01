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
    <div>
      <Header />
      <Carousel />

      {!loggedUser && <LoginModal onLogin={setLoggedUser} />}
      
      {loggedUser?.role === 'adm' && <AdminPanel />}
      {loggedUser?.role === 'vendedor' && <VendorPanel />}

      <Footer />
    </div>
  );
};

export default App;
