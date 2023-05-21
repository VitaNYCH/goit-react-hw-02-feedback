import React, {Component} from "react";
import { Container } from "./App.styled";
import {Section} from './Section';
import {FeedbackOptions} from './FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
}
// handleGoodRate = evt => {
//    console.log(evt);
//   this.setState(
//    {[evt]: this.state[evt] +1,
//    });
// };
handelGoodRate = () => {
 this.setState(prevState =>(
   {good: prevState.good +1,})
  )
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

}

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

return (<Container> 
<Section title ='Please leave Feedback'>
<FeedbackOptions onGoodRate={this.handelGoodRate} 
onNeutralRate={this.handelNeutralRate}
onBadRate={this.handelBadRate}
/>
</Section>
<Section title = 'Statistics'>
<Statistics 
good ={this.state.good} 
neutral ={this.state.neutral} 
bad = {this.state.bad}
total = {this.countTotalFeedback(this.state)}
positivePercentage ={this.countPositiveFeedbackPercentage(this.state)}
/>
</Section>

</Container>)
   
};
}