import React, { useState } from 'react';
import {
  Play,
  Pause,
  CheckCircle2,
  ShieldCheck,
  FileText,
  BookOpen,
  Download,
  Eye,
} from 'lucide-react';
import { TOOLKITS } from '../../data/partners';

export const VideoDemoSection: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
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
          {/* Video Demonstration Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg border border-outline-variant/10">
              <div className="relative aspect-video w-full bg-primary-container overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy17baZxt4L6DShoZlhvt3d-55VOlKBCCSKIhqUPUisOtBVvfE1o4TAZwWwlCEs26ruINAQha9SAXdYz8tOcZ6TKPl7ak_2pRgcGbyfeROaENkR106gPdNMfLmen3HTIbGQorxzTbX4jdA1SBy1phZB-t2B_jex6MSi-Y457mmzwYC1lKBDaAoN85dGwZt-8Xdqt9W4dHgnoBUJOcjgnDhGBhJwn0iNlj7th4uMSAVgqNTHIEz8jJG"
                  alt="Licensed California foundation contractors and structural engineers performing a seismic retrofit under a manufactured modular home"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary-container text-on-primary flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-secondary transition-all cursor-pointer group-hover:ring-8 group-hover:ring-secondary/30"
                    aria-label="Play video demonstration"
                  >
                    {isPlayingVideo ? (
                      <Pause className="w-8 h-8 fill-current" />
                    ) : (
                      <Play className="w-8 h-8 fill-current ml-1" />
                    )}
                  </button>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-on-primary shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-primary-fixed">
                    Field Operations • Certified Seismic Retrofit
                  </span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md text-on-surface px-3 py-1.5 rounded-lg shadow-sm font-badge-caps text-badge-caps uppercase font-bold text-secondary">
                  Class C-47 &amp; B Licensed Installation
                </div>
              </div>

              {/* Video Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                    On-Site California Structural Rigging
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  See How a California 433A Seismic Retrofit Is Executed
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Watch our licensed structural crew install earthquake bracing, adjust jack stands, level
                  main steel I-beams, and pass rigorous county building inspector evaluations on site.
                </p>
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
                  className="bg-surface-container-low/70 hover:bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 border border-outline-variant/15 hover:border-secondary/30"
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
                    className="px-3.5 py-2 rounded-lg bg-surface-container-high hover:bg-secondary-container hover:text-on-primary transition-colors text-on-surface font-label-md text-label-md shrink-0 flex items-center gap-1.5 cursor-pointer"
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
