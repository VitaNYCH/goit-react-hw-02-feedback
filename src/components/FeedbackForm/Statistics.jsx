import React from 'react';
import {StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsValue} from './FeedbackForm.styled'
export const Statistics =({onGoodRate, onNeutralRate, onBadRate })=>{

    <StatisticsSection> 
    <StatisticsTitle>Statistics</StatisticsTitle>
    <StatisticsList>
        <StatisticsItem>Good:<StatisticsValue>{onGoodRate}</StatisticsValue> </StatisticsItem>
        <StatisticsItem>Neutral:<StatisticsValue>{onNeutralRate}</StatisticsValue></StatisticsItem>
        <StatisticsItem>Bad:<StatisticsValue>{onBadRate}</StatisticsValue></StatisticsItem>
        <StatisticsItem>Total:<StatisticsValue></StatisticsValue></StatisticsItem>
        <StatisticsItem>Positive feedback:<StatisticsValue>%</StatisticsValue></StatisticsItem>
    </StatisticsList>
</StatisticsSection> 
}