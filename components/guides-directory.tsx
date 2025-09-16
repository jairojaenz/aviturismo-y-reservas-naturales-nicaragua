"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Languages, Award, Search, Users } from "lucide-react"
import { GuideDetailModal } from "@/components/guide-detail-modal"

const guidesData = [
  {
    id: 1,
    name: "Carlos Mendoza",
    location: "Estelí - Reserva Miraflor",
    specializations: ["Bosque Nuboso", "Quetzal", "Aves Endémicas"],
    languages: ["Español", "Inglés"],
    experience: 12,
    rating: 4.9,
    reviews: 156,
    certification: "Guía Certificado INTUR",
    description:
      "Especialista en bosques nubosos con más de una década guiando en Miraflor. Experto en localización del Quetzal Resplandeciente.",
    avatar: "/guide-carlos-mendoza-miraflor-specialist.jpg",
    services: ["Tours de día completo", "Caminatas nocturnas", "Fotografía especializada", "Tours familiares"],
    rates: {
      halfDay: 45,
      fullDay: 75,
      multiDay: 65,
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    contact: {
      phone: "+505 8765-4321",
      email: "carlos.mendoza@aviturismo.ni",
      whatsapp: "+505 8765-4321",
    },
    highlights: ["Récord de avistamientos de Quetzal", "Conocimiento botánico excepcional", "Fotógrafo profesional"],
    groupSize: "1-8 personas",
  },
  {
    id: 2,
    name: "María Elena Vásquez",
    location: "Río San Juan - Indio Maíz",
    specializations: ["Bosque Húmedo", "Aves Acuáticas", "Navegación Fluvial"],
    languages: ["Español", "Inglés", "Francés"],
    experience: 8,
    rating: 4.8,
    reviews: 89,
    certification: "Guía Especializada en Humedales",
    description:
      "Bióloga y guía especializada en ecosistemas acuáticos del Río San Juan. Experta en aves del bosque húmedo tropical.",
    avatar: "/guide-maria-elena-rio-san-juan-expert.jpg",
    services: ["Expediciones fluviales", "Observación desde embarcación", "Campamentos", "Investigación participativa"],
    rates: {
      halfDay: 55,
      fullDay: 95,
      multiDay: 85,
    },
    availability: ["Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    contact: {
      phone: "+505 8234-5678",
      email: "maria.vasquez@riosanjuan.ni",
      whatsapp: "+505 8234-5678",
    },
    highlights: ["Bióloga certificada", "Especialista en Lapa Verde", "Navegación experta"],
    groupSize: "2-6 personas",
  },
  {
    id: 3,
    name: "Roberto Flores",
    location: "Masaya - Volcán Masaya",
    specializations: ["Bosque Seco", "Aves Nocturnas", "Volcanes"],
    languages: ["Español", "Inglés"],
    experience: 15,
    rating: 4.7,
    reviews: 203,
    certification: "Guía Senior MARENA",
    description:
      "Veterano guía con amplia experiencia en ecosistemas volcánicos. Especialista en aves nocturnas y del bosque seco tropical.",
    avatar: "/guide-roberto-flores-masaya-volcano-guide.jpg",
    services: ["Tours volcánicos", "Observación nocturna", "Tours educativos", "Grupos escolares"],
    rates: {
      halfDay: 35,
      fullDay: 60,
      multiDay: 50,
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    contact: {
      phone: "+505 8345-6789",
      email: "roberto.flores@masaya.ni",
      whatsapp: "+505 8345-6789",
    },
    highlights: ["15 años de experiencia", "Especialista en murciélagos", "Educador certificado"],
    groupSize: "1-12 personas",
  },
  {
    id: 4,
    name: "Ana Lucía Morales",
    location: "Granada - Laguna de Apoyo",
    specializations: ["Aves Acuáticas", "Colibríes", "Turismo Familiar"],
    languages: ["Español", "Inglés", "Alemán"],
    experience: 6,
    rating: 4.9,
    reviews: 124,
    certification: "Guía Ecoturística Certificada",
    description:
      "Joven guía especializada en turismo familiar y observación de colibríes. Experta en la laguna cratérica de Apoyo.",
    avatar: "/guide-ana-lucia-apoyo-lagoon-specialist.jpg",
    services: ["Tours familiares", "Observación de colibríes", "Kayak y aves", "Fotografía básica"],
    rates: {
      halfDay: 40,
      fullDay: 70,
      multiDay: 60,
    },
    availability: ["Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    contact: {
      phone: "+505 8456-7890",
      email: "ana.morales@apoyo.ni",
      whatsapp: "+505 8456-7890",
    },
    highlights: ["Especialista en familias con niños", "Trilingüe", "Fotógrafa amateur"],
    groupSize: "2-10 personas",
  },
  {
    id: 5,
    name: "José Manuel Herrera",
    location: "Jinotega - Bosawás",
    specializations: ["Bosque Prístino", "Aves Raras", "Expediciones"],
    languages: ["Español", "Inglés", "Miskito"],
    experience: 20,
    rating: 4.8,
    reviews: 67,
    certification: "Guía Indígena Certificado",
    description:
      "Guía indígena con conocimiento ancestral del bosque. Especialista en expediciones a Bosawás y especies raras.",
    avatar: "/guide-jose-manuel-bosawas-indigenous-expert.jpg",
    services: ["Expediciones largas", "Turismo cultural", "Observación especializada", "Supervivencia"],
    rates: {
      halfDay: 60,
      fullDay: 110,
      multiDay: 95,
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves"],
    contact: {
      phone: "+505 8567-8901",
      email: "jose.herrera@bosawas.ni",
      whatsapp: "+505 8567-8901",
    },
    highlights: ["Conocimiento indígena", "Acceso a áreas remotas", "Especialista en Harpia"],
    groupSize: "2-6 personas",
  },
  {
    id: 6,
    name: "Patricia Sandoval",
    location: "Rivas - Isla de Ometepe",
    specializations: ["Volcanes", "Aves Migratorias", "Turismo Cultural"],
    languages: ["Español", "Inglés", "Italiano"],
    experience: 10,
    rating: 4.6,
    reviews: 178,
    certification: "Guía Cultural y Natural",
    description:
      "Guía especializada en la combinación de aviturismo y turismo cultural en Ometepe. Experta en aves volcánicas.",
    avatar: "/guide-patricia-sandoval-ometepe-cultural.jpg",
    services: ["Tours culturales", "Volcanes y aves", "Ciclismo ornitológico", "Tours gastronómicos"],
    rates: {
      halfDay: 50,
      fullDay: 85,
      multiDay: 75,
    },
    availability: ["Lunes", "Miércoles", "Viernes", "Sábado", "Domingo"],
    contact: {
      phone: "+505 8678-9012",
      email: "patricia.sandoval@ometepe.ni",
      whatsapp: "+505 8678-9012",
    },
    highlights: ["Combinación cultura-naturaleza", "Ciclismo especializado", "Gastronomía local"],
    groupSize: "1-8 personas",
  },
]

export function GuidesDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [specializationFilter, setSpecializationFilter] = useState("all")
  const [languageFilter, setLanguageFilter] = useState("all")
  const [selectedGuide, setSelectedGuide] = useState<(typeof guidesData)[0] | null>(null)

  const filteredGuides = useMemo(() => {
    return guidesData.filter((guide) => {
      const matchesSearch =
        guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.specializations.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLocation = locationFilter === "all" || guide.location.includes(locationFilter)
      const matchesSpecialization =
        specializationFilter === "all" || guide.specializations.some((spec) => spec.includes(specializationFilter))
      const matchesLanguage = languageFilter === "all" || guide.languages.includes(languageFilter)

      return matchesSearch && matchesLocation && matchesSpecialization && matchesLanguage
    })
  }, [searchTerm, locationFilter, specializationFilter, languageFilter])

  const uniqueLocations = Array.from(new Set(guidesData.map((guide) => guide.location.split(" - ")[0])))
  const uniqueSpecializations = Array.from(new Set(guidesData.flatMap((guide) => guide.specializations)))
  const uniqueLanguages = Array.from(new Set(guidesData.flatMap((guide) => guide.languages)))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Buscar Guías Especializados
          </CardTitle>
          <CardDescription>Encuentra el guía perfecto para tu experiencia de aviturismo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nombre, ubicación o especialización..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ubicaciones</SelectItem>
                {uniqueLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={specializationFilter} onValueChange={setSpecializationFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Especialización" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especializaciones</SelectItem>
                {uniqueSpecializations.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los idiomas</SelectItem>
                {uniqueLanguages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            Mostrando {filteredGuides.length} de {guidesData.length} guías
          </div>
        </CardContent>
      </Card>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                  <AvatarFallback>
                    {guide.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{guide.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-sm">
                    <MapPin className="h-3 w-3" />
                    {guide.location}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{guide.rating}</span>
                  <span className="text-muted-foreground">({guide.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{guide.experience} años</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{guide.description}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Languages className="h-3 w-3 text-muted-foreground" />
                  <span>Idiomas:</span>
                  <div className="flex gap-1">
                    {guide.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">ESPECIALIZACIONES</p>
                  <div className="flex flex-wrap gap-1">
                    {guide.specializations.slice(0, 2).map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {guide.specializations.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{guide.specializations.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-sm">
                  <span className="font-medium">${guide.rates.fullDay}</span>
                  <span className="text-muted-foreground">/día completo</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSelectedGuide(guide)}>
                  Ver Perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No se encontraron guías</p>
              <p>Intenta ajustar los filtros de búsqueda</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Guide Detail Modal */}
      {selectedGuide && (
        <GuideDetailModal guide={selectedGuide} isOpen={!!selectedGuide} onClose={() => setSelectedGuide(null)} />
      )}
    </div>
  )
}
