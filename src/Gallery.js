import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridListTile, GridListTileBar, MobileStepper, useTheme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";


import zebras from './Gallery/Zebras&Gazelles.jpg'
import chimps from './Gallery/Chimpanzees.jpg'
import goats from './Gallery/Goats.jpg'
import horses from './Gallery/WildHorses.jpg'
import orcaShow from './Gallery/OrcaShow.jpg'
import allosaurus from './Gallery/Allosaurus.jpg'
import drt from './Gallery/DRT.jpg'
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder"

const tileData = [
    {
        img: zebras,
        title: 'See the savannah!'
    },
    {
        img: chimps,
        title: 'Watch chimpanzees at play!'
    },
    {
        img: goats,
        title: "Meet Gompei's family #GOAT"
    },
    {
        img: horses,
        title: "New! Prezalski's wild horses"
    },
    {
        img: orcaShow,
        title: "Watch the amazing orca show!"
    },
    {
        img: allosaurus,
        title: "Innovative new Allosaurus exhibit"
    },
    {
        img: drt,
        title: "Industry leading Dinosaur Recovery Team"
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 400,
        overflow: 'hidden',
        width: '100%',
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    titleBar: {

        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tileData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <GridListTile key={tileData[activeStep].img}>
                <img
                    className={classes.img}
                    src={tileData[activeStep].img}
                    alt={tileData[activeStep].title}
                />
                <GridListTileBar
                    title={tileData[activeStep].title}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    actionIcon={
                        <IconButton aria-label={`star ${tileData[activeStep].title}`}>
                            <StarBorderIcon className={classes.title} />
                        </IconButton>
                    }
                />
            </GridListTile>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}