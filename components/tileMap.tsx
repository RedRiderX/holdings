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
  width: number;
  height: number;
  tileWidth: number;
  tileHeight: number;
  tileSet: string;
}

const TileMap: React.FC<TileMapProps> = ({ width, height, tileWidth, tileHeight, tileSet }) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load tileset and create tiles
  useEffect(() => {
    // debugger
    Assets.load(tileSet).then(() => {
      const newTiles = [];
      console.log(Assets.get(tileSet))
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const frame = Math.floor(Math.random() * 4); // Example: 4 frames
          // const texture = new Texture({
          //   source: Assets.get(tileSet).texture,
          //   frame: new Rectangle(frame * tileWidth, 0, tileWidth, tileHeight),
          // });
          const texture = Assets.get(tileSet)
          newTiles.push({ x: x * tileWidth, y: y * tileHeight, texture });
        }
      }
      setTiles(newTiles);
      setLoaded(true);
    });
  }, [width, height, tileWidth, tileHeight, tileSet]);

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

  const drawCallback = useCallback((graphics: Graphics) => {
    graphics.clear();
    graphics.setFillStyle({ color: "red" });
    graphics.rect(0, 0, 100, 100);
    graphics.fill();
  }, []);

  return (
    <pixiContainer>
      {loaded &&
        tiles.map((tile, index) => (
          <pixiSprite
            key={index}
            texture={tile.texture}
            x={tile.x}
            y={tile.y}
            rotation={tile.rotation || 0} // Apply rotation if it exists
          />
        ))}
        
      {/* <pixiGraphics draw={drawCallback} /> */}
    </pixiContainer>
  );
};

export default TileMap;
