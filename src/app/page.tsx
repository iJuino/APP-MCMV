"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Building2, Calculator, BookOpen, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navbar */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-slate-900">
              Obra<span className="text-orange-500">Fácil</span> MCMV
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#funcionalidades" className="text-slate-600 hover:text-orange-500 transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-slate-600 hover:text-orange-500 transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="text-slate-600 hover:text-orange-500 transition-colors">
              Depoimentos
            </a>
            <Link href="/login">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Entrar
              </Button>
            </Link>
            <Link href="/app">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Começar Grátis
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Plataforma #1 para Obras MCMV
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Domine Obras MCMV e{" "}
              <span className="text-orange-500">Evite Prejuízos</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A plataforma completa para engenheiros recém-formados gerenciarem construções financiadas 
              com controle total, do primeiro cliente até a entrega da obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/app">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 w-full sm:w-auto">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 text-lg px-8 py-6 w-full sm:w-auto">
                Ver Demonstração
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>1 obra grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600">Obra em Andamento</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    No Prazo
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Progresso Físico</span>
                    <span className="font-semibold text-slate-900">68%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-xs text-slate-500">Orçado</p>
                    <p className="text-lg font-bold text-slate-900">R$ 180.000</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Lucro Previsto</p>
                    <p className="text-lg font-bold text-green-600">R$ 24.500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Você Está Perdendo Oportunidades?
            </h2>
            <p className="text-xl text-slate-300">
              Engenheiros recém-formados enfrentam desafios reais no mercado de construção financiada
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Falta de Conhecimento</h3>
              <p className="text-slate-400">
                Não sabem por onde começar: aprovação, SINAPI, medição da Caixa, documentação...
              </p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Prejuízos Evitáveis</h3>
              <p className="text-slate-400">
                Sem controle financeiro adequado, obras MCMV viram pesadelo e geram prejuízo.
              </p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Oceano Azul Inexplorado</h3>
              <p className="text-slate-400">
                Mercado com alta demanda, mas poucos profissionais realmente dominam o processo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Tudo Que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Duas ferramentas poderosas para você dominar obras MCMV e crescer profissionalmente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Módulo 1 */}
            <Card className="p-8 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                📚 Guia Interativo MCMV
              </h3>
              <p className="text-slate-600 mb-6">
                Aprenda o passo a passo completo da construção financiada, do zero ao avançado.
              </p>
              <ul className="space-y-3">
                {[
                  "Captação e qualificação de clientes",
                  "Documentação necessária completa",
                  "Projetos e padrões MCMV",
                  "Orçamento compatível com SINAPI",
                  "Checklist de aprovação da Caixa",
                  "Processo de liberação por etapas",
                  "Prestação de contas sem erros",
                  "Erros que reprovam (e como evitar)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Módulo 2 */}
            <Card className="p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                📊 Sistema de Gestão de Obras
              </h3>
              <p className="text-slate-600 mb-6">
                Controle financeiro profissional para evitar prejuízos e maximizar lucros.
              </p>
              <ul className="space-y-3">
                {[
                  "Cadastro completo de obras",
                  "Controle financeiro (planejado x realizado)",
                  "Lançamento de quantitativos de materiais",
                  "Controle de gastos por etapa",
                  "Saldo da obra e alertas de prejuízo",
                  "Cronograma físico-financeiro",
                  "Dashboard com indicadores em tempo real",
                  "Biblioteca de documentos e modelos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Diferencial - Simulador */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  🎯 Simulador de Viabilidade MCMV
                </h3>
                <p className="text-orange-50 text-lg mb-6">
                  Descubra em segundos se a obra é viável antes de assumir o compromisso.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análise de renda do cliente",
                    "Compatibilidade com tipo de terreno",
                    "Viabilidade do custo estimado",
                    "Análise de prazos e cronograma",
                    "Relatório completo de viabilidade"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-orange-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 text-slate-900">
                <h4 className="font-bold text-lg mb-4">Exemplo de Simulação</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-600">Renda Familiar</label>
                    <div className="bg-slate-100 rounded-lg p-3 mt-1">R$ 3.500,00</div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Custo Estimado</label>
                    <div className="bg-slate-100 rounded-lg p-3 mt-1">R$ 180.000,00</div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Tipo de Terreno</label>
                    <div className="bg-slate-100 rounded-lg p-3 mt-1">Urbano Consolidado</div>
                  </div>
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-700">Obra Viável!</span>
                    </div>
                    <p className="text-sm text-green-600">
                      Cliente se enquadra na Faixa 2 do MCMV. Financiamento aprovável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Por Que Escolher o ObraFácil?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rápido e Intuitivo</h3>
              <p className="text-slate-600">
                Interface moderna e fácil de usar. Comece a gerenciar obras em minutos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seguro e Confiável</h3>
              <p className="text-slate-600">
                Seus dados protegidos com criptografia de ponta. Backup automático.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resultados Reais</h3>
              <p className="text-slate-600">
                Evite prejuízos, aumente lucros e profissionalize sua gestão de obras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Planos Para Cada Momento da Sua Carreira
            </h2>
            <p className="text-xl text-slate-600">
              Comece grátis e evolua conforme seu negócio cresce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Gratuito */}
            <Card className="p-8 border-2 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratuito</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">R$ 0</div>
                <p className="text-slate-600">Para começar</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "1 obra simultânea",
                  "Guia básico MCMV",
                  "Controle financeiro básico",
                  "Dashboard simplificado",
                  "Suporte por email"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button className="w-full" variant="outline">
                  Começar Grátis
                </Button>
              </Link>
            </Card>

            {/* Plano Profissional */}
            <Card className="p-8 border-2 border-orange-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Profissional</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  R$ 29<span className="text-lg text-slate-600">/mês</span>
                </div>
                <p className="text-slate-600">Para crescer</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "5 obras simultâneas",
                  "Guia completo MCMV",
                  "Controle financeiro avançado",
                  "Dashboard completo",
                  "Cronograma físico-financeiro",
                  "Biblioteca de documentos",
                  "Notificações inteligentes",
                  "Suporte prioritário"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Começar Agora
                </Button>
              </Link>
            </Card>

            {/* Plano Premium */}
            <Card className="p-8 border-2 border-blue-400 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  R$ 79<span className="text-lg text-slate-600">/mês</span>
                </div>
                <p className="text-slate-600">Sem limites</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Obras ilimitadas",
                  "Tudo do Profissional +",
                  "Simulador de Viabilidade MCMV",
                  "Relatórios personalizados",
                  "Exportação em PDF",
                  "API de integração",
                  "Treinamento exclusivo",
                  "Suporte VIP (WhatsApp)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Começar Agora
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto Para Dominar Obras MCMV?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de engenheiros que já estão gerenciando obras com segurança e lucratividade.
          </p>
          <Link href="/app">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6">
              Começar Gratuitamente Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-orange-100 mt-4">
            Sem cartão de crédito • 1 obra grátis • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-orange-500" />
                <span className="text-lg font-bold text-white">ObraFácil MCMV</span>
              </div>
              <p className="text-sm">
                A plataforma completa para engenheiros gerenciarem obras MCMV com segurança e lucratividade.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#funcionalidades" className="hover:text-orange-500">Funcionalidades</a></li>
                <li><a href="#planos" className="hover:text-orange-500">Planos</a></li>
                <li><a href="#" className="hover:text-orange-500">Demonstração</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Guias</a></li>
                <li><a href="#" className="hover:text-orange-500">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Sobre</a></li>
                <li><a href="#" className="hover:text-orange-500">Contato</a></li>
                <li><a href="#" className="hover:text-orange-500">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2024 ObraFácil MCMV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
