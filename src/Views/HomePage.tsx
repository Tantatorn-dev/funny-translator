import React, { Component } from 'react';
import InputText from '../Assets/InputText';
import { Grid } from '@material-ui/core';
import OutputText from '../Assets/OutputText';

type Props = {};
type State = {};

class HomePage extends Component<Props,State>{
    render() {
        return (
            <div>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{paddingTop:30}}
                >
                <InputText/>
                <OutputText/>
                </Grid>
            </div>
        )
    }
}

export default HomePage;