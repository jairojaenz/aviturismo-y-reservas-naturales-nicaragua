import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NaturalReserves } from "@/components/natural-reserves"

export default function ReservasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container-fluid px-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Reservas Naturales</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explora las 76 áreas protegidas de Nicaragua, desde bosques nubosos hasta humedales costeros
            </p>
          </div>
          <NaturalReserves />
        </div>
      </main>
      <Footer />
    </div>
  )
}
