window.CONTENT = {

  /* ── COMPANY META ── */
  company: {
    name:    "Tenet Networks",
    tagline: "Industrial IoT Gateways, SD-WAN &amp; SCADA Connectivity Solutions",
    address: "#541, 5th Floor, Tower A, Logix Technova, Sector 132, NOIDA – 201305 UP, INDIA",
    email:   "info@tenetnetworks.com",
    careers: "careers@tenetnetworks.com",
    partners: "partners@tenetnetworks.com",
    phone:   "+91 120 4165 905",
    whatsapp: "+919354266316",
    hours:   "Monday – Saturday: 10:00 AM – 6:00 PM IST",
    founded: "2017",
    linkedin: "https://www.linkedin.com/company/tenet-networks",
    twitter: "https://twitter.com/tenetnetworks",
    youtube: "https://www.youtube.com/@tenetnetworks8817",
  },

  /* ═══════════════════════════════════════════════════════════
     ✨ MODERN MODULAR HERO SLIDES - Easy to Update! ✨
     ═══════════════════════════════════════════════════════════
     
     🎯 HOW TO UPDATE:
     1. Set active: true to show a slide
     2. Set active: false to hide a slide  
     3. Change priority (1-10) to control how often it shows first
     4. Add validFrom/validUntil for automatic seasonal campaigns
     
     📊 PRIORITY SYSTEM:
     - priority: 1  = Normal (equal chance with others)
     - priority: 3  = Prominent (shows 3x more often)
     - priority: 5  = Featured (shows 5x more often)
     - priority: 10 = Campaign mode (shows ~50% of visits)
  */
  hero: [
    
    // ════════════════════════════════════════════════════════
    // 🏭 SLIDE 1: Reliability & Uptime (CORE - Always Active)
    // ════════════════════════════════════════════════════════
    {
      id: "reliability-24x7",
      active: true,
      priority: 1,
      
      tag: "Industrial IoT · Proven Reliability",
     // title: "Industrial Networks That Simply Never Stop <span class='accent'>Working</span>",
     //subtitle: "When every second of downtime costs money, self-healing M2M gateways with instant failover keep your factories, utilities and critical infrastructure running 24/7/365.",
  title: "Industrial Connectivity That Never <span class='accent'>Stops Working</span>",
subtitle: "Keep factories, utilities, and remote sites online 24/7 with self-healing industrial routers and edge gateways built for zero downtime.",    
      features: [
        { icon: "⚡", label: "99.97% Field-Verified Uptime" },
        { icon: "🔄", label: "<1s Auto-Failover", prefix: "<" },
        { icon: "🏭", label: "150 K Devices Deployed Worldwide" }
      ],
      
      cta1: { label: "Schedule Demo", target: "contact" },
      cta2: { label: "View Technical Specs →", target: "products" }
    },

    // ════════════════════════════════════════════════════════
    // 📊 SLIDE 2: Modern Dashboard (CORE - Always Active)
    // ════════════════════════════════════════════════════════
    {
      id: "sd-wan-dashboard",
      active: true,
      priority: 1,
      
      tag: "cWAN · Centralized Control",
     // title: "Manage All Your Sites From <span class='accent'>One Dashboard</span>",
     // subtitle: "Zero-touch SD-WAN with complete visibility, automatic failover, and centralized control — manage every location without sending an engineer on-site.",
  title: "Control Every Site From <span class='accent'>One Dashboard</span>",
subtitle: "Monitor and manage every router across locations with centralized visibility, automated failover and policy-based control.",    
      features: [
        { icon: "📊", label: "Single-Pane Visibility" },
        { icon: "⚡", label: "Zero-Touch Provisioning" },
        { icon: "🔄", label: "Automatic Load Balancing" }
      ],
      
      cta1: { label: "Schedule Demo", target: "contact" },
      cta2: { label: "See How It Works →", target: "products", tab: "cwan" }
    },

    // ════════════════════════════════════════════════════════
    // 🚀 SLIDE 3: Fast Deployment (CORE - Always Active)
    // ════════════════════════════════════════════════════════
    {
      id: "edge-deployment",
      active: true,
      priority: 1,
      
      tag: "Edge WAN · Rapid Deployment",
      title: "Deploy Remote Sites in <span class='accent'>Minutes, Not Weeks</span>",
      subtitle: "Ship, plug in, connect. Zero-touch provisioning with dynamic bandwidth optimization for remote locations where on-site support isn't an option.",
      
      benefits: [
        { icon: "🚀", label: "5-Minute Setup" },
        { icon: "📡", label: "Works in Low-Bandwidth Areas" },
        { icon: "🔧", label: "Remote Management" }
      ],
      
      cta1: { label: "Schedule Demo", target: "contact" },
      cta2: { label: "Partnership Program →", target: "products" }
    },

    // ════════════════════════════════════════════════════════
    // 💡 SLIDE 4: Mission-Critical (CORE - Always Active)
    // ════════════════════════════════════════════════════════
    {
      id: "smart-cities",
      active: true,
      priority: 1,
      
      tag: "Smart Cities · Critical Infrastructure",
      title: "<span class='accent'>Mission-Critical</span> Connectivity That Never Lets You Down",
      //subtitle: "When utilities, smart grids, and city infrastructure depend on your network, downtime isn't an option. Redundant, self-healing connectivity designed for mission-critical operations.",
 subtitle: "Redundant, multi-path connectivity designed for infrastructure where failure is not an option; from smart grids to city-scale SCADA systems.",     
      useCases: [
        { icon: "💡", label: "Smart Grids & Utilities" },
        { icon: "🏙️", label: "City-Wide SCADA" },
        { icon: "🚦", label: "Traffic Management" }
      ],
      
      cta1: { label: "Schedule Consultation", target: "contact" },
      cta2: { label: "Read Success Stories →", target: "company", tab: "stories" }
    },

    // ════════════════════════════════════════════════════════
    // 🇮🇳 SLIDE 5: Made in India (CORE - Always Active)
    // ════════════════════════════════════════════════════════
    {
      id: "made-in-india",
      active: true,
      priority: 1,
      
      tag: "Purpose Built for India · Extreme Conditions",
  //    title: "Built in India. Proven in the <span class='accent'>Toughest Conditions.</span>",
title: "Built in India. Proven in the <span class='accent'>World’s Toughest Conditions</span>",
      subtitle: "Engineered for extreme weather, unstable power and harsh industrial environments across India and beyond; field-tested, not just lab-tested.",
      
      specs: [
        { icon: "🌡️", label: "Extreme Temperature Resilience" },
        { icon: "⚡", label: "Lightning-Grade Surge Protection" },
        { icon: "🏭", label: "Dust & Vibration Resistant" }
      ],
      
      cta1: { label: "Download Spec Sheet", target: "download-specs" },
      cta2: { label: "Talk to Engineer →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // 🪔 EXAMPLE: Diwali 2026 Campaign (INACTIVE - Ready to use)
    // Change active: false → true to activate this slide
    // ════════════════════════════════════════════════════════
{
  id: "diwali-2026",
  active: true,
  priority: 5,                    // higher priority during festival
  validFrom: "2026-10-15",
  validUntil: "2026-11-15",
  
  tag: "🪔 Happy Diwali",
 // title: "May Your Network Shine as Bright as <span class='accent'>This Diwali</span>",
 // subtitle: "Wishing you seamless connectivity, unbreakable uptime, and prosperous growth in the year ahead.",
title: "Keep Your Operations Running Bright This <span class='accent'>Diwali</span>",
subtitle: "Even during peak demand and festive surges, ensure uninterrupted connectivity across all your sites.",  
  festivalMessage: [
    { icon: "🪔", label: "Light up every operation" },
    { icon: "🔄", label: "Reliability that never dims" },
    { icon: "🌟", label: "Prosperity through intelligent connections" }
  ],
  
  cta1: { label: "Connect With Us", target: "contact", campaign: "diwali2026" },
  cta2: { label: "Explore Solutions →", target: "products" }
},

    // ════════════════════════════════════════════════════════
    // 📡 EXAMPLE: 5G Product Launch (INACTIVE - Ready to use)
    // ════════════════════════════════════════════════════════
    {
      id: "5g-gateway-launch",
      active: false,  // ← Change to true when launching
      priority: 5,
      
      tag: "🚀 New Product Launch · 5G Industrial Gateway",
      title: "Introducing Our <span class='accent'>5G Industrial Gateway</span>",
      subtitle: "Future-proof connectivity with standalone 5G support. Low latency, high throughput and backward compatibility with 4G LTE for seamless migration.",
      
      newFeatures: [
        { icon: "📡", label: "Standalone 5G (SA)" },
        { icon: "⚡", label: "10Gbps Throughput" },
        { icon: "🎯", label: "Ultra-Low Latency" }
      ],
      
      cta1: { label: "Talk to Us", target: "contact", campaign: "5g-launch" },
      cta2: { label: "Learn More →", target: "products", tab: "5g-gateway" }
    },

    // ════════════════════════════════════════════════════════
    // ☔ EXAMPLE: Monsoon Campaign (INACTIVE - Auto-dates)
    // ════════════════════════════════════════════════════════
   {
  id: "monsoon-2026",
  active: true,
  priority: 3,
  validFrom: "2026-06-01",
  validUntil: "2026-09-30",
  
  tag: "☔ Monsoon-Ready Infrastructure",
  //title: "<span class='accent'>Monsoon-Proof</span> Networks That Never Stop Working",
title: "<span class='accent'>Monsoon-Proof</span> Connectivity That Never Fails",
  subtitle: "Rugged, weather-defying gateways built for India’s toughest monsoons. When the skies open up, your operations stay dry, connected and unstoppable.",
  
  weatherProof: [
    { icon: "💧", label: "Monsoon-Proof Water Resistance" },
    { icon: "🌧️", label: "Extreme Humidity Resilience" },
    { icon: "⚡", label: "Lightning-Grade Protection" }
  ],
  
  cta1: { label: "Get Monsoon-Ready", target: "contact", campaign: "monsoon2026" },
  cta2: { label: "View Ruggedized Solutions →", target: "products" }
}
  ],

  /* ═══════════════════════════════════════════════════════════
     SOLUTIONS - Use Case Driven
     ═══════════════════════════════════════════════════════════ */
  solutions: [
    {
      id: 'smart-cities',
      icon: '🏙️',
      title: 'Smart Cities & Utilities',
      subtitle: 'Reliable connectivity for smart grids, traffic systems, and city-scale SCADA',
      description: 'Power smart grids, traffic management, and city-wide SCADA systems with redundant, multi-path connectivity designed for zero-downtime operations.',
      useCases: [
        { icon: '💡', label: 'Smart Grid Management' },
        { icon: '🚦', label: 'Intelligent Traffic Control' },
        { icon: '💧', label: 'Water & Waste Management' },
        { icon: '🔌', label: 'Remote Substation Monitoring' }
      ],
      products: ['scada', 'outdoor', 'cwan'],
      cta: { label: 'See Smart City Deployments →', target: 'company', tab: 'stories' }
    },
    {
      id: 'industrial-iot',
      icon: '🏭',
      title: 'Industrial IoT & Manufacturing',
      subtitle: 'Cellular connectivity for factory automation, asset tracking, and predictive maintenance',
      description: 'Enable Industry 4.0 with secure, always-on M2M connectivity across factory floors, warehouses, and remote facilities. Real-time telemetry, predictive maintenance, and centralized control.',
      useCases: [
        { icon: '⚙️', label: 'Factory Automation' },
        { icon: '📊', label: 'Real-Time Asset Tracking' },
        { icon: '🔧', label: 'Predictive Maintenance' },
        { icon: '🌐', label: 'Multi-Site Coordination' }
      ],
      products: ['indoor', 'scada', 'cms'],
      cta: { label: 'Read Industrial Case Studies →', target: 'company', tab: 'stories' }
    },
    {
      id: 'enterprise-wan',
      icon: '🌐',
      title: 'Enterprise SD-WAN',
      subtitle: 'Intelligent WAN for multi-branch offices, retail chains, and remote workforce',
      description: 'Transform your network with intelligent, policy-driven SD-WAN. Seamlessly connect offices, stores, and remote workers with centralized visibility and zero-touch deployment.',
      useCases: [
        { icon: '🏢', label: 'Multi-Branch Connectivity' },
        { icon: '🛒', label: 'Retail Chain Networks' },
        { icon: '🏦', label: 'Banking & Financial Services' },
        { icon: '👥', label: 'Remote Workforce Access' }
      ],
      products: ['cwan', 'vpn', 'cms'],
      cta: { label: 'View Enterprise Success Stories →', target: 'company', tab: 'stories' }
    },
    {
      id: 'remote-monitoring',
      icon: '📡',
      title: 'Remote Site Monitoring',
      subtitle: 'Ruggedized connectivity for surveillance, sensors, and field telemetry',
      description: 'Deploy secure, weatherproof connectivity for remote installations, surveillance, environmental monitoring, and field telemetry. Built for harsh conditions and inaccessible locations.',
      useCases: [
        { icon: '📹', label: 'Video Surveillance' },
        { icon: '🌡️', label: 'Environmental Sensors' },
        { icon: '⚡', label: 'Energy & Solar Monitoring' },
        { icon: '🛰️', label: 'Remote Site Access' }
      ],
      products: ['outdoor', 'indoor', 'cms'],
      cta: { label: 'Explore Remote Monitoring Stories →', target: 'company', tab: 'stories' }
    }
  ],

  /* ── STATS ── */
  stats: [
    { n:"150K+",  l:"Devices Deployed Worldwide" },
    { n:"200+",   l:"Happy Enterprise Customers" },
    { n:"Global", l:"Reach from India to 3 Continents" },
    { n:"150+",   l:"Years Leadership Experience" },
  ],

  /* ── PRODUCTS ── */
  products: {
    m2m_intro: {
      heading:  "M2M Cellular Gateways",
      subhead:  "Always-On Connectivity for Mission-Critical Operations",
      body:     "Empower seamless machine to machine communication across industrial sites, enterprises, and remote deployments with our rugged, high-performance cellular gateway. Designed for real-world challenges, our gateway portfolio ensures Always-On Connectivity, secure data transport, and centralized control.",
    },
    ces_intro: {
      heading:  "Connectivity Evolution Platform (cWAN)",
      subhead:  "Future-Proof SD-WAN Architecture for Modern Enterprises",
      body:     "Leverage our modular, scalable platform—powered by a split-design architecture—to modernize legacy infrastructure, enhance flexibility, and drive enterprise-wide digital transformation. Designed for service providers, industrial networks, and enterprise WANs, our solution ensures agility, visibility, and end-to-end control.",
    },
    indoor: {
      label:   "Indoor Industrial 4G/5G Cellular Modems",
      badge:   "M2M Cellular Gateway · 2.1.1",
      subhead: "Enterprise-Grade Connectivity That Just Works — Anywhere, Anytime",
      body:    "Built for environments where downtime isn't an option. Our indoor modems deliver rock-solid connectivity to industrial machines, control rooms, network closets, and field operations — with the intelligence to route, secure, and manage themselves. Compact, powerful, and engineered for 24×7 reliability.",
      capabilities: [
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', title: 'Centrally Managed', desc: 'Complete visibility and control from anywhere via Credo Management System.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', title: 'One-Touch Provisioning', desc: 'Deploy hundreds of devices in minutes with template-based activation.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>', title: 'Configurable LAN/WAN', desc: 'Adapt port roles on the fly to match your changing network topology.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>', title: 'Frugal Power & Wide Voltage', desc: 'Runs reliably on minimal power across wide voltage ranges.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>', title: 'DIN Rail / Wall Mountable', desc: 'Flexible mounting options fit any industrial installation scenario.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'High Availability Options', desc: 'Multiple redundancy configurations ensure your operations never stop.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path></svg>', title: 'Remote Management', desc: 'Manage via web, SMS, or CMS — even in the most inaccessible locations.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>', title: '4G/5G Connectivity', desc: 'Future-proof cellular connectivity with backward compatibility.' },
      ],
      specs:   [
        { k:"Network",        v:"4G LTE / 5G NR" },
        { k:"Connectivity",   v:"Dual-SIM Failover" },
        { k:"Routing",        v:"Enterprise-Grade" },
        { k:"Security",       v:"Multi-VPN, Firewall, Encryption" },
        { k:"Management",     v:"Web, CLI, SNMP, Credo CMS" },
        { k:"Form Factor",    v:"Compact DIN-Rail / Wall Mount" },
        { k:"Power",          v:"Wide Voltage Input (9-36V DC)" },
        { k:"Environment",    v:"Industrial Grade (-30°C to +75°C)" },
      ],
      features: [
        "Centrally Managed — Fully integrated with Credo Management System for remote visibility, control, and diagnostics",
        "One-Touch Provisioning — Simplify rollouts with templates and remote activation workflows",
        "Configurable LAN/WAN — Set port roles dynamically (e.g., 2 WAN + 3 LAN) to suit varying deployment needs",
        "Frugal Power & Wide Voltage — Industrial-grade electronics optimized for low power and wide input power range",
        "DIN Rail / Wall Mountable — Compact enclosure supports flexible indoor mounting options with airflow design",
        "High Availability Options — Choose single radio + dual SIM in Active/Standby mode or dual radio module for Active/Active resilient connectivity",
        "Remote Management — Control via Credo Management System (CMS) or Short Message System (SMS) based commands—ideal for inaccessible or remote sites",
        "4G/5G Connectivity — LTE/LTE-A/5G-NR radio, backward-compatible",
        "Enterprise Routing — Advanced routing protocols for complex network topologies and seamless integration",
        "Multi-VPN Support — Multiple secure tunneling options to connect your distributed sites",
        "Smart Failover — Automatic backup and recovery to keep your operations running",
        "Zero-Touch Deployment — Plug it in, and it connects — no on-site configuration needed",
        "Built to Last — Fanless cooling, metal housing, and tested for extreme industrial environments",
      ],
    },
    outdoor: {
      label:   "Outdoor Industrial 4G/5G Cellular Modems",
      badge:   "M2M Cellular Gateway · 2.1.2",
      subhead: "Weatherproof Connectivity That Conquers the Elements",
      body:    "Built for extreme environments where failure is not an option. Our outdoor modems deliver uninterrupted connectivity for remote installations, roadside cabinets, surveillance poles, and utility substations. IP65-rated, pole-mountable, and powered by PoE or wide-voltage DC — engineered to survive rain, dust, temperature extremes, and years of 24×7 operation.",
      capabilities: [
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>', title: 'IP65 Weatherproof', desc: 'Engineered to survive the harshest outdoor conditions year after year.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>', title: 'PoE or Wide Voltage', desc: 'Flexible power options eliminate the need for separate supplies.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>', title: 'Pole / Mast Mountable', desc: 'Purpose-built outdoor mounting for quick field deployment.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>', title: '5G + LTE Connectivity', desc: 'Latest cellular technology with integrated high-gain antennas.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'Dual-SIM Redundancy', desc: 'Automatic carrier failover keeps remote sites always connected.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', title: 'Centrally Managed', desc: 'Complete remote control even for the most inaccessible locations.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', title: 'Enterprise Routing', desc: 'Advanced routing capabilities for complex outdoor topologies.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>', title: 'Dying Gasp Alert', desc: 'Instant notification when remote sites lose power.' },
      ],
      features: [
        "Weatherproof & Ruggedized — Built to survive rain, dust, and extreme temperatures — install it and forget it",
        "PoE Powered — 48V PoE or wide-voltage DC input eliminates the need for separate power supplies",
        "5G + LTE Connectivity — Latest cellular technology with integrated high-gain antennas for superior signal strength",
        "Dual-SIM Failover — Automatic carrier redundancy keeps remote sites online even when networks fail",
        "Pole / Mast Mounting — Outdoor-rated hardware designed for field deployment in minutes",
        "Enterprise Routing — Advanced routing protocols handle complex outdoor network topologies",
        "Multi-VPN Security — Multiple secure tunneling protocols ensure encrypted connectivity from remote locations",
        "Remote Management — Manage via CMS, TR069, SNMP, or SMS — even in inaccessible locations",
        "Dying Gasp Alerts — Instant notification when outdoor sites lose power — before it's too late",
        "Gigabit Performance — High-speed Ethernet ports deliver the bandwidth outdoor applications demand",
        "Silent Operation — Fanless design means no moving parts to fail in harsh environments",
        "Extreme Temperatures — Operates reliably from -30°C to +75°C across all climate zones",
        "Industrial Certified — Tested and certified to withstand shock, vibration, and electromagnetic interference",
      ],
    },
    scada: {
      label:   "Industrial 4G/5G Cellular SCADA Gateways",
      badge:   "M2M Cellular Gateway · 2.1.3",
      subhead: "Mission-Critical Connectivity for Industrial Automation & Utilities",
      body:    "Built for environments where every data point matters. Our SCADA gateways deliver deterministic, protocol-aware connectivity between field instruments and control rooms — purpose-built for utilities, smart grids, energy, and industrial automation. Featuring native Modbus RTU/TCP, serial interfaces (RS232/RS485), and enterprise-grade security for real-time telemetry and remote control.",
      capabilities: [
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"></path><circle cx="12" cy="12" r="3"></circle></svg>', title: 'Modbus RTU/TCP Native', desc: 'Purpose-built for industrial automation with native protocol support.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>', title: 'Serial Interfaces', desc: 'Direct connection to PLCs and field instruments without converters.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'Enterprise Security', desc: 'Military-grade encryption protects your critical infrastructure.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', title: 'Advanced Routing', desc: 'Enterprise routing protocols with high-availability failover built in.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', title: 'Centrally Managed', desc: 'Track and control every remote site from a single dashboard.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>', title: 'DIN-Rail / Wall Mount', desc: 'Industrial-grade housing designed for control cabinet installations.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>', title: '4G LTE with Dual-SIM', desc: 'Carrier-grade cellular connectivity with automatic failover.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>', title: 'Industrial Grade', desc: 'Built to operate reliably in the harshest industrial environments.' },
      ],
      features: [
        "SCADA-Ready Protocols — Native Modbus, serial interfaces, and DTU functions connect directly to PLCs and RTUs",
        "Serial Connectivity — RS232 or RS485 ports link field instruments without additional converters",
        "Enterprise Security — Military-grade encryption protects critical infrastructure from cyber threats",
        "Advanced Routing — Complex routing protocols handle multi-site SCADA network topologies",
        "VRRP Cold Backup — High-availability failover keeps telemetry flowing even when gateways fail",
        "Multi-VPN Support — Multiple secure tunneling protocols ensure encrypted site-to-site SCADA communications",
        "Location Management — Track and manage remote SCADA sites across distributed infrastructure",
        "TR069 Support — Carrier-grade remote management scales to thousands of field gateways",
        "Dual-SIM Failover — Automatic carrier redundancy ensures uninterrupted telemetry backhaul",
        "DIN-Rail Mounting — Compact metal housing fits standard control cabinets with fanless cooling",
        "Ultra-Low Power — Frugal power consumption keeps sites operational even on backup batteries",
        "Extreme Temperatures — Industrial-grade components operate reliably in harsh field conditions",
        "Industrial Certified — Tested and certified for deployment in critical infrastructure environments",
      ],
    },
    vpn: {
      label:   "Enterprise VPN Gateways",
      badge:   "M2M Cellular Gateway · 2.1.4",
      subhead: "Secure, Resilient Connectivity for Distributed Enterprises",
      body:    "Built to handle demanding enterprise and ISP environments, Tenet's VPN Gateway solutions combine high-performance hardware with advanced security, failover, and centralized management capabilities. From secure site-to-site tunneling to multi-link termination, our gateways are engineered for maximum uptime and flexibility.",
      specs:   [
        { k:"VPN Tunnels",   v:"IPSec, OpenVPN, GRE, L2TP, EOIP" },
        { k:"WAN",           v:"Dual WAN, Automatic Failover" },
        { k:"Routing",       v:"Full IPv4/IPv6, Firewall, NAT, VRRP" },
        { k:"Failover",      v:"Sub-second hardware-level switchover" },
        { k:"Management",    v:"Credo CMS — remote provisioning & monitoring" },
        { k:"Design",        v:"Rugged, wide input voltage support" },
      ],
      features: [
        "IPSec, OpenVPN, GRE, L2TP, EOIP tunnels with encrypted communication and dynamic routing",
        "Dual WAN, automatic failover, session-based load balancing, and hardware watchdogs",
        "Full IPv4/IPv6 stack, firewall, NAT, port forwarding, DNS, VRRP, and more",
        "Sub-second hardware-level failover — ideal for critical infrastructure links",
        "Manage remotely via CMS with provisioning, updates, and visual monitoring tools",
        "Rugged design with wide input voltage support and versatile electrical/fiber connectivity",
      ],
    },
    cms: {
      label:   "Credo Management System (CMS)",
      badge:   "Management Platform · 2.1.5",
      subhead: "A centralized platform to monitor, configure, and manage all deployed devices at scale.",
      body:    "The Credo Management System (CMS) is Tenet's powerful orchestration and device management suite designed to simplify operations across thousands of deployed routers, modems, and gateways. Built for industrial and enterprise networks, CMS offers deep visibility, automation, and remote troubleshooting to ensure network uptime and SLA adherence.",
      specs:   [
        { k:"Scale",         v:"Thousands of Devices" },
        { k:"Deployment",    v:"Public Cloud / Private Cloud / On-Premise" },
        { k:"Provisioning",  v:"Zero-Touch with Config Templates" },
        { k:"Visibility",    v:"Real-time Dashboard & Alerts" },
        { k:"Security",      v:"Multi-Tenancy, RBAC, Granular Access Control" },
        { k:"Updates",       v:"OTA Firmware & Configuration" },
      ],
      features: [
        "Centrally manage firmware, configurations, SIMs, and access policies across all deployed devices",
        "Scales on demand with high availability; deployable on public cloud, private cloud, or on-premise",
        "Supports multi-tenancy, user roles, and granular controls to ensure secure operations",
        "Real-time device status, link quality, data usage, and critical alerts to maintain uptime",
        "Roll out hundreds of devices with automated onboarding, configuration templates, and remote activation",
        "Visual monitoring tools and diagnostics for rapid remote troubleshooting",
      ],
    },
    cwan: {
      label:   "cWAN – Complete SD-WAN Platform",
      badge:   "Connectivity Evolution Platform · 2.2.1",
      subhead: "Enterprise Intelligence Meets Multi-Site Resilience",
      body:    "Tenet's flagship cWAN (Credo WAN) is a complete SD-WAN platform built for enterprises and service providers demanding total visibility, advanced analytics, and maximum performance. With WAN bonding for bandwidth aggregation, comprehensive reporting dashboards, and split-plane architecture, cWAN delivers everything you need to orchestrate complex multi-site networks with confidence.",
      capabilities: [
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>', title: 'Split-Plane Architecture', desc: 'Independent control and data planes enable seamless failover without disruption.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9l-5 5-5-5-5 5"></path></svg>', title: 'Advanced Reporting', desc: 'Deep analytics dashboards reveal network behavior, trends, and bottlenecks.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>', title: 'WAN Bonding', desc: 'Aggregate bandwidth across multiple links for maximum throughput.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>', title: 'Intent-Based Routing', desc: 'Define business goals and let the network route traffic automatically.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', title: 'Visual Orchestration', desc: 'Unified real-time topology view with health monitoring and alerts.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', title: 'Multi-Underlay Support', desc: 'Runs over LTE, MPLS, DSL, fiber — whatever infrastructure you have.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'Per-Packet Aggregation', desc: 'Bond links at packet level for enhanced bandwidth and minimal jitter.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>', title: 'Cloud Breakout', desc: 'Local SaaS breakout reduces latency and cuts expensive backhaul traffic.' },
      ],
      specs:   [
        { k:"Architecture",   v:"Split-Plane SD-WAN with Analytics" },
        { k:"Underlay",       v:"Ethernet, LTE/NR, DSL, MPLS, Fiber" },
        { k:"WAN Bonding",    v:"Per-Packet Link Aggregation" },
        { k:"Reporting",      v:"Advanced Analytics & Dashboards" },
        { k:"Orchestration",  v:"Centralized Multi-Tenant Controller" },
        { k:"Security",       v:"Encrypted Overlay + Secure Boot" },
        { k:"Routing",        v:"Intent-Based + Weighted Load Balancing" },
        { k:"Management",     v:"Visual Topology + Real-time Alerts" },
      ],
      features: [
        "Advanced Reporting & Analytics — Deep visibility into network performance, application usage, bandwidth trends, and SLA compliance",
        "WAN Bonding & Per-Packet Aggregation — Bond multiple links at the packet level for maximum bandwidth and minimal jitter",
        "Split-Plane Architecture — Decoupled control and data planes ensure unbreakable failover resilience and platform flexibility",
        "Intent-Based Routing — Define network goals (latency, jitter, cost) and watch traffic steer itself across WAN tunnels dynamically",
        "Visual Orchestration Interface — Real-time topology monitoring, tunnel health visualization, alerts, and provisioning in one unified UI",
        "Multi-Underlay Support — Operates seamlessly over LTE, MPLS, DSL, Ethernet, fiber — adapts to any enterprise or field topology",
        "Weighted Load Balancing — Balance traffic intelligently across links based on real-time conditions and traffic profiles",
        "Tamper-Proof Boot & Auto Firmware — Secure boot, remote firmware updates, and platform integrity checks built in from day one",
        "Internet Breakout & DNS Offload — Local breakout for cloud/SaaS apps improves latency and reduces expensive backhaul loads",
        "Application-Aware QoS — Prioritize voice, video, ERP, and critical apps automatically based on traffic patterns and business rules",
        "Multi-Tenant Architecture — Built for ISPs and MSPs managing hundreds of customers from a single orchestration platform",
        "Zero-Touch Provisioning — Ship devices to site, power on, and they self-configure — no on-site IT expertise required",
        "Encrypted Overlay Tunnels — End-to-end encryption ensures secure branch-to-HQ and site-to-site connectivity across all underlays",
      ],
    },
    cwanexpress: {
      label:   "cWAN Express – Streamlined SD-WAN for the Edge",
      badge:   "Connectivity Evolution Platform · 2.2.2",
      subhead: "Enterprise-Grade Orchestration Without the Complexity",
      body:    "cWAN Express delivers the power of SD-WAN where you need it most — at branch offices, retail locations, and distributed sites. Built on the same proven platform as our full cWAN solution, Express strips away reporting overhead and WAN bonding complexity to give you fast, secure, intelligent routing with zero-touch deployment. Perfect for ISPs and enterprises scaling hundreds of edge locations.",
      capabilities: [
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>', title: 'Split-Plane Architecture', desc: 'Decoupled control and data planes ensure unbreakable failover resilience.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>', title: 'Intent-Based Routing', desc: 'Define network goals — latency, cost, jitter — and watch traffic optimize itself.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>', title: 'Weighted Load Balancing', desc: 'Intelligent traffic distribution adapts to real-time link conditions.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>', title: 'Visual Orchestration', desc: 'Real-time topology monitoring with health alerts in one unified interface.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', title: 'Connectivity-Agnostic', desc: 'Works over LTE, MPLS, DSL, fiber — adapts to any topology you have.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', title: 'Tamper-Proof Boot', desc: 'Secure boot with automatic firmware updates keeps your edge protected.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>', title: 'Internet Breakout', desc: 'Local breakout for cloud apps slashes latency and backhaul costs.' },
        { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>', title: 'Zero-Touch Provisioning', desc: 'Ship to site, power on, connect — no technician required.' },
      ],
      specs:   [
        { k:"Architecture",   v:"Split-Plane SD-WAN" },
        { k:"Target",         v:"ISPs / Branch Offices / Retail" },
        { k:"Underlay",       v:"LTE, MPLS, DSL, Ethernet, Fiber" },
        { k:"Provisioning",   v:"Zero-Touch Deployment" },
        { k:"Security",       v:"Encrypted Overlay + Secure Boot" },
        { k:"Routing",        v:"Intent-Based, Weighted Load Balancing" },
        { k:"Management",     v:"Centralized Orchestration Interface" },
        { k:"Excluded",       v:"No Reporting / No WAN Bonding" },
      ],
      features: [
        "Split-Plane Architecture — Decouples control, data, and management for unbreakable failover resilience and platform flexibility",
        "Intent-Based Routing — Define network goals (latency, jitter, cost) and watch traffic steer itself across WAN tunnels dynamically",
        "Weighted Load Balancing — Balance traffic intelligently across links based on real-time conditions and configurable weights",
        "Visual Orchestration Interface — Monitor topology, tunnel health, and alerts in real-time from one unified dashboard",
        "Connectivity-Agnostic — Operates seamlessly over LTE, MPLS, DSL, Ethernet, or fiber — adapts to any enterprise topology",
        "Tamper-Proof Boot & Auto Firmware — Secure boot, remote firmware updates, and platform integrity checks built in from day one",
        "Internet Breakout & DNS Offload — Local cloud/SaaS breakout improves latency and slashes expensive backhaul loads",
        "Zero-Touch Provisioning — Ship devices to site, power on, and they self-configure — no on-site IT expertise required",
        "Multi-Tenant Ready — Built for ISPs and MSPs managing hundreds of customers from a single orchestration platform",
        "Encrypted Overlay Tunnels — End-to-end encryption ensures secure branch-to-HQ and site-to-site connectivity",
        "Application-Aware QoS — Prioritize voice, video, and critical apps automatically based on traffic patterns",
        "Automatic Failover — Sub-second switchover between WAN links keeps your operations running without interruption",
        "Centralized Management — Manage all edge devices, policies, and tunnels from a single cloud or on-premise controller",
      ],
    },
  },

  /* ── SERVICES ── */
  services: {
    custom: {
      label:   "Custom Engineering",
      badge:   "Services · X.1",
      subhead: "Engineered for Your Unique Needs.",
      body:    "At Tenet, we design and deliver customized hardware and software solutions tailored to your exact operational needs. From ruggedized enclosures to protocol converters and interface-specific boards, we build systems where off-the-shelf simply won't do.",
      features: [
        "Ruggedized enclosures for harsh industrial environments",
        "Protocol converters and multi-interface adapter boards",
        "Custom PCB design and hardware integration",
        "Specialized I/O expansion for unique sensor and actuator requirements",
        "Custom RF/antenna solutions for specialized deployment environments",
        "End-to-end design validation and production support",
      ],
    },
    consulting: {
      label:   "Consulting and Engineering Services",
      badge:   "Services · X.2",
      subhead: "Expert Guidance and End-to-End Execution.",
      body:    "From LTE/5G modem design validation to IoT architecture and deployment planning, our consultants bring deep technical insight to help customers scale, optimize, and future-proof their embedded and network systems.",
      features: [
        "LTE/5G NR modem design validation and certification support",
        "IoT system architecture design and review",
        "Network deployment planning for industrial and enterprise environments",
        "SCADA and automation system integration consulting",
        "Performance optimization and future-proofing strategies",
        "Technology road-mapping and standards compliance guidance",
      ],
    },
    software: {
      label:   "Software & Embedded Systems Development",
      badge:   "Services · X.3",
      subhead: "From Silicon to Software.",
      body:    "We design and build secure, high-performance software and embedded systems that power intelligent products across industries. From board bring-up and bootloaders to full-stack firmware and cloud-connected applications, our solutions are optimized for performance, stability, and long-term support.\n\nOur expertise spans Linux, OpenWRT, RTOS, custom board support packages (BSPs), and embedded APIs — integrated seamlessly with UI/UX, cloud, and mobile platforms to deliver end-to-end product value.",
      features: [
        "Board bring-up, bootloaders, and low-level hardware abstraction layers",
        "Linux, OpenWRT, and RTOS firmware development",
        "Custom Board Support Packages (BSPs) for proprietary hardware",
        "Embedded APIs and cloud-connected application development",
        "UI/UX development for device management and configuration interfaces",
        "Long-term software support, maintenance, and security patching",
      ],
    },
  },

  /* ── ABOUT ── */
  about: {
    who_title:  "Making Technology Work Seamlessly",
    who_body:   "Built by engineers, for real-world deployments. With 150+ years of combined experience, we design connectivity systems that perform reliably in the field — not just in the lab.\n\nFrom M2M gateways to Multi-WAN platforms, we build products and services that work securely, reliably, and at scale.",
    offerings:  [
      { icon:"🏭", h:"Industrial-grade M2M & Edge Devices",       p:"Rugged, field-proven gateways and modems built for mission-critical deployments." },
      { icon:"🔄", h:"Legacy-to-Digital Network Transformation",   p:"Bridging legacy industrial systems with modern IoT platforms without disrupting existing infrastructure." },
      { icon:"⚙️", h:"Custom Engineering & Firmware Development",  p:"Purpose-built hardware and embedded software tailored to your exact operational needs." },
      { icon:"📡", h:"Consulting in LTE, 5G NR & IoT Systems",     p:"Expert guidance from design validation to large-scale deployment planning." },
    ],
    why_title:  "Your Strategic Partner in Connectivity and Automation",
    why_body:   "At Tenet Networks, we don't just deliver products — we build lasting partnerships. Here's what sets us apart:",
    why_cards:  [
      { icon:"🏆", h:"Depth & Excellence",       p:"Deep domain expertise and a track record of engineering robust, secure, and field-proven systems. Trusted across 150K+ deployed systems in real-world environments." },
      { icon:"🎯", h:"Tailored Solutions",         p:"No two businesses are alike. We design, engineer, and deploy solutions aligned with your specific use case and performance objectives." },
      { icon:"🤝", h:"End-to-End Partnership",    p:"From product development to ongoing support, we're with you every step of the way. Our long-term engagement model ensures continuity and trust." },
      { icon:"🚀", h:"Future-Ready Innovation",   p:"Harnessing the latest in LTE, 5G NR, IoT, and edge computing to build solutions that are scalable, secure, and ready for tomorrow." },
    ],
  },

  /* ── CAREERS ── */
  careers: {
    excite: [
      { icon:"🏆", letter:"E", name:"Excellence",         quote:"We strive for the highest standards in everything we do.",             cls:"exc-0" },
      { icon:"⚙️", letter:"X", name:"Execution",          quote:"We take ownership and drive results with focus and speed.",            cls:"exc-1" },
      { icon:"👥", letter:"C", name:"Customer Centricity", quote:"Our customers are at the core of our decisions and innovation.",      cls:"exc-2" },
      { icon:"🛡️", letter:"I", name:"Integrity",          quote:"We act with honesty, accountability, and respect.",                   cls:"exc-3" },
      { icon:"🤝", letter:"T", name:"Teamwork",            quote:"We collaborate openly, value diversity, and grow together.",          cls:"exc-4" },
      { icon:"❤️", letter:"E", name:"Empathy",             quote:"We lead with kindness, understanding, and compassion.",               cls:"exc-5" },
    ],
    why_body:   "At Tenet Networks, we believe that meaningful work, strong values, and a supportive culture form the foundation for both professional excellence and personal fulfilment. Our people are at the heart of everything we do, and we're committed to fostering an environment where innovation thrives, ideas are welcomed, and careers are built to last.",
    life_cards: [
      { icon:"🌱", h:"Learning & Development",    p:"Mentorship, structured training, hands-on project experience, and access to the latest tools. We actively support higher education and offer sponsorship in select cases aligned with roles and aspirations." },
      { icon:"🏠", h:"Strong Family Bonding",      p:"We understand success is a team effort. Our culture is grounded in mutual respect, empathy, and community. We celebrate personal milestones and support each other in times of need." },
      { icon:"🎯", h:"Real Impact & Purpose",      p:"Whether you're in R&D, Core Operations, or Support Functions, your work will have real impact across critical infrastructure. We celebrate milestones and recognize commitment." },
    ],
    programs: [
      { tag:"Students",          h:"Internships",          p:"Hands-on experience for Diploma, Bachelor's, or Master's students in Engineering. Work alongside seasoned professionals on real-world industrial and networking projects." },
      { tag:"Fresh Graduates",   h:"Trainee Programmes",   p:"Diploma/Graduate Trainee Programmes for careers in core engineering, embedded systems, and network architecture. A structured pathway to future key roles at Tenet Networks." },
      { tag:"Experienced",       h:"Current Openings",     p:"Always looking for driven, curious, and skilled individuals in engineering, product development, customer support, and more. If you're passionate about technology, we'd love to hear from you." },
    ],
  },

  /* ── CUSTOMER STORIES ── */
  stories: [
    {
      icon: "💧", title: "Enabling Jal Jeevan Mission with Real-Time Water Infrastructure Monitoring",
      summary: "M2M gateways enabling seamless Modbus-to-MQTT protocol conversion for water supply monitoring across rural India, from Rajasthan to Uttarakhand.",
      detail: "As part of India's Jal Jeevan Mission, state water supply departments needed reliable, real-time monitoring of thousands of water infrastructure points. Legacy sensors using Modbus RTU/TCP lacked IP connectivity. Our rugged M2M Cellular Gateway was deployed with a built-in protocol conversion engine, translating Modbus RTU to MQTT over 4G/LTE — enabling cloud dashboard integration even in areas with poor infrastructure.",
      bullets: [
        "Two-way secure communication over 4G/LTE for remote pump control and automation",
        "Wide operating temperature and local data buffering for resilience during network failure",
        "No changes required to existing field equipment — faster, cost-effective rollout",
        "Deployed across Rajasthan, Maharashtra, and Uttarakhand",
      ],
    },
    {
      icon: "🏙️", title: "Powering Urban Safety and Intelligence for Smart Cities",
      summary: "Outdoor M2M gateways connecting traffic signals, surveillance cameras, and enforcement systems to centralized smart city command centers.",
      detail: "Indian cities needed a robust communication backbone to connect traffic signals, violation detection systems, surveillance cameras, weather stations, and public alert systems to centralized command centers. Our outdoor M2M gateway enabled secure 4G/5G connectivity with multi-WAN support, live monitoring, automated enforcement, and real-time public communication — even in outer city limits without wired backhaul.",
      bullets: [
        "Secure 4G/5G connectivity and multi-WAN support at key city junctions",
        "Centralized remote management — diagnostics, configuration, and OTA updates",
        "Enabled automated enforcement and live surveillance at hundreds of locations",
        "Extended connectivity to outer city limits and highways without fixed backhaul",
      ],
    },
    {
      icon: "🔥", title: "Empowering City Gas Networks with Secure, Always-On Connectivity",
      summary: "Industrial M2M gateways securing communication between gas flow meters, pressure sensors, and centralized SCADA platforms across city gas distribution networks.",
      detail: "City Gas Distribution networks require secure, resilient communication across urban pipelines, distribution stations, and customer endpoints. Our gateways support RS485/RS232 and Ethernet, integrating with legacy and modern sensors alike. With fail-safe multi-operator 4G connectivity and built-in VPN, operators gain real-time telemetry and instant alerts for anomalies.",
      bullets: [
        "Fail-safe multi-operator 4G LTE with built-in VPN for encrypted transmission",
        "Real-time telemetry and remote threshold configuration from a central platform",
        "Instant alerts for pressure drops or potential leaks — enhancing safety & compliance",
        "OTA firmware and config updates for easy scaling and maintenance",
      ],
    },
    {
      icon: "⚡", title: "Modernizing Power Distribution with Centrally Orchestrated Overlay WAN",
      summary: "cWAN SD-WAN deployed across hundreds of substations and billing centers to ensure real-time metering data synchronization and billing accuracy.",
      detail: "A leading power distribution company needed flexible, cost-efficient WAN across geographically dispersed substations, billing centers, and regional offices. Our cWAN SD-WAN ensured real-time metering data synchronization with geographically redundant central data concentrators. Zero-touch provisioning minimized on-site IT intervention significantly.",
      bullets: [
        "Dual-SIM 4G/5G failover maintained seamless connectivity during fiber outages",
        "Zero-touch provisioning enabled swift, scalable deployment across hundreds of sites",
        "Improved billing accuracy and reduced downtime across the distribution footprint",
        "Enabled future digital initiatives: outage management, prepaid metering, grid automation",
      ],
    },
    {
      icon: "☀️", title: "Centralized Control of Renewable Energy Infrastructure",
      summary: "Rugged cellular gateways connected solar farms and wind turbines using legacy RS232 to centralized SCADA platforms via Modbus-MQTT protocol bridging.",
      detail: "A leading renewable energy operator needed to connect solar and wind installations using legacy RS232 controllers to centralized SCADA platforms, without stable connectivity in remote locations. Our gateway supports secure 4G LTE, RS232 interfaces, and protocol conversion between Modbus RTU, MQTT, and other SCADA frameworks.",
      bullets: [
        "Reliable remote access via secure 4G LTE — no wired infrastructure needed",
        "Legacy RS232 integration without replacing existing substation equipment",
        "Intelligent edge management: watchdog timers, firewall, auto-recovery",
        "Scalable remote monitoring and OTA updates via centralized management platform",
      ],
    },
    {
      icon: "🏪", title: "Securing Enterprise & Retail Operations with Always-On Connectivity",
      summary: "High-availability M2M and SD-WAN edge solution for a leading retail chain across multiple states including Tier-3 towns — ensuring always-on POS and operations.",
      detail: "A leading Indian retail chain faced persistent network disruptions at branches in semi-urban and Tier-3 towns, affecting POS transactions, inventory updates, and cloud CRM access. Our solution combined dual-WAN 4G LTE failover, built-in firewall and VPN support, zero-touch provisioning, and centralized orchestration.",
      bullets: [
        "Built-in VPN for secure financial data transmission meeting compliance standards",
        "Real-time network visibility for IT teams across all endpoints simultaneously",
        "Dual-WAN failover — LTE backup ensured operations continued if fiber went down",
        "Remote workforce enablement via site VPN and cloud gateway routing",
      ],
    },
    {
      icon: "🚧", title: "Mobile Surveillance and Connectivity for Infrastructure Projects",
      summary: "Plug-and-play M2M gateways with portable IP cameras provided rapid, secure mobile surveillance for construction sites, highways, and disaster relief operations.",
      detail: "Infrastructure builders needed reliable mobile surveillance for temporary construction and repair sites without power or fixed connectivity. Our rugged, plug-and-play M2M Cellular Gateway combined with portable IP camera setups, solar-powered units, and secure cloud-based video monitoring — deployable on mobile poles, vehicles, or temporary structures.",
      bullets: [
        "Full setup operational in under 30 minutes — no trenching, cabling, or static infrastructure",
        "Live camera streams over secure 4G/LTE backhaul accessible from any command center",
        "Solar-powered options for extended off-grid deployment in remote locations",
        "Adopted by PWD teams, railway projects, disaster relief, and event security",
      ],
    },
  ],

  /* ── PARTNERS ── */
  partners: {
    intro_title: "Let's Build the Future Together",
    intro_body:  "Join our fast-growing ecosystem of partners. Whether you're a distributor, reseller or a value-added system integrator, Tenet offers you a reliable product line, strong technical support, and a partnership rooted in growth and mutual success.",
    benefits: [
      "Proven product-market fit with 150K+ devices deployed across India and globally",
      "Priority access and insights to product roadmap and upcoming launches",
      "Marketing and technical enablement support to accelerate your sales",
      "Competitive margins and post-sales service backing",
    ],
    types: [
      { icon:"🏭", h:"Distributors",               p:"Scale your distribution network with our proven, field-hardened product portfolio." },
      { icon:"🤝", h:"Partners",                    p:"Resell and deploy Tenet solutions for your enterprise and industrial customer base." },
      { icon:"🔧", h:"Value Added System Integrators", p:"Integrate our technology into your custom solutions for vertical-specific markets." },
      { icon:"🏷️", h:"OEM Partners",               p:"White-label and OEM opportunities to build Tenet technology into your branded products." },
    ],
  },

}; /* END CONTENT */
