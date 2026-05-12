export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  link: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href?: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface Solution {
  id: number;
  title: string;
  description: string;
}

export const siteData = {
  company: {
    name: "TourLive - Turismo Interativo, SEO Google Maps, Mapa Interativo e Guia Falante",
    tagline: "Turismo interativo - Mapa Interativo e Geolocalização Google Maps.",
    phone: "+5554993220552",
    whatsapp: "5554993220552",
    email: "tourlivebr@gmail.com",
    address: "Rua Bernardino Timóteo da Fonseca, 678 - Vila Boeira",
    city: "Canela, RS - Brasil",
    fullAddress: "Rua Bernardino Timóteo da Fonseca, 678 - Vila Boeira, Canela, RS - Brasil"
  },

  banners: [
    {
      id: 1,
      title: "Mapa Interativo com Guia Falante",
      subtitle: "Transforme a experiência no seu empreendimento com nossas soluções interativas.",
      cta: "Receba uma análise gratuita da sua Atração",
      image: "/images/banner-carrosssel/banner1_tourlive.jpeg",
      link: "#contato"
    },
    {
      id: 2,
      title: "Geolocalização Turística para gerar mais descoberta e consumo",
      subtitle: "Mostre cada ponto da sua atração no mapa e aumente a visibilidade do seu empreendimento.",
      cta: "Solicite uma análise gratuita",
      image: "/images/banner-carrosssel/mapa-interativo.jpg",
      link: "#contato"
    },
    {
      id: 3,
      title: "Sua atração pode aparecer mais, engajar mais e vender mais",
      subtitle: "Com mapa interativo, guia falante e geolocalização, o visitante descobre mais e aproveita melhor cada experiência.",
      cta: "Receber análise gratuita",
      image: "/images/banner-carrosssel/site-comercial.jpg",
      link: "#contato"
    }
  ] as Banner[],

  benefits: [
    {
      id: 1,
      title: "Mais descoberta",
      description: "Cada atração vira uma nova porta de entrada no Google, atraindo visitantes de forma orgânica.",
      icon: "discovery"
    },
    {
      id: 2,
      title: "Mais permanência",
      description: "O visitante explora mais e aproveita melhor o local ao visualizar todas as opções disponíveis.",
      icon: "time"
    },
    {
      id: 3,
      title: "Mais consumo",
      description: "Fluxo direcionado para restaurantes, lojas e experiências internas que antes eram invisíveis.",
      icon: "revenue"
    },
    {
      id: 4,
      title: "Mais presença digital",
      description: "Seu parque deixa de ser apenas um ponto no mapa e vira um ecossistema visível e interativo.",
      icon: "presence"
    },
    {
      id: 5,
      title: "Mais decisão de visita",
      description: "Múltiplas atrações e conteúdos aumentam a confiança e influenciam diretamente na escolha do visitante.",
      icon: "decision"
    },
    {
      id: 6,
      title: "Percepção de valor superior",
      description: "Empreendimentos com mais conteúdo no Google são percebidos como mais completos e atrativos.",
      icon: "value"
    }
  ] as Benefit[],

  products: [
    {
      id: 1,
      title: "Análise do espaço",
      description: "Identificação de pontos estratégicos e oportunidades de visibilidade que hoje estão invisíveis para o Google.",
      features: [
        "Mapeamento de atrações internas",
        "Auditoria de presença atual",
        "Identificação de gaps de descoberta"
      ],
      icon: "🔍"
    },
    {
      id: 2,
      title: "Estruturação das localizações",
      description: "Organização e posicionamento estratégico de cada atração interna no ecossistema do Google Maps.",
      features: [
        "Geolocalização precisa",
        "Otimização de categorias e nomes",
        "Criação de conexões entre pontos"
      ],
      icon: "📍"
    },
    {
      id: 3,
      title: "Publicação e otimização",
      description: "Acompanhamento contínuo para garantir que cada ponto mantenha máxima visibilidade e desempenho.",
      features: [
        "Monitoramento de métricas",
        "Atualizações constantes",
        "Gestão de interações e fotos"
      ],
      icon: "🚀"
    }
  ] as Product[],

  clients: [
    {
      id: 1,
      name: "São Chico RS",
      logo: "/images/clients/saochico.png",
      link: "https://www.visitesaochicors.com.br/"
    },
    {
      id: 2,
      name: "Nova Petrópolis",
      logo: "/images/clients/novapetropolis.png",
      link: "https://visitenovapetropolis.com.br/"
    },
    {
      id: 3,
      name: "Garden Park",
      logo: "/images/clients/gardenpark.png",
      link: "https://www.mapagardenpark.com.br/"
    },
    {
      id: 4,
      name: "Aicolli",
      logo: "/images/clients/aicolli.png",
      link: "https://www.lavandasdegramado.com/"
    },
    {
      id: 5,
      name: "Partiu Viagem",
      logo: "/images/clients/partiuviagem.png",
      link: "https://www.partiuviagem.tur.br/"
    },
    {
      id: 6,
      name: "Recordar Fotos",
      logo: "/images/clients/recordarfotos.png",
      link: "https://www.recordarfotos.com.br/"
    }
  ] as Client[],

  solutions: [
    {
      id: 1,
      title: "Mapa Interativo Falante",
      description: "Tenha um mapa interativo com guia falante, rotas personalizadas e integração com Google Maps, Uber e Waze."
    },
    {
      id: 2,
      title: "Sites Comerciais Inteligentes",
      description: "Páginas profissionais com domínio próprio, SEO avançado e integração direta com o público-alvo."
    },
    {
      id: 3,
      title: "Sistema de Afiliados e Cupons",
      description: "Rede de parcerias com descontos exclusivos gerando receita extra para guias e motoristas de Aplicativo"
    },
    {
      id: 4,
      title: "Centralização dos Canais de Comunicação",
      description: "Centralize todas as interações com os visitantes em um único lugar, otimizando a comunicação e a interação."
    },
    {
      id: 5,
      title: "Analytics e Performance",
      description: "Monitoramento de performance com dados precisos e insights estratégicos."
    },
    {
      id: 6,
      title: "Google Maps para atrações turísticas",
      description: "Otimização do Google Maps para atrair mais visitantes e aumentar as vendas."
    }
  ] as Solution[],

  testimonials: [
    {
      id: 1,
      name: "Rodrigo Santos",
      role: "Agencia de Viagens",
      company: "Partiu Viagem",
      comment: "O site desenvolvido pela TourLive transformou a presença digital da nossa agência. Agora nossos clientes encontram facilmente os pacotes, tiram dúvidas pelo WhatsApp e fazemos mais vendas online. Foi um investimento que trouxe resultados reais.",
      avatar: "/images/testimonials/rodrigo_santos.png",
      rating: 5
    },
    {
      id: 2,
      name: "Roberta Rauber",
      role: "Gerente de Marketing",
      company: "Garden Park Gramado",
      comment: "O Mapa Interativo desenvolvido pela TourLive trouxe uma nova experiência para o Garden Park. Os visitantes agora exploram cada percurso com mais facilidade, aproveitam melhor as atrações e passam mais tempo no parque.",
      avatar: "/images/testimonials/roberta.png",
      rating: 5
    },
    {
      id: 3,
      name: "Rafael Castelli",
      role: "Secretário de Turismo",
      company: "São Francisco de Paula RS",
      comment: "Com o portal de turismo desenvolvido pela TourLive, São Chico ganhou mais visibilidade e organização digital. Os visitantes encontram facilmente atrativos, hospedagens e eventos, o que fortalece o turismo local e movimenta toda a economia do município.",
      avatar: "/images/testimonials/rafael.png",
      rating: 5
    }
  ] as Testimonial[],

  stats: {
    projectsDelivered: "Dezenas",
    satisfactionRate: "Alta",
    averageROI: "Foco em resultado",
    guidedInteractions: "Milhares+"
  },

  navigation: [
    { name: "Início", href: "/" },
    { name: "Soluções", href: "/#solucoes" },
    { 
      name: "Produtos", 
      href: "/#produtos",
      submenu: [
        { name: "Mapa Interativo com Guia Falante", href: "https://mapainterativo.vercel.app/" },
        { name: "SEO Local & Google Maps Ads", href: "https://geolocalizacao-jet.vercel.app/" },
        { name: "Site para Guias e Motoristas de App", href: "/mot-app" },
        { name: "Site para Influencers", href: "/influencer" },
        { name: "Site para Casa por Temporada", href: "/casa-temporada" }
      ]
    },
    { name: "Clientes", href: "/#clientes" },
    { name: "Depoimentos", href: "/#depoimentos" },
    { name: "Contato", href: "/#contato" }
  ]
};
