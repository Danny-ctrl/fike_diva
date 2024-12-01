import React from 'react';
import { DialogContent, DialogTitle, DialogClose,DialogOverlay } from '@radix-ui/react-dialog';
import './Header.css'; 

const LoginModal = ({ onLogin }) => {
  const handleAdminLogin = () => {
    onLogin({ username: 'admin', role: 'adm' });
  };

  const handleVendorLogin = () => {
    onLogin({ username: 'vendedor', role: 'vendedor' });
  };

  return (
    <div>
      <button onClick={handleAdminLogin}>Login como Admin</button>
      <button onClick={handleVendorLogin}>Login como Vendedor</button>
    </div>
  );
};

export default LoginModal;
