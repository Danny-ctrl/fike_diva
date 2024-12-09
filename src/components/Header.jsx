import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';
import LoginModal from './LoginModal';
import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (user) => {
    console.log('Usuário logado:', user);
    setIsModalOpen(false); // Fecha o modal ao logar
  };

  return (
    <header className="header">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <img src="/logoPrincipal.png" alt="Fike Diva Logo" className="logo" />
        </DialogTrigger>
        <DialogContent className="RadixDialogContent">
          <LoginModal onLogin={handleLogin} />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
