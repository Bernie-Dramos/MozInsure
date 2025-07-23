"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Lock, CheckCircle } from "lucide-react"

const policiesData = {
  1: {
    name: "Seguro de Saúde Familiar",
    price: "A partir de 2.500 MT/mês",
    coverage: "Cobertura médica completa para toda a família",
  },
  2: {
    name: "Seguro Automóvel Completo",
    price: "A partir de 1.800 MT/mês",
    coverage: "Proteção total contra acidentes, roubos e danos",
  },
  3: {
    name: "Seguro Residencial Premium",
    price: "A partir de 1.200 MT/mês",
    coverage: "Proteja seu lar contra incêndios, roubos e desastres naturais",
  },
  4: {
    name: "Seguro de Vida Individual",
    price: "A partir de 800 MT/mês",
    coverage: "Garanta o futuro financeiro da sua família",
  },
  5: {
    name: "Seguro Empresarial",
    price: "A partir de 5.000 MT/mês",
    coverage: "Proteção completa para seu negócio e funcionários",
  },
  6: {
    name: "Seguro de Viagem",
    price: "A partir de 300 MT/viagem",
    coverage: "Viaje com tranquilidade dentro e fora de Moçambique",
  },
  7: {
    name: "Seguro Agrícola",
    price: "A partir de 2.000 MT/safra",
    coverage: "Proteja suas culturas contra intempéries e pragas",
  },
  8: {
    name: "Seguro Motocicleta",
    price: "A partir de 600 MT/mês",
    coverage: "Cobertura específica para motocicletas e ciclomotores",
  },
}

export default function ApplyPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    situacaoProfissional: "",
    numeroIdentificacao: "",
    numeroContribuinte: "",
    observacoes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const policyId = Number(params.id);
  const policy = Number.isFinite(policyId) ? policiesData[policyId as keyof typeof policiesData] : undefined;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setIsSubmitted(true)
  }

  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Apólice não encontrada</h1>
          <Button onClick={() => window.history.back()}>Voltar</Button>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Solicitação Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Sua solicitação foi recebida com sucesso. Nossa equipe entrará em contato em breve para dar continuidade
              ao processo.
            </p>
            <div className="space-y-2">
              <Button className="w-full" onClick={() => (window.location.href = "/policies")}>
                Ver Outras Apólices
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => (window.location.href = "/")}>
                Voltar ao Início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => window.history.back()} className="text-blue-200 hover:text-white transition-colors">
              Voltar
            </button>
            <span className="text-blue-200">{">"}</span>
            <span>Solicitação de Apólice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicitação Segura</h1>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            <span className="text-blue-100">Seus dados estão protegidos</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Policy Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Shield className="w-6 h-6" />
                  Resumo da Apólice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{policy.name}</h3>
                <p className="text-gray-600 mb-4">{policy.coverage}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700 mb-1">Preço</p>
                  <p className="font-bold text-green-800">{policy.price}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Dados criptografados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Processo 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Resposta em 24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Dados Pessoais</CardTitle>
                <CardDescription>
                  Preencha os campos abaixo para solicitar sua apólice. Todos os dados são obrigatórios.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nomeCompleto" className="text-blue-900">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nomeCompleto"
                        type="text"
                        required
                        value={formData.nomeCompleto}
                        onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dataNascimento" className="text-blue-900">
                        Data de Nascimento *
                      </Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        required
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="situacaoProfissional" className="text-blue-900">
                      Situação Profissional *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("situacaoProfissional", value)}>
                      <SelectTrigger className="mt-1 focus:border-yellow-500 focus:ring-yellow-500">
                        <SelectValue placeholder="Selecione sua situação profissional" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="empregado">Empregado</SelectItem>
                        <SelectItem value="autonomo">Trabalhador Autônomo</SelectItem>
                        <SelectItem value="empresario">Empresário</SelectItem>
                        <SelectItem value="funcionario-publico">Funcionário Público</SelectItem>
                        <SelectItem value="estudante">Estudante</SelectItem>
                        <SelectItem value="aposentado">Aposentado</SelectItem>
                        <SelectItem value="desempregado">Desempregado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="numeroIdentificacao" className="text-blue-900">
                        Número de Identificação *
                      </Label>
                      <Input
                        id="numeroIdentificacao"
                        type="text"
                        required
                        value={formData.numeroIdentificacao}
                        onChange={(e) => handleInputChange("numeroIdentificacao", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Ex: 123456789A"
                      />
                    </div>

                    <div>
                      <Label htmlFor="numeroContribuinte" className="text-blue-900">
                        Número de Contribuinte *
                      </Label>
                      <Input
                        id="numeroContribuinte"
                        type="text"
                        required
                        value={formData.numeroContribuinte}
                        onChange={(e) => handleInputChange("numeroContribuinte", e.target.value)}
                        className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Ex: 123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="observacoes" className="text-blue-900">
                      Observações (Opcional)
                    </Label>
                    <Textarea
                      id="observacoes"
                      value={formData.observacoes}
                      onChange={(e) => handleInputChange("observacoes", e.target.value)}
                      className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                      placeholder="Informações adicionais que gostaria de compartilhar..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">Proteção de Dados</p>
                        <p className="text-sm text-blue-700">
                          Seus dados pessoais são protegidos por criptografia e utilizados apenas para processamento da
                          sua solicitação de seguro, conforme nossa política de privacidade.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
