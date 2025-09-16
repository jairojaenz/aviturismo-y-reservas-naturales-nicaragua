"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Ruler, Utensils, Shield, Clock } from "lucide-react"

interface Bird {
  id: number
  name: string
  scientificName: string
  type: string
  habitat: string
  season: string
  description: string
  image: string
  locations: string[]
  bestTime: string
  conservation: string
  size: string
  diet: string
}

interface BirdDetailModalProps {
  bird: Bird
  isOpen: boolean
  onClose: () => void
}

export function BirdDetailModal({ bird, isOpen, onClose }: BirdDetailModalProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Endémica":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Migratoria":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Residente":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getConservationColor = (status: string) => {
    switch (status) {
      case "En Peligro Crítico":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Vulnerable":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Casi Amenazada":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{bird.name}</DialogTitle>
          <DialogDescription className="text-lg italic">{bird.scientificName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image src={bird.image || "/placeholder.svg"} alt={bird.name} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <Badge className={getTypeColor(bird.type)}>{bird.type}</Badge>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">{bird.description}</p>
          </div>

          <Separator />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Tamaño:</span>
                <span>{bird.size}</span>
              </div>

              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Dieta:</span>
                <span>{bird.diet}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Hábitat:</span>
                <span>{bird.habitat}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Temporada:</span>
                <span>{bird.season}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Mejor época:</span>
                <span>{bird.bestTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Conservación:</span>
                <Badge className={getConservationColor(bird.conservation)}>{bird.conservation}</Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Dónde Observar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {bird.locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm">{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1">Reservar Tour de Avistamiento</Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Ver en Mapa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
