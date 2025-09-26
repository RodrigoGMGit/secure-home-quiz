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
      href: "/conoce-mas",
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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-6">
          <div className="text-lg font-semibold text-primary mb-4">
            Hogares Digitales Seguros
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {navigationItems.map((item) => {
              if (item.hasSubmenu && item.submenu) {
                return (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start space-x-3 p-2 rounded-md hover:bg-accent transition-colors"
                          >
                            <subItem.icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">{subItem.title}</div>
                              <div className="text-xs text-muted-foreground">
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
                    "flex items-center space-x-2 p-2 rounded-md transition-colors",
                    isActive(item.href!) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopMenu = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationItems.map((item) => {
          if (item.hasSubmenu && item.submenu) {
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="flex items-center space-x-1">
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
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline-block text-lg font-semibold">
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
