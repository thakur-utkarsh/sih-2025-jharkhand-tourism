# Product Requirements Document
## Jharkhand Tourism - Smart Digital Platform

---

## Project Information

### Project Title

**Jharkhand Tourism - Smart Digital Platform for Eco & Cultural Tourism**

---

### Project Description

**Short Description:**
A comprehensive AI-powered digital platform that transforms Jharkhand's tourism experience by connecting tourists with authentic eco-tourism destinations, cultural experiences, and local artisan communities through real-time information, interactive maps, and a vibrant marketplace.

**Long Description:**

Jharkhand possesses extraordinary natural beauty and cultural richness, featuring pristine destinations like Netarhat, Patratu Valley, Betla National Park, Hundru Falls, and the spiritual center of Deoghar. The state's tribal heritage, traditional handicrafts, and ecological diversity remain largely undiscovered due to inadequate digital infrastructure and limited promotional reach.

The Jharkhand Tourism Platform addresses this critical gap by creating a centralized digital ecosystem that empowers tourists with reliable, real-time information while simultaneously supporting local communities. The platform bridges the information divide that has historically prevented both tourists from discovering Jharkhand's treasures and local service providers from accessing economic opportunities.

This solution leverages cutting-edge technologies including AI-powered personalization, AR/VR immersive previews, real-time transportation tracking, and blockchain-based verification to create a seamless, trustworthy, and enriching tourism experience. By integrating a local marketplace, the platform directly connects tourists with tribal artisans, cultural performers, homestay operators, and certified guides, ensuring tourism revenue reaches grassroots communities.

The platform's impact extends beyond individual tourists—it provides tourism officials with comprehensive analytics dashboards to monitor visitor trends, identify emerging destinations, and make data-driven policy decisions. This holistic approach positions Jharkhand as a technologically advanced, sustainable tourism destination while preserving its cultural authenticity and ecological integrity.

**Problem Statement (Government of Jharkhand):**
Despite vast eco-tourism and cultural tourism potential, Jharkhand faces challenges including lack of digital infrastructure, limited promotional outreach, low tourist awareness, unorganized travel services, and exclusion of local communities from the tourism economy. Tourists struggle to access reliable information about destinations, transportation, accommodations, and authentic cultural experiences.

---

### Learning Objectives

**Primary Learning Outcomes:**

- **Full-Stack Application Development**: Building scalable web and mobile applications using modern frameworks and architectures
- **AI/ML Integration**: Implementing AI-powered features including personalized recommendation engines, multilingual chatbots, and sentiment analysis
- **Geospatial Technology**: Working with mapping APIs, real-time location services, and AR/VR integration for immersive experiences
- **Blockchain Implementation**: Understanding decentralized verification systems for secure transactions and digital certification
- **User-Centered Design**: Creating inclusive interfaces that serve diverse user groups from international tourists to local artisans

**Secondary Learning Outcomes:**

- **Government Technology Solutions**: Understanding requirements for public sector digital platforms including accessibility, security, and scalability
- **Multi-stakeholder Platform Design**: Balancing needs of tourists, service providers, artisans, and government officials
- **Sustainable Tourism Technology**: Designing systems that promote responsible travel and community empowerment
- **Data Analytics & Visualization**: Building dashboards for tourism trend analysis and impact monitoring
- **Cross-Cultural UX Design**: Creating experiences that celebrate local culture while remaining accessible to global audiences

---

### Technology Stack

**Frontend:**

- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5
- **Routing:** React Router v7
- **State Management:** Zustand 5.x (for global state), TanStack Query v5 (for server state)
- **Styling:** TailwindCSS v4 + DaisyUI v5.5
- **Icons:** Google Material Symbols (Rounded variant for organic feel)
- **Maps:** Mapbox GL JS v3 (for interactive maps and geolocation)
- **AR/VR:** React Three Fiber + Drei (3D previews), A-Frame (AR experiences)
- **Additional Libraries:**
    - i18next (internationalization framework)
    - React Hook Form + Zod (form validation)
    - Framer Motion (animations)
    - Recharts (data visualization)

**Backend:**

