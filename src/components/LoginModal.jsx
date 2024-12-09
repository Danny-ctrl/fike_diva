import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DialogClose } from '@radix-ui/react-dialog';
import './LoginModal.css';

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificação de credenciais
    if (username === 'admin' && password === '1234') {
      onLogin({ username: 'admin', role: 'adm' });
    } else if (username === 'vendedor' && password === '1234') {
      onLogin({ username: 'vendedor', role: 'vendedor' });
    } else {
      alert('Usuário ou senha incorretos'); 
    }
  };

  return (
    <div className="login-modal">
      <h2>Login</h2> 
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
      <div className="button-group">
        <button onClick={handleLogin}>Entrar</button>
        <DialogClose asChild>
          <button>Fechar</button>
        </DialogClose>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
