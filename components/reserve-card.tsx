"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mountain, Bird, Info, Star } from "lucide-react"

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

interface ReserveCardProps {
  reserve: Reserve
  onViewDetails: () => void
}

export function ReserveCard({ reserve, onViewDetails }: ReserveCardProps) {
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
    <Card className="hover:shadow-lg transition-shadow pt-0 overflow-clip">
      <div className="relative h-80 w-full">
        <Image src={reserve.image || "/placeholder.svg"} alt={reserve.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className={getDifficultyColor(reserve.difficulty)}>{reserve.difficulty}</Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-black/50 text-white border-0">
            {reserve.region}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{reserve.name}</CardTitle>
        <CardDescription className="text-sm">{reserve.ecosystem}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{reserve.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{reserve.area}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="h-4 w-4 text-muted-foreground" />
            <span>{reserve.elevation}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bird className="h-4 w-4 text-muted-foreground" />
            <span>{reserve.birdSpecies} especies</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-muted-foreground" />
            <span>{reserve.price}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">ACTIVIDADES PRINCIPALES</p>
          <div className="flex flex-wrap gap-1">
            {reserve.activities.slice(0, 3).map((activity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {activity}
              </Badge>
            ))}
            {reserve.activities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{reserve.activities.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 inline mr-1" />
            {reserve.location}
          </div>
          <Button variant="outline" size="sm" onClick={onViewDetails}>
            <Info className="h-4 w-4 mr-1" />
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
