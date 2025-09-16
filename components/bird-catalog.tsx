"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { BirdCard } from "@/components/bird-card"
import { BirdDetailModal } from "@/components/bird-detail-modal"

// Datos de ejemplo de aves de Nicaragua
const birdsData = [
  {
    id: 1,
    name: "Quetzal Resplandeciente",
    scientificName: "Pharomachrus mocinno",
    type: "Endémica",
    habitat: "Bosque Nuboso",
    season: "Todo el año",
    description:
      "Ave sagrada de los mayas, conocida por su plumaje verde iridiscente y cola larga. Habita en los bosques nubosos de las montañas del norte.",
    image: "/quetzal-bird-with-long-green-tail-feathers-in-clou.jpg",
    locations: ["Reserva Natural Miraflor", "Selva Negra", "Cerro Musún"],
    bestTime: "Marzo - Junio",
    conservation: "Casi Amenazada",
    size: "35-40 cm",
    diet: "Frutos, insectos",
  },
  {
    id: 2,
    name: "Guardabarranco",
    scientificName: "Eumomota superciliosa",
    type: "Endémica",
    habitat: "Bosque Seco",
    season: "Todo el año",
    description:
      "Ave nacional de Nicaragua, reconocida por su cola en forma de raqueta y colores vibrantes azul y canela.",
    image: "/turquoise-browed-motmot-bird-with-racket-tail-perc.jpg",
    locations: ["Volcán Masaya", "Reserva Natural Chocoyero", "Isla de Ometepe"],
    bestTime: "Diciembre - Abril",
    conservation: "Preocupación Menor",
    size: "34 cm",
    diet: "Insectos, pequeños reptiles",
  },
  {
    id: 3,
    name: "Reinita Cerúlea",
    scientificName: "Setophaga cerulea",
    type: "Migratoria",
    habitat: "Bosque Húmedo",
    season: "Octubre - Marzo",
    description:
      "Pequeña ave migratoria que viaja desde Norteamérica. Los machos tienen un distintivo color azul cerúleo en la cabeza y espalda.",
    image: "/cerulean-warbler-small-blue-bird-in-tropical-fores.jpg",
    locations: ["Reserva Indio Maíz", "Río San Juan", "Bosawás"],
    bestTime: "Noviembre - Febrero",
    conservation: "Vulnerable",
    size: "12 cm",
    diet: "Insectos, arañas",
  },
  {
    id: 4,
    name: "Tucán Pico Iris",
    scientificName: "Ramphastos sulfuratus",
    type: "Residente",
    habitat: "Bosque Húmedo",
    season: "Todo el año",
    description:
      "Tucán de gran tamaño con pico multicolor característico. Es una de las aves más emblemáticas de los bosques tropicales.",
    image: "/keel-billed-toucan-with-colorful-beak-in-rainfores.jpg",
    locations: ["Reserva Indio Maíz", "Río San Juan", "Bosawás"],
    bestTime: "Abril - Agosto",
    conservation: "Preocupación Menor",
    size: "50 cm",
    diet: "Frutos, huevos, insectos",
  },
  {
    id: 5,
    name: "Colibrí Garganta Rubí",
    scientificName: "Archilochus colubris",
    type: "Migratoria",
    habitat: "Jardines y Bosques",
    season: "Septiembre - Abril",
    description:
      "Pequeño colibrí migratorio que cruza el Golfo de México. Los machos tienen una garganta roja brillante iridiscente.",
    image: "/ruby-throated-hummingbird-male-with-red-throat-hov.jpg",
    locations: ["Laguna de Apoyo", "Volcán Mombacho", "Granada"],
    bestTime: "Octubre - Marzo",
    conservation: "Preocupación Menor",
    size: "9 cm",
    diet: "Néctar, pequeños insectos",
  },
  {
    id: 6,
    name: "Lapa Verde",
    scientificName: "Ara ambiguus",
    type: "Residente",
    habitat: "Bosque Húmedo",
    season: "Todo el año",
    description:
      "Loro de gran tamaño con plumaje predominantemente verde. Es una especie en peligro debido a la deforestación.",
    image: "/great-green-macaw-large-parrot-in-tropical-rainfor.jpg",
    locations: ["Reserva Indio Maíz", "Río San Juan"],
    bestTime: "Mayo - Septiembre",
    conservation: "En Peligro Crítico",
    size: "85 cm",
    diet: "Frutos, semillas, flores",
  },
]

export function BirdCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [habitatFilter, setHabitatFilter] = useState("all")
  const [selectedBird, setSelectedBird] = useState<(typeof birdsData)[0] | null>(null)

  const filteredBirds = useMemo(() => {
    return birdsData.filter((bird) => {
      const matchesSearch =
        bird.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bird.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === "all" || bird.type === typeFilter
      const matchesHabitat = habitatFilter === "all" || bird.habitat === habitatFilter

      return matchesSearch && matchesType && matchesHabitat
    })
  }, [searchTerm, typeFilter, habitatFilter])

  const uniqueHabitats = Array.from(new Set(birdsData.map((bird) => bird.habitat)))

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Buscar y Filtrar Aves
          </CardTitle>
          <CardDescription>Encuentra especies específicas usando los filtros disponibles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nombre común o científico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Tipo de ave" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="Endémica">Endémicas</SelectItem>
                <SelectItem value="Migratoria">Migratorias</SelectItem>
                <SelectItem value="Residente">Residentes</SelectItem>
              </SelectContent>
            </Select>
            <Select value={habitatFilter} onValueChange={setHabitatFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Hábitat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los hábitats</SelectItem>
                {uniqueHabitats.map((habitat) => (
                  <SelectItem key={habitat} value={habitat}>
                    {habitat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Mostrando {filteredBirds.length} de {birdsData.length} especies
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBirds.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onViewDetails={() => setSelectedBird(bird)} />
        ))}
      </div>

      {filteredBirds.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No se encontraron aves</p>
              <p>Intenta ajustar los filtros de búsqueda</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bird Detail Modal */}
      {selectedBird && (
        <BirdDetailModal bird={selectedBird} isOpen={!!selectedBird} onClose={() => setSelectedBird(null)} />
      )}
    </div>
  )
}
