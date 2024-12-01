import React from 'react';
import { DialogContent, DialogTitle, DialogClose,DialogOverlay } from '@radix-ui/react-dialog';
import './Header.css'; // Certifique-se de que o arquivo CSS esteja importado

const LoginModal = () => (
  <>
    {/* A sobreposição do modal */}
    <DialogOverlay className="RadixDialogOverlay" />

    {/* Conteúdo do modal */}
    <DialogContent className="RadixDialogContent">
      <DialogTitle>Login</DialogTitle>
      <p>Faça o login para acessar sua conta.</p>
      <input type="text" placeholder="Nome de usuário" />
      <input type="password" placeholder="Senha" />
      <DialogClose asChild>
        <button>Fechar</button>
      </DialogClose>
    </DialogContent>
  </>
);

export default LoginModal;
