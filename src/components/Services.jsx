import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sparkles, Layers, MoveHorizontal } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CircularCarousel from './CircularCarousel'

const capabilityItems = [
  {
    num: '01',
    src: '/mobile app development.png',
    alt: 'Modern full stack mobile app platforms',
    title: 'Mobile Application Development',
    subtitle: 'iOS and Android Applications',
    description: 'We build high-performance iOS and Android applications. Our focus is on creating seamless, intuitive user experiences with smooth animations, real-time data synchronization, and offline-first capabilities.',
    features: ['iOS', 'Android'],
  },
  {
    num: '02',
    src: '/Web & App Platforms Workspace.png',
    alt: 'Modern full stack web and app platforms',
    title: 'Web & App Platforms',
    subtitle: 'Modern Full-Stack Applications',
    description: 'High-performance, responsive web and mobile applications designed with React, Next.js, and TypeScript, engineered around real business scale.',
    features: ['React / Next.js', 'Full-stack Systems', 'SaaS Platforms', 'Mobile Apps'],
  },
  {
    num: '03',
    src: '/Futuristic AI Workflow Assistant.png',
    alt: 'Intelligent automation systems',
    title: 'AI Automation',
    subtitle: 'Orchestrated Workflows',
    description: 'Automate repetitive operations using intelligent self-healing event triggers, autonomous agents, and AI-powered decision intelligence.',
    features: ['Workflow Automation', 'n8n & Make', 'Intelligent Triggers', 'Zero-Human Loops'],
  },
  {
    num: '04',
    src: '/Custom Software System Blueprint.png',
    alt: 'Custom enterprise software',
    title: 'Custom Software',
    subtitle: 'High-Scale Backend Systems',
    description: 'Purpose-built software engineered around your organization’s workflows, distributed architectures, and mission-critical business requirements.',
    features: ['Distributed Systems', 'REST & gRPC APIs', 'Internal Dashboards', 'Microservices'],
  }
  ,
  {
    num: '05',
    src: '/customer_service_bot.png',
    alt: 'AI strategy and technical consulting',
    title: 'Customer Service Bot',
    subtitle: 'Architecture & Strategy',
    description: 'Define the right technical roadmap, conduct automation feasibility audits, and build compliance-ready AI implementation strategies.',
    features: ['AI Strategy', 'Tech Architecture', 'Automation Audits', 'Implementation Plan'],
  },
  {
    num: '06',
    src: '/digital marketing.png',
    alt: 'Digital marketing',
    title: 'Digital Marketing',
    subtitle: 'AI-Driven Growth',
    description: 'Turn data into growth. We build intelligent marketing systems that optimize campaigns, personalize user journeys, and maximize ROI through AI-powered insights.',
    features: ['AI Marketing Strategy', 'SEO & Content Automation', 'Performance Analytics', 'Lead Generation Systems'],
  },
  {
    num: '07',
    src: '/Autonomous AI Agent Holographic Workspace (1).png',
    alt: 'Autonomous agent networks',
    title: 'Autonomous Agents',
    subtitle: 'Goal-Driven Execution',
    description: 'Autonomous agents capable of tool calling, persistent state memory, and multi-step reasoning to accomplish complex tasks without manual intervention.',
    features: ['LangGraph', 'CrewAI', 'Tool Calling', 'Persistent Memory'],
  },
  {
    num: '08',
    src: '/Futuristic AI Data Engineering Workstation.png',
    alt: 'AI Engineering and neural pipelines',
    title: 'AI Engineering',
    subtitle: 'Neural Architectures & LLMs',
    description: 'Build production-ready AI systems with custom model fine-tuning, RAG architectures, multi-agent frameworks, and high-throughput inference pipelines.',
    features: ['AI Agents', 'RAG Systems', 'LLM Integration', 'AI APIs'],
  },
  {
    num: '09',
    src: '/Neon Analytics Command Centre.png',
    alt: 'Data pipelines and analytics telemetry',
    title: 'Data & Analytics',
    subtitle: 'Real-Time Intelligence',
    description: 'Transform raw data into real-time analytical dashboards, predictive intelligence models, and automated operational decision pipelines.',
    features: ['Data Pipelines', 'Real-time Telemetry', 'Predictive Models', 'AI Analytics'],
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCapability = capabilityItems[activeIndex] || capabilityItems[0]

  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="CAPABILITIES & SERVICES"
          title={"Technology That Turns\nComplex Problems Into Simple Systems"}
          description="We design and build intelligent digital systems that combine AI, automation, software engineering, and data."
        />

        {/* 3D Showcase Stage */}
        <div className="mt-14 relative rounded-3xl bg-[#07090E] text-white border border-white/10 p-5 sm:p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-light/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Stage Bar: Mode Controls & Drag Guide */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles size={18} className="text-primary-light" />
                The Solutions We Offer
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/40">
              <MoveHorizontal size={13} />
              Drag to spin or scroll
            </span>
          </div>

          {/* Circular Carousel 3D Arena */}
          <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] my-4">
            <CircularCarousel
              items={capabilityItems}
              preset="panorama"
              direction="right"
              intro="rise"
              cardWidth={230}
              aspectRatio={1}
              gap={28}
              speed={13}
              captions={true}
              fadeColor="#07090E"
              cornerRadius={14}
              onChange={(index) => setActiveIndex(index)}
              onItemClick={(_, index) => setActiveIndex(index)}
            />
          </div>

          {/* Active Capability Spotlight Drawer */}
          <div className="relative z-10 pt-6 border-t border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Info & Number */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      SYSTEM {activeCapability.num}
                    </span>
                    <span className="h-px w-8 bg-white/15" />
                    <span className="text-xs text-white/50">{activeCapability.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {activeCapability.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-white/70 leading-relaxed">
                    {activeCapability.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeCapability.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] font-medium text-white/80 bg-white/[0.07] px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Action */}
                <div className="lg:col-span-3 flex lg:justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors shadow-[0_4px_20px_rgba(79,115,232,0.3)]"
                  >
                    <span>Request System Scope</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
