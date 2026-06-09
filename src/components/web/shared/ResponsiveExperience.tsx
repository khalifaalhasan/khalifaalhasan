"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopExperience } from "@/components/web/desktop/DesktopExperience";
import { MobileExperience } from "@/components/web/mobile/MobileExperience";
import { useEffect, useState } from "react";

export function ResponsiveExperience() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="min-h-screen w-full" />;

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
