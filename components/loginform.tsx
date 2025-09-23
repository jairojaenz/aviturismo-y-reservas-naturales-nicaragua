"use client"
import React, { useState } from "react";

interface loginFormProps {
  onSubmit?: (data: { Usuario: string;  Password: string }) => void;
}

const LoginForm: React.FC<loginFormProps> = ({ onSubmit }) => {
  const [Usuario, setNombre] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!Usuario || !Password) { 
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    onSubmit?.({ Usuario, Password });
    setNombre("");
    
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-80">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-12 bg-white rounded-2xl shadow-md space-y-8"
      >
        <h2 className="text-2xl font-semibold text-center">Iniciar Sesiòn</h2>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium">
            Usuario:
          </label>
          <input
            id="nombre"
            type="text"
            value={Usuario}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="Password" className="block mb-1 font-medium">
            Contraseña:
          </label>
          <input
            id="Password"
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Iniciar Sesiòn
        </button>
      </form>
    </div>
  );
};

export default LoginForm;