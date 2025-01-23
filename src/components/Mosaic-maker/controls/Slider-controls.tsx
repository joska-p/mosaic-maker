import { Slider } from "@jpotin/playground-ui";
import { useState } from "react";
import { useMosaicMakerContext } from "../Mosaic-context";

interface Props {
  label: string;
  defaultValue: number;
  cssVar: string;
  min: number;
  max: number;
  step: number;
}

function SliderControls({ label, defaultValue, cssVar, min, max, step }: Props) {
  const { mosaicRef } = useMosaicMakerContext();
  const [value, setValue] = useState(defaultValue);

  const handleSetValue = (value: number) => {
    setValue(value);
    mosaicRef.current?.style.setProperty(cssVar, `${value}px`);
  };

  return (
    <Slider
      label={label}
      ariaLabel={label}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleSetValue}
    />
  );
}

export { SliderControls };
