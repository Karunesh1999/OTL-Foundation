import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/15" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-secondary-container gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary-container text-secondary-container"
                  />
                ))}
              </div>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                4.9 / 5.0 Rating
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                (1,200+ California Escrow Sign-offs)
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Client Praise &amp; Verified Reviews
            </h2>
          </div>

          <a
            href="#testimonials"
            data-path="testimonials"
            className="inline-flex items-center gap-1.5 font-headline-sm text-headline-sm text-secondary hover:text-secondary-container transition-colors"
          >
            <span>Read All Customer Stories</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-surface-container-lowest p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/10"
            >
              <div>
                <div className="flex text-secondary-container mb-4 gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary-container text-secondary-container"
                    />
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed italic mb-6">
                  {review.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-sm">
                  {review.avatarInitials}
                </div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold text-on-surface">
                    {review.author}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
