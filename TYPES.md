# TypeScript Types Reference

## Quiz Types

### Core Quiz Types

```typescript
// Quiz step progression
export type QuizStep = 
  | 'welcome' 
  | 'gender' 
  | 'age'
  | 'platforms' 
  | 'measures' 
  | 'habits_signals' 
  | 'concerns' 
  | 'done';

// Child gender options
export type ChildGender = 'Niño' | 'Niña' | 'Prefiero no especificar';

// Age bands for children
export type AgeBand = '6-8' | '9-12' | '13-15' | '16-17';

// Supported platforms
export type Platform = 
  | 'whatsapp' 
  | 'youtube' 
  | 'instagram' 
  | 'roblox' 
  | 'minecraft' 
  | 'tiktok' 
  | 'otros';

// A/B testing variants
export type ABVariant = 'A' | 'B' | 'C';
```

### Quiz Data Structures

```typescript
// User's quiz answers
export interface QuizAnswers {
  child_gender?: ChildGender;
  age_band?: AgeBand;
  platforms?: Platform[];
  unknown_platforms?: boolean;
  measures?: {
    [key in Platform]?: string[];
  };
  habits?: string[];
  signals?: string[];
  concerns?: string[];
}

// Input for plan generation
export interface PlanInput {
  age_band: AgeBand;
  platforms: Platform[];
  unknown_platforms: boolean;
  measures: {
    [key in Platform]?: string[];
  };
  habits: string[];
  signals: string[];
  concerns: string[];
  ab_variant_plan_email: ABVariant;
}

// Current quiz state
export interface QuizState {
  currentStep: QuizStep;
  answers: QuizAnswers;
  visitorId: string;
  abVariant: ABVariant;
  startTime: number;
}
```

## Analytics Types

```typescript
// Analytics data collection
export interface AnalyticsData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  device_type: 'mobile' | 'tablet' | 'desktop';
  os?: string;
  browser?: string;
  lang: string;
  connection?: string;
  first_visit: boolean;
  inapp_browser: boolean;
}
```

## Component Props

### Common Component Props

```typescript
// Base component props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button variants
interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

// Form field props
interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}
```

### Quiz Component Props

```typescript
// Quiz step component props
interface QuizStepProps {
  onNext: () => void;
  onPrevious: () => void;
  onAnswer: (value: any) => void;
  currentAnswer?: any;
}

// Option grid props
interface OptionGridProps {
  options: Array<{
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
  }>;
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  multiSelect?: boolean;
}

// Platform checklist props
interface ChecklistByPlatformProps {
  platform: Platform;
  selectedMeasures: string[];
  onMeasureChange: (measures: string[]) => void;
}
```

## API Types

### Supabase Types

```typescript
// Database table types
interface QuizSubmission {
  id: string;
  created_at: string;
  visitor_id: string;
  answers: QuizAnswers;
  plan_input: PlanInput;
  analytics_data: AnalyticsData;
  email?: string;
  consent_given: boolean;
}

interface EmailSubscription {
  id: string;
  email: string;
  consent_given: boolean;
  created_at: string;
  visitor_id: string;
}
```

### Plan Generation Types

```typescript
// Generated plan structure
interface GeneratedPlan {
  age_band: AgeBand;
  platforms: Platform[];
  prioritized_areas: string[];
  recommendations: {
    [platform: string]: {
      title: string;
      actions: string[];
      scripts: string[];
    };
  };
  conversation_scripts: {
    [topic: string]: string;
  };
  next_steps: string[];
}
```

## Utility Types

### Generic Types

```typescript
// Make all properties optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Make specific properties required
type Required<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

// Extract values from union type
type ValueOf<T> = T[keyof T];
```

### Event Types

```typescript
// Analytics event types
type AnalyticsEvent = 
  | 'page_view'
  | 'session_start'
  | 'hero_tool_cta_click'
  | 'tool_start'
  | 'tool_complete'
  | 'plan_generated'
  | 'email_submit';

// Event payload structure
interface EventPayload {
  event: AnalyticsEvent;
  properties?: Record<string, any>;
  timestamp: number;
  visitor_id: string;
}
```

## Type Guards

### Runtime Type Checking

```typescript
// Check if value is a valid age band
export const isAgeBand = (value: any): value is AgeBand => {
  return ['6-8', '9-12', '13-15', '16-17'].includes(value);
};

// Check if value is a valid platform
export const isPlatform = (value: any): value is Platform => {
  return ['whatsapp', 'youtube', 'instagram', 'roblox', 'minecraft', 'tiktok', 'otros'].includes(value);
};

// Check if value is a valid quiz step
export const isQuizStep = (value: any): value is QuizStep => {
  return ['welcome', 'gender', 'age', 'platforms', 'measures', 'habits_signals', 'concerns', 'done'].includes(value);
};
```

## Type Usage Examples

### Component Implementation

```typescript
// Using types in components
const AgeStep: React.FC<QuizStepProps> = ({ onNext, onAnswer, currentAnswer }) => {
  const handleAgeSelection = (age: AgeBand) => {
    onAnswer(age);
    onNext();
  };

  return (
    <div>
      {/* Age selection UI */}
    </div>
  );
};

// Type-safe state management
const useQuizState = (): QuizState => {
  const [state, setState] = useState<QuizState>({
    currentStep: 'welcome',
    answers: {},
    visitorId: generateVisitorId(),
    abVariant: getABVariant(),
    startTime: Date.now()
  });

  const updateAnswer = <K extends keyof QuizAnswers>(
    key: K, 
    value: QuizAnswers[K]
  ) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [key]: value }
    }));
  };

  return { ...state, updateAnswer };
};
```

### API Integration

```typescript
// Type-safe API calls
const submitQuiz = async (data: PlanInput): Promise<GeneratedPlan> => {
  const response = await fetch('/api/quiz/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Failed to submit quiz');
  }

  return response.json();
};
```

## Type Safety Best Practices

1. **Always define interfaces** for complex objects
2. **Use union types** for limited sets of values
3. **Implement type guards** for runtime validation
4. **Avoid `any` type** - use proper typing
5. **Use generic types** for reusable components
6. **Export types** from dedicated files
7. **Use strict TypeScript** configuration
8. **Validate external data** with type guards
