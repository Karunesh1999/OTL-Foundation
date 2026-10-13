import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TestimonialsHeroSection,
  TestimonialSubmitFormSection,
  TestimonialsListSection,
} from '../components/testimonials';
import { TESTIMONIALS } from '../data/testimonials';
import type { TestimonialItem } from '../types';
import { Phone, ArrowRight, MessageSquareHeart } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();
  const [allTestimonials, setAllTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS);

  useEffect(() => {
    document.title = 'Client Testimonials & Reviews | On The Level Foundation Specialists';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleTestimonialSubmitted = (newReview: TestimonialItem) => {
    // Prepend the new review so it appears at the very top of the list
    setAllTestimonials((prev) => [newReview, ...prev]);

    // Smoothly scroll down to the reviews grid to see the newly submitted review
    setTimeout(() => {
      const el = document.getElementById('reviews-grid');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('submit-testimonial');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToGrid = () => {
    const el = document.getElementById('reviews-grid');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-surface">
      {/* SECTION 1: HERO SECTION */}
      <TestimonialsHeroSection
        onScrollToForm={handleScrollToForm}
        onScrollToGrid={handleScrollToGrid}
      />

      {/* SECTION 2: SUBMIT TESTIMONIAL FORM SECTION */}
      <TestimonialSubmitFormSection
        onTestimonialSubmitted={handleTestimonialSubmitted}
      />

      {/* SECTION 3: TESTIMONIALS LISTING WITH READ MORE EXPANDER */}
      <TestimonialsListSection testimonials={allTestimonials} />

      {/* SECTION 4: HIGH-IMPACT CLOSING CALL-TO-ACTION BANNER */}
      <section className="py-16 bg-surface-container-lowest border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 lg:p-12 rounded-3xl bg-secondary text-on-primary shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 z-10">
              <span className="px-3 py-1 rounded-full bg-on-primary/10 text-on-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <MessageSquareHeart className="w-3.5 h-3.5" />
                <span>Join Hundreds of Satisfied Clients</span>
              </span>
              <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-primary tracking-tight">
                Ready to Experience Stress-Free Manufactured Home Engineering?
              </h2>
              <p className="text-on-primary/85 text-sm lg:text-base leading-relaxed">
                Whether you need a rush 433A for a closing escrow, an FHA engineering letter, a laser relevel, or direct billing coordination, Janis and Scott are ready to assist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-on-primary text-secondary hover:bg-on-primary/90 transition-all font-headline-sm text-xs font-bold shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Direct Specialist Directory</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7604151982"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-on-primary/10 hover:bg-on-primary/20 text-on-primary border border-on-primary/20 transition-all font-headline-sm text-xs font-bold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Escrow Desk: 760-415-1982</span>
              </a>
            </div>

            {/* Subtle Background Glow Accent */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
