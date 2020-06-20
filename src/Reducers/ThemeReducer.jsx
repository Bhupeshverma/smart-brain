import { Theme } from '../Utils/Theme';


export const initialState = {
    currentTheme: Theme.dark
}

export  function ThemeReducer(state, action) {
    switch (action.type) {
        case "setTheme":
          return { ...state, currentTheme: action.value };
        case "updateTheme":
          return {
            ...state,
            currentTheme: { ...Theme[state.currentTheme.id], ...action.value }
          };
        case "toggleTheme": {
          const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
          return { ...state, currentTheme: Theme[newThemeKey] };
        }
        default:
          throw new Error();
      }
}
