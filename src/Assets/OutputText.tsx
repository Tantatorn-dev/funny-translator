import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Theme, createStyles, WithStyles, TextField, withStyles, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import LanguageSelector from '../Assets/LanguageSelector';

const styles = (theme: Theme) =>
    createStyles({
        card: {
            minWidth: 650,
        },
    });


export interface Props extends WithStyles<typeof styles> { }

interface State {
    output_text: string;
}

class OutputText extends Component<Props, State> {
    State = {
        output_text: '',
    };

    render() {
        const { classes } = this.props;
        const output_text = this.State.output_text;
        return (
            <div style={{paddingTop:30}}>
                <Card className={classes.card}>
                    <LanguageSelector/>
                    <CardContent>
                        <Typography>{output_text}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

(OutputText as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(OutputText);