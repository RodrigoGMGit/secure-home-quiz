import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import WorkshopRequest from "./WorkshopRequest";

interface WorkshopRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WorkshopRequestModal({ open, onOpenChange }: WorkshopRequestModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
        <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl"></div>
          </div>
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex justify-center sm:justify-start">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-2">
                  Talleres y charlas
                </DialogTitle>
                <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed">
                  Llevamos la educación digital a tu institución
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
            <WorkshopRequest />
          </div>
        </div>

        <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />

        <div className="flex justify-center px-4 sm:px-0">
          <Button 
            onClick={() => onOpenChange(false)} 
            className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
          >
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


