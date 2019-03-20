import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Theme, createStyles, WithStyles, withStyles, Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import LanguageSelector from '../Assets/LanguageSelector';

const styles = (theme: Theme) =>
    createStyles({
        card: {
            minWidth: 650,
            minHeight:350,
        },
        button: {
            margin: 15,
        },
        text: {
            textAlign:"left",
            fontSize:16,
        }
    });


export interface Props extends WithStyles<typeof styles> {
    text: string
}

interface State {
    output_text: string;
}

class OutputText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            output_text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.props.text);
        this.setState({
            output_text: this.props.text
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ paddingTop: 30 }}>
                <Card className={classes.card}>
                    <Grid container spacing={32}>
                        <Grid item xs={2}>
                            <LanguageSelector />
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: 5 }}>
                            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleChange}>Translate</Button>
                        </Grid>
                        <Grid item xs={6}></Grid>
                    </Grid>
                    <CardContent>
                        <Typography className={classes.text}>{this.state.output_text}</Typography>
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