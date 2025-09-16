import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SeasonalCalendar } from "@/components/seasonal-calendar"
import { EventsCalendar } from "@/components/events-calendar"
import { MonthlyBreakdown } from "@/components/monthly-breakdown"

export default function CalendarioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container-fluid px-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Calendario de Temporadas</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubre las mejores épocas para observar aves en Nicaragua, eventos especiales y festivales de aviturismo
            </p>
          </div>

          <div className="space-y-12">
            <SeasonalCalendar />
            <EventsCalendar />
            <MonthlyBreakdown />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
