# Personal Portfolio Website - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern minimalist portfolios like Linear, Vercel, and Arc Browser - focusing on clean typography, generous spacing, and subtle depth through layering rather than heavy visual effects.

## Core Design Principles

1. **Minimalist Clarity**: Remove all unnecessary elements, let content breathe with generous whitespace
2. **Typography-First**: Use type hierarchy to create visual interest without decoration
3. **Subtle Depth**: Layer content using shadows and transparency, not borders
4. **Focused Interactions**: Minimal, purposeful animations that enhance usability

---

## Typography System

**Font Families**:
- Primary: Inter (via Google Fonts CDN) - all body text, navigation, UI elements
- Accent: Space Grotesk (via Google Fonts CDN) - headlines, section titles, emphasis

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Subsections: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body Standard: text-base, font-normal
- Labels/Meta: text-sm, font-medium, tracking-wide, uppercase

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (within components): p-2, gap-4
- Component padding: p-6, p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Grid gaps: gap-6 md:gap-8

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Content-focused areas: max-w-4xl for optimal reading
- Grid layouts: max-w-6xl for multi-column displays

**Grid Patterns**:
- Project/Blog cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Highlights (Home): grid-cols-1 lg:grid-cols-2
- Skills grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

---

## Component Library

### Navigation
- Fixed top navigation with backdrop blur effect (backdrop-blur-lg)
- Logo/Name on left, menu items center-aligned or right-aligned
- Navigation items with subtle underline on hover
- Mobile: Hamburger menu transforming to full-screen overlay
- Height: h-16 md:h-20

### Hero Section (Home Page)
**Layout**: Split-screen approach
- Left: Name, title/role, brief introduction (max-w-2xl)
- Right: Professional image or abstract gradient visualization
- Minimum height: min-h-screen flex items-center
- CTA buttons: Primary "View Projects" + Secondary "Download Resume"

**Buttons on Image**: If placing CTAs over imagery, apply backdrop-blur-md to button backgrounds

### Skills Section
- Grid of skill cards: 2-4 columns responsive
- Each card: Icon (Heroicons), skill name, proficiency indicator (subtle progress bar or dot system)
- Card styling: Subtle border, padding p-6, rounded-xl
- Hover: Slight elevation with shadow-lg transition

### Project Highlights (Home)
- 2-column grid showcasing 4-6 featured projects
- Each card includes:
  - Project thumbnail image (aspect-ratio-video 16:9)
  - Project title (text-2xl font-bold)
  - Brief description (2-3 lines, text-base)
  - Tech stack tags (small pills with text-xs)
  - "View Details" link with arrow icon
- Card hover: Lift effect with shadow-xl

### Blog Highlights (Home)
- 3-column grid for latest 3 posts
- Card structure:
  - Featured image (aspect-ratio-video)
  - Category tag (small, uppercase)
  - Post title (text-xl font-semibold)
  - Excerpt (3 lines, text-sm)
  - Read time + date meta
  - "Read More" link
- Visual treatment: Minimal borders, subtle shadow on hover

### Chatbot Preview (Home)
- Full-width section with centered content (max-w-4xl)
- Mock conversation interface showing 3-4 sample exchanges
- Chat bubbles with subtle shadows
- Prominent CTA: "Try the Chatbot" button (large, rounded-full, px-8 py-4)
- Preview height: Contained, not full viewport

### Projects Page
- Filterable grid with category tabs at top
- Project cards in masonry-style grid or uniform 3-column
- Each card: Image, title, description, tech tags, GitHub + Live Demo links
- Filter tabs: Rounded pills, active state clearly distinguished
- "Load More" button if many projects

### Blog Page
- List view with large featured post at top
- Standard posts in 2-column grid below
- Sidebar (on desktop) with categories, recent posts, tags
- Blog post card: Large thumbnail, title, excerpt, meta info
- Pagination at bottom

