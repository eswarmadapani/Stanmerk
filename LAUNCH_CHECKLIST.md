# StanMerk Website Launch Checklist

## Phase 7: Real Content & Launch Preparation

The following items must be completed before the site can go live:

### Content Updates

- [ ] Replace all placeholder pricing with actual StanMerk pricing in Indian Rupees
  - Check `content/plans.ts` for current placeholder pricing
  - Update with real plan names, prices, and features

- [ ] Replace placeholder testimonials with real client testimonials
  - Check `content/testimonials.ts` for current placeholder testimonials
  - Add real names, companies, quotes, and social proof

- [ ] Replace placeholder featured work with real case studies
  - Check `content/work.ts` for current placeholder case studies
  - Add real videos, stats, and client information

- [ ] Update social media links in `content/site.ts`
  - Verify Instagram handle: `@stan.merk`
  - Add real YouTube channel link
  - Add real LinkedIn company page link

- [ ] Verify and update contact information in `content/site.ts`
  - Email: `hellostanmerk@gmail.com`
  - Phone: Add real phone number if applicable
  - City: Add real location

### Media Assets

- [ ] Create and add StanMerk logo
  - Add to `public/logo.svg` or `public/logo.png`
  - Update Navbar and Footer to use real logo

- [ ] Create and add favicon
  - Add to `public/favicon.ico`
  - Add to `public/icon.png` for Apple touch icon

- [ ] Create and add Open Graph image
  - 1200x630px PNG at `public/opengraph-image.png`
  - Should include StanMerk branding and tagline

- [ ] Add real hero videos
  - Create placeholder videos or add real sample edits
  - Place in `public/videos/` directory
  - Update `components/sections/Hero.tsx` with real video paths

- [ ] Add real service poster images
  - Create placeholder images or add real work samples
  - Place in `public/images/` directory
  - Update `components/sections/Services.tsx` with real image paths

- [ ] Add real featured work videos/posters
  - Place in `public/work/` directory
  - Update `components/sections/FeaturedWork.tsx` with real media paths

- [ ] Add real testimonial avatars
  - Place in `public/avatars/` directory
  - Update `content/testimonials.ts` with real avatar paths

- [ ] Add real contact page image
  - Place in `public/contact-us.jpg` or similar
  - Update `app/contact-us/page.tsx` with real image path

### Environment Configuration

- [ ] Set up production environment variables
  - Copy `.env.example` to `.env.local`
  - Set `NEXT_PUBLIC_SITE_URL` to production domain
  - Set `NEXT_PUBLIC_BOOKING_URL` to real Cal.com link (if using)
  - Set `RESEND_API_KEY` if using Resend for email
  - Set `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` for email delivery
  - Set `TURNSTILE_SECRET_KEY` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY` if using Turnstile

### Deployment

- [ ] Deploy to Vercel
  - Connect GitHub repository
  - Configure environment variables in Vercel dashboard
  - Set up custom domain

- [ ] Configure DNS for email (if using Resend)
  - Add SPF, DKIM, and DMARC records
  - Verify domain in Resend dashboard

- [ ] Set up analytics (optional)
  - Configure Plausible or GA4
  - Add privacy consent banner if needed

### Testing

- [ ] Run production build: `npm run build`
- [ ] Test contact form submission in production
- [ ] Test Cal.com embed (if configured)
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Test keyboard navigation
- [ ] Test screen reader accessibility
- [ ] Run Lighthouse audit (target: Performance ≥ 90, Accessibility ≥ 95)

### Post-Launch

- [ ] Monitor contact form submissions
- [ ] Check analytics for traffic and user behavior
- [ ] Monitor error logs
- [ ] Set up uptime monitoring

## Notes

- The current site structure and components are complete and production-ready
- All placeholder content is clearly marked and easy to replace
- The site uses Indian Rupee (₹) for pricing
- The design follows the StanMerk brand guidelines from the PRD
- All SEO metadata is configured and ready for the production domain
