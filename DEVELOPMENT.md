# Guia de Desenvolvimento - TourLive Brasil

## 🚀 Início Rápido

### Configuração do Ambiente

1. **Pré-requisitos**:
   ```bash
   # Verificar versões
   node --version  # >= 18.0.0
   npm --version   # >= 8.0.0
   ```

2. **Instalação**:
   ```bash
   # Clonar repositório
   git clone [url-do-repositorio]
   cd tourlivebrasil
   
   # Instalar dependências
   npm install
   
   # Iniciar desenvolvimento
   npm run dev
   ```

3. **Estrutura de desenvolvimento**:
   - Servidor local: `http://localhost:4321`
   - Hot reload automático
   - TypeScript checking
   - Tailwind CSS compilation

## 📁 Arquitetura do Projeto

### Padrão de Organização
```
src/
├── components/     # Componentes reutilizáveis
├── layouts/        # Layouts base
├── pages/          # Páginas da aplicação
├── data/           # Dados estruturados
└── assets/         # Assets estáticos
```

### Convenções de Nomenclatura
- **Componentes**: PascalCase (`HeroCarousel.astro`)
- **Arquivos**: kebab-case (`hero-carousel.astro`)
- **Variáveis**: camelCase (`siteData`)
- **Classes CSS**: Tailwind utilities

## 🛠️ Desenvolvimento de Componentes

### Estrutura Padrão de Componente
```astro
---
// Imports
import { siteData } from '../data/site.ts';

// Props interface (se necessário)
interface Props {
  title?: string;
}

const { title = 'Default Title' } = Astro.props;
---

<!-- HTML Structure -->
<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>

<style>
  /* Estilos específicos (se necessário) */
</style>

<script>
  // JavaScript (se necessário)
</script>
```

### Padrões de CSS

#### Classes Utilitárias Comuns
```css
/* Containers */
.container-default: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
.section-padding: py-16 lg:py-24

/* Textos */
.title-primary: text-3xl sm:text-4xl lg:text-5xl font-bold
.title-secondary: text-2xl sm:text-3xl lg:text-4xl font-bold
.text-body: text-lg leading-relaxed

/* Botões */
.btn-primary: px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold rounded-2xl
.btn-secondary: px-8 py-4 border-2 border-primary-blue text-primary-blue font-semibold rounded-2xl

/* Cards */
.card-default: bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
```

#### Responsividade
```css
/* Mobile First Approach */
.responsive-grid {
  @apply grid grid-cols-1 gap-8;
  @apply md:grid-cols-2 md:gap-10;
  @apply lg:grid-cols-3 lg:gap-12;
}

/* Breakpoints */
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeno */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

## 📊 Gerenciamento de Dados

### Estrutura do site.ts
```typescript
// Sempre definir interfaces
export interface NewDataType {
  id: number;
  name: string;
  // outros campos...
}

// Adicionar ao siteData
export const siteData = {
  // dados existentes...
  newData: [
    // array de dados
  ] as NewDataType[]
};
```

### Boas Práticas para Dados
1. **Tipagem forte**: Sempre usar interfaces TypeScript
2. **Estrutura consistente**: Manter padrão de IDs e campos
3. **Validação**: Verificar dados antes de usar nos componentes
4. **Performance**: Evitar dados desnecessários

### Exemplo de Uso nos Componentes
```astro
---
import { siteData } from '../data/site.ts';
import type { Product } from '../data/site.ts';

// Filtrar ou processar dados se necessário
const featuredProducts = siteData.products.filter(p => p.featured);
---

{featuredProducts.map((product: Product) => (
  <div class="product-card">
    <h3>{product.title}</h3>
    <p>{product.description}</p>
  </div>
))}
```

## 🎨 Sistema de Design

### Paleta de Cores
```javascript
// tailwind.config.mjs
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563eb',
        'primary-green': '#16a34a',
        'accent-amber': '#f59e0b',
        'neutral-dark': '#1f2937',
        'neutral-light': '#f9fafb',
      }
    }
  }
}
```

### Gradientes Padrão
```css
/* Gradientes principais */
.gradient-primary: bg-gradient-to-r from-primary-blue to-primary-green
.gradient-accent: bg-gradient-to-r from-primary-green to-accent-amber
.gradient-text: text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green
```

### Animações e Transições
```css
/* Transições padrão */
.transition-default: transition-all duration-300 ease-in-out
.hover-lift: transform hover:-translate-y-1 hover:shadow-xl
.hover-scale: transform hover:scale-105

