"use client"
import { Navigation } from "@/components/navigation";
import RegistroForm from "@/components/registroform"; 
import React from "react";

export default function RegistroPage() {
  // Esta función recibirá los datos del formulario
  const handleRegistro = (data: { nombre: string; email: string; password: string }) => {
    console.log("Datos del registro:", data);
    //  hacer fetch a la API,
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-8">
        <div className="space-y-12">
          {/* Le pasamos la función al formulario */}
          <RegistroForm onSubmit={handleRegistro} />
        </div>
      </main>
    </div>
  );
}