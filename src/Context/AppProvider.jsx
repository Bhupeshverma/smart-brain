import React, {useReducer} from 'react';
import { ThemeReducer, initialState } from '../Reducers/ThemeReducer';
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: ${props => props.theme.backgroundColor}
  }
`;
export const AppContext = React.createContext()
const AppProvider = (props) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)
    const {currentTheme} = state
    return (
        <AppContext.Provider value={{...state, dispatch}}>
            <ThemeProvider theme={currentTheme}>
				<GlobalStyles />
                {props.children}
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export default AppProvider;
