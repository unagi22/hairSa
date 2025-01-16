import React, { useState } from 'react'
    import { Button } from './components/ui/button'
    import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
    } from './components/ui/dialog'
    import { 
      Scissors, 
      Users, 
      Calendar,
      Clock,
      Sparkles,
      Palette,
      Star,
      Timer
    } from 'lucide-react'

    function App() {
      const [serviceOpen, setServiceOpen] = useState(false)
      const [specialistOpen, setSpecialistOpen] = useState(false)
      const [datetimeOpen, setDatetimeOpen] = useState(false)

      return (
        <div className="min-h-screen bg-[#fafafa] p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light tracking-tight mb-2">
                LUXE<span className="font-bold">STUDIO</span>
              </h1>
              <p className="text-gray-500 text-sm tracking-wide">PREMIUM HAIR SALON</p>
            </div>
            
            {/* Main Buttons */}
            <div className="grid md:grid-cols-3 gap-6 px-4">
              <Button 
                variant="outline"
                className="h-32 flex flex-col gap-3 bg-white hover:bg-white/80 border-none shadow-sm hover:shadow-md transition-all"
                onClick={() => setServiceOpen(true)}
              >
                <Scissors className="h-6 w-6 text-primary" />
                <span className="font-light tracking-wide">Select Services</span>
              </Button>

              <Button 
                variant="outline"
                className="h-32 flex flex-col gap-3 bg-white hover:bg-white/80 border-none shadow-sm hover:shadow-md transition-all"
                onClick={() => setSpecialistOpen(true)}
              >
                <Users className="h-6 w-6 text-primary" />
                <span className="font-light tracking-wide">Choose Specialist</span>
              </Button>

              <Button 
                variant="outline"
                className="h-32 flex flex-col gap-3 bg-white hover:bg-white/80 border-none shadow-sm hover:shadow-md transition-all"
                onClick={() => setDatetimeOpen(true)}
              >
                <Calendar className="h-6 w-6 text-primary" />
                <span className="font-light tracking-wide">Pick Date & Time</span>
              </Button>
            </div>

            {/* Services Modal */}
            <Dialog open={serviceOpen} onOpenChange={setServiceOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light tracking-tight flex items-center gap-2">
                    <Scissors className="h-5 w-5" />
                    Services
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-4 py-4">
                  {[
                    { icon: Scissors, title: 'Haircut & Style', duration: '60 min', price: '$50' },
                    { icon: Palette, title: 'Color & Highlights', duration: '120 min', price: '$120' },
                    { icon: Sparkles, title: 'Treatment', duration: '45 min', price: '$80' },
                    { icon: Star, title: 'Special Occasion', duration: '90 min', price: '$150' },
                  ].map((service, i) => (
                    <div 
                      key={i}
                      className="p-6 rounded-lg bg-white hover:bg-gray-50 border border-gray-100 cursor-pointer transition-colors group"
                    >
                      <service.icon className="h-5 w-5 text-primary mb-3" />
                      <h3 className="font-medium mb-1">{service.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Timer className="h-3 w-3" />
                          {service.duration}
                        </span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* Specialists Modal */}
            <Dialog open={specialistOpen} onOpenChange={setSpecialistOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light tracking-tight flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Specialists
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-4 py-4">
                  {[
                    { name: 'Emma Watson', role: 'Senior Stylist', availability: 'Available Today' },
                    { name: 'John Smith', role: 'Color Specialist', availability: 'Available Tomorrow' },
                    { name: 'Sarah Parker', role: 'Style Director', availability: 'Available Today' },
                    { name: 'Mike Ross', role: 'Treatment Expert', availability: 'Available Today' },
                  ].map((specialist, i) => (
                    <div 
                      key={i}
                      className="p-6 rounded-lg bg-white hover:bg-gray-50 border border-gray-100 cursor-pointer transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">{specialist.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{specialist.role}</p>
                      <p className="text-xs text-primary">{specialist.availability}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* DateTime Modal */}
            <Dialog open={datetimeOpen} onOpenChange={setDatetimeOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light tracking-tight flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Date & Time
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Select Date</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 7 }).map((_, i) => {
                        const date = new Date()
                        date.setDate(date.getDate() + i)
                        return (
                          <div 
                            key={i}
                            className="aspect-square rounded-lg bg-white hover:bg-gray-50 border border-gray-100 p-2 cursor-pointer flex flex-col items-center justify-center transition-colors"
                          >
                            <span className="text-xs text-gray-500">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                            <span className="text-sm font-medium">{date.getDate()}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-3">Select Time</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map((time, i) => (
                        <div 
                          key={i}
                          className="p-3 rounded-lg bg-white hover:bg-gray-50 border border-gray-100 cursor-pointer flex items-center justify-center gap-2 transition-colors"
                        >
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )
    }

    export default App
