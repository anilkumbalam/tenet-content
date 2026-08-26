window.CONTENT = {

  /* ── COMPANY META ── */
  company: {
    name:    "Tenet Networks",
    tagline: "Enterprise SD-WAN, Branch Networking & Industrial Connectivity Platform",
    address: "#541, 5th Floor, Tower A, Logix Technova, Sector 132, NOIDA – 201305 UP, INDIA",
    email:   "info@tenetnetworks.com",
    careers: "careers@tenetnetworks.com",
    partners: "partners@tenetnetworks.com",
    phone:   "+91 120 4165 905",
    whatsapp: "+919354266316",
    hours:   "Monday – Saturday: 10:00 AM – 6:00 PM IST",
    founded: "2017",
    linkedin: "https://www.linkedin.com/company/tenet-networks",
    youtube: "https://www.youtube.com/@tenetnetworks8817",
  },

  /* ═══════════════════════════════════════════════════════════
     ✨ MODERN MODULAR HERO SLIDES - Easy to Update, dont have to change codes ✨
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
    // SLIDE 1: TENET CORE PROPOSITION
    // ════════════════════════════════════════════════════════
    {
      id: "industrial-edge-to-enterprise",
      active: true,
      priority: 5,

      tag: "Industrial Connectivity · Enterprise Networking",
      title: "Connecting the <span class='accent'>Industrial Edge to the Enterprise.</span>",
      subtitle: "Rugged cellular gateways, intelligent WAN platforms and centralized management for the networks that keep critical operations connected.",
      features: [
        { icon: "📡", label: "Industrial 4G/5G Connectivity" },
        { icon: "🌐", label: "Enterprise Networking & SD-WAN" },
        { icon: "☁️", label: "Centralized Network Orchestration" }
      ],

      cta1: { label: "View Our Products →", target: "products", tab: "portfolio" },
      cta2: { label: "Talk to an Engineer →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // SLIDE 2: INDUSTRIAL CONNECTIVITY
    // ════════════════════════════════════════════════════════
    {
      id: "industrial-connectivity",
      active: true,
      priority: 1,

      tag: "Industrial Connectivity · 4G/5G",
      title: "Connectivity Built for <span class='accent'>Where Networks Actually Live.</span>",
      subtitle: "Reliable cellular connectivity for industrial systems, SCADA, factories, infrastructure and demanding field environments.",
      features: [
        { icon: "📡", label: "Indoor & Outdoor Industrial Gateways" },
        { icon: "⚙️", label: "SCADA & Industrial Networking" },
        { icon: "🛡️", label: "Rugged, Secure & Remote-Manageable" }
      ],

      cta1: { label: "Explore Industrial Gateways →", target: "products", tab: "portfolio" },
      cta2: { label: "Talk to an Engineer →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // SLIDE 3: ENTERPRISE NETWORKING
    // ════════════════════════════════════════════════════════
    {
      id: "enterprise-networking",
      active: true,
      priority: 1,

      tag: "Enterprise Networking · SD-WAN",
      title: "Intelligent Networking for <span class='accent'>Distributed Operations.</span>",
      subtitle: "Connect branches, offices, factories and remote sites with intelligent multi-WAN connectivity, traffic management and centralized orchestration.",
      features: [
        { icon: "🌐", label: "Fiber · MPLS · Broadband · 4G · 5G" },
        { icon: "⚡", label: "Intelligent Traffic Steering & Failover" },
        { icon: "☁️", label: "Centralized Network Orchestration" }
      ],

      cta1: { label: "Schedule Demo", target: "contact" },
      cta2: { label: "Explore Enterprise Networking →", target: "products", tab: "cwan" }
    },

    // ════════════════════════════════════════════════════════
    // SLIDE 4: ENGINEERING DIFFERENTIATOR
    // ════════════════════════════════════════════════════════
    {
      id: "engineering-beyond-datasheet",
      active: true,
      priority: 1,

      tag: "RF · Wireless · Network Engineering",
      title: "Engineering the Network <span class='accent'>Beyond the Datasheet.</span>",
      subtitle: "When connectivity depends on RF conditions, antenna placement, propagation, interference and difficult field environments, we engineer around the conditions the network actually faces.",
      features: [
        { icon: "📡", label: "RF & Wireless Engineering" },
        { icon: "🧠", label: "System-Level Optimization" },
        { icon: "🔬", label: "Field-Validated Solutions" }
      ],

      cta1: { label: "Explore Engineering Services →", target: "services" },
      cta2: { label: "Analyze Your Deployment →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // SLIDE 5: ORCHESTRATION + ENGINEERING
    // ════════════════════════════════════════════════════════
    {
      id: "field-resilient-connectivity",
      active: true,
      priority: 1,

      tag: "Industrial Connectivity · Built for the Field",
      title: "Connectivity That Stays On When <span class='accent'>Conditions Get Tough.</span>",
      subtitle: "Industrial networks don't operate in perfect environments. Tenet gateways are designed for demanding deployments where heat, humidity, dust, rain, power fluctuations and difficult RF conditions can challenge connectivity.",
      features: [
        { icon: "💧", label: "Weather & Environmental Resilience" },
        { icon: "📡", label: "Reliable 4G/5G Connectivity" },
        { icon: "⚡", label: "Protection for Demanding Deployments" }
      ],

      cta1: { label: "Explore Industrial Gateways →", target: "products", tab: "portfolio" },
      cta2: { label: "Talk to an Engineer →", target: "contact" }
    },

    // ════════════════════════════════════════════════════════
    // CAMPAIGNS / SEASONAL SLIDES
    // ════════════════════════════════════════════════════════
    {
      id: "diwali-2026",
      active: false,
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

    {
      id: "monsoon-2026",
      active: false,
      priority: 3,
      validFrom: "2026-06-01",
      validUntil: "2026-09-30",

      tag: "☔ Monsoon-Ready Infrastructure",
      title: "<span class='accent'>Monsoon-Proof</span> Connectivity That Never Fails",
      subtitle: "Weatherproof enclosures and lightning protection keep critical infrastructure online through India's harshest monsoons, from heavy rainfall to extreme humidity.",

      weatherProof: [
        { icon: "💧", label: "Water & Dust Resistance" },
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
      id: 'enterprise-wan',
      icon: '🌐',
      title: 'Enterprise SD-WAN',
      subtitle: 'Intelligent WAN for multi-branch offices, retail chains, and distributed enterprises',
      description: 'Connect offices, stores and distributed sites over fiber, broadband, MPLS, 4G and 5G with intelligent traffic steering, centralized visibility and zero-touch deployment.',
      useCases: [
        { icon: '🏢', label: 'Multi-Branch Connectivity' },
        { icon: '🛒', label: 'Retail Chain Networks' },
        { icon: '🏦', label: 'Banking & Financial Services' },
        { icon: '🏭', label: 'Distributed Industrial Sites' }
      ],
      products: ['cwan', 'vpn', 'cms'],
      cta: { label: 'Explore Enterprise SD-WAN →', target: 'products', tab: 'cwan' }
    },
    {
      id: 'sd-branch',
      icon: '🏢',
      title: 'SD-Branch',
      subtitle: 'Fast, secure and centrally managed connectivity for distributed branches',
      description: 'Deploy resilient branch connectivity with multi-WAN, intelligent routing, wireless backup, zero-touch provisioning and centralized cloud management.',
      useCases: [
        { icon: '🏦', label: 'Bank Branches' },
        { icon: '🛒', label: 'Retail Locations' },
        { icon: '🚚', label: 'Distributed Logistics Sites' },
        { icon: '🏢', label: 'Remote Offices' }
      ],
      products: ['cwanexpress', 'vpn', 'cms'],
      cta: { label: 'Explore Branch Connectivity →', target: 'products', tab: 'cwanexpress' }
    },
    {
      id: 'industrial-iot',
      icon: '🏭',
      title: 'Industrial & Critical Infrastructure',
      subtitle: 'Reliable connectivity for factories, utilities, energy and SCADA',
      description: 'Enable always-on connectivity across factories, utilities, substations and remote infrastructure with rugged gateways, SCADA connectivity and centralized management.',
      useCases: [
        { icon: '⚙️', label: 'Factory Automation' },
        { icon: '⚡', label: 'Power & Utilities' },
        { icon: '🔧', label: 'SCADA & Remote Assets' },
        { icon: '🌐', label: 'Multi-Site Operations' }
      ],
      products: ['indoor', 'scada', 'outdoor', 'cms'],
      cta: { label: 'Read Industrial Case Studies →', target: 'company', tab: 'stories' }
    },
    {
      id: 'remote-monitoring',
      icon: '📡',
      title: 'Remote & Distributed Sites',
      subtitle: 'Ruggedized connectivity for surveillance, sensors and field telemetry',
      description: 'Deploy secure, weatherproof connectivity for remote installations, surveillance, environmental monitoring and field telemetry where conventional WAN connectivity is unreliable.',
      useCases: [
        { icon: '📹', label: 'Video Surveillance' },
        { icon: '🌡️', label: 'Environmental Sensors' },
        { icon: '⚡', label: 'Energy & Solar Monitoring' },
        { icon: '🛰️', label: 'Remote Site Access' }
      ],
      products: ['outdoor', 'indoor', 'cms'],
      cta: { label: 'Explore Remote Deployments →', target: 'company', tab: 'stories' }
    },
    {
      id: 'smart-cities',
      icon: '🏙️',
      title: 'Smart Cities & Utilities',
      subtitle: 'Reliable connectivity for smart grids, traffic systems and city-scale SCADA',
      description: 'Power smart grids, traffic management and city-wide SCADA systems with redundant, multi-path connectivity designed for continuous operations.',
      useCases: [
        { icon: '💡', label: 'Smart Grid Management' },
        { icon: '🚦', label: 'Intelligent Traffic Control' },
        { icon: '💧', label: 'Water & Waste Management' },
        { icon: '🔌', label: 'Remote Substation Monitoring' }
      ],
      products: ['scada', 'outdoor', 'cwan'],
      cta: { label: 'See Smart City Deployments →', target: 'company', tab: 'stories' }
    }
  ],

  /* ── STATS ── */
  stats: [
    { n:"150K+",  l:"Devices Deployed" },
    { n:"200+",   l:"Customers Served" },
    { n:"3+",     l:"Continents Deployed" },
    { n:"150+",   l:"Years Combined Leadership Experience" },
  ],

  /* ── PRODUCTS ── */
  products: {
    m2m_intro: {
      heading:  "Enterprise & Industrial Edge Connectivity",
      subhead:  "4G/5G Gateways for Branches, Industrial Sites and Remote Infrastructure",
      body:     "Empower seamless machine to machine communication across industrial sites, enterprises and remote deployments with our rugged, high-performance cellular gateway. Designed for real-world challenges, our gateway portfolio ensures Always-On Connectivity, secure data transport and centralized control.",
    },
    ces_intro: {
      heading:  "Enterprise SD-WAN (cWAN)",
      subhead:  "Intelligent Multi-WAN Connectivity for Modern Enterprises",
      body:     "Connect branches, offices, factories and remote sites across fiber, broadband, MPLS, 4G and 5G. cWAN combines intelligent traffic steering, WAN bonding, analytics, zero-touch provisioning and centralized orchestration for resilient distributed networks.",
    },
    indoor: {
      label:   "Credo Indoor Industrial Gateways",
      badge:   "Credo M2M Gateway",
      
      // NEW STRUCTURE - Decision-first layout
      hero: {
        headline: "Reliable Indoor Connectivity for Industrial and Enterprise Environments",
        subhead: "Built for control rooms, factory floors and enterprise networks where downtime is not acceptable.",
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
          desc: "Provision and manage hundreds of devices remotely using Credo Cloud. One-touch template-based activation gets sites online in minutes."
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
          desc: "Full control via Credo Cloud, web interface or SMS commands, even in the most inaccessible locations. Real-time visibility and diagnostics."
        },
        {
          title: "Secure Your Data",
          desc: "Multiple VPN protocols (IPSec, OpenVPN, L2TP) with enterprise firewall and encryption protect your critical communications."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Built for 24×7 industrial operation with fanless cooling, metal enclosure and field-proven reliability across 80,000+ deployments. Designed not just in the lab, but validated in real-world factories, warehouses and remote sites across three continents."
      },
      
      techCapabilities: [
        "4G LTE / LTE-A / 5G NR with backward compatibility",
        "Dual-SIM automatic failover and load balancing",
        "Multi-VPN support (IPSec, OpenVPN, L2TP, GRE)",
        "Advanced routing protocols (OSPF, BGP, static routes)",
        "Enterprise firewall with stateful packet inspection",
        "Zero-touch deployment and remote provisioning",
        "Integration with Credo Cloud (CMS)",
        "SNMP, TR069, SSH, and web-based management",
        "DIN-rail or wall-mountable compact enclosure",
        "Wide voltage input (9-36V DC) with reverse polarity protection"
      ],
      
      specs:   [
        { k:"Network",        v:"4G LTE / 5G NR" },
        { k:"Connectivity",   v:"Dual-SIM Failover" },
        { k:"Routing",        v:"Enterprise-Grade (OSPF, BGP)" },
        { k:"Security",       v:"Multi-VPN, Firewall, Encryption" },
        { k:"Management",     v:"Web, CLI, SNMP, Credo Cloud, TR069" },
        { k:"Form Factor",    v:"Compact DIN-Rail / Wall Mount" },
        { k:"Power",          v:"Wide Voltage Input (9-36V DC)" },
        { k:"Environment",    v:"Industrial Grade (-30°C to +70°C)" },
        { k:"Deployment",     v:"80,000+ installations worldwide" },
      ],
    },
    outdoor: {
      label:   "Credo Outdoor Industrial Gateways",
      badge:   "Credo M2M Gateway",
      
      hero: {
        headline: "Ruggedized Outdoor Connectivity for Extreme Environments",
        subhead: "Built for remote installations, surveillance poles, and utility substations where failure is not an option.",
        description: "IP65-rated, pole-mountable and powered by PoE or wide range DC voltage. Engineered to survive rain, dust, temperature extremes and years of 24×7 operation.",
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
          desc: "IP65 weatherproof enclosure withstands rain, dust and temperature extremes from -30°C to +70°C. Fanless design eliminates moving parts that fail in harsh environments."
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
          desc: "Optional Dying gasp alerts instantly notify you when outdoor sites lose power, before equipment goes offline and before it's too late."
        },
        {
          title: "Manage Remotely",
          desc: "Complete control via CMS, TR069, SNMP or SMS, even in the most inaccessible outdoor locations. Zero-touch provisioning simplifies deployment."
        },
        {
          title: "Handle Complex Topologies",
          desc: "Enterprise routing protocols with multi-VPN support handle demanding outdoor network deployments with encrypted site-to-site connectivity."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Engineered specifically for outdoor deployment with IP65-rated weatherproof housing, integrated lightning protection and industrial-grade components tested to withstand shock, vibration and electromagnetic interference. Proven in thousands of remote installations across all climate zones."
      },
      
      techCapabilities: [
        "5G NR / 4G LTE-A with integrated high-gain cellular antennas",
        "IP65 weatherproof rating (dust-tight, water jet protected)",
        "Dual-SIM automatic failover and carrier redundancy",
        "PoE (48V 802.3af/at) or wide-voltage DC input (9-48V)",
        "Pole and mast mounting with outdoor-rated hardware",
        "Multi-VPN support (IPSec, OpenVPN, L2TP, GRE)",
        "Advanced routing with OSPF, BGP, and static routes",
        "Dying gasp alert for power loss notification (optional)",
        "Gigabit Ethernet ports for high-bandwidth applications",
        "Extended temperature range (upto +70°C operational)"
      ],
      
      specs: [
        { k:"Network",        v:"5G NR / 4G LTE-A" },
        { k:"Weatherproof",   v:"IP65 Rated (Dust/Water Protected)" },
        { k:"Connectivity",   v:"Dual-SIM Failover" },
        { k:"Power",          v:"PoE (48V) or DC (9-48V)" },
        { k:"Mounting",       v:"Pole/Mast (Outdoor Hardware Included)" },
        { k:"Security",       v:"Multi-VPN, Firewall, Encryption" },
        { k:"Management",     v:"CMS, TR069, SNMP, SMS" },
        { k:"Environment",    v:"Extended Industrial (upto +70°C)" },
        { k:"Deployment",     v:"Thousands of remote sites worldwide" },
      ],
    },
    scada: {
      label:   "Industrial 4G/5G Cellular SCADA Gateways",
      badge:   "M2M Cellular Gateway",
      
      hero: {
        headline: "Protocol-Aware Connectivity for Industrial Automation & Utilities",
        subhead: "Purpose-built for SCADA, smart grids and industrial control systems where every data point matters.",
        description: "Native Modbus RTU/TCP, serial interfaces (RS232/RS485) and enterprise security for deterministic, real-time telemetry and remote control.",
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
          desc: "Native Modbus RTU/TCP and serial interfaces (RS232/RS485) connect directly to PLCs, RTUs and field instruments without protocol converters or middleware."
        },
        {
          title: "Secure Critical Infrastructure",
          desc: "Military-grade encryption, VPN tunneling and enterprise firewall protect SCADA communications from cyber threats and unauthorized access."
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
          desc: "Industrial-grade components, fanless cooling and wide voltage support handle control cabinet environments with temperature extremes and electrical noise."
        },
        {
          title: "Minimize Power Consumption",
          desc: "Ultra-low power design keeps remote sites operational even on backup batteries during grid failures or in off-grid solar installations."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Purpose-engineered for SCADA deployments with native industrial protocol support, deterministic performance and security features designed specifically for critical infrastructure. Tested and certified for deployment in utilities, energy, water and industrial automation environments."
      },
      
      techCapabilities: [
        "Native Modbus RTU and Modbus TCP protocol support",
        "RS232 and RS485 serial ports for direct PLC/RTU connection",
        "4G LTE with dual-SIM automatic carrier failover",
        "Multi-VPN tunneling (IPSec, OpenVPN, GRE, L2TP)",
        "VRRP high-availability with hardware watchdog",
        "Advanced routing (OSPF, BGP, static) for multi-site topologies",
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
        description: "High-performance hardware with advanced security, sub-second failover and centralized management for multi-site VPN deployments.",
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
          desc: "Sub-second hardware-level failover with dual WAN, automatic backup and hardware watchdogs keep critical business links operational 24/7."
        },
        {
          title: "Balance Traffic Intelligently",
          desc: "Session-based load balancing distributes traffic across multiple WAN links while VRRP provides gateway redundancy for high-availability deployments."
        },
        {
          title: "Support Modern Networks",
          desc: "Full IPv4/IPv6 dual-stack with enterprise firewall, NAT, port forwarding, DNS and routing protocols handle complex network topologies."
        },
        {
          title: "Deploy and Manage at Scale",
          desc: "Credo Cloud enables remote provisioning, firmware updates and visual monitoring across hundreds of distributed VPN gateways from a single dashboard."
        },
        {
          title: "Install Anywhere",
          desc: "Rugged industrial design with wide voltage input and flexible connectivity options (electrical and fiber) adapts to diverse deployment environments."
        }
      ],
      
      differentiator: {
        title: "Why This Gateway Stands Out",
        content: "Engineered for carrier-grade performance with hardware-accelerated VPN encryption, sub-second failover and proven reliability in demanding ISP and enterprise environments. Combines the flexibility of software-defined networking with the robustness of purpose-built hardware."
      },
      
      techCapabilities: [
        "Multiple VPN protocols: IPSec, OpenVPN, GRE, L2TP, EOIP",
        "Dual WAN with automatic failover and load balancing",
        "Sub-second hardware-level switchover for zero-downtime",
        "Full IPv4/IPv6 stack with dual-stack routing",
        "Enterprise firewall with stateful packet inspection",
        "VRRP for gateway redundancy and high availability",
        "Hardware watchdog for automatic recovery",
        "Remote management via Credo Cloud platform",
        "Wide voltage input (9-48V DC) for flexible power",
        "Versatile connectivity (electrical copper and fiber options)"
      ],
      
      specs: [
        { k:"VPN Tunnels",   v:"IPSec, OpenVPN, GRE, L2TP, EOIP" },
        { k:"WAN",           v:"Dual WAN with Automatic Failover" },
        { k:"Routing",       v:"Full IPv4/IPv6, Firewall, NAT, VRRP" },
        { k:"Failover",      v:"Sub-Second Hardware-Level Switchover" },
        { k:"Management",    v:"Credo Cloud (Remote Provisioning & Monitoring)" },
        { k:"Power",         v:"Rugged, Wide Input Voltage (9-48V)" },
        { k:"Connectivity",  v:"Electrical Copper & Fiber Options" },
        { k:"Environment",   v:"Industrial-Grade Components" },
      ],
    },
    cms: {
      label:   "Credo Cloud",
      badge:   "Network Orchestration Platform",
      
      hero: {
        headline: "One Control Plane for Your Distributed Network",
        subhead: "Cloud network management and orchestration for enterprise branches, industrial sites and remote gateways.",
        description: "Deploy, configure, monitor, secure and optimize distributed networks with zero-touch provisioning, real-time visibility, automation and remote troubleshooting.",
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
          desc: "Centrally control firmware, configurations, SIM cards and access policies across your entire deployment from a single unified dashboard."
        },
        {
          title: "Deploy Without Site Visits",
          desc: "Zero-touch provisioning with configuration templates and remote activation enables you to roll out hundreds of devices without sending technicians to the field."
        },
        {
          title: "See Everything in Real-Time",
          desc: "Real-time device status, link quality, data usage and critical alerts ensure you catch problems before they impact operations."
        },
        {
          title: "Scale On Demand",
          desc: "Deploy on public cloud, private cloud or on-premise with high-availability architecture that grows with your network."
        },
        {
          title: "Control Access Securely",
          desc: "Multi-tenancy, role-based access control (RBAC) and granular permissions ensure secure operations across teams and organizations."
        },
        {
          title: "Troubleshoot Remotely",
          desc: "Visual monitoring tools, diagnostics and remote access capabilities enable rapid troubleshooting without physical site access."
        }
      ],
      
      differentiator: {
        title: "Why This Platform Stands Out",
        content: "Purpose-built for industrial and enterprise deployments with advanced automation, multi-tenant architecture and proven scalability managing tens of thousands of devices in production. Unlike generic device management platforms, CMS understands cellular gateways, SD-WAN, and industrial protocols natively."
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
      label:   "cWAN – Enterprise SD-WAN Platform",
      badge:   "Enterprise Networking",
      
      hero: {
        headline: "Connect Every Site. Make Every WAN Link Count.",
        subhead: "Enterprise SD-WAN for branches, factories, utilities and distributed operations that need resilient connectivity and centralized control.",
        description: "cWAN brings fiber, broadband, MPLS, Ethernet, LTE and 5G underlays together through intelligent traffic steering, per-packet WAN bonding, centralized orchestration and real-time network visibility.",
      },
      
      useCases: [
        "Multi-branch enterprise networks",
        "Power, utilities and critical infrastructure",
        "Industrial and manufacturing sites",
        "Banking, retail and distributed service locations",
        "Remote and bandwidth-constrained sites",
        "ISP and MSP network deployments"
      ],
      
      enables: [
        {
          title: "Use Multiple WAN Links as One Resilient Network",
          desc: "Per-packet WAN bonding can aggregate available links across LTE/5G, MPLS, DSL, Ethernet and fiber to improve bandwidth utilization and maintain connectivity when individual links degrade or fail."
        },
        {
          title: "Steer Traffic Around Real-World Network Conditions",
          desc: "Intent-based routing and dynamic traffic steering use business goals such as latency, jitter and cost to determine how traffic should move across available WAN paths."
        },
        {
          title: "Keep Distributed Operations Connected",
          desc: "Split-plane architecture separates control and data functions, supporting resilient operation and rapid recovery when network components or WAN links experience problems."
        },
        {
          title: "See the Network From One Place",
          desc: "Centralized orchestration provides topology visibility, tunnel health, link quality, alerts, reporting and analytics so network teams can monitor and optimize distributed sites remotely."
        },
        {
          title: "Deploy Sites Without Sending IT Teams On-Site",
          desc: "Zero-touch provisioning and remote firmware updates simplify rollout across distributed locations, while centralized policies reduce repetitive configuration work."
        },
        {
          title: "Connect Cloud and SaaS Applications More Directly",
          desc: "Internet breakout and DNS offload support local access to cloud and SaaS applications, helping reduce unnecessary backhaul and improve application performance."
        }
      ],
      
      differentiator: {
        title: "Why cWAN",
        content: "cWAN is designed around the realities of distributed networks: multiple WAN underlays, changing link conditions, remote sites and the need for centralized operational control. Its combination of split-plane architecture, per-packet WAN bonding, intelligent routing, analytics and visual orchestration gives network teams a single platform for operating complex WAN environments."
      },
      
      techCapabilities: [
        "Split-plane architecture with independent control and data planes",
        "Per-packet WAN bonding for bandwidth aggregation",
        "Intent-based routing and dynamic traffic steering",
        "Weighted load balancing based on real-time conditions",
        "Application-aware QoS and traffic prioritization",
        "Multi-underlay support: LTE/5G, MPLS, DSL, Ethernet and fiber",
        "Centralized visual orchestration and real-time topology monitoring",
        "Advanced reporting and network analytics",
        "Zero-touch provisioning and remote firmware updates",
        "Encrypted overlay tunnels and secure boot",
        "Internet breakout and DNS offload for cloud/SaaS applications",
        "Multi-tenant architecture for ISP and MSP deployments"
      ],
      
      specs: [
        { k:"Architecture",   v:"Split-Plane SD-WAN with Analytics" },
        { k:"WAN Bonding",    v:"Per-Packet Link Aggregation" },
        { k:"Underlay",       v:"Ethernet, LTE/5G, DSL, MPLS, Fiber" },
        { k:"Routing",        v:"Intent-Based Routing + Dynamic Traffic Steering" },
        { k:"Load Balancing", v:"Weighted, Condition-Aware" },
        { k:"Orchestration",  v:"Centralized Visual Controller" },
        { k:"Visibility",     v:"Topology, Tunnel Health, Link Quality & Analytics" },
        { k:"Security",       v:"Encrypted Overlay + Secure Boot" },
        { k:"Provisioning",   v:"Zero-Touch + Remote Firmware Updates" },
        { k:"Target",         v:"Enterprises, Utilities, Industrial Networks, ISPs & MSPs" },
      ],
    },
    cwanexpress: {
      label:   "cWAN Express – Streamlined SD-WAN for the Edge",
      badge:   "Enterprise Networking",
      
      hero: {
        headline: "SD-WAN for Branches & Distributed Sites",
        subhead: "Fast deployment, intelligent routing and resilient multi-WAN connectivity for branches, retail locations and distributed enterprises.",
        description: "A streamlined SD-WAN experience for edge locations, combining zero-touch deployment, intelligent routing, centralized orchestration and automatic failover without unnecessary operational complexity.",
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
          desc: "Zero-touch provisioning means ship devices to site, power on and they self-configure. Scale to hundreds of edge locations without on-site IT expertise or truck rolls."
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
          desc: "Visual orchestration interface provides real-time topology monitoring, tunnel health and alerts from one unified dashboard. Manage all edge devices and policies remotely."
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
      label:   "Custom Hardware",
      badge:   "Services",
      
      hero: {
        headline: "Custom Hardware and Software Solutions Engineered for Your Exact Needs",
        subhead: "When off-the-shelf won't work, we design and build exactly what your deployment requires.",
        description: "From ruggedized enclosures to protocol converters and specialized boards, we engineer solutions for unique industrial challenges.",
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
          desc: "We design custom solutions for problems that standard products can't solve, from extreme temperature enclosures to specialized protocol bridges."
        },
        {
          title: "Integrate Legacy Systems",
          desc: "Custom protocol converters and interface boards bridge your legacy equipment with modern networks without replacing expensive existing infrastructure."
        },
        {
          title: "Meet Exact Specifications",
          desc: "Custom PCB design, specialized I/O expansion and tailored hardware integration deliver precisely what your application demands."
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
          desc: "You retain full intellectual property rights to custom designs. No vendor lock-in, complete control over your solution."
        }
      ],
      
      differentiator: {
        title: "Why Choose Tenet for Custom Engineering",
        content: "150+ years of combined engineering experience across industrial automation, cellular connectivity and embedded systems. We've solved custom challenges for clients across utilities, manufacturing, oil & gas, and transportation — from Arctic installations to tropical deployments."
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
      label:   "RF, Wireless & Network Engineering",
      badge:   "Services",
      
      hero: {
        headline: "Expert Technical Guidance from Design to Deployment",
        subhead: "RF, wireless and network engineering for enterprise, industrial and distributed connectivity.",
        description: "Our consultants bring 150+ years of combined experience to help you design, optimize and future-proof your embedded and network systems.",
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
        content: "We're not just consultants. We're engineers who build the systems we recommend. Our advice comes from real-world deployment experience across 150,000+ installed devices in utilities, manufacturing, transportation and energy sectors worldwide."
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
      label:   "Embedded Software",
      badge:   "Services",
      
      hero: {
        headline: "Secure, High-Performance Embedded Software from Silicon to Cloud",
        subhead: "Full-stack firmware and embedded software optimized for performance, stability and long-term support.",
        description: "From board bring-up and bootloaders to cloud-connected applications, we build embedded systems that power intelligent products across industries.",
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
          desc: "Board bring-up, bootloaders and hardware abstraction layers get your custom hardware operational quickly with stable, optimized low-level code."
        },
        {
          title: "Build on Proven Platforms",
          desc: "Linux, OpenWRT and RTOS firmware development leverages battle-tested platforms while customizing for your specific requirements."
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
          desc: "Long-term software support, maintenance and security patching protects your investment and keeps systems secure as threats evolve."
        }
      ],
      
      differentiator: {
        title: "Why Choose Tenet for Software Development",
        content: "We build the firmware and software that powers our own products and tested in real-world deployments across 150,000+ devices. Our code runs 24/7 in mission-critical environments from Arctic weather stations to desert oil fields, proving reliability under extreme conditions."
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
    who_title:  "Enterprise Networking Built for the Real World",
    who_body:   "At Tenet Networks, we build connectivity platforms for distributed enterprises, industrial operations and critical infrastructure. Our portfolio combines enterprise SD-WAN, cloud-managed edge connectivity, 4G/5G gateways and deep RF, embedded and network engineering.\n\nOur systems are deployed across 150,000+ installations worldwide. From the cloud control plane to the cellular edge, we design networks around the conditions in which they actually have to operate.",
    offerings:  [
      { icon:"🌐", h:"Enterprise SD-WAN & Branch Networking", p:"Intelligent WAN connectivity for distributed enterprises, branches and remote locations with centralized orchestration and resilient multi-WAN." },
      { icon:"☁️", h:"Credo Cloud", p:"A centralized control plane for provisioning, configuration, monitoring, analytics, firmware and remote operations across distributed networks." },
      { icon:"📡", h:"Industrial & Wireless Edge", p:"Rugged 4G/5G gateways and SCADA connectivity for factories, utilities, energy and remote infrastructure." },
      { icon:"🔬", h:"RF, Embedded & Network Engineering", p:"Deep engineering across RF, custom hardware, embedded software and network architecture when standard solutions aren't enough." },
    ],
    why_title:  "Enterprise-Ready. Field-Proven.",
    why_body:   "A connectivity platform backed by real-world deployment experience and deep engineering expertise.",
    why_cards:  [
      { icon:"🏆", h:"Proven at Scale",       p:"150K+ deployed devices across enterprise, industrial and critical-infrastructure environments." },
      { icon:"🎯", h:"Built for Real Networks",         p:"Multi-WAN, cellular, SD-WAN and industrial edge capabilities designed around real deployment constraints." },
      { icon:"🤝", h:"Engineering Partnership",    p:"From architecture and deployment to custom hardware, firmware and long-term support, we can stay involved across the lifecycle." },
      { icon:"🚀", h:"Engineered in India",   p:"Deep RF, embedded and networking expertise developed in India and deployed across global environments." },
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
    why_body:   "At Tenet Networks, your career is more than a job — it's an opportunity to make a real impact. We build technology that keeps industries running, cities connected, and enterprises secure. Our people are at the heart of this mission, and we're committed to helping you grow, thrive, and succeed.",
    life_cards: [
      { icon:"🌱", h:"Learning & Development",    p:"Mentorship, structured training, and hands-on project experience. Many of our senior engineers started as interns. We support continuous learning and sponsor higher education for high-potential team members." },
      { icon:"🏠", h:"Strong Community",      p:"A culture of respect, empathy, and genuine care. We celebrate personal milestones together and support each other through challenges. Work-life balance isn't just policy — it's practice." },
      { icon:"🎯", h:"Real Impact & Purpose",      p:"Your work directly shapes critical infrastructure and future-ready networks. See your code running in thousands of deployments. Watch your designs solve real problems for real people." },
    ],
    programs: [
      { tag:"🎓 Students",          h:"Internships",          p:"Hands-on experience for engineering students working on real industrial networking projects. Recent intern projects have made it into production systems." },
      { tag:"🚀 Fresh Graduates",   h:"Trainee Programmes",   p:"Structured pathways in RF engineering, embedded systems, and network architecture. We invest in your growth from day one with mentorship and training." },
      { tag:"🌐 Experienced",       h:"Join Our Team",     p:"Current focus areas: RF & Antenna Engineering, Embedded Firmware, IoT System Design, Technical Sales, and Field Engineering. We value problem-solvers who want to build things that matter." },
    ],
    what_we_look_for: {
      title: "What We Look For",
      items: [
        "✓ Curiosity and willingness to learn",
        "✓ Problem-solving mindset and hands-on approach",
        "✓ Passion for building technology that matters",
        "✓ Team players who communicate openly and respectfully",
      ],
      note: "No perfect candidate exists. If you're excited about what we do and ready to learn, we want to hear from you."
    },
  },

  /* ── CUSTOMER STORIES ── */
  // Stories will be loaded asynchronously via loadStoriesAsync()
  // Initialize as empty array, will be populated when page loads
  stories: [],

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
      { icon:"📦", h:"Distributors",               p:"Scale your distribution network with our proven, field-hardened product portfolio." },
      { icon:"🤝", h:"Partners",                    p:"Resell and deploy Tenet solutions for your enterprise and industrial customer base." },
      { icon:"⚙️", h:"Value Added System Integrators", p:"Integrate our technology into your custom solutions for vertical-specific markets." },
      { icon:"🏢", h:"OEM Partners",               p:"White-label and OEM opportunities to build Tenet technology into your branded products." },
    ],
  },

}; /* END CONTENT */

/* ═══════════════════════════════════════════════════════════════
   ASYNC STORIES LOADER
   Fixed: Replaced deprecated synchronous XHR with modern fetch API
   ═══════════════════════════════════════════════════════════════ */

/**
 * Load stories asynchronously using modern fetch API
 * @returns {Promise<Array>} Array of story objects
 */
window.loadStoriesAsync = async function() {
  try {
    const response = await fetch('/stories/stories.json');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Update CONTENT.stories with loaded data
    if (Array.isArray(data)) {
      window.CONTENT.stories = data;
      console.log('✅ Loaded', data.length, 'customer stories from /stories/stories.json');
    } else {
      console.error('❌ Stories data is not an array');
      window.CONTENT.stories = [];
    }
    
    return window.CONTENT.stories;
    
  } catch (error) {
    console.error('❌ Failed to load stories:', error.message);
    window.CONTENT.stories = [];
    return [];
  }
};

/**
 * Initialize stories on page load
 * Automatically loads stories when DOM is ready
 */
(function initStoriesLoader() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
      await window.loadStoriesAsync();
      // Trigger custom event for other code that depends on stories
      window.dispatchEvent(new CustomEvent('storiesLoaded'));
    });
  } else {
    // DOM already loaded, load immediately
    window.loadStoriesAsync().then(() => {
      window.dispatchEvent(new CustomEvent('storiesLoaded'));
    });
  }
})();