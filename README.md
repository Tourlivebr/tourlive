# TourLive Brasil - Turismo Interativo

## 📋 Visão Geral

O TourLive Brasil é uma plataforma de turismo interativo que oferece mapas inteligentes com guia falante, sites comerciais e portais de destinos turísticos. A solução combina tecnologia moderna com storytelling local para criar experiências únicas que conectam visitantes com a essência de cada destino.

## 🚀 Tecnologias Utilizadas

- **Framework**: Astro 5.0
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Estático (SSG)

## 📁 Estrutura do Projeto

```
tourlivebrasil/
├── public/                    # Arquivos estáticos
│   ├── favicon.svg
│   └── images/               # Imagens do projeto
│       ├── banner-carrosssel/
│       ├── clients/
│       └── ...
├── src/
│   ├── assets/               # Assets do Astro
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Benefits.astro
│   │   ├── Clients.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroCarousel.astro
│   │   ├── Products.astro
│   │   ├── SectionIntro.astro
│   │   ├── WhatsAppFloat.astro
│   │   └── WhatsForm.astro
│   ├── data/                 # Dados da aplicação
│   │   └── site.ts
│   ├── layouts/              # Layouts base
│   │   └── Layout.astro
│   └── pages/                # Páginas da aplicação
│       └── index.astro
├── astro.config.mjs          # Configuração do Astro
├── tailwind.config.mjs       # Configuração do Tailwind
├── tsconfig.json             # Configuração do TypeScript
└── package.json              # Dependências e scripts
```

## 🎨 Componentes

### Layout Principal
- **Layout.astro**: Layout base com meta tags, estilos globais e estrutura HTML

### Componentes de Interface
- **Header.astro**: Cabeçalho com navegação e logo
- **Footer.astro**: Rodapé com informações da empresa e links
- **HeroCarousel.astro**: Carousel principal com banners rotativos
- **SectionIntro.astro**: Seção de introdução sobre a empresa
- **Products.astro**: Showcase dos produtos e serviços
- **Benefits.astro**: Seção de benefícios e diferenciais
- **Clients.astro**: Galeria de clientes e depoimentos
- **WhatsForm.astro**: Formulário de contato integrado
- **WhatsAppFloat.astro**: Botão flutuante do WhatsApp

### Dados
- **site.ts**: Arquivo centralizado com todos os dados da aplicação (produtos, clientes, depoimentos, etc.)

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]
cd tourlivebrasil

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📊 Estrutura de Dados

O arquivo `src/data/site.ts` contém todas as informações estruturadas:

### Interfaces Principais
- **Banner**: Dados dos banners do carousel
- **Product**: Informações dos produtos/serviços
- **Benefit**: Benefícios e diferenciais
- **Client**: Dados dos clientes
- **Testimonial**: Depoimentos de clientes
- **Solution**: Soluções implementadas

### Dados da Empresa
```typescript
company: {
  name: "TourLive - Turismo Interativo Ltda",
  tagline: "Tecnologia que transforma destinos em experiências guiadas",
  phone: "+5554993220552",
  whatsapp: "5554993220552",
  email: "tourlivebr@gmail.com",
  address: "Rua Bernardino Timóteo da Fonseca, 678 - Vila Boeira",
  city: "Canela, RS - Brasil"
}
```

## 🎯 Funcionalidades Principais

### 1. Mapas Interativos com Guia Falante
- Geolocalização em tempo real
- Áudio-guia multilíngue
- Integração com Google Maps, Uber e Waze

### 2. Sites Comerciais Inteligentes
- SEO otimizado
- Domínio próprio
- Sistema de afiliados

### 3. Portais de Destinos Turísticos
- Centralização de informações
- Blog integrado
- Sistema de eventos

### 4. SEO Local & Google Maps Ads
- Otimização para buscadores
- Gestão de reviews
- Analytics avançado

## 🎨 Design System

### Cores Principais
```css
/* Definidas no Tailwind Config */
primary-blue: #2563eb
primary-green: #16a34a
accent-amber: #f59e0b
neutral-dark: #1f2937
neutral-light: #f9fafb
```

### Tipografia
- Font family: Sistema (sans-serif)
- Escalas responsivas para títulos
- Hierarquia clara de informações

## 📱 Responsividade

O projeto utiliza abordagem mobile-first com breakpoints:
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run astro        # CLI do Astro
```

## 📈 Performance

### Otimizações Implementadas
- **SSG (Static Site Generation)**: Páginas pré-renderizadas
- **Lazy Loading**: Carregamento otimizado de imagens
- **Code Splitting**: Divisão automática do código
- **Minificação**: CSS e JS minificados
- **Compressão de Imagens**: Otimização automática

## 🔒 SEO e Acessibilidade

### SEO
- Meta tags otimizadas
- Schema.org markup
- Sitemap automático
- URLs semânticas

### Acessibilidade
- Semântica HTML correta
- Alt text em imagens
- Navegação por teclado
- Contraste adequado

## 🚀 Deploy

### Opções de Deploy
1. **Netlify**: Deploy automático via Git
2. **Vercel**: Integração nativa com Astro
3. **GitHub Pages**: Deploy gratuito
4. **Servidor próprio**: Upload dos arquivos da pasta `dist/`

### Configuração de Deploy
```bash
# Build para produção
npm run build

# Os arquivos estarão na pasta dist/
# Upload para seu provedor de hospedagem
```

## 🤝 Contribuição

### Padrões de Código
- Use TypeScript para tipagem
- Siga as convenções do Prettier
- Componentes em PascalCase
- Arquivos em kebab-case

### Estrutura de Commits
```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: ajustes de estilo
refactor: refatoração de código
```

## 📞 Contato e Suporte

- **Email**: tourlivebr@gmail.com
- **WhatsApp**: +55 54 99322-0552
- **Endereço**: Rua Bernardino Timóteo da Fonseca, 678 - Vila Boeira, Canela, RS

## 📄 Licença

Este projeto é propriedade da TourLive - Turismo Interativo Ltda.

---

**Desenvolvido com ❤️ pela equipe TourLive Brasil**
