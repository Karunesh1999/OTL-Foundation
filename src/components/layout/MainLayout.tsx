import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CONTACT_INFO } from '../../data/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activePath = 'home',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'inspection'>('inspection');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenInspection = () => {
    setModalType('inspection');
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleOpenQuote = () => {
    setModalType('quote');
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleSubmitModal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Universal Header */}
      <Header
        activePath={activePath}
        onRequestInspection={handleOpenInspection}
        onGetQuote={handleOpenQuote}
      />

      {/* Main Content Area with top padding matching fixed header height (120px) */}
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-420px)] flex-grow">
        {children}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Universal Request / Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/30 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <CheckCircle2 className="w-9 h-9 text-secondary" />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Request Received!
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                  Our engineering dispatch team has logged your file. A licensed California foundation specialist will call you back within 1 hour.
                </p>
                <div className="p-4 rounded-xl bg-surface-container-low text-left space-y-1">
                  <p className="font-label-md text-label-md font-bold text-on-surface">Immediate Assistance:</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Toll-Free Direct: <a href={CONTACT_INFO.tollFreeHref} className="text-secondary font-bold">{CONTACT_INFO.tollFree}</a>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
                    {modalType === 'quote' ? 'Quick Cost Estimate' : 'Licensed Engineering Intake'}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                  {modalType === 'quote' ? 'Get a Free Foundation Quote' : 'Request On-Site Inspection'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  {modalType === 'quote'
                    ? 'Fill in your home information to receive an itemized preliminary cost estimate for retrofit or certification.'
                    : 'Schedule an on-site structural engineer or C-47 certified specialist. Escrow direct billing available.'}
                </p>

                <form onSubmit={handleSubmitModal} className="space-y-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Robert Smith"
                      className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(760) 000-0000"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@example.com"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1">
                        Property County
                      </label>
                      <select className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none">
                        <option>San Diego County</option>
                        <option>Riverside County</option>
                        <option>Orange County</option>
                        <option>Los Angeles County</option>
                        <option>San Bernardino County</option>
                        <option>Kern County</option>
                        <option>Other CA County</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1">
                        Service Needed
                      </label>
                      <select className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none">
                        <option>433A Permanent Foundation</option>
                        <option>HUD 1996 Certification</option>
                        <option>FHA / VA Seismic Retrofit</option>
                        <option>Earthquake ERBS Bracing</option>
                        <option>Curative Title / HCD Resolution</option>
                        <option>ADU Foundation Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1">
                      Property Address or Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Street address, APN, or escrow closing timeline..."
                      className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface font-body-md border border-outline-variant/30 focus:border-secondary focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-12 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
