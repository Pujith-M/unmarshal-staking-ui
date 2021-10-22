import React from 'react';
import Stack from "@mui/material/Stack";
import unmarshalLogo from "../assets/images/unmarshalLogo.svg"
import {Button, Link, Paper} from "@mui/material";
import Container from "@mui/material/Container";

const AppBar = () => {
    return (
        <Paper sx={{bgcolor: "secondary.main", py: 2, minHeight: 300, borderRadius: 0}}>
            <Container maxWidth={"lg"}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Link href="https://unmarshal.io"><img src={unmarshalLogo} alt="unmarshal logo"/></Link>
                    <Button variant={"outlined"}>Connect Wallet</Button>
                </Stack>
            </Container>
        </Paper>
    );
};

export default AppBar;