export enum ColorKey {
  PRIMARY = "PRIMARY",
  BACKGROUND = "BACKGROUND",
}

export type ColorPalette = {
  [key in ColorKey]: string;
};

export const COLORS = {
  GOLD: "#EABC2A",
  BLUE: "#0B0D18",
};

export const GRAY_RANGE = {
  0: "#fff",
  100: "#f2f0f0",
  200: "#d7d2d2",
  300: "#bcb4b4",
  400: "#a29696",
  500: "#877878",
  600: "#695d5d",
  700: "#4b4343",
  800: "#2d2828",
  900: "#0f0d0d",
};
