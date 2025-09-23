# Architecture Overview

## System Architecture

### Frontend Stack
- **React 18**: Component-based UI with hooks
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn-ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives for accessibility

### Backend & Data
- **Supabase**: Backend-as-a-Service for database and auth
- **React Query**: Data fetching and caching
- **Local Storage**: Client-side state persistence

### Routing & Navigation
- **React Router**: Client-side routing
- **Programmatic navigation**: For quiz flow progression

## Component Architecture

### Quiz Flow
```
Quiz.tsx (main container)
├── StepHeader.tsx (progress indicator)
├── steps/
│   ├── WelcomeStep.tsx
│   ├── AgeStep.tsx
│   ├── GenderStep.tsx
│   ├── PlatformsStep.tsx
│   ├── ConcernsStep.tsx
│   ├── HabitsSignalsStep.tsx
│   ├── MeasuresStep.tsx
│   └── DoneStep.tsx
├── OptionGrid.tsx (reusable option selection)
├── ChecklistByPlatform.tsx (platform-specific checklists)
└── ABGateEmail.tsx (email collection)
```

### State Management
- **useQuizState**: Custom hook for quiz state management
- **Local Storage**: Persistence across sessions
- **React State**: Component-level state management

### UI Components
- **shadcn-ui**: Pre-built components in `src/components/ui/`
- **Custom Components**: Quiz-specific components in `src/components/quiz/`
- **Layout Components**: AppShellCard, HeroSection

## Data Flow

### Quiz Progression
1. User answers questions step by step
2. State updates in `useQuizState` hook
3. Progress saved to localStorage
4. Results processed to generate personalized plan
5. Plan displayed with platform-specific recommendations

### Personalization Engine
- **Age Bands**: 6-8, 9-12, 13-15, 16-17
- **Platforms**: WhatsApp, YouTube/YouTube Kids, Roblox/Minecraft, TikTok
- **Risks**: Inappropriate content, grooming, cyberbullying, time management, privacy, sexting
- **Output**: Customized action plan with conversation scripts

## File Structure

```
src/
├── components/
│   ├── quiz/           # Quiz-specific components
│   └── ui/            # shadcn-ui components
├── hooks/             # Custom React hooks
├── pages/             # Route components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── integrations/      # External service integrations
└── assets/           # Static assets
```

## Design System

### Typography
- **Brandon Grotesque Bold**: Headings (uppercase)
- **Uniform Regular/Bold**: Body text
- **Fallbacks**: Montserrat, Inter, Arial

### Color Palette
- **Brand Ink**: #002B36 (primary dark)
- **Brand Teal**: #3994B2 (accent)
- **Brand Olive**: #576D5B (secondary)
- **Brand Mint**: #B0E0D6 (light accent)
- **Neutral**: #D5D6D5 (light gray)

### Spacing & Layout
- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px
- **Border Radius**: 8px, 12px, 16px, 20px
- **Shadows**: Subtle card shadows for depth

## Performance Considerations

### Optimization Strategies
- **Code Splitting**: Route-based splitting with React Router
- **Lazy Loading**: Images and non-critical components
- **Bundle Analysis**: Monitor bundle size with Vite
- **Mobile First**: Optimize for mobile performance

### Caching
- **React Query**: Automatic caching of API responses
- **Local Storage**: Quiz progress persistence
- **Static Assets**: Proper caching headers

## Security & Privacy

### Data Protection
- **No PII Collection**: By default, no personal information collected
- **Opt-in Email**: Optional email collection with consent
- **Local Storage**: Client-side data only
- **HTTPS**: Secure data transmission

### Privacy Compliance
- **Mexican Regulations**: Follow local privacy laws
- **Data Retention**: 12-month retention policy
- **User Rights**: Easy data deletion and access

## Analytics & Tracking

### Event Tracking
- **User Interactions**: Quiz progress, button clicks
- **Conversion Funnel**: Hero → Quiz → Plan → Action
- **Performance Metrics**: Load times, error rates
- **Privacy-First**: No third-party tracking

### Key Metrics
- Quiz completion rate
- Plan generation success
- Email opt-in rate
- User engagement patterns

## Deployment

### Build Process
```bash
npm run build    # Production build
npm run preview  # Preview production build
```

### Environment Configuration
- **Development**: Local Vite server
- **Production**: Static site deployment
- **Environment Variables**: Supabase configuration

## Future Considerations

### Scalability
- **Content Management**: Consider headless CMS for content updates
- **A/B Testing**: Framework for testing different approaches
- **Internationalization**: Support for other Spanish-speaking countries
- **Mobile App**: Potential React Native version

### Feature Roadmap
- **Scrollytelling**: Interactive storytelling section
- **Reference Hub**: Platform-specific guides
- **Community Features**: User-generated content
- **Advanced Analytics**: Deeper insights and optimization
