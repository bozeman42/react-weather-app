import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';
function average(data) {
  return _.round(_.sum(data)/data.length);
}


export default (props) => {
  return (
    <div>
      <Sparklines svgWidth={180} svgHeight={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg: {average(props.data)} {props.units}</div>
      <div>Max: {_.max(props.data)} {props.units}</div>
      <div>Min: {_.min(props.data)} {props.units}</div>
    </div>
  )
}