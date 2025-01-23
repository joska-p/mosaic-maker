import { useMosaicMakerContext } from "../Mosaic-context";
import { initialPalette } from "../config";
import { getPaletteId } from "../lib/palette-utils";
import { cn } from "../lib/utils";
import { PaletteButton } from "./Palette-button";

function PaletteControls() {
  const { currentPalettes } = useMosaicMakerContext();

  return (
    <fieldset
      className={cn(
        "flex h-[176px] w-full flex-col flex-wrap justify-center gap-2 overflow-x-auto p-2",
        "lg:h-auto lg:flex-row lg:gap-4",
        "has-[:focus-visible]:bg-accent/20"
      )}
    >
      <legend className="sr-only">Choose a color palette</legend>

      <PaletteButton palette={initialPalette} aria-label="Default palette" />
      {currentPalettes.map((palette) => (
        <PaletteButton key={getPaletteId(palette)} palette={palette} />
      ))}
    </fieldset>
  );
}

export { PaletteControls };
