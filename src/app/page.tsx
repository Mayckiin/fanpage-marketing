"use client"

import { CheckCircle2, TrendingUp, Target, Zap, MessageCircle, Instagram, ArrowRight, Star, BarChart3, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const whatsappLink = "https://wa.me/5562981166945"
  const instagramLink = "https://www.instagram.com/joaoricardosnt?igsh=M3Q2M2d3eGdtdmI0"

  return (
    <div className="min-h-screen bg-black">
      {/* HERO / CAPA */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-400 font-medium">Estrategista de Marketing Digital</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            Eu ajudo marcas e criadores a{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              crescerem nas redes sociais
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            com estratégia, conteúdo e constância.
          </p>

          {/* Subheadline */}
          <div className="flex flex-wrap justify-center gap-3 text-gray-400 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              Estrategista de Marketing
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
              Social Media
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              Especialista em Conteúdo que Vende
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500/30 hover:border-orange-500 bg-black/50 backdrop-blur-sm text-white font-semibold px-8 py-6 text-lg rounded-xl hover:bg-orange-500/10 transition-all duration-300"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-orange-500/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-orange-500"></div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO - QUEM SOU EU */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Quem sou eu e qual é meu <span className="text-orange-500">diferencial</span>
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm shadow-2xl shadow-orange-500/10">
            <CardContent className="p-8 sm:p-12">
              {/* Imagem e Texto Principal */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                {/* Imagem */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20">
                  <Image
                    src="https://blob.vercel-storage.com/blob-1738612068-4qlxfFQDVDDzxWmHHvQXUCCfqZGMJH.jpg"
                    alt="João Ricardo - Estrategista de Marketing"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Texto */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">João Ricardo</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Meu nome é João Ricardo, e meu trabalho é transformar perfis comuns em motores de crescimento, autoridade e vendas através de estratégias reais, consistência e produção de conteúdo inteligente.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Trago para o digital minha experiência prática como gestor de varejo e marketing, somada a uma rotina disciplinada e focada em alta performance. Meu estilo de trabalho é simples: conteúdo aplicado de forma estratégica, com evolução mensurável e resultados reais.
                  </p>
                </div>
              </div>

              {/* Diferenciais */}
              <div className="space-y-6 pt-8 border-t border-orange-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Experiência Real</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Gestor de varejo e marketing com experiência prática em crescimento de negócios e gestão de marcas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Especialista em Reels Virais</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Domínio em criar conteúdo estratégico que viraliza e gera resultados reais de engajamento e vendas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Disciplina e Autoridade</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Rotina disciplinada e autoridade no lifestyle saudável, aplicando consistência em tudo que faço.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-orange-500/20 mt-8">
                <p className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  "Eu não ensino só a postar — eu ensino a crescer com estratégia."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RESULTADOS E PROVAS SOCIAIS */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Resultados que <span className="text-orange-500">falam por mim</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transformações reais de marcas e criadores que aplicaram minhas estratégias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">+350%</p>
                  <p className="text-gray-400">Aumento médio de engajamento</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">+50k</p>
                  <p className="text-gray-400">Novos seguidores gerados</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">98%</p>
                  <p className="text-gray-400">Taxa de satisfação</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "Em 30 dias meu perfil explodiu! Saí de 2k para 15k seguidores e as vendas triplicaram. A estratégia funciona de verdade!"
                </p>
                <p className="text-orange-500 font-semibold">— Maria Silva, Empreendedora Digital</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "Finalmente entendi como criar Reels que vendem. O acompanhamento é personalizado e os resultados aparecem rápido!"
                </p>
                <p className="text-orange-500 font-semibold">— João Santos, Coach de Vendas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Escolha seu <span className="text-orange-500">nível de consultoria</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Três opções pensadas para diferentes momentos da sua jornada
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* BÁSICA */}
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 mb-4">
                    <span className="text-orange-500 font-semibold text-sm">BÁSICA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Base Estratégica</h3>
                  <p className="text-gray-400">Para quem está começando e precisa de direção</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Diagnóstico completo do perfil</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Análise detalhada do nicho</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">1 estratégia base para crescimento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Checklist de melhorias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Entrega em 1 encontro (1h de call)</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-500/20">
                  <p className="text-sm text-gray-400 italic mb-4">Solução rápida. Pequena, direta e transformadora.</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Começar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MÉDIA - DESTAQUE */}
            <Card className="bg-gradient-to-br from-orange-900/40 to-black border-2 border-orange-500 backdrop-blur-sm relative overflow-hidden transform lg:scale-110 shadow-2xl shadow-orange-500/30">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                MAIS POPULAR
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-400 mb-4">
                    <span className="text-orange-300 font-semibold text-sm">MÉDIA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Acelerador de Conteúdo</h3>
                  <p className="text-gray-300">Para quem já posta, mas não cresce ou não vende</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Tudo da consultoria básica</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Calendário estratégico (15 a 30 dias)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Sugestões de Reels virais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Estratégia de Stories</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Correção de postura, estética e narrativa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">2 encontros + acompanhamento por 7 dias</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-400/30">
                  <p className="text-sm text-gray-200 italic mb-4">O meio-termo perfeito: direção + execução estratégica.</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 rounded-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-400/50 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Quero Acelerar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PREMIUM */}
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 mb-4">
                    <span className="text-orange-400 font-semibold text-sm">PREMIUM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mentoria 1:1 Crescimento Real</h3>
                  <p className="text-gray-400">Para quem quer escalar de verdade e mudar o jogo</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Estratégia completa de crescimento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Acompanhamento semanal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Correção de conteúdo em tempo real</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Plano de Reels virais personalizado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Mapa de posicionamento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Criação do funil de conteúdo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Suporte direto comigo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">30 ou 60 dias de acompanhamento</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-500/20">
                  <p className="text-sm text-gray-400 italic mb-4">Alta performance. Crescimento acelerado. Transformação total.</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Transformar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DO MÉTODO */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Meu <span className="text-orange-500">método</span>
            </h2>
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              "Eu não vendo fórmula. Eu construo estratégia."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Disciplina + Consistência</h3>
                <p className="text-gray-400 leading-relaxed">
                  Método baseado em rotina estruturada e execução constante para resultados sustentáveis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Estratégias Práticas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nada engessado. Soluções adaptáveis e aplicáveis à realidade do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Reels Virais com CTA</h3>
                <p className="text-gray-400 leading-relaxed">
                  Conteúdo que viraliza e converte, com chamadas inteligentes para ação.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Identidade Real</h3>
                <p className="text-gray-400 leading-relaxed">
                  Posicionamento autêntico que conecta com seu público de verdade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Experiência Comprovada</h3>
                <p className="text-gray-400 leading-relaxed">
                  Vivência real com varejo, marketing e redes sociais que geram resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900/90 to-black border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Acompanhamento Real</h3>
                <p className="text-gray-400 leading-relaxed">
                  Suporte próximo e personalizado durante toda sua jornada de crescimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-orange-800/20 to-orange-900/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="bg-gradient-to-br from-zinc-900/95 to-black border-2 border-orange-500/30 backdrop-blur-sm shadow-2xl shadow-orange-500/20">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Pronto para crescer de verdade nas redes sociais?
                </h2>
                <p className="text-xl text-gray-300">
                  Escolha sua consultoria e vamos começar sua transformação agora.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(instagramLink, '_blank')}
                >
                  <Instagram className="w-6 h-6 mr-2" />
                  Instagram
                </Button>
              </div>

              <div className="pt-8 border-t border-orange-500/20">
                <p className="text-gray-400 text-sm">
                  Resposta em até 24 horas • Atendimento personalizado • Sem compromisso
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-orange-500/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-gray-400">
            © 2024 João Ricardo - Estrategista de Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Transformando marcas e criadores através de estratégia, conteúdo e constância.
          </p>
        </div>
      </footer>
    </div>
  )
}
