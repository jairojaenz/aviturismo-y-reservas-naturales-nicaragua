import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bird, MapPin, Calendar, Users, BookOpen, Shield } from "lucide-react"

const features = [
  {
    icon: Bird,
    title: "Catálogo Digital de Aves",
    description:
      "Descubre más de 700 especies de aves endémicas y migratorias con fotografías, descripciones detalladas y mapas de distribución.",
  },
  {
    icon: MapPin,
    title: "Reservas Naturales",
    description:
      "Información actualizada de las áreas protegidas habilitadas para aviturismo y actividades ecoturísticas en Nicaragua.",
  },
  {
    icon: Calendar,
    title: "Calendario de Temporadas",
    description:
      "Planifica tu visita con nuestro calendario de temporadas de avistamiento y eventos especiales como festivales de aves.",
  },
  {
    icon: Users,
    title: "Guías Locales Certificados",
    description:
      "Conecta con guías locales expertos que conocen los mejores sitios de observación y las especies más representativas.",
  },
  {
    icon: BookOpen,
    title: "Módulo Educativo",
    description:
      "Aprende sobre conservación, buenas prácticas de aviturismo y la importancia de proteger nuestros ecosistemas.",
  },
  {
    icon: Shield,
    title: "Turismo Responsable",
    description:
      "Promovemos prácticas de turismo sostenible que benefician tanto a las comunidades locales como a la conservación.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/30">
      <div className="container:md my-10 mx-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Todo lo que Necesitas para tu Aventura de Aviturismo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una plataforma completa que conecta a los amantes de las aves con la rica biodiversidad de Nicaragua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
