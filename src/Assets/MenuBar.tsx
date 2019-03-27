import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Toolbar, IconButton, Typography, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { BrowserRouter as Router, Link } from "react-router-dom";

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    MenuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    linkButton:{
        textDecoration: 'none'
    },
});

export interface Props extends WithStyles<typeof styles> { 
    appBarText:string
 }

interface State {
    drawerOn: boolean
}

class MenuBar extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            drawerOn: false
        }
    }

    toggleDrawer = (open: boolean) => () => {
        this.setState({
            drawerOn: open
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.MenuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {this.props.appBarText}
                </Typography>
                        <SwipeableDrawer
                            open={this.state.drawerOn}
                            onClose={this.toggleDrawer(false)}
                            onOpen={this.toggleDrawer(false)}>
                                <List style={{ width: 250 }}>
                                <Link to="" className={classes.linkButton}>
                                    <ListItem button>
                                        <ListItemIcon><HomeIcon /></ListItemIcon>
                                        <ListItemText primary={"Home"}></ListItemText>
                                    </ListItem>
                                </Link>
                                <Link to="about" className={classes.linkButton}>
                                    <ListItem button>
                                        <ListItemIcon><InfoIcon /></ListItemIcon>
                                        <ListItemText primary={"About this app"}></ListItemText>
                                    </ListItem>
                                </Link>
                                </List>
                        </SwipeableDrawer>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

(MenuBar as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(MenuBar);