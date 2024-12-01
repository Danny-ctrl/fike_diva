import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import './Header.css';

const Header = () => (
  <header className="header">
    <Dialog>
      {/* A logo que agora vai abrir o modal ao ser clicada */}
      <DialogTrigger asChild>
        <img src="/logoPrincipal.png" alt="Fike Diva Logo" className="logo" />
      </DialogTrigger>

      {/* O conteúdo do modal */}
      <DialogContent className="RadixDialogContent">
        <DialogTitle>Login</DialogTitle>
        <p>Faça o login para acessar sua conta.</p>
        <input type="text" placeholder="Nome de usuário" />
        <input type="password" placeholder="Senha" />
        <DialogClose asChild>
          <button>Fechar</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  </header>
);

export default Header;
