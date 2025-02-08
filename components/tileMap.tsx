"use client";

import { extend, useTick } from "@pixi/react";
import {
  Container,
  Graphics,
  Texture,
  Sprite,
  Assets,
  Rectangle,
} from "pixi.js";
import { useCallback, useEffect, useState } from "react";
import { EnumValues } from "zod";

extend({
  Container,
  Graphics,
  Texture,
  Sprite,
  Rectangle,
});

// Define Tile interface
interface Tile {
  x: number;
  y: number;
  texture: Texture;
  rotation?: number; // Make rotation optional
}

interface TileMapProps {
  boardState: Array;
  tileWidth: number;
  tileHeight: number;
  tileSet: string;
}

interface TileState {
  state: "undeveloped" | "developed" | "destroyed" | "residental";
  company?: number;
  prevCompany?: number;
  headquarters?: boolean;
  variant: number;
}

const TileMap: React.FC<TileMapProps> = ({
  boardState,
  tileWidth,
  tileHeight,
  tileSet,
}) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [tags, setTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load tileset and create tiles
  useEffect(() => {
    // debugger
    Assets.load(tileSet).then(buildBoard);
  }, [boardState, tileWidth, tileHeight, tileSet]);

  const buildBoard = () => {
    const newTiles = [];
    const newTags = [];
    // console.log(Assets.get(tileSet));
    for (const [x, row] of boardState.entries()) {
      for (const [y, cell] of row.entries()) {
        // const frame = Math.floor(Math.random() * 4); // Example: 4 frames
        // const texture = new Texture({
        //   source: Assets.get(tileSet).texture,
        //   frame: new Rectangle(frame * tileWidth, 0, tileWidth, tileHeight),
        // });
        const texture = Assets.get(tileSet);
        newTiles.push({ x: x * tileWidth, y: y * tileHeight, texture });

        if (cell.state == "developed") {
          newTags.push({ x: x * tileWidth, y: y * tileHeight, color: 'red' });
        }
      }
    }
    setTiles(newTiles);
    setTags(newTags);
    setLoaded(true);
  }

  // Optional: Animation example (using useTick)
  // useTick((ticker) => {
  //   // Example: Simple tile rotation animation
  //   setTiles((prevTiles) =>
  //     prevTiles.map((tile) => ({
  //       ...tile,
  //       rotation: (tile.rotation || 0) + 0.01 * ticker.deltaTime,
  //     })),
  //   );
  // }, loaded);

  // const drawCallback = useCallback((graphics: Graphics) => {
  //   graphics.clear();
  //   graphics.setFillStyle({ color: "red" });
  //   graphics.rect(0, 0, 100, 100);
  //   graphics.fill();
  // }, []);

  return (
    <pixiContainer>
    {loaded &&
      tiles.map((tile, index) => (
        <pixiSprite
          key={index}
          texture={tile.texture}
          x={tile.x}
          y={tile.y}
        />
      ))}
      {loaded &&
        tags.map((tag, index) => (
          <pixiGraphics draw={(graphics: Graphics) => {
            graphics.clear();
            graphics.setFillStyle({ color: tag.color });
            graphics.rect(tag.x, tag.y, 50, 50);
            graphics.fill();
          }} />
        ))}

    </pixiContainer>
  );
};

export default TileMap;
