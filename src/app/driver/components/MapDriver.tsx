"use client";

import { useMap } from "@/hooks/useMap";
import { useRef } from "react";

export function MapDriver() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef as never);

  return <div className="w-2/3 h-full" ref={mapContainerRef} />;
}