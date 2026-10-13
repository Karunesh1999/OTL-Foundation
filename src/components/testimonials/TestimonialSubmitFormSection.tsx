import React, { useState } from 'react';
import { Star, Send, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import type { TestimonialItem } from '../../types';

interface TestimonialSubmitFormSectionProps {
  onTestimonialSubmitted: (testimonial: TestimonialItem) => void;
}

export const TestimonialSubmitFormSection: React.FC<TestimonialSubmitFormSectionProps> = ({
  onTestimonialSubmitted,
}) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Homeowner');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('California');
  const [service, setService] = useState('433A Permanent Foundation Retrofit');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [highlight, setHighlight] = useState('');
  const [quote, setQuote] = useState('');
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ratingDescriptions: Record<number, string> = {
    1: '1 Star - Needs Improvement',
    2: '2 Stars - Fair Experience',
    3: '3 Stars - Satisfactory',
    4: '4 Stars - Very Good & Punctual',
    5: '5 Stars - Flawless & Outstanding Service',
  };

  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return 'CL';
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const mapRoleToCategory = (
    r: string
  ): 'homeowner' | 'lender' | 'escrow' | 'realtor' | 'dealer' => {
    const lower = r.toLowerCase();
    if (lower.includes('escrow') || lower.includes('title')) return 'escrow';
    if (lower.includes('lender') || lower.includes('originator') || lower.includes('broker') || lower.includes('mortgage') || lower.includes('bank')) return 'lender';
    if (lower.includes('realtor') || lower.includes('agent')) return 'realtor';
    if (lower.includes('dealer')) return 'dealer';
    return 'homeowner';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!author.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!quote.trim() || quote.trim().length < 15) {
      setErrorMessage('Please share a few sentences about your experience (minimum 15 characters).');
      return;
    }

    if (!consent) {
      setErrorMessage('Please confirm authorization to share your feedback on our client wall.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: TestimonialItem = {
        id: `user-${Date.now()}`,
        author: author.trim(),
        role: company.trim() ? `${role.trim()} - ${company.trim()}` : role.trim(),
        company: company.trim() || undefined,
        location: location.trim() || 'California',
        quote: quote.trim(),
        avatarInitials: getInitials(author),
        rating: rating,
        category: mapRoleToCategory(role),
        verified: true,
        highlight: highlight.trim() || `${service} Client Feedback`,
        date: 'Just now',
      };

      onTestimonialSubmitted(newReview);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset fields
      setAuthor('');
      setCompany('');
      setHighlight('');
      setQuote('');
    }, 600);
  };

  return (
    <section
      className="py-16 lg:py-20 bg-surface border-b border-outline-variant/15 relative overflow-hidden scroll-mt-32"
      id="submit-testimonial"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-badge-caps text-badge-caps uppercase font-bold inline-flex items-center gap-1.5 shadow-xs">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Client Community Wall</span>
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Share Your Experience With OnTheLevel
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Did Janis, Scott, or our field installation crew help solve your manufactured housing foundation contingency? We would love to hear your feedback.
          </p>
        </div>

        {/* Success Alert */}
        {isSuccess ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border-2 border-secondary shadow-lg text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mx-auto shadow-sm">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Thank You For Your Gracious Feedback!
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">
                Your review has been successfully added to our verified client wall below. Your words help fellow homeowners and lenders navigate manufactured housing with peace of mind.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2.5 rounded-lg bg-secondary text-on-primary font-headline-sm text-xs font-bold hover:bg-secondary/90 transition-all cursor-pointer"
            >
              Submit Another Testimonial
            </button>
          </div>
        ) : (
          /* Form Card */
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-md space-y-8"
          >
            {errorMessage && (
              <div className="p-4 rounded-xl bg-error/10 border border-error/30 text-error text-sm font-semibold flex items-center gap-2">
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Star Rating */}
            <div className="space-y-2 text-center pb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Your Overall Rating
              </label>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1.5 focus:outline-hidden transition-transform hover:scale-125 cursor-pointer"
                    aria-label={`${star} star rating`}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-outline-variant/40 fill-transparent'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="text-xs font-bold text-secondary">
                {ratingDescriptions[hoverRating || rating]}
              </div>
            </div>

            {/* Step 2: Personal & Professional Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="author-name" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  Your Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="author-name"
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Ellen S. Dufur"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              {/* Role / Relationship */}
              <div className="space-y-1.5">
                <label htmlFor="client-role" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  Your Role / Relationship <span className="text-error">*</span>
                </label>
                <select
                  id="client-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all cursor-pointer"
                >
                  <option value="Homeowner">Manufactured Homeowner / Buyer</option>
                  <option value="Property Seller">Property Seller / Exchanger</option>
                  <option value="Loan Originator">Mortgage Loan Originator / Broker</option>
                  <option value="Senior Processor">Loan Processor</option>
                  <option value="Escrow Officer">Escrow Officer / Closing Agent</option>
                  <option value="Title Officer">Title Officer / Title Company</option>
                  <option value="Realtor">Licensed Realtor / Real Estate Broker</option>
                  <option value="Manufactured Home Dealer">Manufactured Home Dealer</option>
                  <option value="Attorney / Legal Counsel">Attorney / Legal Counsel</option>
                </select>
              </div>

              {/* Company / Organization (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="company-name" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  Company / Organization <span className="text-on-surface-variant font-normal">(Optional)</span>
                </label>
                <input
                  id="company-name"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Chicago Title, Mountain West Financial"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label htmlFor="client-location" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  City &amp; State <span className="text-on-surface-variant font-normal">(Optional)</span>
                </label>
                <input
                  id="client-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. San Diego, CA or Riverside County"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>

            {/* Service Utilized & Headline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Used */}
              <div className="space-y-1.5">
                <label htmlFor="service-used" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  Primary Service Provided
                </label>
                <select
                  id="service-used"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all cursor-pointer"
                >
                  <option value="433A Permanent Foundation Retrofit">HCD Form 433A Permanent Foundation Retrofit</option>
                  <option value="HUD / FHA Engineering Certification Letter">HUD / FHA / VA Engineering Certification Letter</option>
                  <option value="Lender & Escrow Relations ($0 Upfront Billing)">Lender &amp; Escrow Direct Billing ($0 Upfront)</option>
                  <option value="Precision Laser Elevation Mapping & Releveling">Precision Laser Elevation Mapping &amp; Releveling</option>
                  <option value="Crawl Space Moisture Barrier & French Drainage">Crawl Space Moisture Barrier &amp; French Drainage</option>
                  <option value="Earthquake ERBS Seismic Bracing">Earthquake ERBS Seismic Bracing</option>
                  <option value="Forensic Engineering & Expert Testimony">Forensic Engineering &amp; Expert Witness Testimony</option>
                </select>
              </div>

              {/* Highlight / Headline */}
              <div className="space-y-1.5">
                <label htmlFor="review-headline" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                  Review Headline <span className="text-on-surface-variant font-normal">(e.g. Saved our closing!)</span>
                </label>
                <input
                  id="review-headline"
                  type="text"
                  value={highlight}
                  onChange={(e) => setHighlight(e.target.value)}
                  placeholder="e.g. Professional, honest, and fast 48-hr turnaround"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>

            {/* Full Review Text */}
            <div className="space-y-1.5">
              <label htmlFor="review-quote" className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                Your Testimonial &amp; Story <span className="text-error">*</span>
              </label>
              <textarea
                id="review-quote"
                required
                rows={5}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Tell us about how Janis, Scott, or our crew assisted you, what challenges were solved, and how your loan or escrow was completed..."
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all leading-relaxed"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="testimonial-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary cursor-pointer"
              />
              <label htmlFor="testimonial-consent" className="text-xs text-on-surface-variant leading-relaxed cursor-pointer">
                I verify that this is an authentic review of services provided by On The Level General Contractors, and I authorize OnTheLevel to publish my feedback and name on their website.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Verified Client Submission &bull; Privacy Respected</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-lg bg-secondary text-on-primary font-headline-sm text-headline-sm hover:bg-secondary/90 transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer hover:shadow-md disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Posting Review...' : 'Submit Testimonial'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