- **Runtime:** Node.js v22 LTS
- **Language:** TypeScript 5
- **Framework:** Express.js v5 with RESTful API architecture
- **Database:** MongoDB with Mongoose v9 (user data, listings, bookings)
- **Real-time:** Socket.io v4 (live transport tracking, notifications)
- **AI/ML:** OpenAI API (chatbot), TensorFlow.js (sentiment analysis)
- **Blockchain:** Ethereum (Web3.js) or Hyperledger Fabric (for verification system)
- **Cloud Storage:** AWS S3 / Cloudinary (images, AR/VR assets)
- **Authentication:** JWT tokens with bcrypt encryption
- **Payment Gateway:** Razorpay / Stripe (marketplace transactions)

**DevOps & Infrastructure:**

- **Hosting:** AWS EC2 / Google Cloud Platform
- **CDN:** Cloudflare (global content delivery)
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (error tracking), Google Analytics
- **Version Control:** Git with GitHub

---

### MVP Scope

**Phase 1: Core Platform Foundation (Days 1-7)**
**Priority: P0 (Must Have)**

1. **Interactive Destination Discovery**
    - Interactive maps powered by Mapbox with geolocation services
    - Destination cards with high-quality imagery, descriptions, and key information
    - Search and filter functionality (by region, type, activities)
    - Basic AR previews of 5 major tourist sites (Hundru Falls, Betla National Park, Netarhat, Jonha Falls, Tagore Hill)
    - 360° photo tours for selected destinations

2. **Real-Time Transport Tracking System**
    - Live bus and train tracking for major Jharkhand routes
    - Integration with JRTC (Jharkhand Road Transport Corporation) APIs
    - Route planning with estimated travel times
    - Nearest transport hub locator using GPS
    - Transport schedule information and booking links
    - Emergency contact numbers and helpline integration

3. **Local Marketplace Foundation**
    - Artisan product listings with photos, descriptions, and pricing
    - Category browsing (Tribal Handicrafts, Traditional Jewelry, Textiles, Bamboo Crafts, Dokra Art)
    - Basic shopping cart and checkout flow
    - Secure payment integration (Razorpay)
    - Seller profiles for local artisans and cooperatives
    - Review and rating system for products

**Phase 2: Enhanced User Experience (Days 8-12)**
**Priority: P1 (Should Have)**

4. **AI-Powered Personalization**
    - Multilingual AI chatbot (English, Hindi) for tourist assistance
    - Personalized itinerary suggestions based on interests and duration
    - Smart destination recommendations using collaborative filtering
    - Conversational interface for booking assistance

5. **Community & Cultural Features**
    - Cultural event calendar (festivals, tribal celebrations, local markets)
    - Homestay listings with tribal families
    - Certified guide directory with verification badges
    - User-generated content (reviews, photos, travel stories)
    - Social sharing capabilities

6. **Advanced Marketplace Features**
    - Direct messaging between tourists and artisans
    - Bulk order inquiries for businesses
    - Artisan story pages (cultural background, craft techniques)
    - Workshop and demonstration bookings

**Phase 3: Advanced Features & Analytics (Post-MVP)**
**Priority: P2 (Nice to Have)**

7. **Blockchain Verification System**
    - Digital certificates for verified guides and service providers
    - Tamper-proof transaction records
    - Authenticity verification for handicrafts
    - Smart contracts for booking agreements

8. **Advanced AR/VR Experiences**
    - Full VR tours of 15+ destinations
    - AR navigation overlays for physical locations
    - Interactive tribal art and history experiences
    - Virtual cultural performances

9. **Analytics & Admin Dashboard**
    - Tourism official portal with comprehensive KPIs
    - Visitor trend analysis and heat maps
    - Sentiment analysis of reviews and feedback
    - Economic impact reporting for local communities
    - Destination performance metrics

---

### Target Users / Personas

**Primary Persona: Adventure-Seeking Tourist (Domestic)**

- **Demographics:**
    - Age: 25-40 years
    - Location: Metro cities (Delhi, Mumbai, Bangalore, Kolkata)
    - Occupation: Young professionals, entrepreneurs, digital nomads
    - Tech Savviness: High (comfortable with apps, online bookings, digital payments)
    - Income Level: Middle to upper-middle class