/* Animações customizadas */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float: animation: float 3s ease-in-out infinite
```

## 🔧 Scripts e Comandos

### Comandos de Desenvolvimento
```bash
# Desenvolvimento
npm run dev              # Servidor local com hot reload
npm run dev -- --host    # Servidor acessível na rede

# Build
npm run build            # Build para produção
npm run preview          # Preview da build local

# Qualidade de código
npm run astro check      # Verificação de tipos
npm run astro sync       # Sincronizar tipos

# Utilitários
npm run astro add        # Adicionar integrações
npm run astro --help     # Ajuda do CLI
```

### Scripts Customizados
```json
// package.json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "sync": "astro sync",
    "clean": "rm -rf dist .astro",
    "type-check": "astro check && tsc --noEmit"
  }
}
```

## 🧪 Testes e Qualidade

### Checklist de Desenvolvimento
- [ ] Componente responsivo em todos os breakpoints
- [ ] Tipagem TypeScript correta
- [ ] Acessibilidade (alt texts, ARIA labels)
- [ ] Performance (lazy loading, otimização)
- [ ] SEO (meta tags, estrutura semântica)
- [ ] Cross-browser compatibility

### Ferramentas de Debug
```bash
# Verificar build
npm run build && npm run preview

# Analisar bundle
npx astro build --analyze

# Verificar tipos
npm run astro check
```

## 📱 Responsividade

### Estratégia Mobile-First
```css
/* Base (mobile) */
.component {
  @apply text-base p-4;
}

/* Tablet */
@screen md {
  .component {
    @apply text-lg p-6;
  }
}

/* Desktop */
@screen lg {
  .component {
    @apply text-xl p-8;
  }
}
```

### Testes de Responsividade
1. **Chrome DevTools**: Testar diferentes dispositivos
2. **Breakpoints**: Verificar todos os pontos de quebra
3. **Touch**: Testar interações touch em mobile
4. **Performance**: Verificar carregamento em 3G

## 🚀 Deploy e Produção

### Preparação para Deploy
```bash
# Limpeza
npm run clean

# Instalação limpa
npm ci

# Build otimizada
npm run build

# Verificação final
npm run preview
```

### Otimizações de Produção
1. **Imagens**: Usar formatos modernos (WebP, AVIF)
2. **CSS**: Purge de classes não utilizadas
3. **JS**: Minificação e tree shaking
4. **Fonts**: Preload de fontes críticas
5. **Cache**: Headers de cache apropriados

### Variáveis de Ambiente
```bash
# .env (se necessário)
PUBLIC_SITE_URL=https://tourlivebrasil.com
PUBLIC_ANALYTICS_ID=GA_TRACKING_ID
```

## 🔍 Debugging

### Problemas Comuns

1. **Hydration mismatch**:
   ```astro
   <!-- Usar client:load quando necessário -->
   <Component client:load />
   ```

2. **Estilos não aplicados**:
   ```astro
   <!-- Verificar ordem de importação -->
   <style>
     /* Estilos específicos aqui */
   </style>
   ```

3. **Imagens não carregam**:
   ```astro
   <!-- Usar caminhos relativos corretos -->
   <img src="/images/logo.png" alt="Logo" />
   ```

### Logs e Monitoramento
```javascript
// Console logs para desenvolvimento
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}

// Error boundaries
try {
  // código que pode falhar
} catch (error) {
  console.error('Component error:', error);
}
```

## 📚 Recursos Adicionais

### Documentação Oficial
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### Ferramentas Recomendadas
- **VS Code**: Editor principal
- **Astro Extension**: Syntax highlighting
- **Tailwind IntelliSense**: Autocomplete CSS
- **TypeScript Hero**: Organização de imports

### Comunidade
- [Astro Discord](https://astro.build/chat)
- [GitHub Issues](https://github.com/withastro/astro/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)

---

**Mantenha este guia atualizado conforme o projeto evolui!**