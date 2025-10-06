// src/components/ui/quiz-components-examples.tsx
// Ejemplos de uso de componentes para el quiz con tokens semánticos

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputEnhanced } from "@/components/ui/input-enhanced";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

// ========================================
// EJEMPLOS DE ALERTAS CON TOKENS SEMÁNTICOS
// ========================================

export function AlertExamples() {
  return (
    <div className="space-y-4">
      {/* Success Alert */}
      <Alert className="bg-success-subtle border-success">
        <CheckCircle className="h-4 w-4 text-success" />
        <AlertDescription className="text-success-foreground">
          ¡Respuesta guardada correctamente!
        </AlertDescription>
      </Alert>

      {/* Warning Alert */}
      <Alert className="bg-warning-subtle border-warning">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-warning-foreground">
          Recuerda completar todas las preguntas antes de continuar
        </AlertDescription>
      </Alert>

      {/* Error Alert */}
      <Alert className="bg-error-subtle border-error">
        <XCircle className="h-4 w-4 text-error" />
        <AlertDescription className="text-error-foreground">
          Hubo un error al guardar tu respuesta. Intenta nuevamente.
        </AlertDescription>
      </Alert>

      {/* Info Alert */}
      <Alert className="bg-info-subtle border-info">
        <Info className="h-4 w-4 text-info" />
        <AlertDescription className="text-info-foreground">
          Esta información te ayudará a proteger mejor a tu familia.
        </AlertDescription>
      </Alert>
    </div>
  );
}

// ========================================
// EJEMPLOS DE INPUT ENHANCED
// ========================================

export function InputExamples() {
  return (
    <div className="space-y-4">
      {/* Input normal */}
      <InputEnhanced
        label="Nombre completo"
        placeholder="Ingresa tu nombre completo"
        helperText="Este nombre aparecerá en tu plan personalizado"
      />

      {/* Input con error */}
      <InputEnhanced
        label="Correo electrónico"
        placeholder="tu@email.com"
        error="Por favor ingresa un correo electrónico válido"
      />

      {/* Input con helper text */}
      <InputEnhanced
        label="Edad de tu hijo/a"
        type="number"
        placeholder="8"
        helperText="Necesitamos saber la edad para personalizar las recomendaciones"
      />
    </div>
  );
}

// ========================================
// EJEMPLOS DE CHECKBOX CON ESTILOS DE MARCA
// ========================================

export function CheckboxExamples() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms"
          className="focus-visible-brand data-[state=checked]:bg-brand-teal-500 data-[state=checked]:text-white"
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Acepto los términos y condiciones
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="newsletter"
          className="focus-visible-brand data-[state=checked]:bg-brand-teal-500 data-[state=checked]:text-white"
        />
        <label
          htmlFor="newsletter"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Quiero recibir consejos adicionales por correo
        </label>
      </div>
    </div>
  );
}

// ========================================
// EJEMPLOS DE RADIO CON ESTILOS DE MARCA
// ========================================

export function RadioExamples() {
  return (
    <div className="space-y-4">
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="option1" 
            id="r1"
            className="focus-visible-brand data-[state=checked]:border-brand-teal-500 data-[state=checked]:bg-brand-teal-500/10"
          />
          <label htmlFor="r1" className="text-sm font-medium leading-none">
            Opción 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="option2" 
            id="r2"
            className="focus-visible-brand data-[state=checked]:border-brand-teal-500 data-[state=checked]:bg-brand-teal-500/10"
          />
          <label htmlFor="r2" className="text-sm font-medium leading-none">
            Opción 2
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="option3" 
            id="r3"
            className="focus-visible-brand data-[state=checked]:border-brand-teal-500 data-[state=checked]:bg-brand-teal-500/10"
          />
          <label htmlFor="r3" className="text-sm font-medium leading-none">
            Opción 3
          </label>
        </div>
      </RadioGroup>
    </div>
  );
}

// ========================================
// EJEMPLOS DE ESTADOS DISABLED
// ========================================

export function DisabledExamples() {
  return (
    <div className="space-y-4">
      {/* Botón disabled */}
      <button 
        disabled 
        className="bg-disabled-bg text-disabled-fg border-disabled-border px-4 py-2 rounded-md cursor-not-allowed"
      >
        Continuar (deshabilitado)
      </button>

      {/* Input disabled */}
      <InputEnhanced
        label="Campo deshabilitado"
        placeholder="No puedes escribir aquí"
        disabled
      />

      {/* Checkbox disabled */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="disabled-checkbox"
          disabled
          className="focus-visible-brand data-[state=checked]:bg-brand-teal-500 data-[state=checked]:text-white"
        />
        <label
          htmlFor="disabled-checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Opción deshabilitada
        </label>
      </div>
    </div>
  );
}
