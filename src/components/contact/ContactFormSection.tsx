import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { OFFICE_LOCATION } from '../../data/contactPage';

export const ContactFormSection: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    clientType: 'homeowner',
    serviceNeeded: '433a-cert',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const mapServiceKeyToOption = (key: string): string => {
      const k = key.toLowerCase();
      if (k.includes('433a')) return '433a-cert';
      if (k.includes('hud') || k.includes('fha') || k.includes('engineer')) return 'hud-fha';
      if (k.includes('relevel')) return 'releveling';
      if (k.includes('drain') || k.includes('crawl')) return 'drainage';
      if (k.includes('seismic') || k.includes('erbs')) return 'seismic';
      if (k.includes('escrow') || k.includes('lender') || k.includes('curative')) return 'escrow-title';
      if (k.includes('expert') || k.includes('testimony')) return 'expert-testimony';
      return '433a-cert';
    };

    const handleSync = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const serviceParam = searchParams.get('service');
      const hash = window.location.hash.replace('#', '').replace('dept-', '');

      const key = serviceParam || hash;
      if (key) {
        const option = mapServiceKeyToOption(key);
        setFormData((prev) => ({ ...prev, serviceNeeded: option }));
      }
    };

    const handleCustomEvent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.service) {
        setFormData((prev) => ({ ...prev, serviceNeeded: detail.service }));
      }
    };

    handleSync();
    window.addEventListener('hashchange', handleSync);
    window.addEventListener('otl:select-service', handleCustomEvent);
    return () => {
      window.removeEventListener('hashchange', handleSync);
      window.removeEventListener('otl:select-service', handleCustomEvent);
    };
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyAddress: '',
      clientType: 'homeowner',
      serviceNeeded: '433a-cert',
      message: '',
    });
  };

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-20 border-b border-outline-variant/15" id="contact-form">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-10 rounded-2xl border border-outline-variant/15 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">
                Online Consultation Request
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                Send Us Your Property Details
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Whether you need a recorded 433A review, HUD loan compliance letter, or on-site leveling quote, our senior team responds promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-secondary-fixed/20 border border-secondary/30 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-primary flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Inquiry Received Successfully!
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Thank you, <strong className="text-on-surface">{formData.fullName || 'Client'}</strong>. Your inquiry regarding <strong className="text-on-surface">{formData.propertyAddress || 'your property'}</strong> has been routed directly to our engineering and escrow desk. Janis or a senior specialist will contact you within 2 to 4 business hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-semibold text-body-sm hover:bg-surface-container-highest transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(760) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Property Address or APN
                    </label>
                    <input
                      type="text"
                      placeholder="123 Palm Ave, San Diego, CA"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      I Am A:
                    </label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    >
                      <option value="homeowner">Homeowner / Buyer</option>
                      <option value="realtor">Real Estate Agent</option>
                      <option value="lender-escrow">Mortgage Lender / Escrow Officer</option>
                      <option value="park-developer">Park Manager / Builder</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Primary Service Needed:
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all"
                    >
                      <option value="433a-cert">HCD Form 433A Permanent Foundation</option>
                      <option value="hud-fha">HUD 1996 / FHA / VA Engineering Letter</option>
                      <option value="releveling">Precision Laser Releveling</option>
                      <option value="drainage">Moisture Barrier &amp; French Drains</option>
                      <option value="seismic">Earthquake ERBS Seismic Retrofit</option>
                      <option value="escrow-title">Curative Title &amp; Escrow Feasibility</option>
                      <option value="expert-testimony">Expert Testimony / Dispute</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                    Message / Escrow Contingency Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your property condition, closing timeline, or underwriting requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-sm text-on-surface transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary hover:shadow-md transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry to Dispatch Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Generated Office Visual & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20 bg-surface-container-lowest group relative">
              <img
                alt="OnTheLevel client relations and escrow coordination office in Encinitas California"
                className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/images/contact-dispatch-office.jpg"
              />

              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/20 text-on-surface text-xs font-bold flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span>Encinitas, CA Engineering Office</span>
              </div>

              <div className="p-5 bg-surface-container-lowest space-y-3">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Direct Human Assistance Guaranteed
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You deal directly with licensed professionals who know California building codes, county recording nuances, and lender underwriting manuals inside and out.
                </p>
              </div>
            </div>

            {/* Office Operating Info Card */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm space-y-4">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary-container" />
                <span>Operating Hours &amp; Logistics</span>
              </h4>

              <div className="space-y-3 font-body-sm text-body-sm">
                <div className="flex items-start justify-between gap-3 pb-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-medium">Business Hours:</span>
                  <span className="font-bold text-on-surface text-right">{OFFICE_LOCATION.businessHours}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pb-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-medium">Escrow Turnaround:</span>
                  <span className="font-bold text-secondary-container text-right">48 - 72 Business Hours</span>
                </div>

                <div className="flex items-start justify-between gap-3 pb-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-medium">Emergency Review:</span>
                  <span className="text-xs text-on-surface font-semibold text-right">Available for in-flight escrow deadlines</span>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-on-surface-variant">
                  <ShieldCheck className="w-4 h-4 text-secondary-container shrink-0" />
                  <span>Licensed General Contractor ({OFFICE_LOCATION.lic1}) &bull; Manufactured Housing ({OFFICE_LOCATION.lic2})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
