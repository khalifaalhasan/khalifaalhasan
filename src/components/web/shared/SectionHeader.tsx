import React from "react";

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-lg md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 capitalize md:normal-case text-foreground/90 md:text-foreground border-b md:border-b-0 border-border pb-1.5 md:pb-0">
      {title}
    </h2>
  );
}
