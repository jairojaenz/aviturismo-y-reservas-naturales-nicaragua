"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // 👁️

interface RegistroFormProps {
  onSubmit?: (data: { nombre: string; email: string; password: string }) => void;
}

const RegistroForm: React.FC<RegistroFormProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 estado para ver/ocultar
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    onSubmit?.({ nombre, email, password });
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-80">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-12 bg-white rounded-2xl shadow-md space-y-8"
      >
        <h2 className="text-2xl font-semibold text-center">Registro de Usuario</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Correo electrónico:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Contraseña */}
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Contraseña:
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"} // 👈 alterna
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* Botón/ícono dentro del input */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroForm;