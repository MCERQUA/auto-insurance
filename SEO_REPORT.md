# SEO Report — auto-insurance
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Static HTML + Vite (vanilla static site builder)
- **Apparent domain / target audience**: Auto insurance quote platform; target: drivers seeking fast insurance quotes nationwide (all 50 states)
- **Deployment status**: Netlify deployment configured (netlify.toml present; build command: `npx vite build`; publish dir: dist/)

## 2. Inventory
- **Total pages**: 1 live page (quote.html only)
- **URL structure**: Single-page site with flat structure (/quote.html as primary entry point)
- **sitemap.xml present?** No
- **robots.txt present?** No

## 3. On-Page SEO (all 1 page analyzed)

### /quote.html
| Metric | Value | Status |
|--------|-------|--------|
| Title tag | "AUTO INSURANCE \| Get a Quote" | ~28 chars ✓ Good |
| Meta description | **MISSING** | ⚠️ Critical |
| H1 | "YOUR VEHICLE. YOUR COVERAGE." | ✓ Present |
| H2 count | 4 (Coverage Type, Vehicle Info, Required Docs, Your Info) | ✓ Good structure |
| Canonical tag | **MISSING** | ⚠️ Issue |
| OG tags | **ALL MISSING** | ⚠️ Issue (no og:title, og:description, og:image, etc) |
| Charset | UTF-8 | ✓ Good |
| Viewport | Present | ✓ Good |

## 4. Structured Data
- **JSON-LD schema.org types present?** No
- **Microdata markup?** None detected
- **Missing critical schemas**: LocalBusiness (company info), BreadcrumbList, FAQ schema (common for insurance), Service schema

## 5. Content Quality
- **Word count** (quote.html): ~892 words
- **Primary content**: Form-heavy (coverage options, vehicle info, document upload, contact fields)
- **Body copy**: Minimal (hero text ~17 words + form labels); not optimized for organic search
- **Internal linking density**: 2 links total (/ and /quote.html) — insufficient; no content pages to link to
- **Images**: 0 actual images; Material Symbols icons used (SVG). **Image alt-text coverage: N/A (no images)**

## 6. Technical
- **robots.txt**: Not present
  - **Recommendation**: Create to guide crawlers; block /dist if exposed
- **Sitemap**: Not present
  - **Current URL count**: Would be 1 (only /quote.html)
  - **Action needed**: Create sitemap.xml once multi-page site is live
- **404 handling**: Not configured (Netlify defaults apply; no custom 404.html present)
- **next.config.js / astro.config.js**: None (project uses Vite, not Next.js or Astro)
- **Redirects in netlify.toml**: None configured
- **Security headers** (netlify.toml): 
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - ✓ Good baseline

## 7. Top Issues (ranked by severity)

1. **No meta description** (quote.html)
   - Impact: Search results show no description; CTR loss (~20-30% typical)
   - File: /workspace/Websites/auto-insurance/public/quote.html (line 4)
   - Fix: Add `<meta name="description" content="...55-160 chars...">`

2. **No robots.txt**
   - Impact: Crawlers follow default rules; potential exposure of private directories
   - Fix: Create /public/robots.txt with:
     ```
     User-agent: *
     Allow: /
     Disallow: /admin/
     Sitemap: https://domain.com/sitemap.xml
     ```

3. **No sitemap.xml**
   - Impact: Crawlers may miss pages; slower indexing
   - Fix: Create /public/sitemap.xml (even with 1 URL is better than none)

4. **No Open Graph tags**
   - Impact: Poor social media previews; lost sharing traffic
   - File: /workspace/Websites/auto-insurance/public/quote.html (head section)
   - Missing: og:title, og:description, og:image, og:url, og:type, twitter:card

5. **No canonical tag**
   - Impact: Risk of duplicate content issues if URL variations exist (http vs https, www vs non-www)
   - File: /workspace/Websites/auto-insurance/public/quote.html (head)
   - Fix: Add `<link rel="canonical" href="https://yourdomain.com/quote.html">`

6. **No structured data (schema.org)**
   - Impact: Missing rich snippets in search results; lower CTR
   - Missing critical types:
     - Organization (company info)
     - Service (insurance services offered)
     - LocalBusiness (if location-specific)
   - Fix: Add JSON-LD block in <head> with Organization + Service schema

