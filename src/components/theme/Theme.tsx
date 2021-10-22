import {createTheme, responsiveFontSizes} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#34D399"
        },
        secondary: {
            main: "#0E2A34"
        },
        text: {
            primary: "#11142D",
            secondary: "#FFFFFF",
            disabled: "#808191"
        },
    },
    typography: {
        fontFamily: "Manrope",
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                style: {
                    textTransform: "none",
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    color: "#FFFFFF"
                },
                contained: {
                  borderRadius: "12px"
                },
                outlined: {
                  borderRadius: "12px"
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "10px"
                }
            }
        }
    }
});

const Theme = responsiveFontSizes(theme)

export default Theme;
