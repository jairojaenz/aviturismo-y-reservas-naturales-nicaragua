"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { ReserveCard } from "@/components/reserve-card"
import { ReserveDetailModal } from "@/components/reserve-detail-modal"

// Datos de ejemplo de reservas naturales de Nicaragua
const reservesData = [
  {
    id: 1,
    name: "Reserva Natural Miraflor",
    region: "Norte",
    ecosystem: "Bosque Nuboso",
    area: "5,673 hectáreas",
    elevation: "800-1,450 msnm",
    description:
      "Reserva de biosfera con bosque nuboso único en Nicaragua. Hogar del quetzal y más de 200 especies de aves.",
    image: "/Reserva Natural Miraflor.jpg",
    birdSpecies: 236,
    activities: ["Aviturismo", "Senderismo", "Turismo Rural", "Observación de Orquídeas"],
    services: ["Guías Locales", "Hospedaje Rural", "Alimentación", "Transporte"],
    bestMonths: ["Noviembre", "Diciembre", "Enero", "Febrero", "Marzo"],
    location: "Estelí, Nicaragua",
    highlights: ["Quetzal Resplandeciente", "Bosque Nuboso", "Café Orgánico", "Comunidades Rurales"],
    difficulty: "Moderado",
    price: "$25-45 USD por día",
  },
  {
    id: 2,
    name: "Reserva Biológica Indio Maíz",
    region: "Sureste",
    ecosystem: "Bosque Húmedo Tropical",
    area: "263,929 hectáreas",
    elevation: "0-200 msnm",
    description: "La segunda reserva de biosfera más grande de Nicaragua. Parte del corredor biológico mesoamericano.",
    image: "/Reserva Biológica Indio Maiz.jpg",
    birdSpecies: 389,
    activities: ["Aviturismo", "Navegación Fluvial", "Pesca Deportiva", "Fotografía de Naturaleza"],
    services: ["Guías Especializados", "Embarcaciones", "Equipo de Observación", "Campamentos"],
    bestMonths: ["Febrero", "Marzo", "Abril", "Mayo"],
    location: "Río San Juan, Nicaragua",
    highlights: ["Lapa Verde", "Jaguar", "Río San Juan", "Biodiversidad Excepcional"],
    difficulty: "Avanzado",
    price: "$60-120 USD por día",
  },
  {
    id: 3,
    name: "Volcán Masaya",
    region: "Pacífico",
    ecosystem: "Bosque Seco Tropical",
    area: "5,100 hectáreas",
    elevation: "200-635 msnm",
    description: "Parque nacional con volcán activo y ecosistemas únicos. Fácil acceso desde Managua y Granada.",
    image: "/masaya-volcano-crater-with-surrounding-dry-forest.jpg",
    birdSpecies: 183,
    activities: ["Aviturismo", "Senderismo", "Observación Volcánica", "Turismo Nocturno"],
    services: ["Centro de Visitantes", "Senderos Señalizados", "Estacionamiento", "Tienda"],
    bestMonths: ["Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    location: "Masaya, Nicaragua",
    highlights: ["Guardabarranco", "Cráter Santiago", "Murciélagos", "Accesibilidad"],
    difficulty: "Fácil",
    price: "$15-25 USD por día",
  },
  {
    id: 4,
    name: "Reserva Natural Bosawás",
    region: "Norte",
    ecosystem: "Bosque Húmedo Tropical",
    area: "730,000 hectáreas",
    elevation: "100-1,650 msnm",
    description:
      "La reserva de biosfera más grande de Centroamérica. Territorio indígena con biodiversidad excepcional.",
    image: "/bosawas-pristine-rainforest-with-indigenous-commun.jpg",
    birdSpecies: 400,
    activities: ["Aviturismo Especializado", "Turismo Cultural", "Investigación", "Expediciones"],
    services: ["Guías Indígenas", "Hospedaje Comunitario", "Permisos Especiales", "Logística"],
    bestMonths: ["Marzo", "Abril", "Mayo"],
    location: "Jinotega/RAAN, Nicaragua",
    highlights: ["Harpia", "Culturas Indígenas", "Biodiversidad Prístina", "Aventura Extrema"],
    difficulty: "Experto",
    price: "$80-150 USD por día",
  },
  {
    id: 5,
    name: "Laguna de Apoyo",
    region: "Pacífico",
    ecosystem: "Laguna Cratérica",
    area: "2,100 hectáreas",
    elevation: "71 msnm",
    description: "Laguna cratérica con aguas cristalinas rodeada de bosque tropical seco. Ideal para principiantes.",
    image: "/apoyo-crater-lake-surrounded-by-tropical-forest.jpg",
    birdSpecies: 156,
    activities: ["Aviturismo", "Kayak", "Natación", "Senderismo Suave"],
    services: ["Centros Turísticos", "Alquiler de Kayaks", "Restaurantes", "Hospedaje"],
    bestMonths: ["Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    location: "Granada/Masaya, Nicaragua",
    highlights: ["Colibríes", "Aguas Termales", "Fácil Acceso", "Turismo Familiar"],
    difficulty: "Fácil",
    price: "$20-35 USD por día",
  },
  {
    id: 6,
    name: "Isla de Ometepe",
    region: "Pacífico",
    ecosystem: "Isla Volcánica",
    area: "27,600 hectáreas",
    elevation: "0-1,610 msnm",
    description: "Isla formada por dos volcanes en el Lago de Nicaragua. Patrimonio de la Humanidad por la UNESCO.",
    image: "/ometepe-island-with-twin-volcanoes-and-lake-nicara.jpg",
    birdSpecies: 218,
    activities: ["Aviturismo", "Senderismo Volcánico", "Turismo Cultural", "Ciclismo"],
    services: ["Hoteles Ecológicos", "Transporte Lacustre", "Guías Locales", "Alquiler de Bicicletas"],
    bestMonths: ["Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    location: "Rivas, Nicaragua",
    highlights: ["Oropéndola", "Volcanes Gemelos", "Petroglifos", "Cultura Ancestral"],
    difficulty: "Moderado",
    price: "$30-50 USD por día",
  },
]

export function NaturalReserves() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [ecosystemFilter, setEcosystemFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [selectedReserve, setSelectedReserve] = useState<(typeof reservesData)[0] | null>(null)

  const filteredReserves = useMemo(() => {
    return reservesData.filter((reserve) => {
      const matchesSearch =
        reserve.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reserve.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = regionFilter === "all" || reserve.region === regionFilter
      const matchesEcosystem = ecosystemFilter === "all" || reserve.ecosystem === ecosystemFilter
      const matchesDifficulty = difficultyFilter === "all" || reserve.difficulty === difficultyFilter

      return matchesSearch && matchesRegion && matchesEcosystem && matchesDifficulty
    })
  }, [searchTerm, regionFilter, ecosystemFilter, difficultyFilter])

  const uniqueRegions = Array.from(new Set(reservesData.map((reserve) => reserve.region)))
  const uniqueEcosystems = Array.from(new Set(reservesData.map((reserve) => reserve.ecosystem)))
  const uniqueDifficulties = Array.from(new Set(reservesData.map((reserve) => reserve.difficulty)))

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Buscar y Filtrar Reservas
          </CardTitle>
          <CardDescription>Encuentra las áreas protegidas ideales para tu experiencia de aviturismo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nombre o ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Región" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las regiones</SelectItem>
                {uniqueRegions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={ecosystemFilter} onValueChange={setEcosystemFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Ecosistema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los ecosistemas</SelectItem>
                {uniqueEcosystems.map((ecosystem) => (
                  <SelectItem key={ecosystem} value={ecosystem}>
                    {ecosystem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Dificultad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {uniqueDifficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Mostrando {filteredReserves.length} de {reservesData.length} reservas
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredReserves.map((reserve) => (
          <ReserveCard key={reserve.id} reserve={reserve} onViewDetails={() => setSelectedReserve(reserve)} />
        ))}
      </div>

      {filteredReserves.length === 0 && (
        <Card className="text-center">
          <CardContent>
            <div className="text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No se encontraron reservas</p>
              <p>Intenta ajustar los filtros de búsqueda</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reserve Detail Modal */}
      {selectedReserve && (
        <ReserveDetailModal
          reserve={selectedReserve}
          isOpen={!!selectedReserve}
          onClose={() => setSelectedReserve(null)}
        />
      )}
    </div>
  )
}
