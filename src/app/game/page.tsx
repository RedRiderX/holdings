"use client";

// import Link from "next/link";
import { Application } from "@pixi/react";
import TileMap from "@/components/tileMap"
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const tileSetPath = "/assets/game-city-tileset-base.png"; // Path to your tileset

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Landing page
      <Button>foo</Button>
      <Application
        width={800}
        height={600}
        backgroundColor={0x1099bb}
      >
        <TileMap width={6} height={6} tileWidth={96} tileHeight={96} tileSet={tileSetPath} />
      </Application>
    </main>
  );
}
