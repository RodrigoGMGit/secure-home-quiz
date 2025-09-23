# Component Library Reference

## UI Components (shadcn-ui)

### Button
```typescript
import { Button } from '@/components/ui/button';

<Button variant="default" size="default">
  Click me
</Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`

### Card
```typescript
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Input
```typescript
import { Input } from '@/components/ui/input';

<Input 
  type="email" 
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Checkbox
```typescript
import { Checkbox } from '@/components/ui/checkbox';

<Checkbox 
  checked={checked}
  onCheckedChange={setChecked}
/>
```

### Radio Group
```typescript
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
</RadioGroup>
```

### Select
```typescript
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Progress
```typescript
import { Progress } from '@/components/ui/progress';

<Progress value={progress} className="w-full" />
```

### Alert
```typescript
import { Alert, AlertDescription } from '@/components/ui/alert';

<Alert>
  <AlertDescription>
    This is an alert message
  </AlertDescription>
</Alert>
```

## Quiz Components

### StepHeader
Progress indicator for quiz steps.

```typescript
import { StepHeader } from '@/components/quiz/StepHeader';

<StepHeader 
  currentStep={currentStep}
  totalSteps={8}
  title="Step Title"
/>
```

### OptionGrid
Reusable grid for selecting options.

```typescript
import { OptionGrid } from '@/components/quiz/OptionGrid';

const options = [
  { id: 'option1', label: 'Option 1', description: 'Description' },
  { id: 'option2', label: 'Option 2', description: 'Description' }
];

<OptionGrid
  options={options}
  selectedValues={selectedValues}
  onSelectionChange={setSelectedValues}
  multiSelect={true}
/>
```

### ChecklistByPlatform
Platform-specific checklist component.

```typescript
import { ChecklistByPlatform } from '@/components/quiz/ChecklistByPlatform';

<ChecklistByPlatform
  platform="whatsapp"
  selectedMeasures={selectedMeasures}
  onMeasureChange={setSelectedMeasures}
/>
```

### ABGateEmail
Email collection component with A/B testing.

```typescript
import { ABGateEmail } from '@/components/quiz/ABGateEmail';

<ABGateEmail
  variant="A"
  onEmailSubmit={handleEmailSubmit}
  onSkip={handleSkip}
/>
```

## Layout Components

### AppShellCard
Main container for quiz steps.

```typescript
import { AppShellCard } from '@/components/quiz/AppShellCard';

<AppShellCard>
  <StepHeader />
  <QuizStepContent />
</AppShellCard>
```

### HeroSection
Landing page hero section.

```typescript
import { HeroSection } from '@/components/HeroSection';

<HeroSection 
  onStartQuiz={handleStartQuiz}
  onLearnMore={handleLearnMore}
/>
```

## Form Components

### Email Form
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Email inválido'),
  consent: z.boolean().refine(val => val, 'Debe aceptar los términos')
});

const EmailForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(emailSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        {...register('email')}
        placeholder="Tu email"
        error={errors.email?.message}
      />
      <Checkbox 
        {...register('consent')}
        label="Acepto los términos y condiciones"
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
};
```

## Custom Hooks

### useQuizState
Manages quiz state and progression.

```typescript
import { useQuizState } from '@/hooks/useQuizState';

const MyComponent = () => {
  const {
    currentStep,
    answers,
    updateAnswer,
    nextStep,
    previousStep,
    isComplete
  } = useQuizState();

  const handleAnswer = (key: string, value: any) => {
    updateAnswer(key, value);
    nextStep();
  };

  return (
    // Component JSX
  );
};
```

### useMobile
Detects mobile devices.

```typescript
import { useMobile } from '@/hooks/use-mobile';

const MyComponent = () => {
  const isMobile = useMobile();

  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      {/* Content */}
    </div>
  );
};
```

## Component Patterns

### Conditional Rendering
```typescript
const ConditionalComponent = ({ show, children }) => {
  if (!show) return null;
  
  return (
    <div className="conditional-content">
      {children}
    </div>
  );
};
```

### Loading States
```typescript
const LoadingComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner" />
        <p>Cargando...</p>
      </div>
    );
  }

  return children;
};
```

### Error Boundaries
```typescript
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="error-container">
    <h2>Algo salió mal</h2>
    <p>{error.message}</p>
    <Button onClick={resetErrorBoundary}>
      Intentar de nuevo
    </Button>
  </div>
);

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <MyComponent />
</ErrorBoundary>
```

## Styling Patterns

### Responsive Design
```typescript
const ResponsiveComponent = () => (
  <div className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-4
    p-4
    md:p-6
    lg:p-8
  ">
    {/* Content */}
  </div>
);
```

### Dark Mode Support
```typescript
const ThemedComponent = () => (
  <div className="
    bg-white 
    dark:bg-gray-900 
    text-gray-900 
    dark:text-gray-100
    border 
    border-gray-200 
    dark:border-gray-700
  ">
    {/* Content */}
  </div>
);
```

### Animation Classes
```typescript
const AnimatedComponent = () => (
  <div className="
    transition-all 
    duration-300 
    ease-in-out
    hover:scale-105
    hover:shadow-lg
  ">
    {/* Content */}
  </div>
);
```

## Accessibility Patterns

### Focus Management
```typescript
const FocusableComponent = () => {
  const focusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <button 
      ref={focusRef}
      className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      Focusable Button
    </button>
  );
};
```

### ARIA Labels
```typescript
const AccessibleComponent = () => (
  <div
    role="region"
    aria-labelledby="section-title"
    aria-describedby="section-description"
  >
    <h2 id="section-title">Section Title</h2>
    <p id="section-description">Section description</p>
  </div>
);
```

## Testing Patterns

### Component Testing
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { OptionGrid } from '@/components/quiz/OptionGrid';

test('renders option grid correctly', () => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' }
  ];

  render(
    <OptionGrid
      options={options}
      selectedValues={[]}
      onSelectionChange={jest.fn()}
    />
  );

  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
});
```

### Hook Testing
```typescript
import { renderHook, act } from '@testing-library/react';
import { useQuizState } from '@/hooks/useQuizState';

test('updates quiz state correctly', () => {
  const { result } = renderHook(() => useQuizState());

  act(() => {
    result.current.updateAnswer('age_band', '9-12');
  });

  expect(result.current.answers.age_band).toBe('9-12');
});
```
