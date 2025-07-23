"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { Filter } from "lucide-react"

const policies = [
  {
    id: 1,
    name: "Seguro de Saúde Familiar",
    category: "saude",
    description: "Cobertura médica completa para toda a família com acesso a hospitais privados",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 2.500 MT/mês",
  },
  {
    id: 2,
    name: "Seguro Automóvel Completo",
    category: "automovel",
    description: "Proteção total contra acidentes, roubos e danos a terceiros",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 1.800 MT/mês",
  },
  {
    id: 3,
    name: "Seguro Residencial Premium",
    category: "residencia",
    description: "Proteja seu lar contra incêndios, roubos e desastres naturais",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 1.200 MT/mês",
  },
  {
    id: 4,
    name: "Seguro de Vida Individual",
    category: "vida",
    description: "Garanta o futuro financeiro da sua família em caso de imprevistos",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 800 MT/mês",
  },
  {
    id: 5,
    name: "Seguro Empresarial",
    category: "empresarial",
    description: "Proteção completa para seu negócio e funcionários",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 5.000 MT/mês",
  },
  {
    id: 6,
    name: "Seguro de Viagem",
    category: "viagem",
    description: "Viaje com tranquilidade dentro e fora de Moçambique",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 300 MT/viagem",
  },
  {
    id: 7,
    name: "Seguro Agrícola",
    category: "agricola",
    description: "Proteja suas culturas contra intempéries e pragas",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 2.000 MT/safra",
  },
  {
    id: 8,
    name: "Seguro Motocicleta",
    category: "automovel",
    description: "Cobertura específica para motocicletas e ciclomotores",
    image: "/placeholder.svg?height=200&width=300",
    price: "A partir de 600 MT/mês",
  },
]

const categories = [
  { id: "todos", name: "Todas as Categorias" },
  { id: "saude", name: "Saúde" },
  { id: "automovel", name: "Automóvel" },
  { id: "residencia", name: "Residência" },
  { id: "vida", name: "Vida" },
  { id: "empresarial", name: "Empresarial" },
  { id: "viagem", name: "Viagem" },
  { id: "agricola", name: "Agrícola" },
]

const faqs = [
  {
    question: "Como solicito uma apólice?",
    answer:
      "Você pode solicitar uma apólice clicando em 'Ver Detalhes' na apólice desejada e preenchendo o formulário seguro. Nossa equipe entrará em contato em até 24 horas.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Geralmente precisamos de documento de identidade, comprovante de residência e, dependendo da apólice, documentos específicos como carta de condução ou escritura do imóvel.",
  },
  {
    question: "Quanto tempo demora a aprovação?",
    answer:
      "A maioria das apólices são aprovadas em 2-5 dias úteis após o recebimento de toda a documentação necessária.",
  },
  {
    question: "Posso cancelar minha apólice?",
    answer:
      "Sim, você pode cancelar sua apólice a qualquer momento. Entre em contato conosco para conhecer os termos e condições específicos.",
  },
]

export default function PoliciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredPolicies =
    selectedCategory === "todos" ? policies : policies.filter((policy) => policy.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Nossas Apólices</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Descubra a proteção ideal para você e sua família. Oferecemos uma ampla gama de seguros adaptados às
            necessidades moçambicanas.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-blue-900" />
            <h2 className="text-lg font-semibold text-blue-900">Filtrar por Categoria</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-blue-900 text-white"
                    : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                } transition-all duration-200`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPolicies.map((policy) => (
            <Card
              key={policy.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-yellow-400"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={policy.image || "/placeholder.svg"}
                    alt={policy.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-600 text-white">
                      {categories.find((cat) => cat.id === policy.category)?.name}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {policy.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 line-clamp-2">{policy.description}</CardDescription>
                <p className="text-sm font-semibold text-green-600 mb-4">{policy.price}</p>
                <Link href={`/policies/${policy.id}`}>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">Ver Detalhes</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-blue-900 hover:text-yellow-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  )
}