7. **Single page site with no content strategy**
   - Impact: Minimal organic keyword coverage; no topical authority
   - Missing: Blog/resource pages, coverage guides, FAQ page, comparison content
   - Fix: Expand to 5-10 content pages (landing, coverage guides, FAQ, blog, about, etc)

8. **Form lacks ARIA labels and semantic HTML improvements**
   - Impact: Accessibility reduced; affects mobile rankings slightly
   - File: /workspace/Websites/auto-insurance/public/quote.html (form sections, lines 66-206)
   - Missing: `<label for="">` associations on several inputs

9. **No internal linking strategy**
   - Impact: Link juice not distributed; no content hierarchy
   - Current: Only 2 links (/ and /quote.html)
   - Fix: Plan content hub with cross-linking once multi-page

10. **Empty /public/images directory**
    - Impact: Visual content opportunities missed; no images for rich media in search
    - Fix: Add hero images, infographics (insurance coverage comparisons), team photos with proper alt-text

---

## 8. Top Recommendations (concrete next actions)

1. **Add meta description immediately** (5 min)
   - Target: 155 chars, include main keyword "auto insurance quote" + benefit
   - Example: "Get instant auto insurance quotes for all vehicle types and drivers. Fast quotes, no phone trees. Compare coverage options online."

2. **Create robots.txt and sitemap.xml** (10 min)
   - robots.txt: Allow all; block /node_modules, /dist if not cleaned
   - sitemap.xml: Include /quote.html; update as pages are added

3. **Add Open Graph meta tags** (10 min)
   - og:title, og:description, og:image (create 1200x630px hero image), og:url, og:type
   - Add Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)

4. **Implement Organization + Service JSON-LD schema** (15 min)
   - Organization: name "Hellcat Insurance", logo, contact, sameAs (social links)
   - Service: "Auto Insurance Quotes" with description, areaServed (all 50 states)
   - Add structured data testing: Use Google Rich Results Test

5. **Add canonical tag** (2 min)
   - `<link rel="canonical" href="https://yourdomain.com/quote.html">` to prevent duplication issues

6. **Improve form accessibility** (10 min)
   - Link all labels to inputs via `<label for="">` and `id` attributes
   - Add aria-required="true" on required fields
   - Improves both UX and SEO signals

7. **Plan content expansion to 5-8 pages** (Strategy session)
   - Page ideas:
     - Home/Landing page (blog-style, keyword-optimized intro)
     - Coverage Guides (4 pages: Liability, Collision, Comprehensive, Full Coverage)
     - FAQ page (10-15 Q&A with schema.org FAQPage markup)
     - Blog (insurance tips, claim guides, etc)
   - Allocate internal links across content hub

8. **Set up Google Search Console + Analytics** (15 min)
   - Verify domain ownership
   - Submit sitemap
   - Monitor indexation, CTR, rankings
   - Track form submissions and engagement

---

## Summary
The auto-insurance site is a **single-page form-focused site** with strong visual design but **critical SEO gaps**: missing meta description, robots.txt, sitemap, OG tags, canonical, and schema markup. The site is not optimized for organic search visibility. Immediate wins are adding meta tags and structured data; medium-term growth requires content expansion to 5-10 pages to establish topical authority and organic keyword coverage.

**Priority fixes for week 1**: Meta description, robots.txt, sitemap, OG tags, schema.org markup.
**Priority strategy for month 1**: Content hub plan + expansion to 5+ pages.

---

## Round 2 — repaired 2026-05-21

**Framework detected:** Static HTML + Vite (no Next.js / Astro). Publish dir: `dist/`. Single live page: `public/quote.html`. Deploy: Netlify.

### Tier 2 results

