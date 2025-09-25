import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <Image
          src="/colorful-tropical-bird-in-nicaragua-rainforest-can.jpg"
          alt="Ave tropical en el dosel del bosque de Nicaragua"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Descubre la Biodiversidad de <span className="text-primary">Nicaragua</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-pretty opacity-90">
          Explora las reservas naturales, observa aves endémicas y migratorias, y conecta con guías locales certificados
          para una experiencia única de aviturismo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/catalogo">
            <Button size="lg" className="text-lg px-8 py-6">
              Explorar Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/reservas">
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Ver reservas Naturales
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