- **Goals & Motivations:**
    - Discover offbeat, unexplored destinations away from crowded tourist traps
    - Experience authentic tribal culture and local traditions
    - Engage in eco-tourism activities (trekking, wildlife, waterfalls)
    - Support local communities through responsible tourism
    - Capture unique content for social media
    - Weekend getaways and long holiday planning

- **Pain Points:**
    - Lack of reliable information about Jharkhand destinations
    - Difficulty finding authentic local experiences vs tourist-trap activities
    - Uncertainty about transportation options and safety
    - No centralized platform for booking accommodations, guides, and activities
    - Limited knowledge about tribal handicrafts and where to purchase authentic items
    - Poor mobile connectivity in remote areas affecting trip planning

- **User Needs:**
    - Real-time transportation updates and route planning
    - Verified reviews and recommendations from other travelers
    - Easy communication with local guides and service providers
    - Secure and convenient payment options
    - Detailed information about safety, accessibility, and facilities
    - Ability to customize itineraries based on interests and time constraints

**Secondary Persona: Cultural Explorer (International Tourist)**

- **Demographics:**
    - Age: 30-55 years
    - Location: Europe, North America, Australia, Southeast Asia
    - Occupation: Academics, researchers, cultural enthusiasts, retired professionals
    - Tech Savviness: Medium to High
    - Income Level: Middle to upper class

- **Goals & Motivations:**
    - Immerse in indigenous tribal cultures and traditions
    - Study and document ancient art forms and crafts
    - Explore biodiversity in lesser-known national parks
    - Engage in sustainable and ethical tourism practices
    - Learn about India's tribal heritage beyond mainstream tourist circuits

- **Pain Points:**
    - Language barriers (limited English signage and communication)
    - Lack of international-standard information resources
    - Difficulty understanding local customs and cultural sensitivities
    - Limited access to certified English-speaking guides
    - Concerns about safety and healthcare facilities
    - Complex domestic travel logistics within India

- **User Needs:**
    - Comprehensive English-language resources with cultural context
    - Virtual previews of destinations before visiting
    - Certified and verified local guides with cultural expertise
    - Clear information about permits, regulations, and tribal area access
    - Emergency contact information and traveler support services
    - Authentic cultural experiences with proper context and respect

**Tertiary Persona: Family Vacationer**

- **Demographics:**
    - Age: 35-50 years
    - Location: Tier 1 and Tier 2 Indian cities
    - Occupation: Government employees, business owners, corporate professionals
    - Tech Savviness: Medium (uses apps but prefers simplicity)
    - Family Size: 2 adults + 1-2 children

- **Goals & Motivations:**
    - Safe and comfortable family vacation destinations
    - Educational experiences for children (wildlife, culture, history)
    - Peaceful natural environments away from urban chaos
    - Religious tourism (Deoghar, Rajrappa, Parasnath)
    - Long weekend getaways within driving distance

- **Pain Points:**
    - Concerns about child-friendly facilities and safety
    - Need for family accommodation options
    - Difficulty finding activities suitable for all age groups
    - Limited information about medical facilities and emergency services
    - Uncertainty about food options and dietary requirements

- **User Needs:**
    - Family-friendly destination recommendations
    - Information about safety, hygiene, and medical facilities
    - Easy booking for group accommodations and activities
    - Child-appropriate content and educational resources
    - Vegetarian and diverse food options clearly indicated
    - Emergency contact information readily accessible

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** Jharkhand Tourism

**Tagline:** "Where Nature Meets Culture" / "Discover the Land of Forests"

**Brand Personality:**
- **Tone:** Welcoming, Adventurous, Culturally Rich, Authentic, Inspiring
- **Voice:** Enthusiastic yet informative, Respectful of tribal heritage, Encouraging of sustainable tourism, Educational without being preachy
- **Mood:** Vibrant and energetic like festivals, Calm and grounding like forests, Colorful like tribal art, Organic and natural

**Brand Values:**
- **Cultural Authenticity** - Celebrating and preserving Jharkhand's tribal heritage and traditions with utmost respect
- **Sustainable Tourism** - Promoting responsible travel that benefits local communities and protects natural ecosystems
- **Community Empowerment** - Creating economic opportunities for artisans, guides, and local service providers
- **Accessibility & Inclusion** - Making tourism information available to all, bridging urban-rural digital divides
- **Trust & Transparency** - Providing verified, reliable information and secure transactions for peace of mind

