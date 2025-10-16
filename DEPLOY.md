# Guia de Deploy - TourLive Brasil

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado)

#### Deploy Automático via GitHub

1. **Conectar repositório**:
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório `tourlivebrasil`

2. **Configuração automática**:
   ```json
   // vercel.json (opcional)
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "astro"
   }
   ```

3. **Variáveis de ambiente** (se necessário):
   ```bash
   PUBLIC_SITE_URL=https://tourlivebrasil.vercel.app
   ```

#### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 2. Netlify

#### Deploy via Git
1. Conecte o repositório no [netlify.com](https://netlify.com)
2. Configurações de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

#### Deploy manual
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build local
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

#### Configuração do Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Configuração do Astro
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/tourlivebrasil',
  // outras configurações...
});
```

### 4. Cloudflare Pages

1. **Conectar repositório** no [Cloudflare Pages](https://pages.cloudflare.com)
2. **Configurações de build**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

## 🔧 Configurações de Produção

### Otimizações de Build

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  
  // Otimizações de produção
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Compressão
  compressHTML: true,
  
  // Prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  
  // Vite otimizações
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  }
});
```

### Headers de Segurança

#### Vercel
```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

#### Netlify
```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Cache e Performance

#### Headers de Cache
```json
// vercel.json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(js|css))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🌐 Domínio Personalizado

### Configuração DNS

#### Para Vercel
```
# Registros DNS
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com

Tipo: A
Nome: @
Valor: 76.76.19.61
```

#### Para Netlify
```
# Registros DNS
Tipo: CNAME
Nome: www
Valor: [site-name].netlify.app

Tipo: A
Nome: @
Valor: 75.2.60.5
```

### SSL/HTTPS
- **Vercel**: SSL automático
- **Netlify**: SSL automático
- **Cloudflare**: SSL automático
- **GitHub Pages**: SSL automático para domínios .github.io

## 📊 Monitoramento

### Analytics

#### Google Analytics 4
```astro
---
// src/components/Analytics.astro
const GA_ID = import.meta.env.PUBLIC_GA_ID;
---

{GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{GA_ID}');
    </script>
  </>
)}
```

#### Vercel Analytics
```astro
---
// src/layouts/Layout.astro
import { ViewTransitions } from 'astro:transitions';
---

<html>
  <head>
    <ViewTransitions />
    {import.meta.env.PROD && (
      <script>
        import('https://va.vercel-scripts.com/v1/script.debug.js')
      </script>
    )}
  </head>
</html>
```

### Performance Monitoring

#### Web Vitals
```javascript
// src/scripts/web-vitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Enviar métricas para seu serviço de analytics
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🔍 SEO e Meta Tags

### Meta Tags Essenciais
```astro
---
// src/components/SEO.astro
export interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const { title, description, image, url } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!-- Meta Tags Básicas -->
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url || canonicalURL} />
{image && <meta property="og:image" content={image} />}

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
{image && <meta name="twitter:image" content={image} />}

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

### Sitemap
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://tourlivebrasil.com',
  integrations: [
    // outros integrations...
    sitemap()
  ]
});
```

### Robots.txt
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://tourlivebrasil.com/sitemap-index.xml
```

## 🚨 Troubleshooting

### Problemas Comuns

#### Build Falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar tipos
npm run astro check

# Build local
npm run build
```

#### Imagens não carregam
```astro
<!-- Usar caminhos absolutos -->
<img src="/images/logo.png" alt="Logo" />

<!-- Ou importar imagens -->
---
import logo from '../assets/logo.png';
---
<img src={logo} alt="Logo" />
```

#### CSS não aplica
```astro
<!-- Verificar ordem de importação -->
<style>
  /* Estilos específicos do componente */
</style>

<!-- Ou usar classes Tailwind -->
<div class="bg-blue-500 text-white p-4">
  Content
</div>
```

### Logs de Deploy

#### Vercel
- Acesse o dashboard da Vercel
- Vá em "Functions" > "View Function Logs"

#### Netlify
- Acesse o dashboard da Netlify
- Vá em "Deploys" > Clique no deploy > "Deploy log"

## 📋 Checklist de Deploy

### Pré-Deploy
- [ ] Build local funciona (`npm run build`)
- [ ] Todos os testes passam
- [ ] Imagens otimizadas
- [ ] Meta tags configuradas
- [ ] Analytics configurado
- [ ] Variáveis de ambiente definidas
- [ ] SSL/HTTPS configurado

### Pós-Deploy
- [ ] Site carrega corretamente
- [ ] Todas as páginas funcionam
- [ ] Formulários funcionam
- [ ] Analytics funcionando
- [ ] Performance satisfatória (Lighthouse)
- [ ] SEO otimizado
- [ ] Mobile responsivo

### Monitoramento Contínuo
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] Analytics review
- [ ] Security updates

---

**Mantenha este guia atualizado com novas configurações de deploy!**