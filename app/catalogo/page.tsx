import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BirdCatalog } from "@/components/bird-catalog"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container-fluid px-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Catálogo Digital de Aves</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubre las más de 700 especies de aves que habitan en Nicaragua, desde endémicas hasta migratorias
            </p>
          </div>
          <BirdCatalog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
