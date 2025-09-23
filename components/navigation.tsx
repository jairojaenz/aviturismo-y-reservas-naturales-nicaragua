"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Bird, MapPin, Calendar, BookOpen, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import RegistroForm from "@/components/registroform"
import LoginForm from "@/components/loginform" // 👈 tu formulario de inicio de sesión

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false) // 👈 estado para login
  const pathname = usePathname()

  const navItems = [
    { href: "/catalogo", label: "Catálogo de Aves", icon: Bird },
    { href: "/reservas", label: "Reservas Naturales", icon: MapPin },
    { href: "/calendario", label: "Calendario", icon: Calendar },
    { href: "/guias", label: "Guías Locales", icon: Users },
    { href: "/educacion", label: "Educación", icon: BookOpen },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Bird className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-foreground">Aviturismo Nicaragua</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-1 text-sm font-medium transition-colors",
                pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Botón Iniciar Sesión Desktop */}
          <Sheet open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
                Iniciar Sesión
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[500px]">
              <LoginForm
                onSubmit={(data) => {
                  console.log("Datos de login:", data)
                  setIsLoginOpen(false)
                }}
              />
            </SheetContent>
          </Sheet>

          {/* Botón Registrarse Desktop */}
          <Sheet open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
            <SheetTrigger asChild>
              <Button size="sm" className="hidden md:inline-flex">
                Registrarse
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[500px]">
              <RegistroForm
                onSubmit={(data) => {
                  console.log("Datos de registro:", data)
                  setIsRegisterOpen(false)
                }}
              />
            </SheetContent>
          </Sheet>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 text-lg font-medium transition-colors",
                      pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  {/* Iniciar Sesión Mobile */}
                  <Sheet open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full bg-transparent">
                        Iniciar Sesión
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[400px] sm:w-[500px]">
                      <LoginForm
                        onSubmit={(data) => {
                          console.log("Datos de login:", data)
                          setIsLoginOpen(false)
                        }}
                      />
                    </SheetContent>
                  </Sheet>

                  {/* Registrarse Mobile */}
                  <Sheet open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                    <SheetTrigger asChild>
                      <Button className="w-full">Registrarse</Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[400px] sm:w-[500px]">
                      <RegistroForm
                        onSubmit={(data) => {
                          console.log("Datos de registro:", data)
                          setIsRegisterOpen(false)
                        }}
                      />
                    </SheetContent>
                  </Sheet>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
