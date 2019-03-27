import React, { Component } from 'react';
import InputText from '../Assets/InputText';
import { Grid } from '@material-ui/core';
import OutputText from '../Assets/OutputText';
import MenuBar from '../Assets/MenuBar';

type Props = {};

interface State{
    output_text:string,
}

class HomePage extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            output_text:''
        };
        this.getInputText=this.getInputText.bind(this);
    }

    getInputText(text:string){
        this.setState({
            output_text:text,
        });
    }
    render() {
        return (
            <div>
                <MenuBar appBarText={'Home'}/>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{paddingTop:30}}
                >
                <InputText getText={this.getInputText}/>
                <OutputText text={this.state.output_text}/>
                </Grid>
            </div>
        )
    }
}

export default HomePage;