"use client"
import { Navigation } from "@/components/navigation";
import LoginForm from "@/components/loginform"; 
import React from "react";

export default function RegistroPage() {
  // Esta función recibirá los datos del formulario
  const handleRegistro = (data: { Usuario: string;  Password: string }) => {
    console.log("Datos del registro:", data);
    //  hacer fetch a la API,
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-8">
        <div className="space-y-12">
          {/* Le pasamos la función al formulario */}
          <LoginForm onSubmit={handleRegistro} />
        </div>
      </main>
    </div>
  );
}