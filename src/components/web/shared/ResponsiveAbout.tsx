"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopAbout } from "@/components/web/desktop/DesktopAbout";
import { MobileAbout } from "@/components/web/mobile/MobileAbout";
import { useEffect, useState } from "react";

export function ResponsiveAbout() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="min-h-screen w-full" />;

  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}
