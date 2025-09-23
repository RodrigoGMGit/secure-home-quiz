# Contributing to Secure Home Quiz

## Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Code Standards

### TypeScript
- Use strict TypeScript mode
- Define proper types in `src/types/`
- Avoid `any` types
- Use proper React component typing

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use proper prop typing
- Follow existing patterns in the codebase

### Styling
- Use Tailwind CSS classes
- Use `cn()` helper for conditional classes
- Follow existing design tokens
- Ensure mobile responsiveness

### File Organization
- Components go in `src/components/`
- Hooks go in `src/hooks/`
- Types go in `src/types/`
- Utilities go in `src/utils/`
- Pages go in `src/pages/`

## Testing

### Manual Testing
- Test quiz flow end-to-end
- Verify mobile responsiveness
- Check accessibility with keyboard navigation
- Test email opt-in functionality

### Linting
```bash
npm run lint
```
Fix all linting errors before committing.

## Content Guidelines

### Language
- All content must be in Spanish (Mexico)
- Use warm, supportive tone
- Make instructions actionable and clear

### Age Appropriateness
- Follow age band guidelines (6-8, 9-12, 13-15, 16-17)
- Ensure content is appropriate for each age group
- Use age-appropriate language and examples

### Platform-Specific Content
- WhatsApp: Focus on messaging safety
- YouTube/YouTube Kids: Content filtering and time limits
- Roblox/Minecraft: Gaming safety and moderation
- TikTok: Age restrictions and content monitoring

## Pull Request Process

1. Create feature branch from `main`
2. Make changes following code standards
3. Test thoroughly
4. Run linting and fix issues
5. Submit PR with clear description
6. Request review from maintainers

## Analytics & Privacy

### Event Tracking
- Follow event naming conventions in `project_context.md`
- Track user interactions for optimization
- Respect user privacy preferences

### Data Collection
- Use opt-in approach for email collection
- Follow Mexican privacy regulations
- Implement proper data retention policies

## Performance

### Optimization
- Optimize images for web
- Use lazy loading where appropriate
- Minimize bundle size
- Ensure fast loading on mobile networks

### Accessibility
- Follow WCAG AA guidelines
- Ensure keyboard navigation works
- Use proper ARIA labels
- Test with screen readers

## Questions?

Contact the project maintainers for questions about:
- Content guidelines
- Technical architecture
- Privacy compliance
- Performance optimization
