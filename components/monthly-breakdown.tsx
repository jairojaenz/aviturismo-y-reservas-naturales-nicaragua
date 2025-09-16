"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Bird, Thermometer, CloudRain, Eye } from "lucide-react"

const monthlyData = [
  {
    month: "Enero",
    season: "Seca",
    temperature: "26-32°C",
    rainfall: 5,
    birdActivity: 85,
    visibility: 95,
    species: 180,
    highlights: ["Aves residentes activas", "Excelente visibilidad", "Clima estable"],
    bestFor: ["Principiantes", "Fotografía", "Familias"],
    color: "bg-orange-100 text-orange-800",
  },
  {
    month: "Febrero",
    season: "Seca",
    temperature: "27-33°C",
    rainfall: 3,
    birdActivity: 90,
    visibility: 98,
    species: 175,
    highlights: ["Pico de actividad", "Condiciones ideales", "Festivales"],
    bestFor: ["Todos los niveles", "Eventos", "Turismo"],
    color: "bg-orange-100 text-orange-800",
  },
  {
    month: "Marzo",
    season: "Transición",
    temperature: "28-34°C",
    rainfall: 15,
    birdActivity: 88,
    visibility: 90,
    species: 195,
    highlights: ["Inicio migración", "Plumaje nupcial", "Actividad vocal"],
    bestFor: ["Observadores experimentados", "Migración"],
    color: "bg-green-100 text-green-800",
  },
  {
    month: "Abril",
    season: "Transición",
    temperature: "29-35°C",
    rainfall: 25,
    birdActivity: 92,
    visibility: 85,
    species: 210,
    highlights: ["Migración primaveral", "Diversidad máxima", "Reproducción"],
    bestFor: ["Especialistas", "Investigación"],
    color: "bg-green-100 text-green-800",
  },
  {
    month: "Mayo",
    season: "Lluviosa",
    temperature: "27-32°C",
    rainfall: 45,
    birdActivity: 95,
    visibility: 75,
    species: 220,
    highlights: ["Pico reproductivo", "Especies migratorias", "Vegetación exuberante"],
    bestFor: ["Expertos", "Investigación", "Fotografía especializada"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    month: "Junio",
    season: "Lluviosa",
    temperature: "25-30°C",
    rainfall: 65,
    birdActivity: 88,
    visibility: 70,
    species: 205,
    highlights: ["Juveniles", "Actividad matutina", "Bosques húmedos"],
    bestFor: ["Madrugadores", "Bosques nubosos"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    month: "Julio",
    season: "Lluviosa",
    temperature: "24-29°C",
    rainfall: 70,
    birdActivity: 85,
    visibility: 65,
    species: 190,
    highlights: ["Temporada de cría", "Colibríes activos", "Senderos húmedos"],
    bestFor: ["Especialistas en húmedos", "Colibríes"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    month: "Agosto",
    season: "Lluviosa",
    temperature: "24-29°C",
    rainfall: 75,
    birdActivity: 82,
    visibility: 60,
    species: 185,
    highlights: ["Juveniles abundantes", "Frutas maduras", "Actividad reducida"],
    bestFor: ["Observación de comportamiento"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    month: "Septiembre",
    season: "Migración",
    temperature: "25-30°C",
    rainfall: 80,
    birdActivity: 98,
    visibility: 70,
    species: 240,
    highlights: ["Inicio migración otoñal", "Diversidad excepcional", "Rapaces"],
    bestFor: ["Migración", "Diversidad máxima"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    month: "Octubre",
    season: "Migración",
    temperature: "26-31°C",
    rainfall: 60,
    birdActivity: 100,
    visibility: 75,
    species: 250,
    highlights: ["Pico migratorio", "Especies raras", "Máxima diversidad"],
    bestFor: ["Todos los observadores", "Listas de vida"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    month: "Noviembre",
    season: "Migración",
    temperature: "26-31°C",
    rainfall: 40,
    birdActivity: 95,
    visibility: 80,
    species: 235,
    highlights: ["Migración tardía", "Condiciones mejorando", "Especies norteñas"],
    bestFor: ["Migración", "Condiciones mixtas"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    month: "Diciembre",
    season: "Seca",
    temperature: "25-31°C",
    rainfall: 10,
    birdActivity: 88,
    visibility: 90,
    species: 200,
    highlights: ["Invierno norteño", "Condiciones estables", "Conteos navideños"],
    bestFor: ["Conteos", "Turismo", "Principiantes"],
    color: "bg-orange-100 text-orange-800",
  },
]

export function MonthlyBreakdown() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Desglose Mensual de Aviturismo
          </CardTitle>
          <CardDescription>
            Información detallada mes a mes para planificar tu experiencia de observación de aves
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyData.map((month, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{month.month}</CardTitle>
                    <Badge className={month.color}>{month.season}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Thermometer className="h-3 w-3" />
                    {month.temperature}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Bird className="h-3 w-3" />
                        Actividad
                      </span>
                      <span>{month.birdActivity}%</span>
                    </div>
                    <Progress value={month.birdActivity} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        Visibilidad
                      </span>
                      <span>{month.visibility}%</span>
                    </div>
                    <Progress value={month.visibility} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <CloudRain className="h-3 w-3" />
                        Lluvia
                      </span>
                      <span>{month.rainfall}mm</span>
                    </div>
                    <Progress value={month.rainfall} max={100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Bird className="h-4 w-4 text-accent" />
                      {month.species} especies esperadas
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Destacados:</h5>
                    <ul className="space-y-1">
                      {month.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs flex items-center gap-1">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Ideal para:</h5>
                    <div className="flex flex-wrap gap-1">
                      {month.bestFor.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