**Brand Story:**
Jharkhand, meaning "The Land of Forests," is a hidden gem where ancient tribal traditions dance with pristine waterfalls, dense forests whisper stories of indigenous wisdom, and vibrant handicrafts carry centuries of cultural heritage. Our platform bridges the gap between curious travelers and authentic experiences, ensuring that every journey enriches both the visitor and the visited. We're not just promoting tourism—we're building bridges between cultures, supporting local artisans, and protecting the natural wonders that make Jharkhand extraordinary.

---

### Logo & Visual Assets

**Logo Specifications:**
- **Primary Logo:** Wordmark "Jharkhand Tourism" with an iconic symbol integrating:
    - Stylized tribal art pattern (geometric shapes inspired by Sohrai and Kohbar art)
    - Organic leaf or tree motif representing forests
    - Waterfall or flowing water element (representing natural beauty)
- **Logo Variations:**
    - Full logo with icon and wordmark (primary)
    - Icon-only version (app icon, favicon)
    - Wordmark-only (space-constrained areas)
    - Monochrome versions (light and dark backgrounds)
- **Safe Space:** Minimum clear space equal to height of letter "J" on all sides
- **Minimum Size:** 120px width for digital, 1 inch for print
- **File Formats:** SVG (primary), PNG (transparent background), JPG (solid background)

**Imagery Style:**
- **Photography:** Vibrant, high-contrast nature photography; authentic documentary-style shots of tribal life and festivals; wide landscape shots emphasizing scale and beauty; warm, golden hour lighting preferred
- **Illustrations:** Hand-drawn tribal art inspired illustrations; Geometric patterns from Sohrai/Kohbar art traditions; Organic, flowing shapes representing nature; Warm, earthy color palette with vibrant accent colors
- **Icons:** Google Material Symbols - Rounded variant (softer, more organic feel suitable for nature/culture theme)
- **Patterns/Textures:** Subtle tribal geometric patterns for backgrounds; Organic leaf and nature textures; Water and rock textures for environmental sections

---

### Color System (OKLCH)

**Understanding OKLCH:**
OKLCH is a perceptual color space that ensures colors appear consistent across devices:
- **L (Lightness):** 0-100% (0 = pure black, 100 = pure white)
- **C (Chroma):** 0-0.4 (0 = completely gray, higher = more vibrant/saturated)
- **H (Hue):** 0-360 degrees (position on color wheel: 0=red, 120=green, 240=blue, etc.)

---

#### Primary Brand Color - Forest Green

```css
--color-primary: oklch(55% 0.18 145);
--color-primary-content: oklch(98% 0.02 145);
```

**Visual Reference:** Rich, vibrant forest green reminiscent of Jharkhand's dense sal forests

- **Usage:** Primary CTAs (Book Now, Explore, Get Directions), main navigation active states, key action buttons, brand moments throughout the platform
- **Meaning:** Represents Jharkhand's lush forests, eco-tourism focus, and connection to nature. Evokes feelings of adventure, growth, and environmental consciousness.
- **Accessibility:** Contrast ratio with base-100: 4.8:1 (WCAG AA compliant)

**Color Variations:**
- **Lighter (Hover):** `oklch(65% 0.16 145)` - Softer green for hover states and subtle backgrounds
- **Darker (Active):** `oklch(45% 0.20 145)` - Deep forest green for pressed states and emphasis
- **Muted:** `oklch(70% 0.10 145)` - Desaturated green for secondary uses

---

#### Secondary Brand Color - Sunset Orange

```css
--color-secondary: oklch(68% 0.20 45);
--color-secondary-content: oklch(20% 0.05 45);
```

**Visual Reference:** Warm, energetic orange like sunsets over Netarhat plateau

- **Usage:** Secondary CTAs, cultural event highlights, artisan marketplace accents, festival promotions, supporting buttons and links
- **Meaning:** Represents vibrant tribal festivals, warm hospitality, cultural richness, and the golden sunsets over Jharkhand's hills. Adds energy and excitement to the platform.
- **Accessibility:** Contrast ratio with base-100: 4.5:1 (WCAG AA compliant)

