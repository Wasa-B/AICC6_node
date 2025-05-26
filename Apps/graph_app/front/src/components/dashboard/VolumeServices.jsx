import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchVolumeServices } from '../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';


const formatLegendValue = (name,value,state)=>{
  const initialValue = 0;
  const total = state?.reduce((acc,curr)=>{
    if(Object.keys(curr).includes(value.dataKey)){
      return acc+curr[name];
    }
    return acc;
  },initialValue);
  return (
    <div className="custom-legend-item-text-group flex items-center gap-[5px]">
      <span className='custom-legend-item-text text-gray-300 font-medium'>{name.replace('_',' ')+' '+total}</span>
    </div>
  );
}

const volumeServicesChart = (data) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <Legend
              iconType="circle"
              iconSize={10}formatter={(name,value)=>formatLegendValue(name,value,data)} />
        <Bar dataKey="volume" stackId="a" fill="#0095ff" barSize={16}/>
        <Bar radius={[4, 4, 0, 0]} dataKey="services" stackId="a" fill="#00e096" barSize={16}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

const VolumeServices = () => {
  const data = useSelector((state) => state.apis.volumeServices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVolumeServices());
  }, [dispatch]);
  return (
    <div className='block-wrap lg:ml-0 lg:mt-0 sm:ml-[14px] sm:mt-[14px] lg:w-auto w-full sm:w-[calc(50%-7px)]'>
      <HeadTitle title='Volume vs Services Level'/>
      <div className="volume-services w-full h-[250px]">
        {volumeServicesChart(data)}
      </div>
    </div>
  )
}

export default VolumeServices
