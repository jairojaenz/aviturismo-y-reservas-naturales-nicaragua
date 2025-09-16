import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GuidesDirectory } from "@/components/guides-directory"
import { BookingSystem } from "@/components/booking-system"

export default function GuiasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container-fluid px-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Guías Locales Certificados</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conecta con guías expertos locales para una experiencia auténtica de aviturismo en Nicaragua
            </p>
          </div>

          <div className="space-y-12">
            <GuidesDirectory />
            <BookingSystem />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
