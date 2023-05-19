import React from 'react';
import { StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem } from './Statistics.styled';
class Statistics extends React.Component{

render(){

    return(<StatisticsSection> 
    <StatisticsTitle>Statistics</StatisticsTitle>
    <StatisticsList>
        <StatisticsItem>Good: </StatisticsItem>
        <StatisticsItem>Neutral: </StatisticsItem>
        <StatisticsItem>Bad: </StatisticsItem>
    </StatisticsList>
    </StatisticsSection> 

    )
}

}

export default Statistics;