import { createMuiTheme } from "@material-ui/core"
import { useMemo } from "react"
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/tasks/tasksSlice";

const Theme = (darkMode, primaryColor) => {

    return useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                    primary: {
                        main: primaryColor, //'#e91e63'
                    },
                    secondary: {
                        main: '#2962ff',
                    },
                    tonalOffset: 0.2,

                },
            }), [darkMode, primaryColor],
    );
}

export { Theme }