**Color Variations:**
- **Lighter:** `oklch(78% 0.18 45)` - Soft peachy orange for backgrounds
- **Darker:** `oklch(58% 0.22 45)` - Deep burnt orange for depth

---

#### Accent Color - Tribal Red

```css
--color-accent: oklch(58% 0.22 25);
--color-accent-content: oklch(98% 0.01 25);
```

**Visual Reference:** Rich terracotta red found in traditional tribal art and pottery

- **Usage:** Special highlights, featured destinations badges, "trending" indicators, limited-time offers, urgent notifications, artisan featured products
- **Meaning:** Drawn from traditional Dokra art and tribal paintings, represents cultural heritage, authenticity, and celebration. Used sparingly for maximum impact.
- **Accessibility:** Contrast ratio with base-100: 5.2:1 (WCAG AA compliant)

---

#### Neutral Colors - Stone Gray

```css
--color-neutral: oklch(40% 0.02 240);
--color-neutral-content: oklch(98% 0.01 240);
```

**Visual Reference:** Warm gray like weathered stone and rocks

- **Usage:** Text, subtle borders, dividers, secondary UI elements, inactive states, metadata
- **Meaning:** Foundation color that doesn't compete with vibrant brand colors, provides excellent readability

---

#### Base Colors (Backgrounds & Surfaces)

```css
--color-base-100: oklch(98% 0.01 120); /* Main background - almost white with subtle green hint */
--color-base-200: oklch(94% 0.02 120); /* Cards, panels - light gray-green */
--color-base-300: oklch(88% 0.03 120); /* Borders, dividers - medium gray-green */
--color-base-content: oklch(22% 0.02 120); /* Primary text - very dark gray */
```

**Light Theme Strategy:**
- Base colors have subtle green undertones to maintain connection with nature theme
- Provides excellent readability for long-form content
- Creates hierarchy through subtle tonal shifts

**Usage Examples:**
- `base-100`: Page backgrounds, main canvas
- `base-200`: Card backgrounds, elevated surfaces, input fields
- `base-300`: Borders, dividers, disabled button backgrounds
- `base-content`: Headings, body text, icons

---

#### Semantic Colors

**Info - Sky Blue:**
```css
--color-info: oklch(68% 0.16 240);
--color-info-content: oklch(20% 0.05 240);
```
- **Usage:** Informational messages, tooltips, help text, weather information, transport updates
- **Meaning:** Calm, trustworthy information that doesn't alarm

**Success - Vibrant Green:**
```css
--color-success: oklch(65% 0.20 145);
--color-success-content: oklch(20% 0.05 145);
```
- **Usage:** Booking confirmations, successful transactions, verified badges, positive reviews
- **Meaning:** Completion, verification, positive outcomes

**Warning - Golden Yellow:**
```css
--color-warning: oklch(78% 0.18 85);
--color-warning-content: oklch(25% 0.08 85);
```
- **Usage:** Important notices, booking reminders, weather alerts, limited availability warnings
- **Meaning:** Attention required but not critical

**Error - Alert Red:**
```css
--color-error: oklch(62% 0.22 20);
--color-error-content: oklch(98% 0.01 0);
```
- **Usage:** Form validation errors, failed transactions, unavailable services, critical alerts
- **Meaning:** Problems requiring immediate attention

---

### Color Usage Guidelines

**Do's:**
- ✅ Use primary green for main CTAs and nature-related content
- ✅ Use secondary orange to highlight cultural events and artisan marketplace
- ✅ Use accent red sparingly for featured destinations and urgent calls-to-action
- ✅ Ensure all text meets WCAG 2.1 AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text)
- ✅ Test colors on actual photos of Jharkhand destinations to ensure harmony
- ✅ Use semantic colors consistently (green = success, red = error, blue = info)
- ✅ Apply color psychology: greens for eco-tourism, oranges for culture, blues for information

