"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Cpath d=M20 20c0-11.046-8.954-20-20-20v20h20z/%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Entre em Contato</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para esclarecer dúvidas, solicitar informações ou obter
            suporte personalizado.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Informações de Contato</CardTitle>
                <CardDescription>Fale conosco através dos canais abaixo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Telefone</p>
                    <p className="text-gray-600">+258 21 123 456</p>
                    <p className="text-gray-600">+258 84 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <p className="text-gray-600">info@mozinsure.co.mz</p>
                    <p className="text-gray-600">suporte@mozinsure.co.mz</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Endereço</p>
                    <p className="text-gray-600">
                      Avenida Julius Nyerere, 123
                      <br />
                      Maputo, Moçambique
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Horário de Funcionamento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8:00 - 17:00
                      <br />
                      Sábado: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-yellow-50 to-red-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Suporte Urgente</h3>
                  <p className="text-sm text-gray-600 mb-4">Para emergências ou suporte imediato, ligue agora:</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Envie sua Mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e responderemos em breve</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Obrigado pelo seu contato. Responderemos em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome" className="text-blue-900">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="Digite seu nome completo"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-blue-900">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="assunto" className="text-blue-900">
                        Assunto *
                      </Label>
                      <Input
                        id="assunto"
                        type="text"
                        required
                        value={formData.assunto}
                        onChange={(e) => handleInputChange("assunto", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Qual é o assunto da sua mensagem?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem" className="text-blue-900">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Descreva sua dúvida ou solicitação..."
                        rows={6}
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-700">
                        <strong>Tempo de resposta:</strong> Respondemos todas as mensagens em até 24 horas durante dias
                        úteis. Para urgências, utilize nosso telefone de suporte.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 text-center">Nossa Localização</CardTitle>
              <CardDescription className="text-center">Visite nosso escritório em Maputo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Mapa Interativo</p>
                  <p className="text-sm">Avenida Julius Nyerere, 123 - Maputo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
