# Documentação dos Componentes

## 📋 Visão Geral

Este documento detalha todos os componentes do projeto TourLive Brasil, suas funcionalidades, props e estrutura.

## 🏗️ Layout Principal

### Layout.astro
**Localização**: `src/layouts/Layout.astro`

**Descrição**: Layout base da aplicação que define a estrutura HTML principal.

**Props**:
- `title: string` - Título da página

**Funcionalidades**:
- Meta tags SEO otimizadas
- Configuração de viewport responsivo
- Importação de fontes e estilos globais
- Estrutura HTML5 semântica
- Integração com Tailwind CSS

**Exemplo de uso**:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="TourLive Brasil">
  <!-- Conteúdo da página -->
</Layout>
```

## 🧩 Componentes de Interface

### Header.astro
**Localização**: `src/components/Header.astro`

**Descrição**: Cabeçalho principal com navegação e logo da empresa.

**Funcionalidades**:
- Logo responsivo da TourLive
- Menu de navegação desktop
- Menu hambúrguer mobile
- Links de navegação suave (smooth scroll)
- Botão CTA destacado
- Overlay para menu mobile

**Estrutura**:
- Logo clicável
- Navegação horizontal (desktop)
- Menu toggle (mobile)
- Botões de ação

### Footer.astro
**Localização**: `src/components/Footer.astro`

**Descrição**: Rodapé com informações da empresa e links úteis.

**Funcionalidades**:
- Informações de contato
- Links de navegação
- Redes sociais
- Mapa de localização
- Copyright e informações legais
- Scroll to top automático

**Seções**:
1. **Contato**: Telefone, email, endereço
2. **Navegação**: Links principais do site
3. **Redes Sociais**: WhatsApp, email
4. **Copyright**: Informações legais

### HeroCarousel.astro
**Localização**: `src/components/HeroCarousel.astro`

**Descrição**: Carousel principal com banners rotativos dos serviços.

**Funcionalidades**:
- Rotação automática de banners
- Navegação por dots
- Navegação por setas (desktop)
- Suporte a touch/swipe (mobile)
- Navegação por teclado
- Pause no hover
- Transições suaves

**Dados utilizados**:
- `siteData.banners` - Array de banners

**Controles**:
- Autoplay: 5 segundos
- Dots de navegação
- Setas prev/next
- Suporte a teclado (←/→)

### SectionIntro.astro
**Localização**: `src/components/SectionIntro.astro`

**Descrição**: Seção de introdução sobre a empresa e seus serviços.

**Funcionalidades**:
- Apresentação da empresa
- Mockup interativo de mapa
- Estatísticas em destaque
- Botões de ação
- Design responsivo

**Elementos visuais**:
- Mockup de interface de mapa
- Player de áudio simulado
- Cards flutuantes com estatísticas
- Gradientes e efeitos visuais

### Products.astro
**Localização**: `src/components/Products.astro`

**Descrição**: Showcase dos produtos e serviços oferecidos.

**Funcionalidades**:
- Grid responsivo de produtos
- Cards com hover effects
- Tag "Mais Popular" destacada
- Seção de processo de implementação
- Ícones representativos

**Dados utilizados**:
- `siteData.products` - Array de produtos

**Estrutura de cada produto**:
- Ícone
- Título
- Descrição
- Lista de recursos
- Botão CTA

### Benefits.astro
**Localização**: `src/components/Benefits.astro`

**Descrição**: Seção de benefícios e diferenciais da empresa.

**Funcionalidades**:
- Grid de benefícios
- Numeração flutuante
- Seção CTA inferior
- Estatísticas de performance
- Background com overlay

**Dados utilizados**:
- `siteData.benefits` - Array de benefícios
- `siteData.stats` - Estatísticas da empresa

**Elementos**:
- Cards de benefícios com ícones
- Números flutuantes decorativos
- CTA com estatísticas
- Botões de ação

### Clients.astro
**Localização**: `src/components/Clients.astro`

**Descrição**: Galeria de clientes e showcase de soluções implementadas.

**Funcionalidades**:
- Marquee infinito de logos
- Grid de soluções
- Seção de resultados
- Depoimento em destaque
- Animações CSS

**Dados utilizados**:
- `siteData.clients` - Array de clientes
- `siteData.solutions` - Array de soluções
- `siteData.stats` - Estatísticas
- `siteData.testimonials[0]` - Depoimento principal

**Seções**:
1. **Clientes**: Marquee com logos
2. **Soluções**: Grid com implementações
3. **Resultados**: Estatísticas de performance
4. **Depoimento**: Feedback de cliente

### WhatsForm.astro
**Localização**: `src/components/WhatsForm.astro`

**Descrição**: Formulário de contato integrado com WhatsApp.

**Funcionalidades**:
- Formulário de contato
- Integração com WhatsApp
- Validação de campos
- Design responsivo
- Background decorativo

**Campos do formulário**:
- Nome completo
- Email
- Telefone
- Tipo de projeto
- Mensagem

**Validações**:
- Campos obrigatórios
- Formato de email
- Formato de telefone

### WhatsAppFloat.astro
**Localização**: `src/components/WhatsAppFloat.astro`

**Descrição**: Botão flutuante do WhatsApp para contato rápido.

**Funcionalidades**:
- Posição fixa na tela
- Animações de pulso e float
- Tooltip informativo
- Link direto para WhatsApp
- Responsivo
- Tracking de analytics

**Animações**:
- Pulso contínuo
- Float vertical
- Hover effects
- Tooltip com delay

**Configurações**:
- Número do WhatsApp: `siteData.company.whatsapp`
- Mensagem pré-definida
- Tracking de cliques

## 📊 Estrutura de Dados

### site.ts
**Localização**: `src/data/site.ts`

**Descrição**: Arquivo centralizado com todos os dados da aplicação.

**Interfaces**:
```typescript
interface Banner {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  link: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Client {
  id: number;
  name: string;
  logo: string;
  link: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}

interface Solution {
  id: number;
  title: string;
  description: string;
}
```

**Dados principais**:
- `company` - Informações da empresa
- `banners` - Banners do carousel
- `products` - Produtos e serviços
- `benefits` - Benefícios e diferenciais
- `clients` - Clientes e parceiros
- `testimonials` - Depoimentos
- `solutions` - Soluções implementadas
- `stats` - Estatísticas de performance
- `navigation` - Links de navegação

## 🎨 Padrões de Design

### Cores
- **primary-blue**: #2563eb
- **primary-green**: #16a34a
- **accent-amber**: #f59e0b
- **neutral-dark**: #1f2937
- **neutral-light**: #f9fafb

### Tipografia
- Títulos: font-bold, escalas responsivas
- Subtítulos: font-semibold
- Texto: font-normal, leading-relaxed
- CTAs: font-bold, uppercase

### Espaçamentos
- Seções: py-16 lg:py-24
- Containers: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Grids: gap-8 lg:gap-12
- Cards: p-6 lg:p-8

### Animações
- Transições: transition-all duration-300
- Hover effects: hover:scale-105, hover:shadow-xl
- Gradientes: bg-gradient-to-r
- Transforms: transform hover:-translate-y-1

## 🔧 Manutenção

### Adicionando novos componentes
1. Criar arquivo `.astro` em `src/components/`
2. Seguir padrões de nomenclatura (PascalCase)
3. Importar dados de `site.ts` quando necessário
4. Aplicar classes Tailwind consistentes
5. Testar responsividade

### Modificando dados
1. Editar `src/data/site.ts`
2. Manter interfaces TypeScript atualizadas
3. Verificar impacto nos componentes
4. Testar em diferentes dispositivos

### Otimizações
- Lazy loading para imagens
- Minificação automática
- Tree shaking do CSS
- Compressão de assets

---

**Última atualização**: Janeiro 2025