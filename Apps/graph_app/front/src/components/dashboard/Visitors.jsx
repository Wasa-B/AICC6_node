import React, { useEffect, useState } from 'react'
import HeadTitle from './HeadTitle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVisitors } from '../../redux/slices/apiSlice';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const formatTooltipValue = (name, value)=>(
  `${name.replace('_', ' ')} : ${value}`
)

const CustomTooltip = ({payload})=>{
  if(!payload || !payload.length) return null;
  return(
    <div className='custom-recharts-tooltip'>
      <p className="recharts-tooltip-label">{payload[0].payload.month}</p>
      <ul className="recharts-tooltip-item-list">
        {payload.map((item,idx)=>(
          <li key={idx} className="recharts-tooltip-item">{formatTooltipValue(item.name, item.value)}</li>
        ))}
      </ul>
    </div>
  );
}

const VisitorsChart = ({data})=>{

  return (
    <ResponsiveContainer width="100%" height="100%">  
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 5,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical={false} horizontal={true} stroke="#333" />
        <XAxis dataKey="month" tickSize={0} axisLine={false} padding={{left: 0}}
        tick={({payload, x, y, dy})=>
          (<text x={x} y={y} dy={dy} fontSize={14} fill="#777" textAnchor='middle'>{payload.value}</text>)}
        />
        <YAxis tickSize={0} axisLine={false} ticks={[0,100,200,300,400]} tick={
          {
            fill: '#777',
            fontSize: 14
          }
        }/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend iconType='square' formatter={(value)=>value.replace('_', ' ')}/>
        <Line type="monotone" dot={false} dataKey="new_customer" stroke="#f64e60" strokeWidth={2}/>
        <Line type="monotone" dot={false} dataKey="loyal_customer" stroke="#a700ff" strokeWidth={2}/>
        <Line type="monotone" dot={false} dataKey="unique_customer" stroke="#3cd856" strokeWidth={2}/>

      </LineChart>
      </ResponsiveContainer>
  )
}

const Visitors = () => {
  const state = useSelector((state)=>state.apis.visitorsData);
  const [isHide, setIsHide] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchVisitors());
  },[dispatch]);

  return (
    <div className='block-wrap w-full'>
      <HeadTitle title='Visitors Insights'/>
      <div className="lin-chart w-full h-[230px]">
        {
          state&&(
            <VisitorsChart data={state}/>
          )
        }
      </div>
    </div>
  )
}

export default Visitors
