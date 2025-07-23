import Link from "next/link"
import { Shield, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              MozInsure Solutions
            </Link>
            <p className="text-blue-200 mb-4">
              Protegendo o futuro dos moçambicanos com soluções de seguro confiáveis e personalizadas.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-blue-200 hover:text-white transition-colors">
                  Nossas Apólices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-blue-200 hover:text-white transition-colors">
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Seguro de Saúde</li>
              <li>Seguro Automóvel</li>
              <li>Seguro Residencial</li>
              <li>Seguro de Vida</li>
              <li>Seguro Empresarial</li>
              <li>Seguro de Viagem</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yellow-600 mt-1" />
                <div className="text-blue-200">
                  <p>+258 21 123 456</p>
                  <p>+258 84 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yellow-600 mt-1" />
                <div className="text-blue-200">
                  <p>info@mozinsure.co.mz</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-600 mt-1" />
                <div className="text-blue-200">
                  <p>Avenida Julius Nyerere, 123</p>
                  <p>Maputo, Moçambique</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">© 2024 MozInsure Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
