import {
  Box,
  Center,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useState } from "react";
import { ButtonTheme, DragInDrop, FormControl } from "../components";
import { formData } from "../utils/FormData";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ButtonTheme />
          <Paper
            style={{
              display: "flex",
              height: "100vh",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* <DragInDrop data={formData} /> */}
            <Box
              style={{
                width: "928px",
                height: "12px",
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <FormControl />
              <FormControl />
              <FormControl />
            </Box>
          </Paper>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
