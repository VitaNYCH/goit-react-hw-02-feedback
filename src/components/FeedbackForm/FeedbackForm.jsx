import React, {Component} from 'react';
import {FeedbackTitle, Button} from "./FeedbackForm.styled";
import { Statistics } from '../Statistics';
export class FeedbackForm extends Component{

state = {
    good: 0,
    neutral: 0,
    bad: 0
}


handleGoodRate = () => {
   this.setState(prevState =>(
    {good: prevState.good +1,
    }));
};

handelNeutralRate = () => {
    this.setState(prevState =>(   
    {neutral: prevState.neutral +1,
    }));
};

handelBadRate = () => {
    this.setState(prevState => (
     {bad: prevState.bad +1,
    }));
   
};

countTotalFeedback =(state)=>{
    const{ good, neutral, bad} = state;
    let total = 0;
    total = good + neutral + bad

    return total;
};


countPositiveFeedbackPercentage = (state)=>{
    const{ good, neutral, bad} = state;
    let percentage = 0;
    let negative = neutral + bad
    if(negative > 0){
    percentage = Math.round((good/(good + neutral + bad))*100)
    return percentage;
    }
    return percentage = 100;


 
   
}

render(){
    return(
    <>
   <FeedbackTitle>Please leave feedback</FeedbackTitle>
   <Button 
   type = "button" 
   onClick = {this.handleGoodRate}>
    Good
   </Button>
    <Button 
    type = "button" 
    onClick = {this.handelNeutralRate}>
    Neutral
    </Button>
    <Button 
    type = "button" 
    onClick = {this.handelBadRate}>
    Bad
    </Button>
   <Statistics 
   onGoodRate ={this.state.good} 
   onNeutralRate ={this.state.neutral} 
   onBadRate = {this.state.bad}
   onTotalRate = {this.countTotalFeedback(this.state)}
   onPositiveFeedback ={this.countPositiveFeedbackPercentage(this.state)}
   />
    </>);
    };  
   
}


