import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import './Header.css';

const Header = () => (
  <header className="header">
    <Dialog>
      <DialogTrigger asChild>
        <img src="/logoPrincipal.png" alt="Fike Diva Logo" className="logo" />
      </DialogTrigger>
      <DialogContent className="RadixDialogContent">
        <DialogTitle>Login</DialogTitle>
        <p>Faça o login para acessar sua conta.</p>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button>Entrar</button>
          <DialogClose asChild>
            <button>Fechar</button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  </header>
);

export default Header;
