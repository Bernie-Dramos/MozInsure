"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lock, Shield, Users, FileText, BarChart3, Plus, Edit, Trash2, Eye } from "lucide-react"

const mockPolicies = [
  { id: 1, name: "Seguro de Saúde Familiar", category: "saude", status: "ativo", clients: 245 },
  { id: 2, name: "Seguro Automóvel Completo", category: "automovel", status: "ativo", clients: 189 },
  { id: 3, name: "Seguro Residencial Premium", category: "residencia", status: "ativo", clients: 156 },
  { id: 4, name: "Seguro de Vida Individual", category: "vida", status: "ativo", clients: 98 },
  { id: 5, name: "Seguro Empresarial", category: "empresarial", status: "ativo", clients: 67 },
  { id: 6, name: "Seguro de Viagem", category: "viagem", status: "inativo", clients: 23 },
]

const mockStats = {
  totalVisitors: 12547,
  weeklyVisitors: 2341,
  monthlyVisitors: 8965,
  pageViews: 45632,
  uniqueUsers: 9876,
  bounceRate: "32%",
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [policies, setPolicies] = useState(mockPolicies)
  const [newPolicy, setNewPolicy] = useState({
    name: "",
    category: "",
    description: "",
    status: "ativo",
  })
  const [editingPolicy, setEditingPolicy] = useState<any>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin") {
      setIsAuthenticated(true)
    } else {
      alert("Senha incorreta!")
    }
  }

  const handleAddPolicy = () => {
    if (newPolicy.name && newPolicy.category) {
      const policy = {
        id: policies.length + 1,
        ...newPolicy,
        clients: 0,
      }
      setPolicies([...policies, policy])
      setNewPolicy({ name: "", category: "", description: "", status: "ativo" })
    }
  }

  const handleEditPolicy = (policy: any) => {
    setEditingPolicy(policy)
  }

  const handleUpdatePolicy = () => {
    if (editingPolicy) {
      setPolicies(policies.map((p) => (p.id === editingPolicy.id ? editingPolicy : p)))
      setEditingPolicy(null)
    }
  }

  const handleDeletePolicy = (id: number) => {
    if (confirm("Tem certeza que deseja remover esta apólice?")) {
      setPolicies(policies.filter((p) => p.id !== id))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-900" />
            </div>
            <CardTitle className="text-2xl text-blue-900">Acesso Administrativo</CardTitle>
            <CardDescription>Digite a senha para acessar o painel administrativo</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-blue-900">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Digite a senha"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                <Shield className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Painel Administrativo</h1>
              <p className="text-blue-200">MozInsure Solutions</p>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              onClick={() => setIsAuthenticated(false)}
            >
              Sair
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="policies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="policies" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Gestão de Apólices
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Estatísticas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="policies" className="space-y-6">
            {/* Add Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Plus className="w-5 h-5" />
                  Adicionar Nova Apólice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Input
                    placeholder="Nome da apólice"
                    value={newPolicy.name}
                    onChange={(e) => setNewPolicy({ ...newPolicy, name: e.target.value })}
                  />
                  <Select onValueChange={(value) => setNewPolicy({ ...newPolicy, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saude">Saúde</SelectItem>
                      <SelectItem value="automovel">Automóvel</SelectItem>
                      <SelectItem value="residencia">Residência</SelectItem>
                      <SelectItem value="vida">Vida</SelectItem>
                      <SelectItem value="empresarial">Empresarial</SelectItem>
                      <SelectItem value="viagem">Viagem</SelectItem>
                      <SelectItem value="agricola">Agrícola</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setNewPolicy({ ...newPolicy, status: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="inativo">Inativo</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAddPolicy} className="bg-green-600 hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Policies Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Apólices Cadastradas</CardTitle>
                <CardDescription>Gerencie todas as apólices disponíveis no sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Clientes</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policies.map((policy) => (
                      <TableRow key={policy.id}>
                        <TableCell className="font-medium">{policy.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {policy.category.charAt(0).toUpperCase() + policy.category.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={policy.status === "ativo" ? "default" : "secondary"}>
                            {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{policy.clients}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEditPolicy(policy)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeletePolicy(policy.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Edit Policy Dialog */}
            {editingPolicy && (
              <Dialog open={!!editingPolicy} onOpenChange={() => setEditingPolicy(null)}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar Apólice</DialogTitle>
                    <DialogDescription>Faça as alterações necessárias na apólice</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Nome da Apólice</Label>
                      <Input
                        value={editingPolicy.name}
                        onChange={(e) => setEditingPolicy({ ...editingPolicy, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Categoria</Label>
                      <Select
                        value={editingPolicy.category}
                        onValueChange={(value) => setEditingPolicy({ ...editingPolicy, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="automovel">Automóvel</SelectItem>
                          <SelectItem value="residencia">Residência</SelectItem>
                          <SelectItem value="vida">Vida</SelectItem>
                          <SelectItem value="empresarial">Empresarial</SelectItem>
                          <SelectItem value="viagem">Viagem</SelectItem>
                          <SelectItem value="agricola">Agrícola</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <Select
                        value={editingPolicy.status}
                        onValueChange={(value) => setEditingPolicy({ ...editingPolicy, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="inativo">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleUpdatePolicy} className="flex-1">
                        Salvar Alterações
                      </Button>
                      <Button variant="outline" onClick={() => setEditingPolicy(null)} className="flex-1">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900">Total de Visitantes</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">{mockStats.totalVisitors.toLocaleString()}</div>
                  <p className="text-xs text-green-600">+12% desde o mês passado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900">Visitantes Semanais</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">{mockStats.weeklyVisitors.toLocaleString()}</div>
                  <p className="text-xs text-green-600">+8% desde a semana passada</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900">Visualizações de Página</CardTitle>
                  <Eye className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">{mockStats.pageViews.toLocaleString()}</div>
                  <p className="text-xs text-green-600">+15% desde o mês passado</p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Estatísticas Detalhadas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Usuários Únicos</span>
                    <span className="font-semibold text-blue-900">{mockStats.uniqueUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taxa de Rejeição</span>
                    <span className="font-semibold text-blue-900">{mockStats.bounceRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Visitantes Mensais</span>
                    <span className="font-semibold text-blue-900">{mockStats.monthlyVisitors.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Gráfico de Visitantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Gráfico de Estatísticas</p>
                      <p className="text-sm">Dados simulados para demonstração</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Policies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Apólices Mais Procuradas</CardTitle>
                <CardDescription>Ranking das apólices com mais clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policies
                    .sort((a, b) => b.clients - a.clients)
                    .slice(0, 5)
                    .map((policy, index) => (
                      <div key={policy.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-900">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-blue-900">{policy.name}</p>
                            <p className="text-sm text-gray-600">{policy.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-900">{policy.clients}</p>
                          <p className="text-sm text-gray-600">clientes</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
