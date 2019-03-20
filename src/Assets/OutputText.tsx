import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Theme, createStyles, WithStyles, withStyles, Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import LanguageSelector from '../Assets/LanguageSelector';

const url: string = "https://api.funtranslations.com/translate/";

const styles = (theme: Theme) =>
    createStyles({
        card: {
            minWidth: 650,
            minHeight: 350,
        },
        button: {
            margin: 15,
        },
        text: {
            textAlign: "left",
            fontSize: 16,
            marginLeft:15,
        }
    });


export interface Props extends WithStyles<typeof styles> {
    text: string
}

interface State {
    output_text: string;
    selected_language:string;
}

class OutputText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            output_text: '',
            selected_language:'yoda'
        };
        this.handleChange = this.handleChange.bind(this);
        this.getSelectedLanguage = this.getSelectedLanguage.bind(this);
    }

    handleChange() {
        this.getTranslatedText(this.props.text);
    }

    getSelectedLanguage(selected_language:string) {
        this.setState({selected_language:selected_language});
    }

    getTranslatedText = (text: string) => {
        fetch(url +this.state.selected_language+".json?text="+text)
            .then((response: Response) =>
                response.json()
            )
            .then(
                (data) => {
                    this.setState({
                        output_text: data.contents.translated
                    })
                }
            )
            .catch(
                (error: Error) => { console.log(error) }
            )
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ paddingTop: 30 }}>
                <Card className={classes.card}>
                    <Grid container spacing={32}>
                        <Grid item xs={2}>
                            <LanguageSelector getLang={this.getSelectedLanguage}/>
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