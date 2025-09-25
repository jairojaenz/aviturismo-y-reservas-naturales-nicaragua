"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Info } from "lucide-react"

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

interface BirdCardProps {
  bird: Bird
  onViewDetails: () => void
}

export function BirdCard({ bird, onViewDetails }: BirdCardProps) {
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
    <Card className="overflow-clip hover:shadow-lg transition-shadow pt-0">
      <div className="relative h-64 w-full">
        <Image src={bird.image || "/placeholder.svg"} alt={bird.name} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className={getTypeColor(bird.type)}>{bird.type}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{bird.name}</CardTitle>
        <CardDescription className="italic text-sm">{bird.scientificName}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{bird.description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{bird.habitat}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{bird.season}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Badge variant="outline" className={getConservationColor(bird.conservation)}>
            {bird.conservation}
          </Badge>
          <Button variant="outline" size="sm" onClick={onViewDetails}>
            <Info className="h-4 w-4 mr-1" />
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
