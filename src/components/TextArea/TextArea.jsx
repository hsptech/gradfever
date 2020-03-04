import React from 'react';
import styled from 'styled-components'

const Label = styled.label`

`
const TextAreaField = styled.textarea`

` 
class TextArea extends React.Component{
    render(){
        return(
            <>
                <Label>{this.props.label}</Label>
                <TextAreaField>
                    {this.props.text}
                </TextAreaField>
            </>
        )
    }

}

export default TextArea;