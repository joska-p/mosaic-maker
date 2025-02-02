import { Button } from "@jpotin/playground-ui";
import { useMosaicMakerContext } from "../Mosaic-context.tsx";
import { CSS_VARS, DEFAULT_GAP_SIZE, DEFAULT_TILE_SIZE, initialRotations } from "../config.ts";
import { updateElementStyles } from "../lib/style-utils.ts";
import { shuffleObject } from "../lib/utils.ts";
import { PaletteControls } from "./Palette-controls.tsx";
import { SliderControls } from "./Slider-controls.tsx";
import { TileSetControls } from "./Tile-set-controls.tsx";

function Controls() {
  const { mosaicRef, currentPalette, updateCurrentPalettes, updateTiles } = useMosaicMakerContext();

  function shuffleColors() {
    if (!mosaicRef.current) return;
    updateElementStyles(mosaicRef.current, shuffleObject(currentPalette));
  }

  function shuffleRotations() {
    if (!mosaicRef.current) return;
    updateElementStyles(mosaicRef.current, shuffleObject(initialRotations));
  }

  return (
    <form className="flex flex-wrap justify-center gap-4 lg:w-[42ch] lg:flex-col lg:gap-8">
      <fieldset className="mt-2 grid grid-cols-2 gap-4 px-2 sm:grid-cols-4 lg:grid-cols-2">
        <Button type="button" onClick={() => shuffleColors()} size="sm">
          Shuffle colors
        </Button>
        <Button type="button" onClick={() => shuffleRotations()} size="sm">
          Shuffle rotations
        </Button>
        <Button type="button" onClick={() => updateCurrentPalettes()} size="sm">
          New palettes
        </Button>
        <Button type="button" onClick={() => updateTiles()} size="sm">
          New tiles
        </Button>
      </fieldset>

      <fieldset className="grid grid-cols-2 gap-4 px-2">
        <SliderControls
          label="Tile size"
          defaultValue={DEFAULT_TILE_SIZE}
          cssVar={CSS_VARS.width}
          min={32}
          max={256}
          step={2}
        />
        <SliderControls
          label="Gap size"
          defaultValue={DEFAULT_GAP_SIZE}
          cssVar={CSS_VARS.gap}
          min={0}
          max={64}
          step={2}
        />
      </fieldset>

      <TileSetControls />

      <PaletteControls />
    </form>
  );
}

export { Controls };
