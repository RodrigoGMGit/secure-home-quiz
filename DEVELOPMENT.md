# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Common Development Patterns

### Creating New Components

```typescript
// src/components/quiz/NewComponent.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface NewComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export const NewComponent: React.FC<NewComponentProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
};
```

### Using the Quiz State Hook

```typescript
import { useQuizState } from '@/hooks/useQuizState';

const MyComponent = () => {
  const { 
    currentStep, 
    answers, 
    updateAnswer, 
    nextStep, 
    previousStep 
  } = useQuizState();

  const handleAnswer = (value: string) => {
    updateAnswer('questionId', value);
    nextStep();
  };

  return (
    // Component JSX
  );
};
```

### Styling with Tailwind

```typescript
// Use cn() helper for conditional classes
import { cn } from '@/lib/utils';

const Button = ({ variant, className, ...props }) => {
  return (
    <button
      className={cn(
        "base-button-styles",
        {
          "primary-styles": variant === "primary",
          "secondary-styles": variant === "secondary",
        },
        className
      )}
      {...props}
    />
  );
};
```

## Quiz Development

### Adding New Quiz Steps

1. **Create the step component:**
```typescript
// src/components/quiz/steps/NewStep.tsx
import React from 'react';
import { useQuizState } from '@/hooks/useQuizState';

export const NewStep: React.FC = () => {
  const { updateAnswer, nextStep } = useQuizState();

  const handleSubmit = (value: string) => {
    updateAnswer('newQuestion', value);
    nextStep();
  };

  return (
    <div className="step-container">
      {/* Step content */}
    </div>
  );
};
```

2. **Add to quiz flow:**
```typescript
// src/pages/Quiz.tsx
import { NewStep } from '@/components/quiz/steps/NewStep';

// Add to step mapping
const stepComponents = {
  // ... existing steps
  newStep: NewStep,
};
```

3. **Update types:**
```typescript
// src/types/quiz.ts
export interface QuizAnswers {
  // ... existing answers
  newQuestion?: string;
}

export type QuizStep = 
  | 'welcome'
  | 'age'
  | // ... existing steps
  | 'newStep';
```

### Platform-Specific Content

```typescript
// Platform-specific recommendations
const platformRecommendations = {
  whatsapp: {
    title: "WhatsApp Safety",
    recommendations: [
      "Enable two-factor authentication",
      "Review privacy settings",
      "Monitor group chats"
    ]
  },
  youtube: {
    title: "YouTube Safety",
    recommendations: [
      "Enable Restricted Mode",
      "Set up YouTube Kids",
      "Monitor watch history"
    ]
  }
};
```

## State Management Patterns

### Local Storage Integration

```typescript
// src/utils/localStorage.ts
export const saveQuizProgress = (data: QuizAnswers) => {
  localStorage.setItem('quiz-progress', JSON.stringify(data));
};

export const loadQuizProgress = (): QuizAnswers | null => {
  const saved = localStorage.getItem('quiz-progress');
  return saved ? JSON.parse(saved) : null;
};
```

### Form Handling

```typescript
// Using React Hook Form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Email inválido'),
  consent: z.boolean().refine(val => val, 'Debe aceptar los términos')
});

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};
```

## Testing Patterns

### Component Testing

```typescript
// Test quiz step components
import { render, screen } from '@testing-library/react';
import { AgeStep } from '@/components/quiz/steps/AgeStep';

test('renders age step correctly', () => {
  render(<AgeStep />);
  expect(screen.getByText('¿Cuál es la edad de tu hijo?')).toBeInTheDocument();
});
```

### Integration Testing

```typescript
// Test quiz flow
import { render, screen, fireEvent } from '@testing-library/react';
import { Quiz } from '@/pages/Quiz';

test('completes quiz flow', async () => {
  render(<Quiz />);
  
  // Test step progression
  fireEvent.click(screen.getByText('Siguiente'));
  expect(screen.getByText('Step 2')).toBeInTheDocument();
});
```

## Performance Optimization

### Code Splitting

```typescript
// Lazy load components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

const App = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <LazyComponent />
  </Suspense>
);
```

### Image Optimization

```typescript
// Optimize images
import { Image } from '@/components/ui/image';

const OptimizedImage = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    loading="lazy"
    className="w-full h-auto"
    {...props}
  />
);
```

## Debugging

### Common Issues

1. **Quiz state not persisting:**
   - Check localStorage implementation
   - Verify useQuizState hook
   - Ensure proper state updates

2. **Styling issues:**
   - Check Tailwind class names
   - Verify cn() helper usage
   - Check for CSS conflicts

3. **TypeScript errors:**
   - Update type definitions
   - Check prop types
   - Verify import paths

### Debug Tools

```typescript
// Add debugging to quiz state
const useQuizState = () => {
  // ... existing logic
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Quiz State:', { currentStep, answers });
  }
  
  return { currentStep, answers, updateAnswer, nextStep, previousStep };
};
```

## Deployment Checklist

- [ ] Run `npm run lint` and fix all issues
- [ ] Test quiz flow end-to-end
- [ ] Verify mobile responsiveness
- [ ] Check accessibility with keyboard navigation
- [ ] Test email opt-in functionality
- [ ] Verify analytics tracking
- [ ] Check performance metrics
- [ ] Test production build locally

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Debugging
npm run dev -- --debug  # Start with debug mode
npm run build -- --analyze  # Analyze bundle size
```
