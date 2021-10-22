import {PropsWithChildren, ReactNode} from 'react';
import {ThemeProvider} from "@mui/material";
import Theme from "../theme/Theme";

const Providers = ({children}: PropsWithChildren<ReactNode>) => {
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
};

export default Providers;