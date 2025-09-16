"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Bird, Sun, Cloud, Droplets, Leaf } from "lucide-react"

const seasons = [
  {
    id: "dry",
    name: "Temporada Seca",
    months: ["Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    icon: Sun,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    description: "Ideal para aviturismo con clima estable y mayor visibilidad",
    highlights: [
      "Mejor visibilidad en senderos",
      "Aves residentes más activas",
      "Clima predecible",
      "Acceso fácil a reservas",
    ],
    birdActivity: "Alta actividad de aves residentes y especies del bosque seco",
    bestReserves: ["Volcán Masaya", "Laguna de Apoyo", "Isla de Ometepe"],
    temperature: "25-32°C",
    rainfall: "Mínima",
  },
  {
    id: "wet",
    name: "Temporada Lluviosa",
    months: ["Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"],
    icon: Cloud,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    description: "Época de reproducción y mayor diversidad de especies",
    highlights: [
      "Aves en época reproductiva",
      "Mayor diversidad de especies",
      "Vegetación exuberante",
      "Actividad de colibríes",
    ],
    birdActivity: "Pico de actividad reproductiva y presencia de especies migratorias",
    bestReserves: ["Reserva Miraflor", "Bosawás", "Indio Maíz"],
    temperature: "22-28°C",
    rainfall: "Moderada a alta",
  },
  {
    id: "migration",
    name: "Migración de Otoño",
    months: ["Septiembre", "Octubre", "Noviembre"],
    icon: Bird,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    description: "Paso de aves migratorias del norte hacia el sur",
    highlights: [
      "Especies migratorias norteamericanas",
      "Diversidad excepcional",
      "Rapaces en migración",
      "Reinitas y vireos",
    ],
    birdActivity: "Máxima diversidad con especies residentes y migratorias",
    bestReserves: ["Todas las reservas", "Costas del Pacífico", "Corredores biológicos"],
    temperature: "24-29°C",
    rainfall: "Variable",
  },
  {
    id: "spring",
    name: "Migración de Primavera",
    months: ["Marzo", "Abril", "Mayo"],
    icon: Leaf,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    description: "Regreso de aves migratorias hacia el norte",
    highlights: [
      "Aves en plumaje reproductivo",
      "Actividad de canto intensa",
      "Especies en tránsito",
      "Clima favorable",
    ],
    birdActivity: "Aves migratorias en plumaje nupcial y alta actividad vocal",
    bestReserves: ["Reservas de altura", "Bosques nubosos", "Corredores migratorios"],
    temperature: "26-31°C",
    rainfall: "Baja a moderada",
  },
]

export function SeasonalCalendar() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Temporadas de Aviturismo
          </CardTitle>
          <CardDescription>
            Conoce las mejores épocas del año para observar diferentes especies de aves en Nicaragua
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {seasons.map((season) => {
              const IconComponent = season.icon
              return (
                <Button
                  key={season.id}
                  variant={selectedSeason.id === season.id ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => setSelectedSeason(season)}
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="font-medium">{season.name}</span>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {season.months.slice(0, 2).map((month) => (
                      <Badge key={month} variant="secondary" className="text-xs">
                        {month.slice(0, 3)}
                      </Badge>
                    ))}
                    {season.months.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{season.months.length - 2}
                      </Badge>
                    )}
                  </div>
                </Button>
              )
            })}
          </div>

          {/* Selected Season Details */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <selectedSeason.icon className="h-5 w-5" />
                  {selectedSeason.name}
                </CardTitle>
                <Badge className={selectedSeason.color}>{selectedSeason.months.length} meses</Badge>
              </div>
              <CardDescription>{selectedSeason.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Bird className="h-4 w-4" />
                    Actividad de Aves
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{selectedSeason.birdActivity}</p>

                  <h5 className="font-medium mb-2">Características Destacadas:</h5>
                  <ul className="space-y-1">
                    {selectedSeason.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Condiciones Climáticas:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-muted-foreground" />
                        <span>Temperatura: {selectedSeason.temperature}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-muted-foreground" />
                        <span>Precipitación: {selectedSeason.rainfall}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Reservas Recomendadas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSeason.bestReserves.map((reserve, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {reserve}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-3">Meses de la Temporada:</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedSeason.months.map((month, index) => (
                    <Badge key={index} className={selectedSeason.color}>
                      {month}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
