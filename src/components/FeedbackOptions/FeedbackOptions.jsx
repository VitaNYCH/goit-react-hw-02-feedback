import React from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions =({onGoodRate, onNeutralRate, onBadRate})=>{
return <>
<Button 
type = "button" 
onClick = {onGoodRate}>
 Good
</Button>
 <Button 
 type = "button" 
 onClick = {onNeutralRate}>
 Neutral
 </Button>
 <Button 
 type = "button" 
 onClick = {onBadRate}>
 Bad
 </Button>
 </>
}