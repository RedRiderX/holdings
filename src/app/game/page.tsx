"use client";

// import Link from "next/link";
import { StocksSidebar } from "@/components/ui/stocksSidebar";
import { StatusBar } from "@/components/ui/statusBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Application } from "@pixi/react";
import { TileMap, type TileState } from "@/components/tileMap";

export default function LandingPage() {
  const tileSetPath = "/assets/game-city-tileset-base.png"; // Path to your tileset

  const boardCols = 12;
  const boardRows = 9;
  const boardState: TileState[][] = Array.from({ length: boardRows }, () =>
    Array.from({ length: boardCols }, () => {
      return { state: "undeveloped", variant: 0 };
    }),
  );

  if (boardState?.[2]?.[2])
    boardState[2][2] = { state: "developed", variant: 0 };
  if (boardState?.[4]?.[1])
    boardState[4][1] = { state: "developed", variant: 0 };

  return (
    <main className="">
      <SidebarProvider>
        <SidebarInset >
          <StatusBar />
          <Application width={800} height={600} backgroundColor={0x1099bb}>
            <TileMap
              boardState={boardState}
              tileWidth={96}
              tileHeight={96}
              tileSet={tileSetPath}
            />
          </Application>
        </SidebarInset>
        <StocksSidebar side="right" />
      </SidebarProvider>
    </main>
  );
}
