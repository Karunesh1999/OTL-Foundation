import React from 'react';
import { Star, ShieldCheck, Award, MessageSquareHeart, CheckCircle2, ArrowDown, PenTool } from 'lucide-react';

interface TestimonialsHeroSectionProps {
  onScrollToForm?: () => void;
  onScrollToGrid?: () => void;
}

export const TestimonialsHeroSection: React.FC<TestimonialsHeroSectionProps> = ({
  onScrollToForm,
  onScrollToGrid,
}) => {
  return (
    <section className="relative overflow-hidden bg-surface-container-low pt-12 pb-16 lg:py-20 border-b border-outline-variant/15">
      {/* Background Decorative Ambient Gradient */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Trust Signals & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold flex items-center gap-1.5 shadow-xs">
                <Award className="w-3.5 h-3.5" />
                <span>35+ Years of Industry Trust</span>
              </span>
              <span className="px-3.5 py-1 rounded-full bg-surface-container-high text-on-surface font-badge-caps text-badge-caps uppercase font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                <span>500+ Verified Escrow &amp; Client Reviews</span>
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight leading-tight">
              Real Stories From California Lenders, Realtors &amp; Homeowners
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              When a manufactured home loan is on the line, escrow officers, mortgage originators, and homeowners turn to OnTheLevel. Read unedited, firsthand testimonials from clients across California whose foundation certifications, 433A conversions, laser relevels, and reverse mortgages were brought to a successful close.
            </p>

            {/* Trust Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-y border-outline-variant/15 py-5">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xl">
                  <span>5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-on-surface-variant font-medium">Statewide Rating</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-extrabold text-on-surface">100%</div>
                <div className="text-xs text-on-surface-variant font-medium">Escrow Funding Rate</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-extrabold text-secondary font-bold">35+ Yrs</div>
                <div className="text-xs text-on-surface-variant font-medium">Direct Field Authority</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-extrabold text-on-surface">$0</div>
                <div className="text-xs text-on-surface-variant font-medium">Upfront Out-of-Pocket</div>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (onScrollToGrid) {
                    onScrollToGrid();
                  } else {
                    const el = document.getElementById('reviews-grid');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 rounded-lg bg-secondary text-on-primary font-headline-sm text-headline-sm hover:bg-secondary/90 transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer hover:shadow-md"
              >
                <span>Browse Verified Reviews</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onScrollToForm) {
                    onScrollToForm();
                  } else {
                    const el = document.getElementById('submit-testimonial');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-headline-sm hover:bg-secondary/10 transition-colors inline-flex items-center gap-2 cursor-pointer border border-outline-variant/20"
              >
                <PenTool className="w-4 h-4 text-secondary" />
                <span>Share Your Experience</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest border border-outline-variant/20 relative group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/testimonials-hero.jpg"
                  alt="Happy California homeowners celebrating with Janis Arendsen holding their official permanent foundation certification documents"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-bold flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-secondary-container" />
                  <span>100% Verified Escrow Closings</span>
                </div>

                {/* Bottom Floating Glass Card */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/25 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      Mortgage Loan Processing Team
                    </span>
                  </div>
                  <p className="text-xs text-on-surface italic leading-snug line-clamp-2">
                    &ldquo;All the processors here have recommended OnTheLevel as our best manufactured housing foundation company EVER!&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/15 flex items-center justify-between text-xs">
                <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                  <MessageSquareHeart className="w-4 h-4 text-secondary" />
                  <span>Serving San Diego, Riverside, Orange &amp; Statewide CA</span>
                </span>
                <span className="text-secondary font-bold">5.0 / 5.0 Rating</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
