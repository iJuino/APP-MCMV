"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  ArrowLeft,
  Save,
  Calendar,
  DollarSign,
  MapPin,
  Users,
  FileText,
  Home
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NovaObraPage() {
  const router = useRouter();
  const [etapaAtual, setEtapaAtual] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de salvar a obra
    alert("Obra cadastrada com sucesso!");
    router.push("/app");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/app">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-slate-900 hidden sm:inline">
                Obra<span className="text-orange-500">Fácil</span>
              </span>
            </div>
          </div>
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
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Cadastrar Nova Obra</h1>
          <p className="text-slate-600">Preencha as informações da obra MCMV</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[
              { num: 1, label: "Dados Básicos" },
              { num: 2, label: "Cliente" },
              { num: 3, label: "Financeiro" },
              { num: 4, label: "Cronograma" }
            ].map((step, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${etapaAtual >= step.num 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-slate-200 text-slate-500'
                    }
                  `}>
                    {step.num}
                  </div>
                  <span className="text-xs text-slate-600 mt-2 hidden sm:block">{step.label}</span>
                </div>
                {i < 3 && (
                  <div className={`
                    flex-1 h-1 mx-2
                    ${etapaAtual > step.num ? 'bg-orange-500' : 'bg-slate-200'}
                  `}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Etapa 1: Dados Básicos */}
          {etapaAtual === 1 && (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Dados Básicos da Obra</h2>
                  <p className="text-sm text-slate-600">Informações gerais sobre a construção</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome da Obra *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Residência Silva - MCMV Faixa 2"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Endereço Completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Rua, número, bairro, cidade - UF"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Tipo de Obra *
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
                      <option value="">Selecione</option>
                      <option>Casa Térrea</option>
                      <option>Sobrado</option>
                      <option>Apartamento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Faixa MCMV *
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
                      <option value="">Selecione</option>
                      <option>Faixa 1</option>
                      <option>Faixa 1,5</option>
                      <option>Faixa 2</option>
                      <option>Faixa 3</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Área Construída (m²) *
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 45"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Número de Dormitórios *
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
                      <option value="">Selecione</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Observações
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Informações adicionais sobre a obra..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button 
                  type="button"
                  onClick={() => setEtapaAtual(2)}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Próximo: Dados do Cliente
                </Button>
              </div>
            </Card>
          )}

          {/* Etapa 2: Cliente */}
          {etapaAtual === 2 && (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Dados do Cliente</h2>
                  <p className="text-sm text-slate-600">Informações do beneficiário</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Nome completo do cliente"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@exemplo.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Renda Familiar Mensal *
                  </label>
                  <input
                    type="text"
                    placeholder="R$ 0,00"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Status da Documentação
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Completa</option>
                    <option>Em Análise</option>
                    <option>Pendente</option>
                    <option>Aprovada</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setEtapaAtual(1)}
                >
                  Voltar
                </Button>
                <Button 
                  type="button"
                  onClick={() => setEtapaAtual(3)}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Próximo: Dados Financeiros
                </Button>
              </div>
            </Card>
          )}

          {/* Etapa 3: Financeiro */}
          {etapaAtual === 3 && (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Dados Financeiros</h2>
                  <p className="text-sm text-slate-600">Orçamento e valores da obra</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Orçamento Total da Obra *
                  </label>
                  <input
                    type="text"
                    placeholder="R$ 0,00"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">Valor total aprovado pela Caixa</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Valor do Terreno
                    </label>
                    <input
                      type="text"
                      placeholder="R$ 0,00"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subsídio MCMV
                    </label>
                    <input
                      type="text"
                      placeholder="R$ 0,00"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Margem de Lucro Esperada (%)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 15"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Banco Financiador
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Caixa Econômica Federal</option>
                    <option>Banco do Brasil</option>
                    <option>Bradesco</option>
                    <option>Santander</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Número do Contrato
                  </label>
                  <input
                    type="text"
                    placeholder="Número do contrato de financiamento"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setEtapaAtual(2)}
                >
                  Voltar
                </Button>
                <Button 
                  type="button"
                  onClick={() => setEtapaAtual(4)}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Próximo: Cronograma
                </Button>
              </div>
            </Card>
          )}

          {/* Etapa 4: Cronograma */}
          {etapaAtual === 4 && (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Cronograma da Obra</h2>
                  <p className="text-sm text-slate-600">Datas e prazos importantes</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Data de Início *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Previsão de Término *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Prazo Total (meses)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 12"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Etapa Atual da Obra
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Não Iniciada</option>
                    <option>Fundação</option>
                    <option>Estrutura</option>
                    <option>Alvenaria</option>
                    <option>Cobertura</option>
                    <option>Instalações</option>
                    <option>Acabamento</option>
                    <option>Pintura</option>
                    <option>Finalizada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Data da Próxima Medição
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Responsável Técnico (Engenheiro)
                  </label>
                  <input
                    type="text"
                    placeholder="Nome e CREA"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Documentos Necessários</p>
                    <p className="text-xs text-blue-700">
                      Após cadastrar a obra, você poderá fazer upload dos documentos: ART, Projeto Aprovado, 
                      Contrato, Cronograma Físico-Financeiro e outros documentos necessários.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setEtapaAtual(3)}
                >
                  Voltar
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Cadastrar Obra
                </Button>
              </div>
            </Card>
          )}
        </form>

        {/* Resumo lateral (visível apenas em telas grandes) */}
        <Card className="hidden lg:block fixed right-8 top-24 w-80 p-6">
          <h3 className="font-bold text-slate-900 mb-4">Resumo do Cadastro</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                etapaAtual >= 1 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                ✓
              </div>
              <span className={etapaAtual >= 1 ? 'text-slate-900' : 'text-slate-500'}>
                Dados Básicos
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                etapaAtual >= 2 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {etapaAtual >= 2 ? '✓' : '2'}
              </div>
              <span className={etapaAtual >= 2 ? 'text-slate-900' : 'text-slate-500'}>
                Dados do Cliente
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                etapaAtual >= 3 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {etapaAtual >= 3 ? '✓' : '3'}
              </div>
              <span className={etapaAtual >= 3 ? 'text-slate-900' : 'text-slate-500'}>
                Dados Financeiros
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                etapaAtual >= 4 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {etapaAtual >= 4 ? '✓' : '4'}
              </div>
              <span className={etapaAtual >= 4 ? 'text-slate-900' : 'text-slate-500'}>
                Cronograma
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-slate-600 mb-2">Campos obrigatórios marcados com *</p>
            <p className="text-xs text-slate-500">
              Você poderá editar essas informações depois do cadastro.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
