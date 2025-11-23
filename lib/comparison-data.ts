export const toolsData = {
  "Lovable": {
    name: "Lovable",
    overview: {
      description: "AI-powered full-stack development platform that generates complete applications from natural language descriptions. Ideal for rapid prototyping and MVP development.",
      keyFeatures: [
        "Natural language to full-stack application",
        "Instant UI generation with modern frameworks",
        "Real-time preview and iteration",
        "Automatic deployment pipeline",
        "Component library integration"
      ],
      useCase: "Best for rapid prototyping, MVPs, and startups needing quick iterations",
      technology: "React, TypeScript, Tailwind CSS, Supabase"
    },
    pricing: {
      free: "Limited projects, basic features",
      pro: "$29/month - Unlimited projects, advanced features",
      enterprise: "Custom pricing for teams"
    },
    benchmarks: {
      speed: "95/100 - Generates complete apps in minutes",
      codeQuality: "88/100 - Clean, maintainable React code",
      scalability: "82/100 - Good for small to medium applications",
      learningCurve: "98/100 - Natural language interface"
    },
    faq: [
      { q: "What frameworks does Lovable support?", a: "Lovable primarily generates React applications with TypeScript and Tailwind CSS." },
      { q: "Can I export the code?", a: "Yes, you can export all generated code and deploy it anywhere." },
      { q: "Is it suitable for production?", a: "Yes, for MVPs and small to medium applications." }
    ]
  },
  "Vercel": {
    name: "Vercel",
    overview: {
      description: "Production-grade deployment platform optimized for frontend frameworks and serverless functions. Industry-leading performance with edge network optimization.",
      keyFeatures: [
        "Zero-config deployments for Next.js",
        "Global edge network with instant cache invalidation",
        "Automatic HTTPS and custom domains",
        "Built-in analytics and monitoring",
        "Serverless functions with zero cold starts"
      ],
      useCase: "Best for production applications requiring maximum performance and scale",
      technology: "Next.js, React, Node.js, Edge Functions"
    },
    pricing: {
      free: "Hobby projects with 100GB bandwidth",
      pro: "$20/month - Commercial projects, priority support",
      enterprise: "Custom pricing with SLA guarantees"
    },
    benchmarks: {
      speed: "99/100 - Industry-leading performance",
      codeQuality: "95/100 - Production-grade infrastructure",
      scalability: "100/100 - Unlimited scale with edge network",
      learningCurve: "85/100 - Straightforward for Next.js developers"
    },
    faq: [
      { q: "What frameworks are supported?", a: "Next.js (first-class), React, Vue, Svelte, and more." },
      { q: "How does the edge network work?", a: "Your app is deployed globally to 100+ edge locations for minimum latency." },
      { q: "Can I use my own domain?", a: "Yes, custom domains are supported on all plans with automatic HTTPS." }
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
    benchmarks: {
      speed: "93/100 - Full-stack apps in seconds",
      codeQuality: "85/100 - Modern framework patterns",
      scalability: "80/100 - Good for prototypes and small apps",
      learningCurve: "92/100 - Visual interface simplifies development"
    },
    faq: [
      { q: "Does it include database setup?", a: "Yes, Bolt.new can generate and configure databases automatically." },
      { q: "Can multiple people collaborate?", a: "Yes, real-time collaboration is supported on paid plans." },
      { q: "What backends are supported?", a: "Node.js, Express, Python Flask, and more." }
    ]
  },
  "Stitch": {
    name: "Stitch",
    overview: {
      description: "Intelligent code completion and AI assistant that integrates directly into your IDE. Context-aware suggestions for existing codebases with deep code understanding.",
      keyFeatures: [
        "IDE-native integration (VS Code, IntelliJ)",
        "Context-aware code suggestions",
        "Refactoring and optimization tools",
        "Codebase-wide search and understanding",
        "Multi-language support"
      ],
      useCase: "Best for enhancing existing codebases and developer productivity",
      technology: "Supports all major languages and frameworks"
    },
    pricing: {
      free: "Individual developers with basic features",
      pro: "$12/user/month - Team collaboration features",
      enterprise: "Custom pricing with advanced security"
    },
    benchmarks: {
      speed: "90/100 - Fast inline suggestions",
      codeQuality: "92/100 - Context-aware, high-quality suggestions",
      scalability: "95/100 - Works with codebases of any size",
      learningCurve: "88/100 - IDE integration requires minimal setup"
    },
    faq: [
      { q: "Which IDEs are supported?", a: "VS Code, IntelliJ IDEA, PyCharm, WebStorm, and more." },
      { q: "Does it work with private codebases?", a: "Yes, all code remains private and secure." },
      { q: "What languages are supported?", a: "JavaScript, TypeScript, Python, Java, Go, Rust, and 20+ more." }
    ]
  }
}

export const toolsList = Object.keys(toolsData)
