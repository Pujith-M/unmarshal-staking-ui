import React, {Fragment} from 'react';
import {default as MuiCard} from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import unmarshalLogo from '../assets/images/unmarshalLogoCircle.svg';
import AppBar from "./AppBar";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Card = styled(MuiCard)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));
type ReactNode = string | React.ReactNode;

interface Detail {
    title: ReactNode;
    value: ReactNode;
}

interface DetailsCardProps {
    title: ReactNode;
    detailsList: Array<Detail>
}

const RewardDetails: DetailsCardProps = {
    title: "Reward Program",
    detailsList: [
        {
            title: "Total Value Locked",
            value: "13175988 Marsh"
        },
        {
            title: "Annual Percentage Yield",
            value: "65%"
        }]
}


const StakingDetails: DetailsCardProps = {
    title: "Stake Information",
    detailsList: [
        {
            title: "Total Marsh Circulation",
            value: "13175988 Marsh"
        },
        {
            title: "ODDZ Token Price",
            value: "5.6"
        }]
}

const DetailsCard = ({title, detailsList}: DetailsCardProps) => {
    return <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={"bold"}>
            {title}
        </Typography>
        {detailsList.map(detail =>
            <Stack direction="row" justifyContent={"space-between"} alignItems="center">
                <Typography variant="subtitle1" color="text.disabled" fontWeight={"500"}>
                    {detail.title}
                </Typography>
                <Typography variant="h6" fontWeight={"bold"}>{detail.value}</Typography>
            </Stack>
        )}
    </CardContent>
}

const Landing = () => {
    return (
        <>
            <AppBar/>
            <Container maxWidth={"lg"} component={Paper} elevation={3} sx={{
                position: "relative",
                mt: -25,
                py: 3
            }}>
                <Stack justifyContent={"center"} spacing={3}>
                    <Card variant={"outlined"} sx={{bgcolor: "secondary.main"}}>
                        <CardContent>
                            <Box sx={{flexGrow: 1}}>
                                <Grid container spacing={2} justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography gutterBottom color={"text.secondary"} fontWeight={"bold"} textAlign={"left"} >Create UNO-ETH UNI-V2 LP tokens</Typography>
                                        <Typography color={"text.secondary"} fontSize={"small"} textAlign={"left"}>Provide liquidity in Pancake to get LP tokens.</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} textAlign={"right"}>
                                        <Button sx={{mt: 2}} variant={"contained"}>Add MARSH-BNB Liquidity</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Card variant={"outlined"}>
                                    <DetailsCard {...RewardDetails}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card variant={"outlined"}>
                                    <DetailsCard {...StakingDetails}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card variant={"outlined"}>
                                    <CardContent>
                                        <Stack justifyContent={"center"} alignItems="center" spacing={5}>
                                            <img
                                                src={unmarshalLogo}
                                                alt="Unmarshal" width={140}/>
                                            <Stack justifyContent={"space-between"} alignItems="center">
                                                <Typography variant="h6" fontWeight={"bold"}>
                                                    20 MARSH-BMB LP Locked
                                                </Typography>
                                                <Typography variant="body2" color="text.disabled">
                                                    Available: 30LP
                                                </Typography>
                                            </Stack>
                                            <Button variant={"contained"} fullWidth size={"large"}>STAKE</Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card variant={"outlined"}>
                                    <CardContent>
                                        <Stack justifyContent={"center"} alignItems="center" spacing={5}>
                                            <img
                                                src={unmarshalLogo}
                                                alt="Unmarshal" width={140}/>
                                            <Stack justifyContent={"space-between"} alignItems="center">
                                                <Typography variant="h6" fontWeight={"bold"}>
                                                    5.000 Marsh Earned
                                                </Typography>
                                                <Typography variant="body2" color="text.disabled">
                                                    Available: 30MARSH
                                                </Typography>
                                            </Stack>
                                            <Button variant={"outlined"} fullWidth size={"large"}>STAKE</Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default Landing;