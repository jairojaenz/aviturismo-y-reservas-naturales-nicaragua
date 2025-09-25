import Link from "next/link"
import Image from "next/image"
import { Bird, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container-fluid px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/AVINIC_Logo Negativo.png" alt="Logo" width={84} height={84} objectFit="cover" />
              <span className="text-xl font-bold">Aviturismo Nicaragua</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Conectando a los amantes de las aves con la rica biodiversidad de Nicaragua a través del turismo
              responsable y sostenible.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/catalogo"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Catálogo de Aves
              </Link>
              <Link
                href="/reservas"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Reservas Naturales
              </Link>
              <Link
                href="/calendario"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Calendario
              </Link>
              <Link
                href="/guias"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Guías Locales
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@aviturismo.ni</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+505 2222-3333</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Managua, Nicaragua</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Aviturismo Nicaragua. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
