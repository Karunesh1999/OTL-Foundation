import React from 'react';
import {
  ShieldCheck,
  Award,
  Users2,
  FileCheck2,
  DollarSign,
  PhoneCall,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface AboutSectionProps {
  onRequestInspection?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestInspection }) => {
  const differentiators = [
    {
      icon: <Users2 className="w-5 h-5 text-secondary" />,
      title: 'Direct Top-Line Personnel',
      description:
        'You never speak with an offshore call center or order taker. You deal directly with senior personnel carrying 35 years of California field experience.',
    },
    {
      icon: <Award className="w-5 h-5 text-secondary" />,
      title: 'Factory to Field Mastery',
      description:
        'Deep working knowledge spanning manufacturing plants, dealer logistics, site prep, proprietary foundation systems, and seismic tie-downs.',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-secondary" />,
      title: 'HUD & 433A Compliance',
      description:
        'Intimate familiarity with FHA, VA, and conventional loan underwriting requirements and California recorded 433A permanent foundation procurement.',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-secondary" />,
      title: '$0 Upfront Escrow Billing',
      description:
        'All inspection, certification, and retrofit costs can be billed directly through closing escrow, protecting your client from upfront out-of-pocket fees.',
    },
  ];

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/15 relative overflow-hidden" id="about-us">
      {/* Background architectural grid pattern accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* TOP ROW: ENLARGED IMAGE ON LEFT & STORY/CTAs ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: ENLARGED REALISTIC IMAGE & FLOATING BADGES (6 cols on lg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full">
              
              {/* Decorative background shadow glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/20 to-primary-fixed/20 rounded-2xl blur-xl opacity-70 -z-10" />

              {/* Main Realistic Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest group">
                <img
                  src="/images/about-contractor-team.jpg"
                  alt="OnTheLevel Licensed California Foundation Contractors Inspecting Manufactured Home"
                  className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Image Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Inset Badge: On-Site California Inspection */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-on-primary text-[11px] font-bold uppercase tracking-wider mb-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Active Field Operations</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-snug drop-shadow-sm">
                    Direct on-site foundation inspection &amp; permanent retrofitting across 58 California counties.
                  </p>
                </div>
              </div>

              {/* Floating Top Badge: 35+ Years Family-Owned */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl border border-outline-variant/20 shadow-xl flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-lg bg-secondary text-on-primary flex items-center justify-center font-extrabold text-lg shadow-sm">
                  35+
                </div>
                <div>
                  <div className="font-headline-sm text-xs font-bold text-on-surface leading-tight">
                    Years of Field Craft
                  </div>
                  <div className="text-[11px] text-on-surface-variant font-medium">
                    Family-Owned Since 1990
                  </div>
                </div>
              </div>

              {/* Floating Bottom-Right Badge: Dual CA Licensure */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl border border-outline-variant/20 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-secondary-container" />
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface">
                    Dual California Licenses
                  </div>
                  <div className="text-[11px] text-on-surface-variant font-mono">
                    Class B #677241 &bull; C-47 #1022204
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: NARRATIVE & STORY (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider w-fit mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>35+ Years of California Specialty Field Expertise</span>
            </div>

            {/* Headline */}
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight leading-tight mb-4">
              Manufactured Home Specialists &amp; Direct Engineering Authority
            </h2>

            {/* Story Paragraphs */}
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              As a family-owned California contractor, <strong className="text-on-surface font-semibold">OnTheLevel</strong> has been serving the direct foundation, seismic retrofit, and compliance needs of manufactured home residents, lenders, and realtors for over three and a half decades.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              The manufactured home loan or title process can often feel overwhelming. Because we understand the exact laundry list of underwriting guidelines, we eliminate the guesswork. When you work with us, you are communicating directly with experienced field specialists who know California building codes and escrow requirements inside and out.
            </p>

            {/* Action Buttons & Phone Direct */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestInspection}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md font-bold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Speak with a Foundation Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:8008076288"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-outline-variant/30 hover:border-secondary/40 bg-surface-container-lowest text-on-surface hover:text-secondary font-label-md text-label-md font-semibold transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-secondary" />
                <span>(800) 807-6288</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 4 FEATURE CARDS IN A SINGLE ROW WITH HOVER SCALE (4 cols on lg) */}
        <div className="mt-14 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/40 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 ease-out group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high group-hover:bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
