# Birthday Surprise Web App - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from romantic celebration platforms and personal storytelling experiences, with emphasis on emotional impact and visual delight.

**Core Principles**: Intimate elegance, joyful celebration, smooth animations, and personalized storytelling that creates an unforgettable digital experience.

---

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**
- Background: 340 25% 97% (soft blush white)
- Primary: 340 82% 62% (romantic rose pink)
- Secondary: 330 70% 88% (light pink for cards/sections)
- Accent: 320 60% 50% (deeper magenta for interactive elements)
- Text Primary: 340 50% 20% (warm dark brown)
- Text Secondary: 340 30% 45% (muted rose)
- Hearts/Confetti: Mix of 0 85% 65% (red), 340 82% 62% (pink), 280 60% 70% (lavender)

### B. Typography

**Font Families**: 
- Headings: 'Playfair Display' or 'Cormorant Garamond' (romantic serif)
- Body: 'Poppins' or 'Inter' (clean, modern sans-serif)
- Special Messages: 'Dancing Script' or 'Great Vibes' (script for intimate touches)

**Sizes & Weights**:
- Hero Title: text-6xl md:text-8xl font-bold (her name in decorative font)
- Section Headings: text-4xl md:text-5xl font-semibold
- Body Text: text-lg leading-relaxed
- Special Messages: text-2xl md:text-3xl font-script

### C. Layout System

**Spacing**: Use Tailwind units 4, 8, 12, 16, 24 for consistent rhythm (p-8, mb-12, space-y-16)

**Structure**:
- Full viewport hero section with centered content
- Flowing single-column narrative layout (max-w-4xl)
- Generous vertical spacing between sections (py-16 to py-24)
- Asymmetric photo placements for visual interest

### D. Component Library

**Hero Section**:
- Full-screen animated entrance with her name
- Floating hearts animation (CSS keyframes)
- Sparkle effects using small star/dot elements
- Music player toggle button (top-right, subtle)
- Scroll indicator with heart icon

**Photo Gallery Section**:
- Large featured photo with rounded-3xl border and soft shadow
- Polaroid-style frame with handwritten caption
- Confetti burst animation on section reveal
- Ambient glow effect behind photo (subtle gradient)

**Message Cards**:
- Frosted glass cards (backdrop-blur-lg bg-white/80)
- Staggered fade-in animations as user scrolls
- Heart icon accents in corners
- Handwritten-style text for personal touch

**Interactive Surprise Section**:
- Mystery gift box graphic that "opens" on click
- Reveal multiple memory cards in a masonry grid
- Each card has: date, photo thumbnail, short memory text
- Hover effects with gentle scale and glow

**Navigation/Audio**:
- Floating audio control (play/pause, subtle design)
- Progress indicator showing journey through the experience
- "Made with ♥" footer with date

### E. Animations

**Strategic Animation Use**:
- Hero entrance: Title slides up with fade (duration-1000)
- Hearts: Gentle float upward with rotation (infinite loop, staggered delays)
- Confetti: Burst effect on photo section reveal (one-time, celebratory)
- Message cards: Sequential fade-in-up on scroll (duration-700, delay-200 between)
- Surprise reveal: Smooth height expansion with spring timing
- Photo: Subtle hover scale (1.02) with smooth transition

**Performance**: All animations use transform and opacity for smooth 60fps performance.

---

## Images

**Hero Background**: Soft gradient with subtle particle effects (no photo)

**Featured Photo Section**: 
- One large photo of her (user upload)
- Aspect ratio: 3:4 or 1:1 (portrait/square)
- Treatment: Soft shadow, rounded corners, optional polaroid frame
- Position: Center of section with generous padding

**Memory Surprise Cards**:
- 4-6 smaller photos in grid layout (user uploads)
- Treatment: Rounded corners, consistent aspect ratio
- Overlay: Gradient overlay with white text on hover

**No large hero image** - focusing on typography and animation for hero impact.

---

## Key Experience Moments

1. **Initial Load**: Smooth fade-in with her name appearing letter-by-letter or word-by-word
2. **Music Start**: Gentle prompt to enable audio (respectful of autoplay policies)
3. **Scroll Journey**: Each section reveals smoothly with appropriate animations
4. **Surprise Reveal**: Delightful "unwrapping" interaction with satisfying timing
5. **Final Message**: Heartfelt closing with call-to-action button (e.g., "Reply to Me")

**Mobile Optimization**: All animations scale appropriately, touch-friendly interactions, single-column layout, readable text sizes, accessible music controls.