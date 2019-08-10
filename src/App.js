import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContentContainer from './ContentContainer';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

class App extends React.Component {

    constructor(props) {
      super(props);

      let ws = new WebSocket("ws://localhost:8765");

      this.state = { activeStep: 0, explanationStep: 0, webSocket: ws, images:[], modelPath: "", explanationIndex: 0};

      ws.onopen = function (event) {
          ws.send("JS");
      };

      ws.addEventListener('message', (event) => {
          this.handleWSMessage(event)
      });

      console.log(this.state);
      // this.handleClick = this.handleClick.bind(this);
    }

    handleWSMessage=(event)=>{

        if(JSON.parse(event.data)["imgPath"]){
            console.log("contain imgPath");

            const cloneimgs = this.state.images.slice();
            cloneimgs.push(JSON.parse(event.data));

            this.setState({images:cloneimgs});

            console.log(this.state.images);
        }else if(JSON.parse(event.data)["modelPath"]){
            console.log("contain modelPath");
            this.setState({activeStep:2 , modelPath:JSON.parse(event.data)["modelPath"]});
        }else if(JSON.parse(event.data)["explanationStep"]){
            console.log("contain explanationStep");
            this.setState({explanationStep: this.state.explanationStep+1});
        }else{
            console.log("illegal message");
        }

        console.log(event.data);
    }

    onStart=()=>{
        this.state.webSocket.send("Start");
        var _activeSstep=this.state.activeStep+1;
        this.setState({activeStep: _activeSstep});

        console.log("Start request sent");
        console.log(this.state.activeStep);
    }




    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="absolute" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Proudly presented by Carpenters
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* <main className={classes.layout}> */}
                {/* <Paper className={classes.paper}> */}
                <ContentContainer explanationStep={this.state.explanationStep} activeStep={this.state.activeStep} onStart={this.onStart} images={this.state.images}/>
                {/* </Paper> */}
                {/* </main> */}
            </React.Fragment>
);
}
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
