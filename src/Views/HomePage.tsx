import React, { Component } from 'react';
import InputText from '../Assets/InputText';
import { Grid } from '@material-ui/core';
import OutputText from '../Assets/OutputText';

type Props = {};

interface State{
    input_text:string,
    output_text:string,
}

class HomePage extends Component<Props,State>{

    constructor(props:any){
        super(props);
        this.state={
            input_text:'',
            output_text:''
        };
        this.getInputText=this.getInputText.bind(this);
    }

    getInputText(text:string){
        this.setState({
            input_text:text
        });
    }
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
                <InputText getText={this.getInputText}/>
                <OutputText/>
                </Grid>
            </div>
        )
    }
}

export default HomePage;