### Individual Blog Post
- Single column, max-w-3xl centered
- Large hero image at top
- Title, author info, date, read time
- Rich text content with proper hierarchy
- Code blocks with syntax highlighting (if applicable)
- "Back to Blog" navigation

### Chatbot Page
- Split layout: 
  - Left (30%): Instructions, sample prompts, settings
  - Right (70%): Chat interface
- Chat interface:
  - Messages container with auto-scroll
  - User messages: Right-aligned, distinct styling
  - Bot messages: Left-aligned with avatar/icon
  - Input field: Fixed at bottom with send button
  - Textarea auto-grows with input

### Footer
- Full-width, divided into sections
- Left: Name/logo, brief tagline
- Center: Quick links (Home, Projects, Blog, Chatbot)
- Right: Social media icons (GitHub, LinkedIn, Twitter, Email)
- Bottom: Copyright, "Built with ❤️" message
- Minimal padding: py-12

---

## Interactive Elements

### Buttons
**Primary**: 
- Large touch targets (px-6 py-3 md:px-8 md:py-4)
- Rounded corners (rounded-lg or rounded-full for CTAs)
- Font weight: font-semibold
- Icon support (optional trailing arrow)

**Secondary**:
- Ghost style with border
- Same sizing as primary
- Transparent background with border

**Text Links**:
- Underline on hover
- Small arrow icon on hover (slide in from left)

### Cards
- Subtle border (border opacity-20)
- Rounded corners: rounded-xl
- Padding: p-6 md:p-8
- Hover: Transform scale-105, shadow-xl
- Transition: All properties 300ms ease

### Form Elements (Chatbot Input)
- Input fields: Border, rounded-lg, p-4
- Focus state: Border emphasis, no outline ring
- Placeholder text: Subtle, helpful

---

## Animation Guidelines

**Minimal, Purposeful Only**:
- Page transitions: Fade in content on load (opacity 0 to 1, 400ms)
- Scroll reveals: Subtle slide-up for sections (translate-y-8 to 0)
- Hover states: Transform and shadow only, 200-300ms
- No parallax, no complex scroll-based animations
- Chatbot typing indicator: Simple 3-dot pulse animation

---

## Accessibility

- All interactive elements: Minimum 44x44px touch targets
- Form inputs: Clear labels, visible focus states
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support throughout
- Skip to main content link

---

## Images

**Hero Section Image**: 
- Professional headshot or abstract geometric/gradient visualization
- Position: Right side of split layout
- Treatment: Rounded corners (rounded-2xl), subtle shadow
- Size: Minimum 800x800px, optimized for web

**Project Thumbnails**:
- Screenshots or mockups of projects
- Aspect ratio: 16:9
- Add subtle overlay on hover for "View Project" state

**Blog Featured Images**:
- High-quality, relevant imagery
- Aspect ratio: 16:9 for cards, 21:9 for featured post
- Optimized file size

**Chatbot Avatar**:
- Small icon/logo representing the AI assistant
- Size: 32x32px or 40x40px
- Positioned left of bot messages

---

## Icon System

**Library**: Heroicons (outline style) via CDN
- Navigation: Home, folder, document-text, chat icons
- Skills: Technology-specific icons where available
- Social: GitHub, LinkedIn, Twitter, envelope
- UI actions: Arrow-right, external-link, x (close)
- Chatbot: paper-airplane (send), cog (settings)

**Usage**:
- Standard size: w-5 h-5 or w-6 h-6
- Inline with text: Align middle
- Standalone: Larger sizes w-8 h-8 to w-12 h-12

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:
- Navigation: Full-screen overlay menu
- Hero: Stack vertically (image below text)
- Grids: Single column
- Font sizes: Scale down appropriately
- Padding: Reduce from desktop values
- Chatbot: Full-width, collapsible sidebar

---

This minimalist dark-themed portfolio emphasizes content hierarchy, generous spacing, and purposeful interactions. The design creates visual interest through typography, subtle depth layering, and strategic use of imagery while maintaining exceptional clarity and usability.