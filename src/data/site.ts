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
    name: "TourLive - Turismo Interativo Ltda",
    tagline: "Tecnologia que transforma destinos em experiências guiadas",
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
      title: "Tecnologia que transforma destinos em experiências guiadas",
      subtitle: "Mapas interativos com guia falante e rotas inteligentes",
      cta: "Solicite Orçamento",
      image: "/images/banner-carrosssel/mapa-interativo.jpg",
      link: "#contato"
    },
    {
      id: 2,
      title: "Seu cliente está no Google. E você, onde está?",
      subtitle: "Sites Comerciais com link de Afiliados",
      cta: "Como funciona",
      image: "/images/banner-carrosssel/site-comercial.jpg",
      link: "#contato"
    },
    {
      id: 3,
      title: "Tudo sobre o destino em um só lugar",
      subtitle: "Portal de Destinos Turísticos",
      cta: "Solicite",
      image: "/images/banner-carrosssel/portal_turismo.jpg",
      link: "#contato"
    }
  ] as Banner[],

  benefits: [
    {
      id: 1,
      title: "Conectando Pessoas, Negócios e Destinos",
      description: "Unimos marketing digital e tecnologia interativa para conectar turistas, atrativos e empresas.",
      icon: "🧭"
    },
    {
      id: 2,
      title: "Soluções Inteligentes para o Trade Turístico",
      description: "Unimos automação, geolocalização e marketing para dar mais visibilidade, agências, restaurantes e atrativos turísticos.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Tecnologia que Impulsiona Resultados",
      description: "Interatividade e dados para transformar visitantes em clientes. Experiências que fortalecem marcas e impulsionam o turismo local.",
      icon: "📊"
    }
  ] as Benefit[],

  products: [
    {
      id: 1,
      title: "Mapa Interativo com Guia Falante",
      description: "Mapas turísticos interativos que conectam turistas diretamente às atrações (Municípios, Resorts e Parques)",
      features: [
        "Geolocalização em tempo real",
        "Áudio-guia com informações sobre as atrações",
        "Interface moderna com recursos multimídia integrados."
      ],
      icon: "🗺️"
    },
    {
      id: 2,
      title: "Portais de Turismo & Destinos",
      description: "Tudo sobre seu destino em um só lugar: atrações, eventos, mapas interativos, notícias, blog e experiências que conectam turistas, cultura e trade local.",
      features: [
        "Centralização: tudo sobre o destino em um só lugar.",
        "Atualização: informações e notícias em tempo real.",
        "Conexão: aproxima turistas, cultura e negócios locais."
      ],
      icon: "🌐"
    },
    {
      id: 3,
      title: "Sites Comerciais Inteligentes",
      description: "Sites profissionais para o turismo com domínio próprio, SEO avançado e conexão direta com o turista. Fácil de compartilhar, atrai mais clientes e gera resultados reais.",
      features: [
        "Presença forte online: domínio próprio com SEO que aumenta visibilidade.",
        "Facilidade de acesso: rápido de compartilhar e encontrar nos buscadores.",
        "Resultados reais: gera mais contatos, reservas e vendas para o negócio."
      ],
      icon: "📱"
    },
    {
      id: 4,
      title: "SEO Local & Google Maps Ads",
      description: "Dar destaque a cada atração do empreendimento no Google e Google Maps, ampliando visibilidade e vendas de produtos e serviços",
      features: [
        "Maior Visibilidade: Cada atração do parque aparecerá como resultado de pesquisa relevante no Google Maps.",
        "Engajamento: O público poderá avaliar e comentar sobre cada atração, ampliando a interação com o parque.",
        "Melhoria na Visualização do Mapa: Com os pins de marcação, os visitantes poderão identificar os atrativos do parque no maps."
      ],
      icon: "🎯"
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
    projectsDelivered: "10+",
    satisfactionRate: "99%",
    averageROI: "98%",
    guidedInteractions: "1.2M+"
  },

  navigation: [
    { name: "Soluções", href: "#solucoes" },
    { 
      name: "Produtos", 
      href: "#produtos",
      submenu: [
        { name: "Sites Comerciais", href: "/sites-comerciais" },
        { name: "Site para Influencers", href: "/influencer" }
      ]
    },
    { name: "Clientes", href: "#clientes" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" }
  ]
};