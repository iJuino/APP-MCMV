"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  Home, 
  BookOpen, 
  Calculator, 
  Settings, 
  Bell, 
  Plus,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Menu,
  X,
  ArrowLeft,
  Calendar,
  Users,
  Package
} from "lucide-react";
import Link from "next/link";

export default function AppPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [obraSelecionada, setObraSelecionada] = useState<number | null>(null);

  // Dados simulados
  const obras = [
    {
      id: 1,
      nome: "Residência Silva - MCMV Faixa 2",
      endereco: "Rua das Flores, 123",
      progressoFisico: 68,
      progressoFinanceiro: 65,
      orcamento: 180000,
      gasto: 117000,
      lucroPrevisao: 24500,
      status: "no-prazo",
      etapaAtual: "Alvenaria e Estrutura",
      cliente: "Maria Silva",
      dataInicio: "15/01/2024",
      previsaoTermino: "15/01/2025",
      etapas: [
        { nome: "Fundação", progresso: 100, valor: 25000, pago: 25000 },
        { nome: "Estrutura", progresso: 100, valor: 35000, pago: 35000 },
        { nome: "Alvenaria", progresso: 80, valor: 28000, pago: 22400 },
        { nome: "Cobertura", progresso: 45, valor: 22000, pago: 9900 },
        { nome: "Instalações", progresso: 30, valor: 30000, pago: 9000 },
        { nome: "Acabamento", progresso: 0, valor: 25000, pago: 0 },
        { nome: "Pintura", progresso: 0, valor: 15000, pago: 0 }
      ],
      proximaMedicao: "15/12/2024",
      documentosPendentes: ["Nota Fiscal Etapa 4", "Fotos da Cobertura"]
    },
    {
      id: 2,
      nome: "Casa Santos - MCMV Faixa 1",
      endereco: "Av. Central, 456",
      progressoFisico: 35,
      progressoFinanceiro: 40,
      orcamento: 150000,
      gasto: 60000,
      lucroPrevisao: 18000,
      status: "atrasado",
      etapaAtual: "Fundação",
      cliente: "José Santos",
      dataInicio: "01/03/2024",
      previsaoTermino: "01/03/2025",
      etapas: [
        { nome: "Fundação", progresso: 70, valor: 20000, pago: 14000 },
        { nome: "Estrutura", progresso: 20, valor: 30000, pago: 6000 },
        { nome: "Alvenaria", progresso: 0, valor: 25000, pago: 0 },
        { nome: "Cobertura", progresso: 0, valor: 18000, pago: 0 },
        { nome: "Instalações", progresso: 0, valor: 25000, pago: 0 },
        { nome: "Acabamento", progresso: 0, valor: 20000, pago: 0 },
        { nome: "Pintura", progresso: 0, valor: 12000, pago: 0 }
      ],
      proximaMedicao: "20/12/2024",
      documentosPendentes: ["ART Complementar", "Projeto Elétrico Atualizado", "Cronograma Revisado"]
    }
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "obras", label: "Minhas Obras", icon: Building2 },
    { id: "guia", label: "Guia MCMV", icon: BookOpen },
    { id: "simulador", label: "Simulador", icon: Calculator },
    { id: "documentos", label: "Documentos", icon: FileText },
    { id: "configuracoes", label: "Configurações", icon: Settings }
  ];

  const verDetalhesObra = (obraId: number) => {
    setObraSelecionada(obraId);
    setActiveTab("detalhes-obra");
  };

  const voltarParaObras = () => {
    setObraSelecionada(null);
    setActiveTab("obras");
  };

  const obraAtual = obras.find(o => o.id === obraSelecionada);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-slate-900 hidden sm:inline">
                Obra<span className="text-orange-500">Fácil</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-slate-900">João Silva</p>
                <p className="text-xs text-slate-500">Plano Profissional</p>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                JS
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-64 bg-white border-r z-30
          transition-transform duration-300 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                    setObraSelecionada(null);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${activeTab === item.id 
                      ? 'bg-orange-50 text-orange-600 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <Card className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <p className="text-sm font-semibold mb-2">Upgrade para Premium</p>
              <p className="text-xs text-orange-100 mb-3">
                Obras ilimitadas + Simulador
              </p>
              <Button size="sm" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                Fazer Upgrade
              </Button>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Header Dashboard */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                  <p className="text-slate-600 mt-1">Visão geral das suas obras MCMV</p>
                </div>
                <Link href="/app/nova-obra">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Plus className="w-5 h-5 mr-2" />
                    Nova Obra
                  </Button>
                </Link>
              </div>

              {/* Cards de Resumo */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">Obras Ativas</p>
                  <p className="text-3xl font-bold text-slate-900">2</p>
                  <p className="text-xs text-green-600 mt-2">+1 este mês</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">Lucro Previsto</p>
                  <p className="text-3xl font-bold text-slate-900">R$ 42,5k</p>
                  <p className="text-xs text-green-600 mt-2">Margem de 14%</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">Progresso Médio</p>
                  <p className="text-3xl font-bold text-slate-900">51%</p>
                  <p className="text-xs text-slate-600 mt-2">Físico-financeiro</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">Alertas</p>
                  <p className="text-3xl font-bold text-slate-900">1</p>
                  <p className="text-xs text-red-600 mt-2">Obra atrasada</p>
                </Card>
              </div>

              {/* Lista de Obras */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Obras em Andamento</h2>
                <div className="space-y-4">
                  {obras.map((obra) => (
                    <Card key={obra.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{obra.nome}</h3>
                            {obra.status === "no-prazo" ? (
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                No Prazo
                              </span>
                            ) : (
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                                Atrasado
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-600">{obra.endereco}</p>
                          <p className="text-sm text-slate-500 mt-1">Etapa: {obra.etapaAtual}</p>
                        </div>
                        <Button 
                          onClick={() => verDetalhesObra(obra.id)}
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          Ver Detalhes
                        </Button>
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Progresso Físico</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${obra.progressoFisico}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-slate-900">{obra.progressoFisico}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Progresso Financeiro</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div 
                                className="bg-orange-500 h-2 rounded-full" 
                                style={{ width: `${obra.progressoFinanceiro}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-slate-900">{obra.progressoFinanceiro}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Orçamento</p>
                          <p className="text-sm font-semibold text-slate-900">
                            R$ {(obra.orcamento / 1000).toFixed(0)}k
                          </p>
                          <p className="text-xs text-slate-600">
                            Gasto: R$ {(obra.gasto / 1000).toFixed(0)}k
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Lucro Previsto</p>
                          <p className="text-sm font-semibold text-green-600">
                            R$ {(obra.lucroPrevisao / 1000).toFixed(1)}k
                          </p>
                          <p className="text-xs text-slate-600">
                            Margem: {((obra.lucroPrevisao / obra.orcamento) * 100).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Notificações Recentes */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Notificações Recentes</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Obra Casa Santos está atrasada</p>
                      <p className="text-xs text-slate-600 mt-1">Progresso físico abaixo do esperado. Revise o cronograma.</p>
                      <p className="text-xs text-slate-500 mt-1">Há 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Medição aprovada - Residência Silva</p>
                      <p className="text-xs text-slate-600 mt-1">Liberação de R$ 35.000 confirmada pela Caixa.</p>
                      <p className="text-xs text-slate-500 mt-1">Ontem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Próxima medição em 5 dias</p>
                      <p className="text-xs text-slate-600 mt-1">Prepare a documentação para a etapa de Alvenaria.</p>
                      <p className="text-xs text-slate-500 mt-1">Há 3 dias</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "detalhes-obra" && obraAtual && (
            <div className="space-y-6">
              {/* Header com botão voltar */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  onClick={voltarParaObras}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar
                </Button>
              </div>

              {/* Informações principais da obra */}
              <Card className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl font-bold text-slate-900">{obraAtual.nome}</h1>
                      {obraAtual.status === "no-prazo" ? (
                        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                          No Prazo
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                          Atrasado
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-2">{obraAtual.endereco}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Cliente: {obraAtual.cliente}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Início: {obraAtual.dataInicio}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Previsão: {obraAtual.previsaoTermino}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Exportar PDF
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Editar Obra
                    </Button>
                  </div>
                </div>

                {/* Cards de métricas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Progresso Físico</p>
                    <p className="text-3xl font-bold text-blue-600">{obraAtual.progressoFisico}%</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Progresso Financeiro</p>
                    <p className="text-3xl font-bold text-orange-600">{obraAtual.progressoFinanceiro}%</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Orçamento Total</p>
                    <p className="text-3xl font-bold text-slate-900">R$ {(obraAtual.orcamento / 1000).toFixed(0)}k</p>
                    <p className="text-xs text-slate-600 mt-1">Gasto: R$ {(obraAtual.gasto / 1000).toFixed(0)}k</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Lucro Previsto</p>
                    <p className="text-3xl font-bold text-green-600">R$ {(obraAtual.lucroPrevisao / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-slate-600 mt-1">Margem: {((obraAtual.lucroPrevisao / obraAtual.orcamento) * 100).toFixed(1)}%</p>
                  </div>
                </div>
              </Card>

              {/* Cronograma Físico-Financeiro */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Cronograma Físico-Financeiro</h2>
                <div className="space-y-4">
                  {obraAtual.etapas.map((etapa, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-slate-900">{etapa.nome}</h3>
                            {etapa.progresso === 100 && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                            {etapa.progresso > 0 && etapa.progresso < 100 && (
                              <Clock className="w-5 h-5 text-orange-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-slate-600">
                              Valor: R$ {(etapa.valor / 1000).toFixed(1)}k
                            </span>
                            <span className="text-slate-600">
                              Pago: R$ {(etapa.pago / 1000).toFixed(1)}k
                            </span>
                            <span className={`font-semibold ${
                              etapa.pago >= etapa.valor ? 'text-green-600' : 
                              etapa.pago > 0 ? 'text-orange-600' : 'text-slate-600'
                            }`}>
                              Saldo: R$ {((etapa.valor - etapa.pago) / 1000).toFixed(1)}k
                            </span>
                          </div>
                        </div>
                        <div className="w-full sm:w-48">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-600">Progresso</span>
                            <span className="font-semibold text-slate-900">{etapa.progresso}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full transition-all ${
                                etapa.progresso === 100 ? 'bg-green-500' :
                                etapa.progresso > 0 ? 'bg-orange-500' : 'bg-slate-300'
                              }`}
                              style={{ width: `${etapa.progresso}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Alertas e Próximas Ações */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Próximas Ações</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Próxima Medição</p>
                        <p className="text-xs text-slate-600 mt-1">{obraAtual.proximaMedicao}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Etapa Atual</p>
                        <p className="text-xs text-slate-600 mt-1">{obraAtual.etapaAtual}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Documentos Pendentes</h2>
                  {obraAtual.documentosPendentes.length > 0 ? (
                    <div className="space-y-2">
                      {obraAtual.documentosPendentes.map((doc, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-sm text-slate-900">{doc}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-slate-900">Todos os documentos em dia</span>
                    </div>
                  )}
                </Card>
              </div>

              {/* Ações rápidas */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Ações Rápidas</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Lançar Gasto
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Upload Documento
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Atualizar Cronograma
                  </Button>
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Relatório Completo
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "guia" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Guia Interativo MCMV</h1>
                <p className="text-slate-600 mt-1">Aprenda o passo a passo completo da construção financiada</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    titulo: "1. Captação do Cliente",
                    descricao: "Como encontrar e qualificar clientes para obras MCMV",
                    progresso: 100,
                    aulas: 5,
                    duracao: "45 min"
                  },
                  {
                    titulo: "2. Documentação Necessária",
                    descricao: "Checklist completo de documentos para aprovação",
                    progresso: 60,
                    aulas: 4,
                    duracao: "30 min"
                  },
                  {
                    titulo: "3. Projeto e Padrões MCMV",
                    descricao: "Requisitos técnicos e normas do programa",
                    progresso: 0,
                    aulas: 6,
                    duracao: "1h 15min"
                  },
                  {
                    titulo: "4. Orçamento com SINAPI",
                    descricao: "Como fazer orçamento compatível com tabela SINAPI",
                    progresso: 0,
                    aulas: 7,
                    duracao: "1h 30min"
                  },
                  {
                    titulo: "5. Aprovação na Caixa",
                    descricao: "Processo de análise e aprovação do financiamento",
                    progresso: 0,
                    aulas: 5,
                    duracao: "50 min"
                  },
                  {
                    titulo: "6. Liberação de Recursos",
                    descricao: "Como funciona a liberação por etapas",
                    progresso: 0,
                    aulas: 4,
                    duracao: "40 min"
                  },
                  {
                    titulo: "7. Prestação de Contas",
                    descricao: "Medição e documentação para cada etapa",
                    progresso: 0,
                    aulas: 6,
                    duracao: "1h"
                  },
                  {
                    titulo: "8. Erros que Reprovam",
                    descricao: "Principais erros e como evitá-los",
                    progresso: 0,
                    aulas: 3,
                    duracao: "25 min"
                  }
                ].map((modulo, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{modulo.titulo}</h3>
                        <p className="text-sm text-slate-600">{modulo.descricao}</p>
                      </div>
                      {modulo.progresso === 100 && (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>{modulo.aulas} aulas</span>
                      <span>•</span>
                      <span>{modulo.duracao}</span>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Progresso</span>
                        <span>{modulo.progresso}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all" 
                          style={{ width: `${modulo.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button 
                      variant={modulo.progresso > 0 ? "outline" : "default"}
                      className={modulo.progresso > 0 ? "w-full" : "w-full bg-orange-500 hover:bg-orange-600"}
                    >
                      {modulo.progresso === 100 ? "Revisar" : modulo.progresso > 0 ? "Continuar" : "Começar"}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "simulador" && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Simulador de Viabilidade MCMV</h1>
                <p className="text-slate-600 mt-1">Descubra se a obra é viável antes de assumir o compromisso</p>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Renda Familiar Mensal
                      </label>
                      <input
                        type="text"
                        placeholder="R$ 3.500,00"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Custo Estimado da Obra
                      </label>
                      <input
                        type="text"
                        placeholder="R$ 180.000,00"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Tipo de Terreno
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Selecione o tipo de terreno</option>
                      <option>Urbano Consolidado</option>
                      <option>Urbano em Expansão</option>
                      <option>Rural</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Prazo de Execução (meses)
                      </label>
                      <input
                        type="number"
                        placeholder="12"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Valor do Terreno
                      </label>
                      <input
                        type="text"
                        placeholder="R$ 50.000,00"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold">
                    <Calculator className="w-5 h-5 mr-2" />
                    Simular Viabilidade
                  </Button>
                </form>
              </Card>

              {/* Resultado Simulação (exemplo) */}
              <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Obra Viável!</h3>
                    <p className="text-green-700">
                      O cliente se enquadra nos requisitos do MCMV e o financiamento tem alta probabilidade de aprovação.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Faixa MCMV</p>
                    <p className="text-xl font-bold text-slate-900">Faixa 2</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Subsídio Estimado</p>
                    <p className="text-xl font-bold text-green-600">R$ 47.500</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Parcela Estimada</p>
                    <p className="text-xl font-bold text-slate-900">R$ 890/mês</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Próximos Passos:</h4>
                  <ul className="space-y-2">
                    {[
                      "Solicitar documentação completa do cliente",
                      "Elaborar projeto compatível com padrões MCMV",
                      "Fazer orçamento detalhado com base SINAPI",
                      "Dar entrada na documentação na Caixa Econômica"
                    ].map((passo, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-slate-700">{passo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "obras" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Minhas Obras</h1>
                  <p className="text-slate-600 mt-1">Gerencie todas as suas obras MCMV</p>
                </div>
                <Link href="/app/nova-obra">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Plus className="w-5 h-5 mr-2" />
                    Nova Obra
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6">
                {obras.map((obra) => (
                  <Card key={obra.id} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{obra.nome}</h3>
                              {obra.status === "no-prazo" ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                  No Prazo
                                </span>
                              ) : (
                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                                  Atrasado
                                </span>
                              )}
                            </div>
                            <p className="text-slate-600">{obra.endereco}</p>
                            <p className="text-sm text-slate-500 mt-1">Etapa Atual: {obra.etapaAtual}</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-600">Progresso Físico</span>
                              <span className="font-semibold text-slate-900">{obra.progressoFisico}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-3">
                              <div 
                                className="bg-blue-500 h-3 rounded-full transition-all" 
                                style={{ width: `${obra.progressoFisico}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-600">Progresso Financeiro</span>
                              <span className="font-semibold text-slate-900">{obra.progressoFinanceiro}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-3">
                              <div 
                                className="bg-orange-500 h-3 rounded-full transition-all" 
                                style={{ width: `${obra.progressoFinanceiro}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Orçamento Total</p>
                            <p className="text-lg font-bold text-slate-900">
                              R$ {(obra.orcamento / 1000).toFixed(0)}k
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Gasto Atual</p>
                            <p className="text-lg font-bold text-orange-600">
                              R$ {(obra.gasto / 1000).toFixed(0)}k
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Lucro Previsto</p>
                            <p className="text-lg font-bold text-green-600">
                              R$ {(obra.lucroPrevisao / 1000).toFixed(1)}k
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:w-48">
                        <Button 
                          onClick={() => verDetalhesObra(obra.id)}
                          className="w-full bg-orange-500 hover:bg-orange-600"
                        >
                          Ver Detalhes
                        </Button>
                        <Button variant="outline" className="w-full">
                          Relatório
                        </Button>
                        <Button variant="outline" className="w-full">
                          Cronograma
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 text-center bg-slate-50">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Adicione Mais Obras</h3>
                  <p className="text-slate-600 mb-4">
                    Você está no plano Profissional e pode gerenciar até 5 obras simultâneas.
                  </p>
                  <Link href="/app/nova-obra">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Cadastrar Nova Obra
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "documentos" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Biblioteca de Documentos</h1>
                <p className="text-slate-600 mt-1">Modelos, contratos e templates para suas obras MCMV</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { nome: "Contrato de Construção MCMV", tipo: "Modelo", downloads: 1234 },
                  { nome: "Checklist de Documentação", tipo: "Template", downloads: 2156 },
                  { nome: "Planilha Orçamentária SINAPI", tipo: "Excel", downloads: 3421 },
                  { nome: "Modelo de ART", tipo: "Modelo", downloads: 987 },
                  { nome: "Cronograma Físico-Financeiro", tipo: "Template", downloads: 1876 },
                  { nome: "Memorial Descritivo Padrão", tipo: "Modelo", downloads: 1543 }
                ].map((doc, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{doc.nome}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{doc.tipo}</span>
                      <span className="text-slate-500">{doc.downloads} downloads</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Baixar
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "configuracoes" && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Configurações</h1>
                <p className="text-slate-600 mt-1">Gerencie sua conta e preferências</p>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Informações da Conta</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      defaultValue="João Silva"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="joao@email.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">CREA</label>
                    <input
                      type="text"
                      placeholder="CREA/UF 123456"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Salvar Alterações
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Plano Atual</h3>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg mb-4">
                  <div>
                    <p className="font-bold text-slate-900">Plano Profissional</p>
                    <p className="text-sm text-slate-600">R$ 29/mês • 5 obras simultâneas</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Fazer Upgrade
                  </Button>
                </div>
                <Button variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                  Cancelar Assinatura
                </Button>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
