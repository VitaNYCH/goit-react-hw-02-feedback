import React from "react";
import {FeedbackTitle} from './Section.styled';

export const Section =(title, children)=>{

return (<section>
    {title &&  <FeedbackTitle>{title}</FeedbackTitle>}
      {children}
    </section>)


    
}