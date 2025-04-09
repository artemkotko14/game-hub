import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

// Add color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Create a custom Chakra UI theme using extendTheme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },

  styles: {
    // Global styles applied to the entire application
    // Destructure `colorMode` from props provided by Chakra UI
    global: ({ colorMode }: StyleFunctionProps) => ({
      body: {
        bg: colorMode === "light" ? "slate.300" : "gray.900",
        color: colorMode === "light" ? "slate.900" : "gray.100",
      },
    }),
  },
  components: {
    Button: {
      variants: {
        //Without destructuring
        link: (props: StyleFunctionProps) => ({
          color: props.colorMode === "light" ? "slate.800" : "gray.100",
          _hover: {
            textDecoration: "underline",
            color: props.colorMode === "light" ? "slate.900" : "gray.200",
          },
        }),
      },
    },
  },
});

export default theme;
