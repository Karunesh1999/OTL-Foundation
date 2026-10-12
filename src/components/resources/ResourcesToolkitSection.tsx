import React, { useState } from 'react';
import { FileText, CheckCircle2, Info, Play, Download, ArrowRight } from 'lucide-react';
import { COMPLIANCE_TOOLKITS } from '../../data/servicesPage';

export const ResourcesToolkitSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadSuccess(`Downloaded "${title}". Check your browser downloads.`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4500);
  };

  const getIcon = (id: string, isDark: boolean) => {
    switch (id) {
      case 'toolkit-433a':
        return <FileText className="w-6 h-6 text-secondary" />;
      case 'toolkit-checklist':
        return <CheckCircle2 className="w-6 h-6 text-secondary" />;
      case 'toolkit-pre1976':
        return <Info className="w-6 h-6 text-secondary" />;
      case 'toolkit-video':
      default:
        return <Play className={`w-6 h-6 ${isDark ? 'text-on-primary' : 'text-secondary'}`} />;
    }
  };

  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-outline-variant/15" id="compliance-toolkits">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
              Official Reference Library
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Borrower &amp; Realtor Downloadable Toolkits
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Download official California HCD worksheets, lender guidelines, and legal title conversion forms.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleDownload('Master Resources Bundle')}
            className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Download All Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {downloadSuccess && (
          <div className="p-4 rounded-xl bg-secondary-fixed/30 border border-secondary/30 text-on-surface text-body-sm flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_TOOLKITS.map((guide) => (
            <div
              key={guide.id}
              className={`p-6 rounded-xl shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300 border ${
                guide.isDark
                  ? 'bg-primary-container text-on-primary border-primary-container'
                  : 'bg-surface-container-lowest text-on-surface border-outline-variant/15'
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                    guide.isDark ? 'bg-secondary-container' : 'bg-surface-container-low shadow-xs'
                  }`}
                >
                  {getIcon(guide.id, guide.isDark)}
                </div>
                <h3
                  className={`font-headline-sm text-base font-bold ${
                    guide.isDark ? 'text-on-primary' : 'text-on-surface'
                  }`}
                >
                  {guide.title}
                </h3>
                <p
                  className={`font-body-sm leading-relaxed ${
                    guide.isDark ? 'text-on-primary-container' : 'text-on-surface-variant'
                  }`}
                >
                  {guide.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(guide.title)}
                className={`inline-flex items-center gap-1.5 font-label-md text-label-md font-semibold pt-2 cursor-pointer transition-colors ${
                  guide.isDark
                    ? 'text-secondary-container hover:text-on-primary'
                    : 'text-secondary hover:text-on-surface'
                }`}
              >
                <span>{guide.actionText}</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
