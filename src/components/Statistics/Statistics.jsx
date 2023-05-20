import React from 'react';
import {StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsValue} from './Statistics.styled'
export const Statistics =({good, neutral, bad, total, positivePercentage })=>{
return <StatisticsSection> 
    <StatisticsTitle>Statistics</StatisticsTitle>
    <StatisticsList>
        <StatisticsItem>Good:<StatisticsValue>{good}</StatisticsValue> </StatisticsItem>
        <StatisticsItem>Neutral:<StatisticsValue>{neutral}</StatisticsValue></StatisticsItem>
        <StatisticsItem>Bad:<StatisticsValue>{bad}</StatisticsValue></StatisticsItem>
        <StatisticsItem>Total:<StatisticsValue>{total}</StatisticsValue></StatisticsItem>
        <StatisticsItem>Positive feedback:<StatisticsValue>{positivePercentage}%</StatisticsValue></StatisticsItem>
    </StatisticsList>
</StatisticsSection> 
}