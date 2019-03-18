import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem, Button, Grid } from '@material-ui/core';

const languages: Array<string> = [
  'yoda',
  'pirate',
  'minion',
  'ferblatin',
  'piglatin',
  'dothraki',
  'valyrian',
  'sindarin',
  'quenya',
  'sith',
  'oldenglish',
  'shakespeare',
  'vulcan',
  'klingon',
  'romulan',
];

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export interface Props extends WithStyles<typeof styles> { }

interface State {
  language: string,
  labelWidth: number
}

class LanguageSelector extends React.Component<Props, State> {
  state = {
    language: 'yoda',
    labelWidth: 0,
  };

  handleChange = (event: React.FormEvent) => {
    this.setState({ language: ((event.target) as any).value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
            <InputLabel htmlFor="language-selector">Language</InputLabel>
            <Select
              value={this.state.language}
              onChange={this.handleChange}
              inputProps={{
                name: 'language',
                id: 'language-selector',
              }}
            >
              {
                languages.map((item) => <MenuItem value={item}>{item}</MenuItem>)
              }
            </Select>
            </Grid>
            <Grid item xs={6} style={{marginTop:5}}>
            <Button variant="contained" color="primary" className={classes.button} >Translate</Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    );
  }
}

(LanguageSelector as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(LanguageSelector);