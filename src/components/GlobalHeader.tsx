import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, BookOpen, HelpCircle, FileText, Users, Shield, MessageCircle, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GlobalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navigationItems = [
    {
      title: "Inicio",
      href: "/",
      icon: Home,
    },
    {
      title: "Conoce Más",
      href: "/about",
      icon: BookOpen,
    },
    {
      title: "Quiz",
      href: "/quiz",
      icon: HelpCircle,
    },
    {
      title: "Aprende",
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        {
          title: "Tu Familia",
          href: "/aprende/tu-familia",
          icon: Users,
          description: "Conoce los hábitos digitales de tu familia",
        },
        {
          title: "Riesgos",
          href: "/aprende/riesgos",
          icon: Shield,
          description: "Identifica y previene riesgos digitales",
        },
        {
          title: "Controles",
          href: "/aprende/controles",
          icon: Shield,
          description: "Configura controles parentales efectivos",
        },
        {
          title: "Comunicación",
          href: "/aprende/comunicacion",
          icon: MessageCircle,
          description: "Mejora la comunicación familiar",
        },
        {
          title: "Acciones Legales",
          href: "/aprende/acciones-legales",
          icon: Scale,
          description: "Conoce las acciones legales disponibles",
        },
      ],
    },
    {
      title: "Recursos",
      href: "/recursos",
      icon: FileText,
    },
    {
      title: "Ayuda",
      href: "/ayuda",
      icon: HelpCircle,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const MobileMenu = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden hover:bg-brand-mint-200/30 transition-smooth"
        >
          <Menu className="h-6 w-6 text-brand-ink-800" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[320px] sm:w-[400px] bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-l border-brand-mint-200/30 flex flex-col p-0"
      >
        {/* Header fijo con logo circular */}
        <div className="flex-shrink-0 p-6 border-b border-brand-mint-200/30 bg-gradient-to-r from-white to-brand-mint-200/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="text-lg font-heading font-bold text-brand-ink-900">
                Hogares Digitales Seguros
              </div>
              <div className="text-xs text-brand-olive-500 font-body">
                Navegación
              </div>
            </div>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {navigationItems.map((item, index) => {
              if (item.hasSubmenu && item.submenu) {
                return (
                  <AccordionItem 
                    key={item.title} 
                    value={item.title}
                    className="border border-brand-mint-200/30 rounded-lg mb-2 bg-gradient-to-r from-white to-brand-mint-200/10"
                  >
                    <AccordionTrigger className="text-left px-4 py-3 hover:bg-brand-mint-200/20 transition-smooth rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 bg-brand-teal-500/20 rounded-lg">
                          <item.icon className="h-4 w-4 text-brand-ink-800" />
                        </div>
                        <span className="font-heading font-semibold text-brand-ink-800">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-2 pl-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-brand-mint-200/30 transition-smooth group"
                          >
                            <div className="p-1 bg-brand-mint-200/40 rounded-md group-hover:bg-brand-teal-500/20 transition-smooth">
                              <subItem.icon className="h-3 w-3 text-brand-ink-800 group-hover:text-brand-ink-800 transition-colors" />
                            </div>
                            <div className="flex-1">
                              <div className="font-heading font-medium text-sm text-brand-ink-900 group-hover:text-brand-ink-800 transition-colors">
                                {subItem.title}
                              </div>
                              <div className="text-xs text-brand-olive-500 font-body leading-relaxed mt-1">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href!}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 p-4 rounded-lg transition-smooth group border",
                    isActive(item.href!) 
                      ? "bg-gradient-to-r from-brand-teal-500/20 to-brand-mint-200/30 border-brand-teal-500/30 text-brand-ink-900" 
                      : "border-brand-mint-200/30 bg-gradient-to-r from-white to-brand-mint-200/10 hover:bg-brand-mint-200/20 hover:border-brand-teal-500/20"
                  )}
                >
                  <div className={cn(
                    "p-1.5 rounded-lg transition-smooth",
                    isActive(item.href!)
                      ? "bg-brand-teal-500/30"
                      : "bg-brand-mint-200/40 group-hover:bg-brand-teal-500/20"
                  )}>
                    <item.icon className={cn(
                      "h-4 w-4 transition-colors",
                      isActive(item.href!)
                        ? "text-brand-ink-800"
                        : "text-brand-ink-800 group-hover:text-brand-ink-800"
                    )} />
                  </div>
                  <span className="font-heading font-semibold text-brand-ink-800 group-hover:text-brand-ink-800 transition-colors">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </Accordion>
        </div>

        {/* Footer fijo del menú */}
        <div className="flex-shrink-0 p-6 border-t border-brand-mint-200/30 bg-gradient-to-r from-brand-mint-200/10 to-white">
          <div className="text-center">
            <p className="text-xs text-brand-olive-500 font-body">
              Protegiendo familias digitales
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopMenu = () => (
    <NavigationMenu className="hidden lg:flex flex-1 justify-center min-w-0">
      <NavigationMenuList>
        {navigationItems.map((item) => {
          if (item.hasSubmenu && item.submenu) {
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 lg:px-3 lg:py-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    {item.submenu.map((subItem) => (
                      <NavigationMenuLink key={subItem.href} asChild>
                        <Link
                          to={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            <subItem.icon className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.href!}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive(item.href!) && "bg-accent text-accent-foreground"
                  )}
                >
                  <div className="flex items-center space-x-1">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden lg:inline-block text-lg font-semibold truncate max-w-[40ch]">
              Hogares Digitales Seguros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
