import React, { useState } from 'react';
import {
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import type { EligibilityFormData } from '../../types';

export const EligibilityAssessmentCard: React.FC = () => {
  const [formData, setFormData] = useState<EligibilityFormData>({
    propertyType: 'manufactured',
    county: 'sandiego',
    urgency: 'escrow',
    yearBuilt: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isPre1976 = formData.yearBuilt && parseInt(formData.yearBuilt.trim(), 10) < 1976;

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-7 shadow-xl relative" id="assessment-card">
      <div className="flex items-center justify-between pb-4">
        <div>
          <span className="font-badge-caps text-badge-caps text-secondary uppercase font-bold tracking-wider">
            Fast-Track Engine
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">
            Instant Eligibility Assessment
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0">
          <FileCheck className="w-5 h-5 text-secondary" />
        </div>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
        Verify FHA/VA foundation readiness, California 433A status, or curative title steps in 30 seconds.
      </p>

      <form className="space-y-4" id="eligibility-tool" onSubmit={handleSubmit}>
        {/* Property Classification */}
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="prop-type">
            Property Classification
          </label>
          <div className="relative">
            <select
              className="w-full h-12 px-3.5 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary focus:outline-none transition-all appearance-none cursor-pointer"
              id="prop-type"
              value={formData.propertyType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  propertyType: e.target.value as EligibilityFormData['propertyType'],
                })
              }
            >
              <option value="manufactured">Manufactured Home (Single / Multi-wide)</option>
              <option value="modular">Modular / Off-site Prefab Structure</option>
              <option value="adu">Backyard Accessory Dwelling Unit (ADU)</option>
              <option value="park">Mobile Home Park Community Unit</option>
            </select>
            <ChevronDown className="w-4 h-4 text-outline absolute right-3.5 top-4 pointer-events-none" />
          </div>
        </div>

        {/* County & Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="county-select">
              California County
            </label>
            <div className="relative">
              <select
                className="w-full h-12 px-3.5 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary focus:outline-none transition-all appearance-none cursor-pointer"
                id="county-select"
                value={formData.county}
                onChange={(e) => setFormData({ ...formData, county: e.target.value })}
              >
                <option value="sandiego">San Diego County</option>
                <option value="riverside">Riverside County</option>
                <option value="orange">Orange County</option>
                <option value="losangeles">Los Angeles County</option>
                <option value="sanbernardino">San Bernardino County</option>
                <option value="kern">Kern County</option>
                <option value="all-ca">Other (All 58 Counties)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-outline absolute right-3.5 top-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="txn-type">
              Transaction Urgency
            </label>
            <div className="relative">
              <select
                className="w-full h-12 px-3.5 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary focus:outline-none transition-all appearance-none cursor-pointer"
                id="txn-type"
                value={formData.urgency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    urgency: e.target.value as EligibilityFormData['urgency'],
                  })
                }
              >
                <option value="escrow">Pending Escrow Purchase</option>
                <option value="refi">FHA / VA Refinance</option>
                <option value="seismic">Earthquake Retrofit Only</option>
                <option value="title">Lost Title / 433A Resolution</option>
              </select>
              <ChevronDown className="w-4 h-4 text-outline absolute right-3.5 top-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Year Built & Phone Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="year-built">
              Year Built (Approx)
            </label>
            <input
              className="w-full h-12 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
              id="year-built"
              placeholder={
                formData.propertyType === 'park'
                  ? 'Important: check pre-1976'
                  : 'e.g. 1988, 2004, 2021'
              }
              type="text"
              value={formData.yearBuilt}
              onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="phone-contact">
              Contact Phone
            </label>
            <input
              className="w-full h-12 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
              id="phone-contact"
              placeholder="(760) 000-0000"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          type="submit"
        >
          <span>Check Eligibility &amp; Feasibility</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Dynamic Feedback Display */}
      {submitted && (
        <div className="mt-4 p-4 rounded-xl bg-surface-container-high text-on-surface border border-outline-variant/30 animate-fadeIn" id="calc-feedback">
          <div className="flex items-start gap-3">
            {isPre1976 ? (
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-label-md text-label-md font-bold text-on-surface">
                {isPre1976
                  ? 'Pre-1976 Construction Advisory'
                  : 'Standard 48-Hour Turnaround Eligible'}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                {isPre1976
                  ? 'Pre-June 15, 1976 units are not eligible for standard FHA/VA financing. However, our engineering desk specializes in portfolio loan certifications and county structural retrofits.'
                  : 'Our engineering desk can inspect and record your 433A documentation with county billing routed directly through escrow. No upfront out-of-pocket required.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mini Trust Strip */}
      <div className="mt-5 pt-4 bg-surface-container-low/50 rounded-lg p-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span className="font-semibold text-on-surface">CA Lic #677241 &amp; #1022204</span>
        </div>
        <span className="text-secondary font-label-md text-label-md">Class C-47 &amp; Class B</span>
      </div>
    </div>
  );
};
