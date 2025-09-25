import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "700+", label: "Especies de Aves" },
  { number: "76", label: "Áreas Protegidas" },
  { number: "150+", label: "Guías Certificados" },
  { number: "50K+", label: "Visitantes Anuales" },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-12">
      <div className="container:md my-10 mx-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nicaragua: Paraíso del Aviturismo</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Descubre por qué Nicaragua es considerado uno de los mejores destinos de aviturismo en Centroamérica
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-1 shadow-lg bg-secondary-foreground">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-secondary font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
