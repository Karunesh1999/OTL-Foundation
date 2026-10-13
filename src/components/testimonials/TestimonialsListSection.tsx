import React, { useState, useMemo } from 'react';
import {
  Star,
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronUp,
  Quote,
  Building,
  MapPin,
  Filter,
  Sparkles,
  Maximize2,
  X,
} from 'lucide-react';
import type { TestimonialItem } from '../../types';

interface TestimonialsListSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsListSection: React.FC<TestimonialsListSectionProps> = ({
  testimonials,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [modalItem, setModalItem] = useState<TestimonialItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    {
      id: 'lender',
      label: 'Lenders & Originators',
      count: testimonials.filter((t) => t.category === 'lender').length,
    },
    {
      id: 'escrow',
      label: 'Escrow & Title',
      count: testimonials.filter((t) => t.category === 'escrow').length,
    },
    {
      id: 'realtor',
      label: 'Realtors & Brokers',
      count: testimonials.filter((t) => t.category === 'realtor').length,
    },
    {
      id: 'homeowner',
      label: 'Homeowners & Borrowers',
      count: testimonials.filter((t) => t.category === 'homeowner').length,
    },
  ];

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Search query check (name, role, quote, company, location)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.author.toLowerCase().includes(q);
        const matchesRole = item.role.toLowerCase().includes(q);
        const matchesCompany = item.company?.toLowerCase().includes(q) ?? false;
        const matchesQuote = item.quote.toLowerCase().includes(q);
        const matchesLocation = item.location?.toLowerCase().includes(q) ?? false;
        return matchesName || matchesRole || matchesCompany || matchesQuote || matchesLocation;
      }

      return true;
    });
  }, [testimonials, activeCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCardIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'lender':
        return { label: 'Mortgage Lender', bg: 'bg-primary-fixed text-on-primary-fixed' };
      case 'escrow':
        return { label: 'Escrow & Title', bg: 'bg-secondary-fixed text-on-secondary-fixed' };
      case 'realtor':
        return { label: 'Licensed Realtor', bg: 'bg-tertiary-fixed text-on-tertiary-fixed' };
      case 'dealer':
        return { label: 'MH Dealer', bg: 'bg-surface-container-high text-on-surface' };
      default:
        return { label: 'Verified Homeowner', bg: 'bg-emerald-500/10 text-emerald-700' };
    }
  };

  const visibleTestimonials = filteredTestimonials.slice(0, visibleCount);

  return (
    <section className="py-16 lg:py-24 bg-surface-container-low scroll-mt-32" id="reviews-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        
        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Verified Client Registry</span>
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Customer &amp; Partner Testimonials
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every card has a uniform, standardized preview size. Click &ldquo;Read Full Review&rdquo; on any card to display the complete, unedited testimonial story.
            </p>
          </div>

          {/* Quick Metrics Tag */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-xs flex items-center gap-2 text-xs font-bold text-on-surface">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Showing {filteredTestimonials.length} Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5 mr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(12);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-secondary text-on-primary shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search by name, company, city..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-surface-container-low border border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-hidden focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials Card Grid */}
        {filteredTestimonials.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-surface-container-lowest border border-outline-variant/20 space-y-3">
            <Quote className="w-10 h-10 text-on-surface-variant/30 mx-auto" />
            <h3 className="font-headline-sm text-base font-bold text-on-surface">
              No Testimonials Match Your Search
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant max-w-sm mx-auto">
              Try adjusting your search keywords or select &ldquo;All Reviews&rdquo; to see all 38+ client testimonials.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-secondary text-on-primary text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {visibleTestimonials.map((item) => {
              const isExpanded = !!expandedCardIds[item.id];
              const categoryBadge = getCategoryBadge(item.category);
              const isLongText = item.quote.length > 130;

              return (
                <article
                  key={item.id}
                  className={`rounded-2xl bg-surface-container-lowest border border-outline-variant/20 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative hover:border-secondary/30 ${
                    isExpanded
                      ? 'min-h-[390px] h-auto ring-2 ring-secondary/40 shadow-lg z-10'
                      : 'h-[390px]'
                  }`}
                >
                  {/* Top Section */}
                  <div className="space-y-3.5">
                    {/* 1. Header: Stars & Category Badge */}
                    <div className="flex items-center justify-between gap-2 h-6">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${categoryBadge.bg}`}
                      >
                        {categoryBadge.label}
                      </span>
                    </div>

                    {/* 2. Highlight Banner: Fixed h-8 slot across all cards */}
                    <div className="h-8 flex items-center">
                      <div className="px-3 py-1 rounded-lg bg-surface-container-low border border-outline-variant/10 text-xs font-semibold text-secondary flex items-center gap-1.5 w-full">
                        <Quote className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span className="truncate italic">
                          {item.highlight || `${categoryBadge.label} Feedback`}
                        </span>
                      </div>
                    </div>

                    {/* 3. Review Text Area: Fixed preview before click, full display on click */}
                    <div className="pt-1">
                      {isExpanded ? (
                        <div className="space-y-3">
                          <p className="font-body-md text-sm text-on-surface leading-relaxed whitespace-pre-line">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>
                      ) : (
                        <div className="h-[6.5rem] overflow-hidden">
                          <p className="font-body-md text-sm text-on-surface leading-relaxed line-clamp-4">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    {/* 4. Action Row: Fixed h-7 slot for 'Read Full Review' / 'Show Less' */}
                    <div className="h-7 flex items-center justify-between pt-1">
                      {isLongText ? (
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary-container transition-colors cursor-pointer group-hover:underline"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Show Less' : 'Read Full Review'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      ) : (
                        <span className="text-[11px] text-on-surface-variant/60 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-secondary" />
                          <span>Full Review Shown</span>
                        </span>
                      )}

                      {/* Modal Dialog Quick View Button */}
                      <button
                        type="button"
                        onClick={() => setModalItem(item)}
                        className="text-on-surface-variant/50 hover:text-secondary p-1 rounded-md transition-colors cursor-pointer"
                        title="Open in modal dialog"
                        aria-label="Open review modal dialog"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 5. Author Footer: Fixed h-[68px] slot with prominent user name */}
                  <div className="pt-3 border-t border-outline-variant/15 flex items-center gap-3 shrink-0 h-[68px]">
                    {/* Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {item.avatarInitials || item.author.substring(0, 2).toUpperCase()}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      {/* User Name MUST be prominently displayed */}
                      <h4 className="font-headline-sm text-sm font-extrabold text-on-surface truncate">
                        {item.author}
                      </h4>
                      <p className="text-xs text-on-surface-variant truncate font-medium">
                        {item.role}
                      </p>
                      {(item.company || item.location) && (
                        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant/70 truncate">
                          {item.company && (
                            <span className="flex items-center gap-1 truncate">
                              <Building className="w-3 h-3 shrink-0" />
                              <span className="truncate">{item.company}</span>
                            </span>
                          )}
                          {item.location && (
                            <span className="flex items-center gap-1 shrink-0">
                              <MapPin className="w-3 h-3 shrink-0" />
                              <span>{item.location}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredTestimonials.length && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3.5 rounded-xl bg-surface-container-high hover:bg-secondary hover:text-on-primary text-on-surface font-headline-sm text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Load More Testimonials ({filteredTestimonials.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* POPUP MODAL FOR EXPANDED FULL-SCREEN READING */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl shadow-2xl border border-outline-variant/30 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(modalItem.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                  Verified Client Review
                </span>
              </div>
              <h3 className="font-headline-md text-xl font-extrabold text-on-surface">
                {modalItem.highlight || `Feedback from ${modalItem.author}`}
              </h3>
            </div>

            {/* Full Unedited Quote */}
            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15">
              <p className="font-body-lg text-base text-on-surface leading-relaxed whitespace-pre-line">
                &ldquo;{modalItem.quote}&rdquo;
              </p>
            </div>

            {/* Modal Author Info */}
            <div className="flex items-center gap-4 pt-2 border-t border-outline-variant/15">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                {modalItem.avatarInitials || modalItem.author.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 className="font-headline-sm text-base font-extrabold text-on-surface">
                  {modalItem.author}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                  {modalItem.role}
                </p>
                {(modalItem.company || modalItem.location) && (
                  <p className="text-xs text-on-surface-variant/70">
                    {[modalItem.company, modalItem.location].filter(Boolean).join(' • ')}
                  </p>
                )}
              </div>
            </div>

            <div className="text-right pt-2">
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="px-6 py-2.5 rounded-lg bg-secondary text-on-primary text-xs font-bold hover:bg-secondary/90 transition-all cursor-pointer"
              >
                Close Full Review
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
