import { ExternalLink, Sparkles } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import SectionHeading from './SectionHeading'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function CaseStudies() {
  return (
    <section id="work" className="py-16 md:py-32 bg-soft border-t border-edge/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-6 md:mb-14">
        <SectionHeading
          label="SELECTED WORK"
          title={"Solutions Built for\nReal-World Problems"}
        />
        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm md:text-base text-body/60 max-w-2xl mx-auto px-2">
          Explore our featured projects and client transformations. Scroll to view our work stack.
        </p>
      </div>

      <ScrollStack
        useWindowScroll={true}
        stackPosition="10%"
        scaleEndPosition="5%"
        itemDistance={40}
        itemScale={0.035}
        itemStackDistance={20}
        baseScale={0.9}
        blurAmount={1}
        rotationAmount={0}
      >
        {caseStudies.map((study, idx) => (
          <ScrollStackItem key={study.id} itemClassName="border border-edge shadow-xl bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between p-4 sm:p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
                    <span
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] rounded-full uppercase"
                      style={{
                        background: `${study.color}15`,
                        color: study.color,
                        border: `1px solid ${study.color}30`
                      }}
                    >
                      {study.category}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-body/40">
                      {study.num} / {String(caseStudies.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark tracking-tight leading-tight">
                    {study.title}
                  </h3>

                  <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-body/70 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] sm:text-xs font-medium text-body/65 bg-soft px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-edge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call-to-actions */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-edge/70">
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-sm shadow-primary/20 group"
                  >
                    View Live Site
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-body/65 border border-edge rounded-xl hover:bg-soft transition-colors"
                  >
                    <Sparkles size={13} className="text-primary" />
                    Discuss Similar Project
                  </a>
                </div>
              </div>

              {/* Right Column: Website Screenshot Preview */}
              <div className="lg:col-span-6 relative p-3 sm:p-6 md:p-8 flex items-center justify-center bg-slate-50/50 lg:rounded-r-[28px] overflow-hidden group">
                {/* Screenshot image container */}
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-edge/80 bg-dark group/preview transition-all duration-500 hover:scale-[1.01]"
                >
                  <img
                    src={study.preview}
                    alt={`${study.title} website preview`}
                    className="w-full h-auto max-h-[190px] sm:max-h-none aspect-[16/9] sm:aspect-[16/10] object-cover sm:object-contain block transition-transform duration-700 group-hover/preview:scale-105"
                    loading="eager"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-dark/40 backdrop-blur-[2px]"
                  >
                    <span
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xl transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300"
                      style={{ background: study.color }}
                    >
                      <ExternalLink size={14} />
                      Visit Website
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}
