"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Languages, Award, Phone, Mail, MessageCircle, Calendar, Users, DollarSign } from "lucide-react"

interface Guide {
  id: number
  name: string
  location: string
  specializations: string[]
  languages: string[]
  experience: number
  rating: number
  reviews: number
  certification: string
  description: string
  avatar: string
  services: string[]
  rates: {
    halfDay: number
    fullDay: number
    multiDay: number
  }
  availability: string[]
  contact: {
    phone: string
    email: string
    whatsapp: string
  }
  highlights: string[]
  groupSize: string
}

interface GuideDetailModalProps {
  guide: Guide
  isOpen: boolean
  onClose: () => void
}

export function GuideDetailModal({ guide, isOpen, onClose }: GuideDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
              <AvatarFallback className="text-lg">
                {guide.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">{guide.name}</DialogTitle>
              <DialogDescription className="text-lg flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {guide.location}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating and Certification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-medium">{guide.rating}</span>
                <span className="text-muted-foreground">({guide.reviews} reseñas)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-muted-foreground" />
                <span>{guide.experience} años de experiencia</span>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {guide.certification}
            </Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Acerca del Guía</h3>
            <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
          </div>

          <Separator />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  Idiomas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Especializaciones</h4>
                <div className="flex flex-wrap gap-2">
                  {guide.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Tamaño de Grupo
                </h4>
                <p className="text-sm">{guide.groupSize}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Tarifas (USD)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Medio día (4 horas):</span>
                    <span className="font-medium">${guide.rates.halfDay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Día completo (8 horas):</span>
                    <span className="font-medium">${guide.rates.fullDay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Múltiples días:</span>
                    <span className="font-medium">${guide.rates.multiDay}/día</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Disponibilidad
                </h4>
                <div className="flex flex-wrap gap-1">
                  {guide.availability.map((day, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {day}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Servicios Ofrecidos</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {guide.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Highlights */}
          <div>
            <h4 className="font-semibold mb-3">Destacados</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {guide.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Phone className="h-4 w-4" />
                Llamar
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              Reservar Tour
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
