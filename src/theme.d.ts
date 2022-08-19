import "@mui/material/ToggleButtonGroup";

declare module "@mui/material/styles" {
  export interface PaletteOptions {
    custom: { main: string };
  }
  export interface Palette {
    custom: { main: string };
  }
}

declare module "@mui/material/ToggleButtonGroup" {
  export interface ToggleButtonGroupPropsColorOverrides {
    custom: true;
  }
}
