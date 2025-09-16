"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Mountain, Bird, Calendar, Activity, Shield, DollarSign, Users } from "lucide-react"

interface Reserve {
  id: number
  name: string
  region: string
  ecosystem: string
  area: string
  elevation: string
  description: string
  image: string
  birdSpecies: number
  activities: string[]
  services: string[]
  bestMonths: string[]
  location: string
  highlights: string[]
  difficulty: string
  price: string
}

interface ReserveDetailModalProps {
  reserve: Reserve
  isOpen: boolean
  onClose: () => void
}

export function ReserveDetailModal({ reserve, isOpen, onClose }: ReserveDetailModalProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Moderado":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Avanzado":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Experto":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{reserve.name}</DialogTitle>
          <DialogDescription className="text-lg">
            {reserve.ecosystem} - {reserve.region}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image src={reserve.image || "/placeholder.svg"} alt={reserve.name} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <Badge className={getDifficultyColor(reserve.difficulty)}>{reserve.difficulty}</Badge>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">{reserve.description}</p>
          </div>

          <Separator />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Información General</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Área:</span>
                  <span>{reserve.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Elevación:</span>
                  <span>{reserve.elevation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bird className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Especies de aves:</span>
                  <span>{reserve.birdSpecies}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Precio:</span>
                  <span>{reserve.price}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Mejor Época de Visita</h3>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Meses recomendados:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {reserve.bestMonths.map((month, index) => (
                  <Badge key={index} variant="outline">
                    {month}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Actividades Disponibles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {reserve.activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Servicios Disponibles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {reserve.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Atractivos Principales</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {reserve.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1">Reservar Visita Guiada</Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Ver Ubicación en Mapa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
