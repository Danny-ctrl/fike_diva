import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@radix-ui/react-dialog';
import './LoginModal.css';

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      onLogin({ username: 'admin', role: 'adm' });
    } else if (username === 'vendedor' && password === '1234') {
      onLogin({ username: 'vendedor', role: 'vendedor' });
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <Dialog>
      <DialogOverlay className="RadixDialogOverlay" />
      <DialogContent className="RadixDialogContent">
        <DialogTitle>Login</DialogTitle>
        <p>Faça o login para acessar sua conta.</p>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button onClick={handleLogin}>Entrar</button>
          <DialogClose asChild>
            <button>Fechar</button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

LoginModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
