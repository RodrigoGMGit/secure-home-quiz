# Logos Directory

This directory contains logo files for the Secure Home Quiz project.

## File Organization

- **Brand logos**: Main project logos and variations
- **Platform logos**: Logos for social media platforms, apps, and services referenced in the quiz
- **Educational logos**: Logos for educational resources and partner organizations

## Supported Formats

- **SVG**: Preferred for scalable vector graphics
- **PNG**: For raster images with transparency
- **WebP**: For optimized web delivery (when supported)

## Naming Convention

- Use lowercase with hyphens: `secure-home-quiz-logo.svg`
- Include size variants: `platform-tiktok-icon-24px.svg`
- Include color variants: `brand-logo-dark.svg`, `brand-logo-light.svg`

## Usage in Components

```tsx
import LogoIcon from '@/assets/logos/platform-tiktok-icon.svg';

// In component
<img src={LogoIcon} alt="TikTok" className="w-6 h-6" />
```

## Accessibility

- Always include appropriate `alt` text for screen readers
- Use semantic HTML elements when possible
- Ensure sufficient color contrast for text overlays
