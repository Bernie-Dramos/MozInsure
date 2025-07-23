
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { createElement } from "react";
import { Shield, Users, Award } from "lucide-react";

const featuredPolicies = [
  {
    id: 1,
    name: "Seguro de Saúde",
    description: "Cobertura médica completa para você e sua família",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Seguro Automóvel",
    description: "Proteção total para seu veículo contra acidentes e roubos",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Seguro Residencial",
    description: "Proteja seu lar contra incêndios, roubos e desastres naturais",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Seguro de Vida",
    description: "Garanta o futuro financeiro da sua família",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const benefits = [
  {
    icon: Users,
    title: "Atendimento Local",
    description: "Equipe especializada que compreende as necessidades moçambicanas",
  },
  {
    icon: Shield,
    title: "Apólices Personalizadas",
    description: "Soluções adaptadas à realidade e cultura de Moçambique",
  },
  {
    icon: Award,
    title: "Suporte Confiável",
    description: "Assistência 24/7 com profissionais qualificados",
  },
]

const testimonials = [
  {
    name: "Maria Santos",
    location: "Maputo",
    text: "A MozInsure me ajudou quando mais precisei. Serviço excelente e confiável!",
  },
  {
    name: "João Machel",
    location: "Beira",
    text: "Profissionais competentes que entendem nossas necessidades. Recomendo!",
  },
  {
    name: "Ana Mondlane",
    location: "Nampula",
    text: "Atendimento rápido e eficiente. Sinto-me protegida com a MozInsure.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">MozInsure Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Protegendo o Seu Futuro com Confiança
          </p>
          <Link href="/policies">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explorar Nossas Apólices
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Sobre a Empresa</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A MozInsure Solutions é uma empresa moçambicana dedicada a fornecer soluções de seguro confiáveis e
              acessíveis para famílias e empresas em todo o país. Com profundo conhecimento da cultura e necessidades
              locais, oferecemos proteção personalizada que se adapta à realidade moçambicana, garantindo tranquilidade
              e segurança para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Policies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Apólices em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPolicies.map((policy) => (
              <Card
                key={policy.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-yellow-400"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={policy.image}
                      alt={policy.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {policy.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{policy.description}</CardDescription>
                  <Link href={`/policies/${policy.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                    >
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Por que Escolher-nos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 group-hover:bg-yellow-200 transition-colors">
                    {createElement(benefit.icon, { className: "w-8 h-8 text-yellow-600" })}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">O que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-900 font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
