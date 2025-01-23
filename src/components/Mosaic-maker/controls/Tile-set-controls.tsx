import { useMosaicMakerContext } from "../Mosaic-context";
import { initialPalette, initialTileSet } from "../config";
import { cn } from "../lib/utils";
import { Tile } from "../tiles/Tile";

function TileSetControls() {
  const { tileSet, updateTileSet } = useMosaicMakerContext();

  return (
    <fieldset
      className="flex flex-wrap items-center justify-center gap-4 [--rotation:0deg] [--tile-size:32px]"
      style={{ ...initialPalette } as React.CSSProperties}
    >
      {initialTileSet.map((tileName) => {
        return (
          <label key={tileName} aria-label={tileName} className="flex flex-col gap-2">
            <input
              type="checkbox"
              checked={tileSet.includes(tileName)}
              onChange={() => updateTileSet(tileName)}
              className="peer sr-only"
            />
            <Tile
              name={tileName}
              colors={Object.keys(initialPalette) as [string, string, string, string, string]}
              className={cn(
                "opacity-70 transition-opacity",
                "peer-checked:ring-primary peer-checked:opacity-100 peer-checked:ring-4",
                "peer-focus-visible:ring-accent peer-focus-visible:ring-4"
              )}
              rotation="--rotation-0"
            />
          </label>
        );
      })}
    </fieldset>
  );
}

export { TileSetControls };
