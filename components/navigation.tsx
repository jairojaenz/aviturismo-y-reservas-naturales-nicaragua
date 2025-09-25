"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Bird, MapPin, Calendar, BookOpen, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import RegistroForm from "@/components/registroform"
import LoginForm from "@/components/loginform" 

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/catalogo", label: "Catálogo de Aves", icon: Bird },
    { href: "/reservas", label: "Reservas Naturales", icon: MapPin },
    { href: "/calendario", label: "Calendario", icon: Calendar },
    { href: "/guias", label: "Guías Locales", icon: Users },
    { href: "/educacion", label: "Educación", icon: BookOpen },
  ]

  return (
  <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-transparent">
      <div className="container-fluid flex h-16 items-center justify-between px-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Avinic_Logo-wbg.png" alt="Logo" width={96} height={96} objectFit="cover"/>
          <span className="text-base md:text-sm font-bold text-foreground">Aviturismo Nicaragua</span>
        </Link>

        {/* Desktop Navigation */}
          <nav className="hidden lg:flex md:text-sm items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 text-xs md:text-xs lg:text-sm font-small transition-colors",
                pathname === item.href ? "text-primary underline" : "text-foreground hover:text-foreground font-bold",
              )}
            >
              <item.icon className="h-4 w-4 hidden md:inline" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Botón Iniciar Sesión Desktop */}
          <Sheet open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="hidden md:inline-flex text-sm md:text-md px-8 py-6 bg-white/10 border-black/20 text-black hover:bg-primary">
                Iniciar Sesión
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[900px] sm:w-[900px]">
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
              <Button size="sm" className="hidden md:inline-flex text-sm md:text-md px-8 py-6 bg-primary border-white/20 text-white hover:bg-primary/50">
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
              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/50">
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
                      "flex items-center space-x-3 text-lg font-medium transition-colors px-12",
                      pathname === item.href ? "text-primary underline" : "text-foreground hover:text-foreground font-bold",
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
