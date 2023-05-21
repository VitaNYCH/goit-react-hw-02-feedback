import React from "react";
import { NotificationSection } from "./Notification.styled";

export const Notification =({text})=> {
return(
<NotificationSection>
 {text}   
</NotificationSection>
)
}