"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Camera, Award, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    name: "Festival Nacional de Aves",
    date: "15-17 Febrero 2024",
    location: "Managua y alrededores",
    type: "Festival",
    description: "El evento de aviturismo más importante de Nicaragua con actividades para toda la familia",
    activities: [
      "Competencia de fotografía de aves",
      "Talleres de identificación",
      "Excursiones guiadas",
      "Feria de ecoturismo",
    ],
    participants: "500+ participantes",
    cost: "Gratuito",
    organizer: "MARENA y operadores locales",
    highlights: ["Concursos", "Premios", "Networking", "Educación"],
    image: "/festival-aves-nicaragua-birdwatchers-gathering.jpg",
  },
  {
    id: 2,
    name: "Conteo Navideño de Aves",
    date: "14 Diciembre - 5 Enero",
    location: "Todo el país",
    type: "Conteo Ciudadano",
    description: "Participación en el conteo mundial de aves navideñas de Audubon Society",
    activities: [
      "Conteos en círculos designados",
      "Registro de especies",
      "Capacitación previa",
      "Reporte de resultados",
    ],
    participants: "200+ voluntarios",
    cost: "Gratuito",
    organizer: "Audubon Society Nicaragua",
    highlights: ["Ciencia Ciudadana", "Conservación", "Datos Científicos", "Voluntariado"],
    image: "/christmas-bird-count-volunteers-in-field.jpg",
  },
  {
    id: 3,
    name: "Migración de Rapaces - Observación",
    date: "Septiembre - Noviembre",
    location: "Corredor del Pacífico",
    type: "Evento Estacional",
    description: "Observación del paso masivo de aves rapaces migratorias",
    activities: [
      "Conteos diarios",
      "Identificación de especies",
      "Fotografía especializada",
      "Investigación científica",
    ],
    participants: "Grupos pequeños",
    cost: "$25-45 USD",
    organizer: "Operadores especializados",
    highlights: ["Especies Raras", "Migración Masiva", "Investigación", "Fotografía"],
    image: "/raptor-migration-hawks-soaring-over-nicaragua.jpg",
  },
  {
    id: 4,
    name: "BioBlitz Bosawás",
    date: "Mayo 2024",
    location: "Reserva Bosawás",
    type: "Expedición Científica",
    description: "Inventario intensivo de biodiversidad en la reserva más grande de Centroamérica",
    activities: [
      "Inventario de especies",
      "Investigación colaborativa",
      "Documentación fotográfica",
      "Intercambio científico",
    ],
    participants: "Científicos y expertos",
    cost: "$120-200 USD",
    organizer: "Universidades y ONG",
    highlights: ["Investigación", "Nuevos Registros", "Colaboración", "Conservación"],
    image: "/bioblitz-scientists-documenting-birds-bosawas.jpg",
  },
  {
    id: 5,
    name: "Festival del Quetzal",
    date: "Marzo 2024",
    location: "Reserva Miraflor",
    type: "Festival Regional",
    description: "Celebración dedicada al ave nacional de Guatemala presente en Nicaragua",
    activities: ["Búsqueda del quetzal", "Talleres de conservación", "Arte y cultura local", "Turismo comunitario"],
    participants: "Familias y turistas",
    cost: "$35-60 USD",
    organizer: "Comunidades locales",
    highlights: ["Quetzal", "Cultura Local", "Conservación", "Turismo Rural"],
    image: "/quetzal-festival-miraflor-community-celebration.jpg",
  },
  {
    id: 6,
    name: "Global Big Day Nicaragua",
    date: "Mayo 2024",
    location: "Todo el país",
    type: "Conteo Global",
    description: "Participación en el evento mundial de observación de aves de eBird",
    activities: ["Conteos simultáneos", "Registro en eBird", "Competencia amistosa", "Reporte en tiempo real"],
    participants: "Observadores nacionales",
    cost: "Gratuito",
    organizer: "eBird y grupos locales",
    highlights: ["Competencia Global", "Tecnología", "Datos Abiertos", "Comunidad"],
    image: "/global-big-day-birdwatchers-using-apps.jpg",
  },
]

export function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(events[0])

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Festival":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Conteo Ciudadano":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Evento Estacional":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Expedición Científica":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Festival Regional":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      case "Conteo Global":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Eventos y Festivales de Aviturismo
          </CardTitle>
          <CardDescription>
            Participa en festivales, conteos ciudadanos y eventos especiales de observación de aves
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {events.map((event) => (
              <Button
                key={event.id}
                variant={selectedEvent.id === event.id ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-start gap-2 text-left"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="font-medium text-sm">{event.name}</span>
                  <Badge className={getEventTypeColor(event.type)} variant="secondary">
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </div>
              </Button>
            ))}
          </div>

          {/* Selected Event Details */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedEvent.name}</CardTitle>
                <Badge className={getEventTypeColor(selectedEvent.type)}>{selectedEvent.type}</Badge>
              </div>
              <CardDescription>{selectedEvent.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Información del Evento
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.cost}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Organizador:</h5>
                    <p className="text-sm text-muted-foreground">{selectedEvent.organizer}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Actividades:</h5>
                    <ul className="space-y-1">
                      {selectedEvent.activities.map((activity, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Destacados:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">
                  <Users className="h-4 w-4 mr-2" />
                  Registrarse al Evento
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  Más Información
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
