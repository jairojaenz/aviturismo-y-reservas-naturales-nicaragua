"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, DollarSign, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const tourTypes = [
  { id: "half-day", name: "Medio Día", duration: "4 horas", basePrice: 45 },
  { id: "full-day", name: "Día Completo", duration: "8 horas", basePrice: 75 },
  { id: "multi-day", name: "Múltiples Días", duration: "2-5 días", basePrice: 65 },
]

const locations = [
  "Reserva Miraflor - Estelí",
  "Volcán Masaya - Masaya",
  "Laguna de Apoyo - Granada",
  "Isla de Ometepe - Rivas",
  "Río San Juan - Indio Maíz",
  "Reserva Bosawás - Jinotega",
]

const additionalServices = [
  { id: "transport", name: "Transporte desde hotel", price: 25 },
  { id: "equipment", name: "Equipo de observación", price: 15 },
  { id: "lunch", name: "Almuerzo incluido", price: 12 },
  { id: "photography", name: "Servicio de fotografía", price: 35 },
  { id: "insurance", name: "Seguro de viaje", price: 8 },
]

export function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [tourType, setTourType] = useState("")
  const [location, setLocation] = useState("")
  const [groupSize, setGroupSize] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const selectedTour = tourTypes.find((tour) => tour.id === tourType)
  const basePrice = selectedTour ? selectedTour.basePrice * Number.parseInt(groupSize || "1") : 0
  const servicesPrice = selectedServices.reduce((total, serviceId) => {
    const service = additionalServices.find((s) => s.id === serviceId)
    return total + (service ? service.price : 0)
  }, 0)
  const totalPrice = basePrice + servicesPrice

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      date: selectedDate,
      tourType,
      location,
      groupSize,
      selectedServices,
      customerInfo,
      totalPrice,
    })
    alert("¡Reserva enviada! Te contactaremos pronto para confirmar los detalles.")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Sistema de Reservas
          </CardTitle>
          <CardDescription>Reserva tu experiencia de aviturismo con guías locales certificados</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tour Selection */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tour-type">Tipo de Tour</Label>
                  <Select value={tourType} onValueChange={setTourType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de tour" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourTypes.map((tour) => (
                        <SelectItem key={tour.id} value={tour.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{tour.name}</span>
                            <span className="text-muted-foreground ml-2">
                              {tour.duration} - ${tour.basePrice}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Ubicación</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la ubicación" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="group-size">Tamaño del Grupo</Label>
                  <Select value={groupSize} onValueChange={setGroupSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Número de personas" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size} {size === 1 ? "persona" : "personas"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Fecha del Tour</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+505 8xxx-xxxx"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="requests">Solicitudes Especiales</Label>
                  <Textarea
                    id="requests"
                    value={customerInfo.specialRequests}
                    onChange={(e) => setCustomerInfo((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="Menciona cualquier requerimiento especial, nivel de experiencia, intereses específicos..."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Additional Services */}
            <div>
              <h4 className="font-semibold mb-3">Servicios Adicionales</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalServices.map((service) => (
                  <div
                    key={service.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedServices.includes(service.id)
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {selectedServices.includes(service.id) && <CheckCircle className="h-4 w-4 text-accent" />}
                        <span className="text-sm font-medium">{service.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">+${service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Summary */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Resumen de Precios
              </h4>
              <div className="space-y-2 text-sm">
                {selectedTour && (
                  <div className="flex justify-between">
                    <span>
                      {selectedTour.name} x {groupSize || 1} persona(s)
                    </span>
                    <span>${basePrice}</span>
                  </div>
                )}
                {selectedServices.map((serviceId) => {
                  const service = additionalServices.find((s) => s.id === serviceId)
                  return service ? (
                    <div key={serviceId} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>+${service.price}</span>
                    </div>
                  ) : null
                })}
                <Separator />
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={
                !selectedDate || !tourType || !location || !groupSize || !customerInfo.name || !customerInfo.email
              }
            >
              Enviar Solicitud de Reserva
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar esta solicitud, un guía certificado te contactará dentro de 24 horas para confirmar
              disponibilidad y detalles del tour.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
