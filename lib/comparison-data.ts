export const toolsData = {
  "Lovable": {
    name: "Lovable",
    overview: {
      description: "AI-powered full-stack development platform that generates complete applications from natural language descriptions. Build and ship production-ready web apps in hours, not weeks.",
      keyFeatures: [
        "Natural language to full-stack application",
        "GitHub integration and version control",
        "Real-time preview and iteration",
        "Custom domain support",
        "Export code and self-host anywhere"
      ],
      useCase: "Best for rapid prototyping, MVPs, and startups needing quick iterations",
      technology: "React, TypeScript, Tailwind CSS, Supabase"
    },
    pricing: {
      free: "Free tier available - Basic features to get started",
      pro: "$20/month - Unlimited projects, advanced AI features, priority support",
      enterprise: "Custom pricing - Dedicated support, custom integrations, SLA"
    },
    deployment: {
      infrastructure: ["Built-in hosting with custom domains", "Automatic deployment on code changes", "Real-time preview environments"],
      speed: "Standard CDN with caching",
      regions: "Single region deployment"
    },
    integrations: {
      versionControl: ["GitHub"],
      frameworks: ["React", "TypeScript", "Tailwind CSS"],
      databases: ["Supabase"]
    },
    support: {
      documentation: "Comprehensive guides and tutorials",
      community: "Active Discord community and forum",
      customerSupport: "Email support (Pro), Priority support (Enterprise)"
    },
    faq: [
      { q: "What frameworks does Lovable support?", a: "Lovable primarily generates React applications with TypeScript and Tailwind CSS." },
      { q: "Can I export the code?", a: "Yes, you can export all generated code and deploy it anywhere." },
      { q: "Is it suitable for production?", a: "Yes, for MVPs and small to medium applications with full GitHub integration." }
    ]
  },
  "Vercel": {
    name: "Vercel",
    overview: {
      description: "Production-grade deployment platform optimized for frontend frameworks with global edge network. Deploy instantly with zero configuration and scale automatically.",
      keyFeatures: [
        "Import repo and deploy in seconds",
        "Automatic CI/CD pipeline",
        "Web Application Firewall (WAF)",
        "Global automated CDN",
        "DDoS mitigation and traffic insights"
      ],
      useCase: "Best for production web apps, personal projects, and enterprise applications",
      technology: "Next.js, React, Vue, Svelte, and more"
    },
    pricing: {
      free: "Hobby - Free forever. Import repo & deploy, Automatic CI/CD, WAF, Global CDN, Fluid compute, DDoS mitigation, Traffic insights",
      pro: "$20/month + additional usage - All Hobby features plus: $20 included usage credit, Advanced spend management, Team collaboration & free viewer seats, Faster builds + no queues, Cold start prevention, Enterprise add-ons",
      enterprise: "Custom pricing - All Pro features plus: Guest & Team access controls, SCIM & Directory Sync, Managed WAF Rulesets, Multi-region compute & failover, 99.99% SLA, Advanced Support"
    },
    deployment: {
      infrastructure: ["Global edge network (100+ locations)", "Automatic CI/CD with Git integration", "Preview deployments for every PR"],
      speed: "Edge computing with zero cold starts",
      regions: "Multi-region with automatic failover (Enterprise)"
    },
    integrations: {
      versionControl: ["GitHub", "GitLab", "Bitbucket"],
      frameworks: ["Next.js", "React", "Vue", "Svelte", "Nuxt", "SvelteKit", "Astro"],
      databases: ["Vercel Postgres", "Vercel KV", "Vercel Blob", "Integration marketplace"]
    },
    support: {
      documentation: "Extensive documentation and templates",
      community: "Large community, GitHub discussions, Twitter/X",
      customerSupport: "Community support (Hobby), Email support (Pro), Advanced support with SLA (Enterprise)"
    },
    faq: [
      { q: "What's included in the Hobby plan?", a: "Free forever with deployment in seconds, automatic CI/CD, Web Application Firewall, Global CDN, and DDoS mitigation." },
      { q: "What do I get with Pro?", a: "Everything in Hobby plus $20 usage credit, advanced spend management, team collaboration, faster builds, and cold start prevention for $20/month." },
      { q: "When should I use Enterprise?", a: "Enterprise is for teams needing critical security, performance, observability, platform SLAs, and dedicated support." }
    ]
  },
  "Bolt.new": {
    name: "Bolt.new",
    overview: {
      description: "Full-stack AI development environment that generates complete applications with backend, frontend, and database in seconds. Visual development with instant feedback.",
      keyFeatures: [
        "Full-stack generation in one prompt",
        "Integrated backend and database setup",
        "Visual development environment",
        "Real-time collaboration features",
        "Multiple framework support"
      ],
      useCase: "Best for complete app scaffolding and full-stack prototypes",
      technology: "React, Vue, Node.js, Express, PostgreSQL"
    },
    pricing: {
      free: "Public projects with basic features",
      pro: "$19/month - Private projects, more credits",
      enterprise: "$49/month - Unlimited projects and priority generation"
    },
    deployment: {
      infrastructure: ["Cloud hosting included", "Automatic deployment", "Live preview in browser"],
      speed: "Standard hosting performance",
      regions: "Single region"
    },
    integrations: {
      versionControl: ["Git export"],
      frameworks: ["React", "Vue", "Node.js", "Express"],
      databases: ["PostgreSQL", "MongoDB"]
    },
    support: {
      documentation: "Getting started guides and examples",
      community: "Discord community",
      customerSupport: "Community support (Free), Email support (Pro+)"
    },
    faq: [
      { q: "Can I use my own backend?", a: "Yes, Bolt.new generates full-stack code you can customize." },
      { q: "What databases are supported?", a: "PostgreSQL and MongoDB are the primary databases supported." },
      { q: "Is collaboration available?", a: "Real-time collaboration is available on paid plans." }
    ]
  },
  "Stitch": {
    name: "Stitch",
    overview: {
      description: "Conversational AI coding assistant focused on simplicity and clarity. Chat with your codebase and generate features with natural dialogue.",
      keyFeatures: [
        "Conversational interface for coding",
        "Multi-file awareness and editing",
        "Clear explanation of changes",
        "Context-aware suggestions",
        "Simple and intuitive workflow"
      ],
      useCase: "Best for developers who prefer conversational workflows",
      technology: "Language-agnostic, works with any codebase"
    },
    pricing: {
      free: "Limited free tier",
      pro: "$15/month - Unlimited conversations",
      enterprise: "Custom pricing - Team features and advanced models"
    },
    deployment: {
      infrastructure: ["Works with existing deployment", "No built-in hosting"],
      speed: "Depends on your deployment setup",
      regions: "N/A - development tool only"
    },
    integrations: {
      versionControl: ["Git integration"],
      frameworks: ["Framework agnostic"],
      databases: ["Works with any database"]
    },
    support: {
      documentation: "Basic documentation and FAQs",
      community: "Small but growing community",
      customerSupport: "Email support for all plans"
    },
    faq: [
      { q: "Does Stitch deploy code?", a: "No, Stitch is a development assistant. You deploy using your preferred method." },
      { q: "What languages does it support?", a: "Stitch works with all programming languages." },
      { q: "Can it handle large codebases?", a: "Yes, with multi-file awareness and context management." }
    ]
  }
}

export const toolsList = Object.keys(toolsData)
