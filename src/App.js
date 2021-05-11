import React from "react";

import YouTubeVideo from "./YTVideo";
import Gallery from './Gallery'
import TopBar from "./TopBar"
import WpiLogo from "./WPI_Inst_Prim_FulClr.png"

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";

const IOT_RULE_API_URL = "https://zj3phaj6dg.execute-api.us-east-1.amazonaws.com/Prod/publish";

const theme = createMuiTheme({
  //official wpi colors taken from https://www.wpi.edu/sites/default/files/docs/Offices/Marketing-Communications/WPI_Institutional_9-4-12.pdf
  palette: {
    primary: {
      main: '#AC2B37FF',
      contrastText: '#FFFFFFFF',
    },
    secondary: {
      main: '#A9B0B7FF',
      contrastText: '#000000FF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function Copyright() {
  return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://www.wpi.edu">
            WPI Zoo
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Powered by '}
          <Link color="inherit" href="https://material-ui.com/">
            Material-UI
          </Link>{' and '}
          <Link color="inherit" href="https://reactjs.org">
            React.js
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Made Possible with Interra-Feed™ Products
        </Typography>
      </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  logo: {
    maxWidth: 400,
  }
}));





export default function App() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name:'',
    amount: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDono = (name, amount) => {
    let xhr; //Will hold an XMLHTTPRequest object
    //Send Request Over HTTP
    xhr = new XMLHttpRequest();
    xhr.open("POST", IOT_RULE_API_URL, true); //Initialize SYNCHRONOUS HTTP Request
    //xhr.send('{"message":"Hello world!"}');
    xhr.send("");
    //Check if the Request is Done
    switch (xhr.status) {
      case 200: //Upon success, call the processResponse function above
        console.log("XML HTTP Response Text: " + xhr.responseText);
        break;
      case 400: //Upon failure, alert user unable to process request
        alert("Unable to process request");
        console.log("XML HTTP Response Text: " + xhr.responseText);
        break;
      default:
        break;
    }
  }

  return (
      <MuiThemeProvider theme={theme}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <TopBar />
          <Grid item xs={false} sm={4} md={7} className={classes.image}>
            <YouTubeVideo name={"Goat live stream"} />
            <Gallery />
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <img className={classes.logo} alt = "The WPI Logo" src = {WpiLogo} />
              <Typography component="h1" variant="h5">
                Make a donation to feed animals at the WPI Zoo
              </Typography>
              <form className={classes.form} noValidate>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <TextField
                      id="outlined-basic-name"
                      value={values.name}
                      onChange={handleChange('name')}
                      label="Name"
                  />
                </FormControl>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.amount}
                      onChange={handleChange('amount')}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={60}
                      defaultValue={'0.00'}
                  />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleDono(values.name, values.amount)}
                >
                  Donate
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="https://www.youtube.com/watch?v=jzwMjOl8Iyo" variant="body2">
                      FAQ
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="body2">
                      This is 100% fake btw
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </MuiThemeProvider>
  );
}