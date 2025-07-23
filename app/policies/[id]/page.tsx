import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Shield, CheckCircle, Clock, Users } from "lucide-react"

// Mock data for policies
const policiesData = {
  1: {
    name: "Seguro de Saúde Familiar",
    category: "Saúde",
    description:
      "Cobertura médica completa para toda a família com acesso aos melhores hospitais e clínicas de Moçambique",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+de+Saúde",
    price: "A partir de 2.500 MT/mês",
    coverage: [
      "Consultas médicas ilimitadas",
      "Exames laboratoriais e de imagem",
      "Internamentos hospitalares",
      "Cirurgias e procedimentos especializados",
      "Medicamentos prescritos",
      "Emergências 24/7",
    ],
    eligibility: [
      "Residentes em Moçambique",
      "Idade entre 0-65 anos",
      "Declaração de saúde obrigatória",
      "Carência de 30 dias para consultas",
      "Carência de 180 dias para cirurgias",
    ],
    benefits: [
      "Rede credenciada em todo o país",
      "Atendimento em português",
      "Telemedicina disponível",
      "Programa de prevenção incluído",
    ],
  },
  2: {
    name: "Seguro Automóvel Completo",
    category: "Automóvel",
    description:
      "Proteção total para seu veículo contra acidentes, roubos, furtos e danos a terceiros, com assistência 24 horas",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+Automóvel",
    price: "A partir de 1.800 MT/mês",
    coverage: [
      "Danos próprios por colisão",
      "Roubo e furto do veículo",
      "Responsabilidade civil obrigatória",
      "Danos a terceiros",
      "Assistência 24 horas",
      "Carro reserva",
    ],
    eligibility: [
      "Carta de condução válida",
      "Veículo com até 10 anos",
      "Vistoria prévia obrigatória",
      "Residência em Moçambique",
      "Histórico de condução limpo",
    ],
    benefits: ["Oficinas credenciadas", "Peças originais garantidas", "Guincho gratuito", "Assistência em viagem"],
  },
  3: {
    name: "Seguro Residencial Premium",
    category: "Residência",
    description:
      "Proteja seu lar e patrimônio contra incêndios, roubos, desastres naturais e danos estruturais com cobertura completa",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+Residencial",
    price: "A partir de 1.200 MT/mês",
    coverage: [
      "Incêndio e explosão",
      "Roubo e furto qualificado",
      "Danos elétricos",
      "Vendaval e granizo",
      "Responsabilidade civil familiar",
      "Despesas de hospedagem",
    ],
    eligibility: [
      "Propriedade em Moçambique",
      "Vistoria prévia da residência",
      "Comprovante de propriedade",
      "Sistema de segurança básico",
      "Idade da construção até 30 anos",
    ],
    benefits: ["Assistência 24 horas", "Reparos de emergência", "Chaveiro e vidraceiro", "Limpeza pós-sinistro"],
  },
  4: {
    name: "Seguro de Vida Individual",
    category: "Vida",
    description:
      "Garanta a segurança financeira da sua família em caso de imprevistos, com cobertura por morte e invalidez",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+de+Vida",
    price: "A partir de 800 MT/mês",
    coverage: [
      "Morte natural ou acidental",
      "Invalidez permanente total",
      "Invalidez permanente parcial",
      "Despesas médicas hospitalares",
      "Auxílio funeral",
      "Renda mensal ao cônjuge",
    ],
    eligibility: [
      "Idade entre 18-65 anos",
      "Declaração de saúde",
      "Exame médico se necessário",
      "Residência em Moçambique",
      "Renda comprovada",
    ],
    benefits: [
      "Pagamento imediato aos beneficiários",
      "Sem carência para acidentes",
      "Cobertura mundial",
      "Assistência funeral incluída",
    ],
  },
  5: {
    name: "Seguro Empresarial",
    category: "Empresarial",
    description:
      "Proteção completa para seu negócio, funcionários e patrimônio empresarial contra diversos riscos operacionais",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+Empresarial",
    price: "A partir de 5.000 MT/mês",
    coverage: [
      "Incêndio e danos ao patrimônio",
      "Responsabilidade civil geral",
      "Equipamentos e maquinário",
      "Perda de faturamento",
      "Acidentes de trabalho",
      "Roubo de valores",
    ],
    eligibility: [
      "Empresa registada em Moçambique",
      "Licenças comerciais válidas",
      "Vistoria das instalações",
      "Relatório financeiro",
      "Medidas de segurança adequadas",
    ],
    benefits: [
      "Consultoria em gestão de riscos",
      "Assistência jurídica",
      "Reposição de documentos",
      "Suporte 24/7 para emergências",
    ],
  },
  6: {
    name: "Seguro de Viagem",
    category: "Viagem",
    description:
      "Viaje com tranquilidade dentro e fora de Moçambique com cobertura médica, bagagem e assistência completa",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+de+Viagem",
    price: "A partir de 300 MT/viagem",
    coverage: [
      "Despesas médicas no exterior",
      "Repatriação sanitária",
      "Bagagem extraviada ou danificada",
      "Cancelamento de viagem",
      "Atraso de voo",
      "Assistência jurídica no exterior",
    ],
    eligibility: [
      "Qualquer idade",
      "Viagem com duração até 180 dias",
      "Destino nacional ou internacional",
      "Declaração de saúde básica",
      "Comprovante de viagem",
    ],
    benefits: [
      "Cobertura mundial",
      "Central de atendimento 24h",
      "App móvel para emergências",
      "Rede médica credenciada global",
    ],
  },
  7: {
    name: "Seguro Agrícola",
    category: "Agrícola",
    description:
      "Proteja suas culturas e atividade agrícola contra intempéries, pragas e outros riscos que podem afetar a produção",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+Agrícola",
    price: "A partir de 2.000 MT/safra",
    coverage: [
      "Perda por seca ou excesso de chuva",
      "Granizo e vendaval",
      "Pragas e doenças",
      "Incêndio nas culturas",
      "Geada (regiões aplicáveis)",
      "Perda de produtividade",
    ],
    eligibility: [
      "Produtor rural registado",
      "Propriedade em Moçambique",
      "Histórico de produção",
      "Técnicas agrícolas adequadas",
      "Vistoria prévia da propriedade",
    ],
    benefits: [
      "Assistência técnica agrícola",
      "Monitoramento climático",
      "Pagamento rápido de sinistros",
      "Consultoria em sustentabilidade",
    ],
  },
  8: {
    name: "Seguro Motocicleta",
    category: "Automóvel",
    description:
      "Cobertura específica e acessível para motocicletas e ciclomotores, adaptada às necessidades do transporte urbano",
    image: "/placeholder.svg?height=400&width=600&text=Seguro+Motocicleta",
    price: "A partir de 600 MT/mês",
    coverage: [
      "Danos próprios por colisão",
      "Roubo e furto da motocicleta",
      "Responsabilidade civil obrigatória",
      "Acidentes pessoais do condutor",
      "Assistência 24 horas",
      "Acessórios e equipamentos",
    ],
    eligibility: [
      "Carta de condução categoria A",
      "Motocicleta com até 15 anos",
      "Vistoria prévia obrigatória",
      "Residência em Moçambique",
      "Curso de condução defensiva (recomendado)",
    ],
    benefits: [
      "Oficinas especializadas",
      "Guincho para motocicletas",
      "Capacete de segurança gratuito",
      "Desconto para condutores experientes",
    ],
  },
}

