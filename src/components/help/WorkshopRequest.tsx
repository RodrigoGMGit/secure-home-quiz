import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface TallerFormState {
  nombre: string;
  institucion: string;
  email: string;
  telefono: string;
  tipoTaller: string;
  numeroAsistentes: string;
  mensaje: string;
}

export default function WorkshopRequest() {
  const [tallerForm, setTallerForm] = useState<TallerFormState>({
    nombre: "",
    institucion: "",
    email: "",
    telefono: "",
    tipoTaller: "",
    numeroAsistentes: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu interés. Te contactaremos pronto.");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-4">
          ¿Quieres que llevemos esta plática a tu institución o empresa?
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-3 flex items-center">
              <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
              Tipos de talleres
            </h4>
            <ul className="space-y-2 text-sm text-brand-ink-800">
              <li>• Para padres, madres y personas cuidadoras</li>
              <li>• Instituciones educativas</li>
              <li>• Empresas y organizaciones</li>
              <li>• Talleres personalizados</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-3 flex items-center">
              <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
              Temas cubiertos
            </h4>
            <ul className="space-y-2 text-sm text-brand-ink-800">
              <li>• Seguridad digital infantil</li>
              <li>• Controles parentales</li>
              <li>• Prevención de riesgos</li>
              <li>• Comunicación familiar</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Nombre completo *</label>
            <Input
              value={tallerForm.nombre}
              onChange={(e) => setTallerForm({ ...tallerForm, nombre: e.target.value })}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Institución/Organización *</label>
            <Input
              value={tallerForm.institucion}
              onChange={(e) => setTallerForm({ ...tallerForm, institucion: e.target.value })}
              placeholder="Nombre de la institución"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Email *</label>
            <Input
              type="email"
              value={tallerForm.email}
              onChange={(e) => setTallerForm({ ...tallerForm, email: e.target.value })}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Teléfono</label>
            <Input
              value={tallerForm.telefono}
              onChange={(e) => setTallerForm({ ...tallerForm, telefono: e.target.value })}
              placeholder="Número de contacto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Tipo de taller *</label>
            <Select value={tallerForm.tipoTaller} onValueChange={(value) => setTallerForm({ ...tallerForm, tipoTaller: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="padres">Para padres y madres</SelectItem>
                <SelectItem value="escuela">Institución educativa</SelectItem>
                <SelectItem value="empresa">Empresa u organización</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-ink-900 mb-2">Número aproximado de asistentes</label>
            <Input
              value={tallerForm.numeroAsistentes}
              onChange={(e) => setTallerForm({ ...tallerForm, numeroAsistentes: e.target.value })}
              placeholder="Ej: 50 personas"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-ink-900 mb-2">Mensaje/Necesidades específicas</label>
          <Textarea
            value={tallerForm.mensaje}
            onChange={(e) => setTallerForm({ ...tallerForm, mensaje: e.target.value })}
            placeholder="Cuéntanos sobre tus necesidades específicas, fechas preferidas, etc."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth">
          <Send className="mr-2 h-4 w-4" />
          Quiero el taller
        </Button>
      </form>
    </div>
  );
}