| Item | Status | Details |
|------|--------|---------|
| JSON-LD schema (InsuranceAgency + Service) | ✅ applied | Added `@graph` block with `InsuranceAgency`, `Service` (with `OfferCatalog` of 4 coverage types), and `WebPage` types in `public/quote.html` head |
| FAQ schema | ⏭️ already present | N/A — no Q&A section exists on page; skipped per instruction |
| sitemap.xml | ✅ applied | Created `public/sitemap.xml` with `/quote.html` entry |
| robots.txt | ✅ applied | Created `public/robots.txt` (Allow /, Disallow /admin/ and /netlify/, Sitemap reference) |
| Open Graph meta tags | ✅ applied | Added `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name` to `public/quote.html` |
| Twitter Card meta tags | ✅ applied | Added `twitter:card` (summary_large_image), `twitter:url`, `twitter:title`, `twitter:description`, `twitter:image` to `public/quote.html` |
| Canonical tag | ✅ applied | Added `<link rel="canonical">` to `public/quote.html` (was flagged in Round 1; included in this pass) |
| Meta description | ✅ applied | Added 155-char description to `public/quote.html` (was flagged in Round 1; included in this pass) |
| Image alt-text >=90% | ⏭️ already present | N/A — page has 0 `<img>` elements; only Material Symbols (icon-font glyphs), which are decorative. Coverage = 100% by exclusion |
| Custom 404 page (returns 404 status) | ✅ applied | Created `public/404.html` (branded, noindex). Added redirect rule `from = "/*" → to = "/404.html"` with `status = 404` in `netlify.toml` to guarantee HTTP 404 on unmatched paths |

### Files created
- `/workspace/Websites/auto-insurance/public/robots.txt`
- `/workspace/Websites/auto-insurance/public/sitemap.xml`
- `/workspace/Websites/auto-insurance/public/404.html`

### Files modified
- `/workspace/Websites/auto-insurance/public/quote.html` — added meta description, canonical, OG tags, Twitter Card tags, JSON-LD schema graph
- `/workspace/Websites/auto-insurance/netlify.toml` — added catch-all 404 redirect with status=404

### Notes / blockers
- Domain `hellcatinsurance.com` used in all absolute URLs (matches package name `hellcat-insurance` and footer "Contractors Choice Agency"). If the production domain differs, do a find-and-replace across the four touched files.
- `vite.config.js` references `index.html`, `blog.html`, `events.html`, `claims.html` as build inputs, but none exist in `public/` yet — `npx vite build` will currently fail until those are created. Out of scope for this SEO repair pass.
- OG image (`/images/og-auto-insurance.jpg`) is referenced but not yet present in `public/images/` — recommend producing a 1200×630 JPEG before launch so social previews render. Not blocking SEO crawl.
- No git push performed (per constraint).

## Round 3 — repaired 2026-05-22

**Status:** No code changes needed. Round 2 already shipped the full Tier 2 fix set. Round 3 is a verification pass.

Verified ground truth against `public/quote.html`, `public/sitemap.xml`, `public/robots.txt`, `public/404.html`, and `netlify.toml`:

| Tier 2 item | Verified | Source of truth |
|---|---|---|
| Meta description (155 chars) | ✅ | quote.html `<meta name="description">` present |
| Canonical | ✅ | `<link rel="canonical" href="https://hellcatinsurance.com/quote.html">` |
| Open Graph tags | ✅ | og:type, og:url, og:title, og:description, og:image, og:site_name all present |
| Twitter Card tags | ✅ | twitter:card=summary_large_image + 4 standard twitter:* tags present |
| JSON-LD schema | ✅ | 1 JSON-LD block with `@graph` of `InsuranceAgency` + `Service` (with `OfferCatalog` of 4 coverage types) + `WebPage`. Parses valid. `InsuranceAgency` is a subtype of `LocalBusiness` so the LocalBusiness coverage is satisfied by inheritance |
| FAQ schema | ⏭️ N/A | No Q&A section on the page. Adding empty FAQPage schema would be spammy |
| sitemap.xml | ✅ | 1 URL (`/quote.html`), valid XML |
| robots.txt | ✅ | Allow/Disallow rules + Sitemap reference present |
| Custom 404 page returning HTTP 404 | ✅ | `public/404.html` exists + `netlify.toml` has catch-all `[[redirects]]` with `status = 404` to guarantee status code on unmatched paths |
| Image alt-text ≥ 90% | ⏭️ N/A | Page has 0 `<img>` elements. Material Symbols icon-font glyphs are decorative |

**No Round 3 file changes. This entry is the only modification.**

**Round 4 deferrals:** OG image asset itself (`/images/og-auto-insurance.jpg` referenced but not present), Vite build inputs (`index.html`, `blog.html`, `events.html`, `claims.html` referenced in `vite.config.js` but don't exist yet), content expansion beyond single quote page. All Round 1 items 7–10 that need content/strategy work remain open.
