import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import  { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

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
    }
});

export interface Props extends WithStyles<typeof styles> {}

function MenuBar(props: Props) {
    const {classes} = props;
    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.MenuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Home
                </Typography>
            </Toolbar>
        </AppBar>                 
    </div>
    )
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(MenuBar);