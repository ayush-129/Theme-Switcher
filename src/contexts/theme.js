import { createContext, useContext } from "react";

//step 1 : create context
// you can pass default values in form of object in context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// step 2: provider
export const ThemeProvider = ThemeContext.Provider;

// exporting as custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
