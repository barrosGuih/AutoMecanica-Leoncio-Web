'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './page.module.css';
import './stilo.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Chama a API
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      // Salva token no localStorage
      localStorage.setItem('token', data.token);
      setMessage('Login Aprovado ✅');

      // Redireciona para dashboard
      router.push('/restrictArea/dashboard/homeDash/page');
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h2 className={style.title}>Login</h2>
        <form className={style.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={style.button}>Entrar</button>

          {message && (
            <p className={`mt-4 text-center ${message.includes('Aprovado') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