**Don'ts:**
- ❌ Don't use more than 3 brand colors in a single view (creates visual chaos)
- ❌ Don't use color as the only indicator (always pair with icons, text, or patterns for accessibility)
- ❌ Don't override semantic color meanings (red should never mean success)
- ❌ Don't use pure black (#000000) for text—use base-content for warmer, more readable text
- ❌ Don't apply vibrant colors to large background areas (use muted variations instead)

---

### Color Accessibility Matrix

| Text Color | Background | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| base-content (22% L) | base-100 (98% L) | 13.5:1 | AAA | Body text, paragraphs |
| primary-content | primary | 8.2:1 | AAA | Primary buttons, key actions |
| secondary-content | secondary | 6.8:1 | AA | Secondary buttons, links |
| accent-content | accent | 7.5:1 | AAA | Featured items, badges |
| error-content | error | 7.1:1 | AAA | Error messages, alerts |
| success-content | success | 6.9:1 | AA | Success messages |
| base-content/70 | base-100 | 5.8:1 | AA | Secondary text, descriptions |
| base-content/50 | base-100 | 3.2:1 | — | Tertiary text (large only) |

**Testing Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Manual contrast testing
- [Accessible Colors](https://accessible-colors.com/) - Automatic accessible color generation
- Browser DevTools Accessibility Panel - Built-in testing
- [Color Oracle](https://colororacle.org/) - Color blindness simulator

---

### Visual Hierarchy & Emphasis

**Color-Based Hierarchy:**

1. **Primary Actions (Highest Priority):**
    - Color: Primary green
    - Examples: "Book Now," "Start Exploring," "Get Directions"
    - Visual weight: Solid filled buttons with drop shadows

2. **Secondary Actions (Medium Priority):**
    - Color: Secondary orange or outlined primary green
    - Examples: "Learn More," "View Gallery," "Contact Guide"
    - Visual weight: Outlined buttons or ghost buttons

3. **Tertiary Actions (Low Priority):**
    - Color: Ghost or link style in base-content
    - Examples: "Cancel," "Skip," "Back"
    - Visual weight: Minimal styling, text-only buttons

4. **Text Hierarchy:**
    - **Primary text:** `base-content` (headings, important labels)
    - **Secondary text:** `base-content` with 70% opacity (descriptions, body text)
    - **Tertiary text:** `base-content` with 50% opacity (metadata, timestamps, captions)

**Example Color Application Patterns:**

```
Destination Card:
- Card background: base-200 (light surface)
- Heading: base-content (dark, high contrast)
- Description: base-content/70 (readable but less prominent)
- "View Details" button: primary (green, high visibility)
- "Add to Wishlist" button: ghost (minimal distraction)
- Featured badge: accent (red, draws attention)

Marketplace Product:
- Product image: Full color, high quality
- Product name: base-content (clear, readable)
- Artisan name: base-content/70 with small artisan icon
- Price: base-content (prominent, important info)
- "Add to Cart" button: secondary (orange, encouraging action)
- "Quick View" button: outlined primary (alternate action)
- Sale badge: accent on secondary background (urgent, limited time)

Transport Tracking:
- Map background: Custom map style with muted colors
- Active route: primary (green line on map)
- Bus/train icons: primary filled
- Station markers: base-300 (neutral, informational)
- ETA badge: info (blue, non-urgent information)
- Delay warning: warning (yellow, attention needed)
```

---

## UI/UX Design System

### Design Principles

**1. Cultural Authenticity First**
- Every design decision should honor and celebrate Jharkhand's tribal heritage
- Use traditional patterns, motifs, and color inspirations respectfully
- Showcase local artisan work prominently without appropriation
- Involve tribal communities in design validation where possible

**2. Progressive Enhancement for Connectivity**
- Core features work on 2G/3G networks
- Images lazy-load with low-quality placeholders
- Offline capability for saved itineraries and downloaded maps
- Graceful degradation when advanced features (AR/VR) are unavailable

**3. Mobile-First, Touch-Optimized**
- Design for thumb zones on mobile devices
- Minimum touch target size: 44×44 pixels
- Bottom navigation for frequently used actions
- Swipe gestures for galleries and maps

**4. Accessibility Beyond Compliance**
- WCAG 2.1 AA as baseline, AAA where possible
- Screen reader optimized for visually impaired travelers
- High contrast mode for bright outdoor use
- Simple language avoiding tourism jargon

**5. Trust Through Transparency**
- Verified badges for all service providers
- Clear pricing with no hidden fees
- Honest reviews (positive and negative)
- Real photos from travelers, not stock images

**6. Community-Centric Design**
- Highlight artisan stories and backgrounds
- Show economic impact of tourist spending
- Enable direct communication with local providers
- Respect cultural sensitivities and privacy

---

### DaisyUI 5 Theme Configuration

**Complete Theme Definition:**

```css
@plugin "daisyui/theme" {
  name: "jharkhand-tourism-light";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  
  /* Base Colors */
  --color-base-100: oklch(98% 0.01 120);
  --color-base-200: oklch(94% 0.02 120);
  --color-base-300: oklch(88% 0.03 120);
  --color-base-content: oklch(22% 0.02 120);
  
  /* Primary Brand Color - Forest Green */
  --color-primary: oklch(55% 0.18 145);
  --color-primary-content: oklch(98% 0.02 145);
  
  /* Secondary Brand Color - Sunset Orange */
  --color-secondary: oklch(68% 0.20 45);
  --color-secondary-content: oklch(20% 0.05 45);
  
  /* Accent Color - Tribal Red */
  --color-accent: oklch(58% 0.22 25);
  --color-accent-content: oklch(98% 0.01 25);
  
  /* Neutral Color - Stone Gray */
  --color-neutral: oklch(40% 0.02 240);
  --color-neutral-content: oklch(98% 0.01 240);
  
  /* Semantic Colors */
  --color-info: oklch(68% 0.16 240);
  --color-info-content: oklch(20% 0.05 240);
  
  --color-success: oklch(65% 0.20 145);
  --color-success-content: oklch(20% 0.05 145);
  
  --color-warning: oklch(78% 0.18 85);
  --color-warning-content: oklch(25% 0.08 85);
  
  --color-error: oklch(62% 0.22 20);
  --color-error-content: oklch(98% 0.01 0);
  
  /* Border Radius - Organic, Softer Feel */
  --radius-selector: 0.5rem;  /* Radio buttons, checkboxes - slightly rounded */
  --radius-field: 0.75rem;    /* Input fields - comfortable rounded */
  --radius-box: 1.25rem;      /* Cards, containers - noticeably rounded, organic */
  
  /* Sizing */
  --size-selector: 1.5rem;    /* Checkboxes, radios */
  --size-field: 3rem;         /* Input field height */
  
  /* Effects */
  --border: 1px;              /* Subtle borders */
  --depth: 3;                 /* Medium shadow depth - noticeable but not dramatic */
  --noise: 0;                 /* No noise texture for clean, modern look */
}
```

**Dark Mode Theme (Optional - Post-MVP):**

```css
@plugin "daisyui/theme" {
  name: "jharkhand-tourism-dark";
  prefersdark: true;
  color-scheme: "dark";
  
  /* Dark Base Colors */
  --color-base-100: oklch(20% 0.02 145);  /* Dark green-tinted background */
  --color-base-200: oklch(25% 0.03 145);
  --color-base-300: oklch(30% 0.04 145);
  --color-base-content: oklch(92% 0.02 145); /* Light text */
  
  /* Adjusted brand colors for dark mode visibility */
  --color-primary: oklch(65% 0.20 145);     /* Lighter, more vibrant green */
  --color-secondary: oklch(75% 0.22 45);    /* Lighter orange */
  --color-accent: oklch(68% 0.24 25);       /* Lighter red */
  
  /* Other colors remain similar but adjusted for dark backgrounds */
}
```

---

### Typography

**Google Fonts Integration:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Headings & Attention):**
- **Font Family:** Poppins
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** All headings (H1-H6), buttons, navigation menu items, featured destination names, section titles
- **Characteristics:** Modern, friendly, geometric with good readability. Rounded letterforms complement the organic nature theme while maintaining professional appearance.

**Secondary Font (Body & Content):**
- **Font Family:** Inter
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
- **Usage:** Body text, paragraphs, descriptions, form labels, metadata, captions
- **Characteristics:** Highly optimized for digital screens, excellent readability