# MetricPath 🚀

> **Market Intelligence for Indie Hackers.**  
> Valide suas ideias de SaaS com dados, não com "achismos".

![MetricPath Dashboard](/dashboard-preview.png)

## Sobre o Projeto

O **MetricPath** é uma plataforma de inteligência de mercado projetada para ajudar desenvolvedores e empreendedores a validar ideias de software antes de escrever uma única linha de código.

A ferramenta agrega dados de múltiplas fontes (Google, Reddit, GitHub, App Store) para fornecer insights sobre:

- Volume de busca e tendências de mercado.
- Saturação de competidores.
- Gaps e oportunidades em nichos específicos.
- Análise de sentimento e feedback de usuários reais.

## Funcionalidades Principais

- 📊 **Viability Score™**: Um algoritmo proprietário (0-100) que calcula a chance de sucesso da sua ideia.
- 🔥 **Market Heatmap**: Visualização interativa da saturação de competidores.
- 📈 **Trend Analysis**: Gráficos de volume de busca e interesse ao longo do tempo.
- 🎯 **Gap Discovery**: Identificação automática de pontos fracos nos concorrentes (ex: "Suporte Ruim").
- 🌍 **Global Explorer**: Mapeamento de oportunidades geográficas.
- 🤖 **AI Insights**: Recomendações estratégicas geradas por IA.

## Tech Stack

O projeto foi construído com uma stack moderna e focada em performance e DX ("Dark Productivity"):

- **Core**: React 18, TypeScript, Vite.
- **Estilização**: Tailwind CSS (Dark Mode nativo).
- **Ícones**: Lucide React.
- **Gráficos**: Recharts / CSS-based charts.
- **Roteamento**: React Router DOM.
- **Utilitários**: clsx, tailwind-merge.

## Getting Started

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/metricpath.git
cd metricpath
```

1. Instale as dependências:

```bash
npm install
```

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará rodando em `http://localhost:5173`.

### Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## Estrutura do Projeto

```
src/
├── assets/         # Imagens e estilos globais
├── components/     # Componentes reutilizáveis (UI Kit)
├── layout/         # Componentes de estrutura (Sidebar, Header)
├── pages/          # Páginas da aplicação (Roteamento)
├── lib/            # Utilitários e funções auxiliares
├── App.tsx         # Componente raiz e rotas
└── main.tsx        # Ponto de entrada
```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">
  <b>Built for Builders</b> 🛠️<br>
  Made with ❤️ in Brazil · São Paulo, SP
</div>
