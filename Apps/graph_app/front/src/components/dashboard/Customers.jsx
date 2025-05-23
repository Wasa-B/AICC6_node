import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { AreaChart, Area, XAxis, YAxis,Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../../redux/slices/apiSlice';

const formatLegendValue = (name,value,state)=>{
  const initialValue = 0;
  const total = state?.reduce((acc,curr)=>{
    if(Object.keys(curr).includes(value.dataKey)){
      return acc+curr[name];
    }
    return acc;
  },initialValue);
  return (
    <div className="custom-legend-item-text-group">
      <span className='custom-legend-item-text'>{name.replace('_',' ')+' '+total}</span>
    </div>
  );
}

const CustomersChart = ({data})=>{
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }
      }
      >

        <defs>
        <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <CartesianGrid stroke="false" />
        <Tooltip />
        <Legend  align='center' chartHeight={200} formatter={(name,value)=>formatLegendValue(name,value,data)}/>
        <Area type="monotone" dot={true}  dataKey="last_month" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorLastMonth)" />
        <Area type="monotone" dot={true}  dataKey="this_month" stroke="#82ca9d" strokeWidth={3} fillOpacity={1} fill="url(#colorThisMonth)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const Customers = () => {
  const state = useSelector((state)=>state.apis.customersData);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCustomers());
  },[dispatch]);
  return (
    <div className='block-wrap'>
      <HeadTitle title='Customers Satisfaction'/>
      <div className="area-chart w-full h-[250px]">
        <CustomersChart data={state}/>
      </div>
    </div>
  )
}

export default Customers
