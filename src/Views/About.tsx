import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, createStyles, withStyles, WithStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuBar from '../Assets/MenuBar';

const styles = createStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
});

export interface Props extends WithStyles<typeof styles> { }
interface State { }

class About extends Component<Props, State>{
    render() {
        const { classes } = this.props;
        return (
            <div>
                <MenuBar appBarText={'About this app'}/>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            title="About Funny Translator"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                About Funny Translator
                            </Typography>
                            <Typography component="p">
                                Funny Translator is just for fun. I use this project to improve my React skill and blabla.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}


(About as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(About);