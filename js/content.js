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
      title: "Industrial Connectivity That Never <span class='accent'>Stops Working</span>",
      subtitle: "Keep factories, utilities, and remote sites online 24/7 with self-healing industrial routers and edge gateways built for zero downtime.",    
      features: [
        { icon: "⚡", label: "99.97% Field-Verified Uptime" },
        { icon: "🔄", label: "<1s Auto-Failover", prefix: "<" },
        { icon: "🏭", label: "150K+ Devices Deployed Worldwide" }
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
      title: "Control Every Site From <span class='accent'>One Dashboard</span>",
      subtitle: "Monitor and manage every router across locations with centralized visibility, automated failover and policy-based control.",    
      features: [
        { icon: "📊", label: "Single-Pane Visibility" },
        { icon: "⚡", label: "Zero-Touch Provisioning" },
        { icon: "🔄", label: "Automatic Load Balancing" }
      ],
      
      cta1: { label: "Schedule Demo", target: "contact" },
      cta2: { label: "See How It Works →", target: "products", tab: "ces" }
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
      cta2: { label: "Partnership Program →", target: "partners" }
    },

    // ════════════════════════════════════════════════════════
    // 🔥 SLIDE 4: DIFFERENTIATOR - RF Engineering (CORE)
    // ════════════════════════════════════════════════════════
    {
      id: "rf-engineering-differentiator",
      active: true,
      priority: 1,
      
      tag: "RF Engineering · Deployment Reality",
      title: "Connectivity That Works Where <span class='accent'>Others Fail</span>",
      subtitle: "Most systems fail due to RF conditions, antenna placement, and real-world constraints—not the modem. We design for the conditions your system actually faces.",
      
      differentiators: [
        { icon: "📡", label: "RF-Aware System Design" },
        { icon: "🧠", label: "Antenna + Modem + Environment Optimization" },
        { icon: "🔬", label: "Validated in Real Deployments, Not Just Labs" }
      ],
      
      cta1: { label: "Analyze Your Deployment", target: "contact" },
      cta2: { label: "Read: Why Systems Fail →", target:  "company", tab: "perspective" }
    },

    // ════════════════════════════════════════════════════════
    // 🇮🇳 SLIDE 5: Made in India - Engineering Toughness
    // ════════════════════════════════════════════════════════
    {
      id: "made-in-india",
      active: true,
      priority: 1,
      
      tag: "Built for India · Proven Globally",
      title: "Engineered for the <span class='accent'>Toughest Conditions</span>",
      subtitle: "From extreme RF environments to unstable power and harsh industrial sites—our systems are built where failure is common and performance matters.",
      
      specs: [
        { icon: "📡", label: "Optimized for Challenging RF Environments" },
        { icon: "⚡", label: "Power & Surge Resilience" },
        { icon: "✅", label: "Field-Proven" }
      ],
      
      cta1: { label: "View Products →", target: "products" },
      cta2: { label: "Talk to Engineer →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // 🪔 EXAMPLE: Diwali 2026 Campaign (ACTIVE)
    // ════════════════════════════════════════════════════════
    {
      id: "diwali-2026",
      active: true,
      priority: 5,
      validFrom: "2026-10-15",
      validUntil: "2026-11-15",
      
      tag: "🪔 Happy Diwali",
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
      active: false,
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
    // ☔ EXAMPLE: Monsoon Campaign (ACTIVE)
    // ════════════════════════════════════════════════════════
    {
      id: "monsoon-2026",
      active: true,
      priority: 3,
      validFrom: "2026-06-01",
      validUntil: "2026-09-30",
      
      tag: "☔ Monsoon-Ready Infrastructure",
      title: "<span class='accent'>Monsoon-Proof</span> Connectivity That Never Fails",
      subtitle: "Weatherproof enclosures and lightning protection keep critical infrastructure online through India's harshest monsoons—from heavy rainfall to extreme humidity.",
      
      weatherProof: [
        { icon: "💧", label: "IP65 Water & Dust Resistance" },
        { icon: "🌧️", label: "Extreme Humidity Resilience" },
        { icon: "⚡", label: "Lightning-Grade Surge Protection" }
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
      label:   "Indoor Industrial 4G/5G Cellular Gateways",
      badge:   "M2M Cellular Gateway",
      
      // NEW STRUCTURE - Decision-first layout
      hero: {
        headline: "Reliable Indoor Connectivity for Industrial and Enterprise Environments",
        subhead: "Built for control rooms, factory floors, and enterprise networks where downtime is not acceptable.",
        description: "These gateways deliver secure, always-on connectivity with remote management and zero-touch deployment.",
      },
      
      useCases: [
        "Factory automation and control rooms",
        "Enterprise network backhaul",
        "Warehouse and logistics systems",
        "Indoor remote monitoring deployments",
        "Machine-to-machine (M2M) communication",
        "Industrial IoT sensor networks"
      ],
      
      enables: [
        {
          title: "Deploy at Scale",
          desc: "Provision and manage hundreds of devices remotely using Credo Management System. One-touch template-based activation gets sites online in minutes."
        },
        {
          title: "Stay Online Always",
          desc: "Dual SIM failover and smart redundancy ensure uninterrupted connectivity. Automatic backup and recovery keep operations running 24/7."
        },
        {
          title: "Adapt to Any Network",
          desc: "Configurable LAN/WAN ports let you set roles dynamically (e.g., 2 WAN + 3 LAN) to match changing network topologies on the fly."
        },
        {
          title: "Operate in Real Conditions",
          desc: "Low power consumption and wide voltage support (9-36V DC) handle industrial power fluctuations. Fanless cooling eliminates moving parts."
        },
        {
          title: "Manage Remotely",
          desc: "Full control via Credo CMS, web interface, or SMS commands — even in the most inaccessible locations. Real-time visibility and diagnostics."
        },
        {
          title: "Secure Your Data",
          desc: "Multiple VPN protocols (IPSec, OpenVPN, L2TP) with enterprise firewall and encryption protect your critical communications."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Built for 24×7 industrial operation with fanless cooling, metal enclosure, and field-proven reliability across 80,000+ deployments. Designed not just in the lab — but validated in real-world factories, warehouses, and remote sites across three continents."
      },
      
      techCapabilities: [
        "4G LTE / LTE-A / 5G NR with backward compatibility",
        "Dual-SIM automatic failover and load balancing",
        "Multi-VPN support (IPSec, OpenVPN, L2TP, GRE)",
        "Advanced routing protocols (OSPF, BGP, static routes)",
        "Enterprise firewall with stateful packet inspection",
        "Zero-touch deployment and remote provisioning",
        "Integration with Credo Management System (CMS)",
        "SNMP, TR069, SSH, and web-based management",
        "DIN-rail or wall-mountable compact enclosure",
        "Wide voltage input (9-36V DC) with reverse polarity protection"
      ],
      
      specs:   [
        { k:"Network",        v:"4G LTE / 5G NR" },
        { k:"Connectivity",   v:"Dual-SIM Failover" },
        { k:"Routing",        v:"Enterprise-Grade (OSPF, BGP)" },
        { k:"Security",       v:"Multi-VPN, Firewall, Encryption" },
        { k:"Management",     v:"Web, CLI, SNMP, Credo CMS, TR069" },
        { k:"Form Factor",    v:"Compact DIN-Rail / Wall Mount" },
        { k:"Power",          v:"Wide Voltage Input (9-36V DC)" },
        { k:"Environment",    v:"Industrial Grade (-30°C to +75°C)" },
        { k:"Deployment",     v:"80,000+ installations worldwide" },
      ],
    },
    outdoor: {
      label:   "Outdoor Industrial 4G/5G Cellular Gateways",
      badge:   "M2M Cellular Gateway",
      
      hero: {
        headline: "Ruggedized Outdoor Connectivity for Extreme Environments",
        subhead: "Built for remote installations, surveillance poles, and utility substations where failure is not an option.",
        description: "IP65-rated, pole-mountable, and powered by PoE or wide-voltage DC — engineered to survive rain, dust, temperature extremes, and years of 24×7 operation.",
      },
      
      useCases: [
        "Remote surveillance and security systems",
        "Utility substations and smart grid infrastructure",
        "Roadside cabinets and traffic management",
        "Outdoor sensor networks and telemetry",
        "Cell tower backhaul and outdoor Wi-Fi",
        "Environmental monitoring stations"
      ],
      
      enables: [
        {
          title: "Survive Extreme Conditions",
          desc: "IP65 weatherproof enclosure withstands rain, dust, and temperature extremes from -30°C to +75°C. Fanless design eliminates moving parts that fail in harsh environments."
        },
        {
          title: "Deploy Anywhere Fast",
          desc: "Pole and mast mounting hardware enables field deployment in minutes. PoE or wide-voltage DC input eliminates the need for separate power supplies."
        },
        {
          title: "Stay Connected Always",
          desc: "Dual-SIM automatic failover with integrated high-gain antennas ensures reliable connectivity even in remote locations with weak signal."
        },
        {
          title: "Know When Power Fails",
          desc: "Dying gasp alerts instantly notify you when outdoor sites lose power — before equipment goes offline and before it's too late."
        },
        {
          title: "Manage Remotely",
          desc: "Complete control via CMS, TR069, SNMP, or SMS — even for the most inaccessible outdoor locations. Zero-touch provisioning simplifies deployment."
        },
        {
          title: "Handle Complex Topologies",
          desc: "Enterprise routing protocols with multi-VPN support handle demanding outdoor network deployments with encrypted site-to-site connectivity."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Engineered specifically for outdoor deployment with IP65-rated weatherproof housing, integrated lightning protection, and industrial-grade components tested to withstand shock, vibration, and electromagnetic interference. Proven in thousands of remote installations across all climate zones."
      },
      
      techCapabilities: [
        "5G NR / 4G LTE-A with integrated high-gain cellular antennas",
        "IP65 weatherproof rating (dust-tight, water jet protected)",
        "Dual-SIM automatic failover and carrier redundancy",
        "PoE (48V 802.3af/at) or wide-voltage DC input (9-48V)",
        "Pole and mast mounting with outdoor-rated hardware",
        "Multi-VPN support (IPSec, OpenVPN, L2TP, GRE)",
        "Advanced routing with OSPF, BGP, and static routes",
        "Dying gasp alert for power loss notification",
        "Gigabit Ethernet ports for high-bandwidth applications",
        "Extended temperature range (-30°C to +75°C operational)"
      ],
      
      specs: [
        { k:"Network",        v:"5G NR / 4G LTE-A" },
        { k:"Weatherproof",   v:"IP65 Rated (Dust/Water Protected)" },
        { k:"Connectivity",   v:"Dual-SIM Failover" },
        { k:"Power",          v:"PoE (48V) or DC (9-48V)" },
        { k:"Mounting",       v:"Pole/Mast (Outdoor Hardware Included)" },
        { k:"Security",       v:"Multi-VPN, Firewall, Encryption" },
        { k:"Management",     v:"CMS, TR069, SNMP, SMS" },
        { k:"Environment",    v:"Extended Industrial (-30°C to +75°C)" },
        { k:"Deployment",     v:"Thousands of remote sites worldwide" },
      ],
    },
    scada: {
      label:   "Industrial 4G/5G Cellular SCADA Gateways",
      badge:   "M2M Cellular Gateway",
      
      hero: {
        headline: "Protocol-Aware Connectivity for Industrial Automation & Utilities",
        subhead: "Purpose-built for SCADA, smart grids, and industrial control systems where every data point matters.",
        description: "Native Modbus RTU/TCP, serial interfaces (RS232/RS485), and enterprise security for deterministic, real-time telemetry and remote control.",
      },
      
      useCases: [
        "SCADA and industrial automation systems",
        "Smart grid and utility substations",
        "Water and wastewater treatment plants",
        "Oil & gas pipeline monitoring",
        "Building management and HVAC control",
        "Manufacturing and process control"
      ],
      
      enables: [
        {
          title: "Connect Legacy Equipment",
          desc: "Native Modbus RTU/TCP and serial interfaces (RS232/RS485) connect directly to PLCs, RTUs, and field instruments without protocol converters or middleware."
        },
        {
          title: "Secure Critical Infrastructure",
          desc: "Military-grade encryption, VPN tunneling, and enterprise firewall protect SCADA communications from cyber threats and unauthorized access."
        },
        {
          title: "Ensure High Availability",
          desc: "VRRP cold backup and dual-SIM failover keep telemetry flowing even when gateways or carriers fail. Built for 99.9%+ uptime in critical infrastructure."
        },
        {
          title: "Scale Across Sites",
          desc: "TR069 remote management and CMS integration enable centralized control of thousands of distributed SCADA gateways from a single dashboard."
        },
        {
          title: "Operate in Harsh Conditions",
          desc: "Industrial-grade components, fanless cooling, and wide voltage support handle control cabinet environments with temperature extremes and electrical noise."
        },
        {
          title: "Minimize Power Consumption",
          desc: "Ultra-low power design keeps remote sites operational even on backup batteries during grid failures or in off-grid solar installations."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Purpose-engineered for SCADA deployments with native industrial protocol support, deterministic performance, and security features designed specifically for critical infrastructure. Tested and certified for deployment in utilities, energy, water, and industrial automation environments."
      },
      
      techCapabilities: [
        "Native Modbus RTU and Modbus TCP protocol support",
        "RS232 and RS485 serial ports for direct PLC/RTU connection",
        "4G LTE with dual-SIM automatic carrier failover",
        "Multi-VPN tunneling (IPSec, OpenVPN, GRE, L2TP)",
        "VRRP high-availability with hardware watchdog",
        "Advanced routing (OSPF, BGP, static) for multi-site topologies",
        "Enterprise firewall with stateful packet inspection",
        "TR069 remote management for large-scale deployments",
        "DIN-rail mounting for control cabinet installation",
        "Ultra-low power consumption for battery backup operation"
      ],
      
      specs: [
        { k:"Protocols",      v:"Modbus RTU/TCP, Serial (RS232/RS485)" },
        { k:"Network",        v:"4G LTE with Dual-SIM Failover" },
        { k:"Security",       v:"Multi-VPN, Firewall, VRRP, Encryption" },
        { k:"Routing",        v:"Advanced (OSPF, BGP, Static)" },
        { k:"Management",     v:"CMS, TR069, SNMP, Web, CLI" },
        { k:"Form Factor",    v:"DIN-Rail / Control Cabinet Mount" },
        { k:"Power",          v:"Ultra-Low Power, Wide Voltage (9-36V)" },
        { k:"Environment",    v:"Industrial (-30°C to +75°C)" },
        { k:"Certification",  v:"Critical Infrastructure Deployments" },
      ],
    },
    vpn: {
      label:   "Enterprise VPN Gateways",
      badge:   "M2M Cellular Gateway",
      
      hero: {
        headline: "Secure, Resilient Site-to-Site Connectivity for Distributed Enterprises",
        subhead: "Built for demanding enterprise and ISP environments requiring maximum uptime and flexibility.",
        description: "High-performance hardware with advanced security, sub-second failover, and centralized management for multi-site VPN deployments.",
      },
      
      useCases: [
        "Multi-site corporate VPN networks",
        "Branch office and retail connectivity",
        "Secure remote worker access",
        "ISP and service provider networks",
        "Multi-cloud and hybrid cloud connectivity",
        "Backup WAN and disaster recovery links"
      ],
      
      enables: [
        {
          title: "Connect Sites Securely",
          desc: "Multiple VPN protocols (IPSec, OpenVPN, GRE, L2TP, EOIP) with encrypted tunneling and dynamic routing ensure secure site-to-site communications."
        },
        {
          title: "Eliminate Downtime",
          desc: "Sub-second hardware-level failover with dual WAN, automatic backup, and hardware watchdogs keep critical business links operational 24/7."
        },
        {
          title: "Balance Traffic Intelligently",
          desc: "Session-based load balancing distributes traffic across multiple WAN links while VRRP provides gateway redundancy for high-availability deployments."
        },
        {
          title: "Support Modern Networks",
          desc: "Full IPv4/IPv6 dual-stack with enterprise firewall, NAT, port forwarding, DNS, and routing protocols handle complex network topologies."
        },
        {
          title: "Deploy and Manage at Scale",
          desc: "Credo CMS enables remote provisioning, firmware updates, and visual monitoring across hundreds of distributed VPN gateways from a single dashboard."
        },
        {
          title: "Install Anywhere",
          desc: "Rugged industrial design with wide voltage input and flexible connectivity options (electrical and fiber) adapts to diverse deployment environments."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Engineered for carrier-grade performance with hardware-accelerated VPN encryption, sub-second failover, and proven reliability in demanding ISP and enterprise environments. Combines the flexibility of software-defined networking with the robustness of purpose-built hardware."
      },
      
      techCapabilities: [
        "Multiple VPN protocols: IPSec, OpenVPN, GRE, L2TP, EOIP",
        "Dual WAN with automatic failover and load balancing",
        "Sub-second hardware-level switchover for zero-downtime",
        "Full IPv4/IPv6 stack with dual-stack routing",
        "Enterprise firewall with stateful packet inspection",
        "VRRP for gateway redundancy and high availability",
        "Hardware watchdog for automatic recovery",
        "Remote management via Credo CMS platform",
        "Wide voltage input (9-48V DC) for flexible power",
        "Versatile connectivity (electrical copper and fiber options)"
      ],
      
      specs: [
        { k:"VPN Tunnels",   v:"IPSec, OpenVPN, GRE, L2TP, EOIP" },
        { k:"WAN",           v:"Dual WAN with Automatic Failover" },
        { k:"Routing",       v:"Full IPv4/IPv6, Firewall, NAT, VRRP" },
        { k:"Failover",      v:"Sub-Second Hardware-Level Switchover" },
        { k:"Management",    v:"Credo CMS (Remote Provisioning & Monitoring)" },
        { k:"Power",         v:"Rugged, Wide Input Voltage (9-48V)" },
        { k:"Connectivity",  v:"Electrical Copper & Fiber Options" },
        { k:"Environment",   v:"Industrial-Grade Components" },
      ],
    },
    cms: {
      label:   "Credo Management System (CMS)",
      badge:   "Management Platform",
      
      hero: {
        headline: "Centralized Platform to Monitor, Configure, and Manage Devices at Scale",
        subhead: "Built for industrial and enterprise networks managing thousands of distributed gateways and routers.",
        description: "Powerful orchestration suite with deep visibility, automation, and remote troubleshooting to ensure network uptime and SLA adherence.",
      },
      
      useCases: [
        "Large-scale industrial IoT deployments",
        "Multi-site enterprise WAN management",
        "ISP and service provider fleet management",
        "Utility and infrastructure monitoring networks",
        "Retail and branch office connectivity",
        "Remote site and field equipment management"
      ],
      
      enables: [
        {
          title: "Manage Thousands of Devices",
          desc: "Centrally control firmware, configurations, SIM cards, and access policies across your entire deployment from a single unified dashboard."
        },
        {
          title: "Deploy Without Site Visits",
          desc: "Zero-touch provisioning with configuration templates and remote activation enables you to roll out hundreds of devices without sending technicians to the field."
        },
        {
          title: "See Everything in Real-Time",
          desc: "Real-time device status, link quality, data usage, and critical alerts ensure you catch problems before they impact operations."
        },
        {
          title: "Scale On Demand",
          desc: "Deploy on public cloud, private cloud, or on-premise with high-availability architecture that grows with your network."
        },
        {
          title: "Control Access Securely",
          desc: "Multi-tenancy, role-based access control (RBAC), and granular permissions ensure secure operations across teams and organizations."
        },
        {
          title: "Troubleshoot Remotely",
          desc: "Visual monitoring tools, diagnostics, and remote access capabilities enable rapid troubleshooting without physical site access."
        }
      ],
      
      differentiator: {
        title: "Why This Platform Stands Out",
        content: "Purpose-built for industrial and enterprise deployments with advanced automation, multi-tenant architecture, and proven scalability managing tens of thousands of devices in production. Unlike generic device management platforms, CMS understands cellular gateways, SD-WAN, and industrial protocols natively."
      },
      
      techCapabilities: [
        "Centralized firmware and configuration management",
        "Zero-touch device provisioning with templates",
        "Real-time monitoring and alerting",
        "Multi-tenant architecture with RBAC",
        "Public cloud, private cloud, or on-premise deployment",
        "OTA (over-the-air) firmware updates",
        "Visual topology and health monitoring",
        "SIM management and data usage tracking",
        "Remote diagnostics and troubleshooting",
        "RESTful API for third-party integration"
      ],
      
      specs: [
        { k:"Scale",         v:"Thousands of Devices" },
        { k:"Deployment",    v:"Cloud / On-Premise / Hybrid" },
        { k:"Provisioning",  v:"Zero-Touch with Templates" },
        { k:"Visibility",    v:"Real-time Dashboard & Alerts" },
        { k:"Security",      v:"Multi-Tenancy, RBAC, Encryption" },
        { k:"Updates",       v:"OTA Firmware & Configuration" },
        { k:"Integration",   v:"RESTful API" },
        { k:"Availability",  v:"High-Availability Architecture" },
      ],
    },
    cwan: {
      label:   "cWAN – Complete SD-WAN Platform",
      badge:   "Connectivity Evolution Platform",
      
      hero: {
        headline: "Enterprise SD-WAN with Advanced Analytics and WAN Bonding",
        subhead: "Built for enterprises and service providers demanding total visibility, performance optimization, and multi-site resilience.",
        description: "Split-plane architecture with bandwidth aggregation, comprehensive reporting dashboards, and intent-based routing for complex multi-site networks.",
      },
      
      useCases: [
        "Multi-site enterprise WAN optimization",
        "ISP and MSP service delivery platforms",
        "Bandwidth-critical applications requiring link aggregation",
        "Networks requiring deep analytics and reporting",
        "High-availability data center interconnects",
        "Complex multi-tenant service provider networks"
      ],
      
      enables: [
        {
          title: "Aggregate Bandwidth Across Links",
          desc: "Per-packet WAN bonding aggregates multiple links (LTE, MPLS, DSL, fiber) for maximum throughput. Eliminate bandwidth bottlenecks and boost performance without expensive infrastructure upgrades."
        },
        {
          title: "Get Deep Network Intelligence",
          desc: "Advanced reporting dashboards reveal network performance, application usage, bandwidth trends, and SLA compliance. Make data-driven decisions about network optimization and capacity planning."
        },
        {
          title: "Route Traffic Intelligently",
          desc: "Intent-based routing automatically steers traffic across WAN tunnels based on business goals (latency, jitter, cost). Define policies once and watch the network optimize itself dynamically."
        },
        {
          title: "Ensure Unbreakable Resilience",
          desc: "Split-plane architecture decouples control and data planes for seamless failover without disruption. Your network stays up even when individual components fail."
        },
        {
          title: "Visualize Everything in Real-Time",
          desc: "Unified orchestration interface shows topology, tunnel health, link quality, and alerts in one dashboard. Provision new sites, troubleshoot issues, and monitor performance from anywhere."
        },
        {
          title: "Scale Across Any Infrastructure",
          desc: "Works over LTE, MPLS, DSL, Ethernet, fiber — whatever underlay you have. Multi-tenant architecture built for ISPs and MSPs managing hundreds of customers from one platform."
        }
      ],
      
      differentiator: {
        title: "Why This Platform Stands Out",
        content: "cWAN is Tenet's flagship SD-WAN platform combining enterprise-grade features typically found only in solutions costing 10x more. Per-packet WAN bonding, split-plane architecture, and comprehensive analytics deliver performance and visibility that standard SD-WAN solutions simply cannot match. Proven in production managing thousands of sites."
      },
      
      techCapabilities: [
        "Per-packet WAN bonding for bandwidth aggregation",
        "Split-plane architecture (independent control and data planes)",
        "Advanced reporting and analytics dashboards",
        "Intent-based routing with dynamic traffic steering",
        "Visual orchestration with real-time topology monitoring",
        "Multi-underlay support (LTE, MPLS, DSL, Ethernet, fiber)",
        "Weighted load balancing based on real-time conditions",
        "Application-aware QoS with traffic prioritization",
        "Multi-tenant architecture for ISPs and MSPs",
        "Zero-touch provisioning and remote firmware updates",
        "Encrypted overlay tunnels with secure boot",
        "Internet breakout and DNS offload for cloud/SaaS apps"
      ],
      
      specs: [
        { k:"Architecture",   v:"Split-Plane SD-WAN with Analytics" },
        { k:"WAN Bonding",    v:"Per-Packet Link Aggregation" },
        { k:"Underlay",       v:"Ethernet, LTE/NR, DSL, MPLS, Fiber" },
        { k:"Reporting",      v:"Advanced Analytics & Dashboards" },
        { k:"Orchestration",  v:"Centralized Multi-Tenant Controller" },
        { k:"Security",       v:"Encrypted Overlay + Secure Boot" },
        { k:"Routing",        v:"Intent-Based + Weighted Load Balancing" },
        { k:"Management",     v:"Visual Topology + Real-time Alerts" },
        { k:"Target",         v:"Enterprises, ISPs, MSPs" },
      ],
    },
    cwanexpress: {
      label:   "cWAN Express – Streamlined SD-WAN for the Edge",
      badge:   "Connectivity Evolution Platform",
      
      hero: {
        headline: "Enterprise-Grade SD-WAN Without the Complexity",
        subhead: "Built for branch offices, retail locations, and distributed sites requiring fast, secure, intelligent routing.",
        description: "Same proven split-plane architecture as full cWAN, streamlined for edge deployment without reporting overhead or WAN bonding complexity.",
      },
      
      useCases: [
        "Branch office and retail store connectivity",
        "Distributed enterprise edge locations",
        "ISP and MSP customer edge deployment",
        "Quick-to-deploy backup WAN and failover links",
        "Cost-sensitive multi-site deployments",
        "Remote sites requiring zero-touch provisioning"
      ],
      
      enables: [
        {
          title: "Deploy at Scale Without Complexity",
          desc: "Zero-touch provisioning means ship devices to site, power on, and they self-configure. Scale to hundreds of edge locations without on-site IT expertise or truck rolls."
        },
        {
          title: "Optimize Traffic Intelligently",
          desc: "Intent-based routing automatically steers traffic across WAN tunnels based on your goals (latency, jitter, cost). Define policies once and let the network adapt dynamically."
        },
        {
          title: "Balance Links in Real-Time",
          desc: "Weighted load balancing distributes traffic intelligently across multiple links based on real-time conditions. Maximize available bandwidth without manual intervention."
        },
        {
          title: "Ensure Unbreakable Uptime",
          desc: "Split-plane architecture with decoupled control and data planes delivers sub-second failover. Your operations stay up even when links fail."
        },
        {
          title: "Reduce Latency and Costs",
          desc: "Local internet breakout for cloud and SaaS apps improves application performance while slashing expensive backhaul traffic to headquarters."
        },
        {
          title: "Manage Everything Centrally",
          desc: "Visual orchestration interface provides real-time topology monitoring, tunnel health, and alerts from one unified dashboard. Manage all edge devices and policies remotely."
        }
      ],
      
      differentiator: {
        title: "Why This Platform Stands Out",
        content: "Built on the same proven split-plane architecture as our flagship cWAN solution, Express strips away reporting and bonding complexity to deliver exactly what edge sites need: fast deployment, intelligent routing, and unbreakable resilience. Perfect for ISPs and enterprises scaling hundreds of locations without the overhead of full analytics platforms."
      },
      
      techCapabilities: [
        "Split-plane architecture (decoupled control and data planes)",
        "Intent-based routing with dynamic traffic steering",
        "Weighted load balancing based on real-time link conditions",
        "Visual orchestration with real-time topology monitoring",
        "Multi-underlay support (LTE, MPLS, DSL, Ethernet, fiber)",
        "Zero-touch provisioning and remote firmware updates",
        "Tamper-proof secure boot with integrity checks",
        "Internet breakout and DNS offload for cloud/SaaS apps",
        "Application-aware QoS with traffic prioritization",
        "Multi-tenant architecture for ISPs and MSPs",
        "Encrypted overlay tunnels for secure connectivity",
        "Automatic sub-second failover between WAN links"
      ],
      
      specs: [
        { k:"Architecture",   v:"Split-Plane SD-WAN" },
        { k:"Target",         v:"Branch Offices, Retail, Edge Sites" },
        { k:"Underlay",       v:"LTE, MPLS, DSL, Ethernet, Fiber" },
        { k:"Provisioning",   v:"Zero-Touch Deployment" },
        { k:"Security",       v:"Encrypted Overlay + Secure Boot" },
        { k:"Routing",        v:"Intent-Based, Weighted Load Balancing" },
        { k:"Management",     v:"Centralized Visual Orchestration" },
        { k:"Deployment",     v:"ISPs, MSPs, Enterprises" },
        { k:"Excluded",       v:"No Advanced Reporting / No WAN Bonding" },
      ],
    },
  },

  /* ── SERVICES ── */
  services: {
    custom: {
      label:   "Custom Engineering",
      badge:   "Services",
      
      hero: {
        headline: "Custom Hardware and Software Solutions Engineered for Your Exact Needs",
        subhead: "When off-the-shelf won't work, we design and build exactly what your deployment requires.",
        description: "From ruggedized enclosures to protocol converters and specialized boards — we engineer solutions for unique industrial challenges.",
      },
      
      useCases: [
        "Harsh environment deployments requiring custom enclosures",
        "Legacy equipment needing modern protocol conversion",
        "Specialized sensor and actuator integration",
        "Custom RF and antenna solutions for difficult environments",
        "Proprietary hardware requiring custom firmware",
        "Unique I/O requirements beyond standard offerings"
      ],
      
      enables: [
        {
          title: "Solve Unique Challenges",
          desc: "We design custom solutions for problems that standard products can't solve — from extreme temperature enclosures to specialized protocol bridges."
        },
        {
          title: "Integrate Legacy Systems",
          desc: "Custom protocol converters and interface boards bridge your legacy equipment with modern networks without replacing expensive existing infrastructure."
        },
        {
          title: "Meet Exact Specifications",
          desc: "Custom PCB design, specialized I/O expansion, and tailored hardware integration deliver precisely what your application demands."
        },
        {
          title: "Deploy in Extreme Conditions",
          desc: "Ruggedized enclosures and custom RF solutions enable reliable operation in environments where commercial products fail."
        },
        {
          title: "Accelerate Time-to-Market",
          desc: "End-to-end design validation and production support gets your custom solution from concept to deployment faster."
        },
        {
          title: "Own Your IP",
          desc: "You retain full intellectual property rights to custom designs — no vendor lock-in, complete control over your solution."
        }
      ],
      
      differentiator: {
        title: "Why Choose Tenet for Custom Engineering",
        content: "150+ years of combined engineering experience across industrial automation, cellular connectivity, and embedded systems. We've solved custom challenges for clients across utilities, manufacturing, oil & gas, and transportation — from Arctic installations to tropical deployments."
      },
      
      techCapabilities: [
        "Ruggedized enclosures for industrial and outdoor deployments",
        "Protocol converters (Modbus, CAN, RS232/485, Ethernet)",
        "Multi-interface adapter boards and bridges",
        "Custom PCB design and layout",
        "Specialized I/O expansion modules",
        "Custom RF and antenna engineering",
        "Environmental testing and validation",
        "Production support and manufacturing liaison",
        "Full documentation and design transfer",
        "Long-term support and enhancement"
      ],
      
      specs: [
        { k:"Design Process",     v:"Requirements → Prototype → Validation → Production" },
        { k:"Timeline",           v:"8-16 weeks typical (depends on complexity)" },
        { k:"IP Rights",          v:"Client retains full ownership" },
        { k:"Support",            v:"Long-term maintenance available" },
        { k:"Manufacturing",      v:"Small batch to production volumes" },
      ],
    },
    consulting: {
      label:   "Consulting and Engineering Services",
      badge:   "Services",
      
      hero: {
        headline: "Expert Technical Guidance from Design to Deployment",
        subhead: "Deep expertise in LTE/5G, IoT architecture, and industrial network deployments.",
        description: "Our consultants bring 150+ years of combined experience to help you design, optimize, and future-proof your embedded and network systems.",
      },
      
      useCases: [
        "LTE/5G modem design validation and certification",
        "IoT system architecture design and review",
        "Large-scale industrial network deployment planning",
        "SCADA and automation system integration",
        "Legacy system modernization strategies",
        "Technology selection and vendor evaluation"
      ],
      
      enables: [
        {
          title: "Accelerate Product Development",
          desc: "LTE/5G modem design validation and certification support helps you navigate complex carrier requirements and get to market faster."
        },
        {
          title: "Design Scalable Systems",
          desc: "IoT architecture design and review ensures your systems scale efficiently from pilot to production deployment across thousands of devices."
        },
        {
          title: "Plan Successful Deployments",
          desc: "Network deployment planning for industrial and enterprise environments minimizes risks and ensures reliable operation from day one."
        },
        {
          title: "Integrate Complex Systems",
          desc: "SCADA and automation system integration consulting bridges the gap between legacy infrastructure and modern connectivity requirements."
        },
        {
          title: "Optimize Performance",
          desc: "Performance optimization strategies identify bottlenecks and implement improvements that deliver measurable results."
        },
        {
          title: "Future-Proof Investments",
          desc: "Technology road-mapping and standards compliance guidance protects your investment as technologies and requirements evolve."
        }
      ],
      
      differentiator: {
        title: "Why Choose Tenet for Consulting",
        content: "We're not just consultants — we're engineers who build the systems we recommend. Our advice comes from real-world deployment experience across 150,000+ installed devices in utilities, manufacturing, transportation, and energy sectors worldwide."
      },
      
      techCapabilities: [
        "LTE/5G NR modem design validation",
        "Carrier certification and compliance support",
        "IoT system architecture and design review",
        "Network deployment planning and optimization",
        "SCADA and industrial automation integration",
        "Legacy system modernization strategies",
        "Performance analysis and optimization",
        "Technology selection and vendor evaluation",
        "Standards compliance and certification guidance",
        "Long-term technology road-mapping"
      ],
      
      specs: [
        { k:"Engagement Models",  v:"Project-based, Retainer, Hourly" },
        { k:"Duration",           v:"2 weeks to 6+ months" },
        { k:"Deliverables",       v:"Reports, Architectures, Recommendations" },
        { k:"Industries",         v:"Utilities, Manufacturing, Energy, Transport" },
        { k:"Experience",         v:"150+ years combined team expertise" },
      ],
    },
    software: {
      label:   "Software & Embedded Systems Development",
      badge:   "Services",
      
      hero: {
        headline: "Secure, High-Performance Embedded Software from Silicon to Cloud",
        subhead: "Full-stack firmware and software development optimized for performance, stability, and long-term support.",
        description: "From board bring-up and bootloaders to cloud-connected applications — we build embedded systems that power intelligent products across industries.",
      },
      
      useCases: [
        "New hardware requiring custom firmware and drivers",
        "Linux and OpenWRT-based embedded systems",
        "RTOS applications for real-time control systems",
        "Cloud-connected IoT device software",
        "Legacy system modernization and migration",
        "Custom device management interfaces"
      ],
      
      enables: [
        {
          title: "Bring Hardware to Life",
          desc: "Board bring-up, bootloaders, and hardware abstraction layers get your custom hardware operational quickly with stable, optimized low-level code."
        },
        {
          title: "Build on Proven Platforms",
          desc: "Linux, OpenWRT, and RTOS firmware development leverages battle-tested platforms while customizing for your specific requirements."
        },
        {
          title: "Support Proprietary Hardware",
          desc: "Custom Board Support Packages (BSPs) enable your proprietary hardware to run standard operating systems and development tools."
        },
        {
          title: "Connect to the Cloud",
          desc: "Embedded APIs and cloud-connected application development integrates your devices seamlessly with backend systems and mobile apps."
        },
        {
          title: "Deliver Great User Experience",
          desc: "UI/UX development for device management creates intuitive configuration interfaces that reduce support costs and improve adoption."
        },
        {
          title: "Ensure Long-Term Reliability",
          desc: "Long-term software support, maintenance, and security patching protects your investment and keeps systems secure as threats evolve."
        }
      ],
      
      differentiator: {
        title: "Why Choose Tenet for Software Development",
        content: "We build the firmware and software that powers our own products — tested in real-world deployments across 150,000+ devices. Our code runs 24/7 in mission-critical environments from Arctic weather stations to desert oil fields, proving reliability under extreme conditions."
      },
      
      techCapabilities: [
        "Board bring-up and bootloader development",
        "Hardware abstraction layers (HAL) and device drivers",
        "Linux kernel and OpenWRT customization",
        "RTOS development (FreeRTOS, Zephyr, etc.)",
        "Custom Board Support Packages (BSPs)",
        "Embedded APIs and middleware",
        "Cloud-connected application development",
        "RESTful API and protocol implementation",
        "Web-based device management UI/UX",
        "OTA firmware update systems",
        "Security implementation and hardening",
        "Long-term maintenance and support"
      ],
      
      specs: [
        { k:"Platforms",          v:"Linux, OpenWRT, RTOS, Bare Metal" },
        { k:"Languages",          v:"C, C++, Python, JavaScript" },
        { k:"Protocols",          v:"MQTT, HTTP/S, Modbus, Custom" },
        { k:"Cloud Integration",  v:"AWS, Azure, Google Cloud, Private" },
        { k:"Support Model",      v:"Development + Long-term Maintenance" },
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
