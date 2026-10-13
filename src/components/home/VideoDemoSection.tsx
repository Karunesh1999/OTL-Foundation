import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  BookOpen,
  Download,
  Eye,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { TOOLKITS } from '../../data/partners';

interface VideoDemoSectionProps {
  onRequestInspection?: () => void;
}

export const VideoDemoSection: React.FC<VideoDemoSectionProps> = ({ onRequestInspection }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleToolkitClick = (e: React.MouseEvent, title: string, actionType: string) => {
    e.preventDefault();
    if (actionType === 'download') {
      setDownloadNotice(`Downloading "${title}"...`);
      setTimeout(() => setDownloadNotice(null), 3000);
    } else {
      setDownloadNotice(`Opening "${title}" guide...`);
      setTimeout(() => setDownloadNotice(null), 3000);
    }
  };

  const getToolkitIcon = (id: string) => {
    switch (id) {
      case 'toolkit-1':
        return <FileText className="w-6 h-6 text-secondary" />;
      case 'toolkit-2':
        return <BookOpen className="w-6 h-6 text-secondary" />;
      case 'toolkit-3':
      default:
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/15" id="resources">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Field Operations Showcase Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg border border-outline-variant/15">
              {/* Image Showcase Container */}
              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-primary-container overflow-hidden group">
                <img
                  src="/images/field-retrofit-operations.jpg"
                  alt="Licensed California foundation contractors and structural engineers performing a seismic retrofit under a manufactured modular home"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Visual Gradient Accents */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-on-primary shadow-sm border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-primary-fixed">
                    Active Field Operations • Seismic Retrofit
                  </span>
                </div>

                {/* Top Right Badge */}
                <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md text-secondary px-3 py-1.5 rounded-lg shadow-sm font-badge-caps text-badge-caps uppercase font-bold border border-outline-variant/20">
                  Class C-47 &amp; B Licensed
                </div>

                {/* Bottom Overlaid Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/20 shadow-md flex items-center justify-between gap-3 text-on-surface">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-on-surface leading-tight">
                        Title 25 &amp; 433A Engineered Rigging
                      </div>
                      <div className="text-[11px] text-on-surface-variant font-medium">
                        Cal OES &amp; HCD Permanent Foundation Standard
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md">
                    <span>100% Pass Rate</span>
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-4 h-4 text-secondary" />
                  <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                    On-Site California Structural Rigging
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
                  Engineered 433A Seismic Retrofit &amp; Foundation Leveling
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Direct field execution by our licensed California crews. We install engineered steel earthquake
                  bracing, adjust telescoping jacks, calibrate laser levels on main I-beams, and prepare every
                  manufactured home foundation for immediate county building inspector sign-off.
                </p>

                {/* 3 Key Operational Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-outline-variant/15">
                  <div className="p-2.5 rounded-lg bg-surface-container-low/60 border border-outline-variant/10">
                    <div className="text-xs font-bold text-on-surface">Direct In-House Crew</div>
                    <div className="text-[11px] text-on-surface-variant mt-0.5">Zero third-party subs</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-low/60 border border-outline-variant/10">
                    <div className="text-xs font-bold text-on-surface">Dual CA Licensure</div>
                    <div className="text-[11px] text-on-surface-variant mt-0.5">Class B &amp; C-47 #1022204</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-low/60 border border-outline-variant/10">
                    <div className="text-xs font-bold text-on-surface">$0 Upfront Escrow</div>
                    <div className="text-[11px] text-on-surface-variant mt-0.5">Billed through closing</div>
                  </div>
                </div>

                {/* Bottom Link Row */}
                <div className="mt-5 pt-4 border-t border-outline-variant/15 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-body-sm text-on-surface-variant flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Serving all 58 California counties</span>
                  </span>
                  {onRequestInspection ? (
                    <button
                      type="button"
                      onClick={onRequestInspection}
                      className="text-body-sm font-bold text-secondary hover:text-secondary/80 inline-flex items-center gap-1 group cursor-pointer"
                    >
                      <span>Request On-Site Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href="#assessment-card"
                      className="text-body-sm font-bold text-secondary hover:text-secondary/80 inline-flex items-center gap-1 group"
                    >
                      <span>Request On-Site Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Downloadable Toolkits & Knowledge Base (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-badge-caps text-badge-caps text-secondary uppercase font-bold tracking-wider">
                Free Engineering Resources
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                Escrow &amp; Lending Toolkits
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                Instant references trusted by top California escrow officers, mortgage processors, and real estate professionals.
              </p>
            </div>

            {/* Notification alert if user clicks download */}
            {downloadNotice && (
              <div className="p-3 rounded-lg bg-surface-container-highest text-on-surface text-body-sm flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>{downloadNotice}</span>
              </div>
            )}

            {/* Toolkit Cards */}
            <div className="space-y-3.5">
              {TOOLKITS.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container-low/70 hover:bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 border border-outline-variant/15 hover:border-secondary/30"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      {getToolkitIcon(item.id)}
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface font-bold leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleToolkitClick(e, item.title, item.actionType)}
                    className="w-full sm:w-auto justify-center px-3.5 py-2 rounded-lg bg-surface-container-high hover:bg-secondary-container hover:text-on-primary transition-colors text-on-surface font-label-md text-label-md shrink-0 flex items-center gap-1.5 cursor-pointer text-center"
                  >
                    {item.actionType === 'download' ? (
                      <Download className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    <span>{item.actionLabel}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
