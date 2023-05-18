import React from 'react';
import {FeedbackTitle, Button} from "./FeedbackForm.styled";
import Statistics from 'components/Statistics';


class FeedbackForm extends React.Component{

    render(){
    return(
    <>
    <FeedbackTitle>Please leave feedback</FeedbackTitle>
    <Button type = "button">Good</Button>
    <Button type = "button">Neutral</Button>
    <Button type = "button">Bad</Button>
    <Statistics/>
    </>)
    }
 }

export default FeedbackForm;