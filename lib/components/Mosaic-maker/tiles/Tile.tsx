import { cn } from "../lib/utils";
import { CornerCircles } from "./Corner-circles";
import { Cube } from "./Cube";
import { Diamond } from "./Diamond";
import { MiddleCircle } from "./Middle-circle";
import { OppositeCircles } from "./Opposite-circles";
import { Rainbow } from "./Rainbow";
import { Square } from "./Square";
import { Triangles } from "./Triangles";

const tileComponents = {
  [CornerCircles.name]: CornerCircles,
  [Diamond.name]: Diamond,
  [MiddleCircle.name]: MiddleCircle,
  [OppositeCircles.name]: OppositeCircles,
  [Rainbow.name]: Rainbow,
  [Square.name]: Square,
  [Triangles.name]: Triangles,
  [Cube.name]: Cube,
};

interface Props {
  name: keyof typeof tileComponents;
  colors: [string, string, string, string, string];
  rotation: string;
  className?: string;
}

function Tile({ name, colors, rotation, className }: Props) {
  if (colors.length < 5) {
    throw new Error("Tile component requires exactly 5 colors");
  }

  const TileComponent = tileComponents[name];
  return (
    <TileComponent
      colors={colors}
      rotation={rotation}
      className={cn(
        "relative h-[var(--tile-size)] w-[var(--tile-size)] overflow-hidden",
        className
      )}
    />
  );
}

Tile.displayName = "Tile";

export { Tile };