const relatedPolicies = [
  {
    id: 3,
    name: "Seguro Residencial",
    description: "Proteja seu lar contra incêndios e roubos",
    image: "/placeholder.svg?height=150&width=200&text=Casa",
  },
  {
    id: 4,
    name: "Seguro de Vida",
    description: "Garanta o futuro da sua família",
    image: "/placeholder.svg?height=150&width=200&text=Família",
  },
  {
    id: 5,
    name: "Seguro Empresarial",
    description: "Proteção completa para seu negócio",
    image: "/placeholder.svg?height=150&width=200&text=Empresa",
  },
]

export default function PolicyDetailPage({ params }: { params: { id: string } }) {
  const policy = policiesData[params.id as keyof typeof policiesData]

  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Apólice não encontrada</h1>
          <Link href="/policies">
            <Button>Voltar às Apólices</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/policies" className="text-blue-200 hover:text-white transition-colors">
              Apólices
            </Link>
            <span className="text-blue-200">{">"}</span>
            <span>{policy.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{policy.name}</h1>
          <Badge className="bg-yellow-600 text-white text-lg px-4 py-2">{policy.category}</Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <Image
              src={policy.image || "/placeholder.svg"}
              alt={policy.name}
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Policy Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Descrição da Apólice</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{policy.description}</p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Preço</span>
              </div>
              <p className="text-2xl font-bold text-green-700">{policy.price}</p>
            </div>

            <Link href={`/apply/${params.id}`}>
              <Button
                size="lg"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Apólice
              </Button>
            </Link>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Shield className="w-6 h-6" />
                Cobertura Incluída
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {policy.coverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Users className="w-6 h-6" />
                Requisitos de Elegibilidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {policy.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <CheckCircle className="w-6 h-6" />
                Benefícios Adicionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {policy.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Policies */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Apólices Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPolicies.map((relatedPolicy) => (
              <Card
                key={relatedPolicy.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedPolicy.image || "/placeholder.svg"}
                      alt={relatedPolicy.name}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {relatedPolicy.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{relatedPolicy.description}</CardDescription>
                  <Link href={`/policies/${relatedPolicy.id}`}>
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
        </section>
      </div>
    </div>
  )
}
