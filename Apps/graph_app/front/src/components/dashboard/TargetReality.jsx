import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTargetReality } from '../../redux/slices/apiSlice';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TARGET_REALITY_LISTS } from '../../constants/menuList';


const targetLegendFormatter = (value)=>{

  return (
    <div className="custom-legend-item-text-group">
      {}
      <span className='custom-legend-item-text'>{value}</span>
    </div>
  );
}

const TargetRealityChart = ({data})=>{
  return (
    <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <Bar
              dataKey="reality"
              fill="#4ab58e"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />


            <Bar
              dataKey="target"
              fill="#ffcf00"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />


            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7b91b0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
          </BarChart>
        </ResponsiveContainer>



  );
}

const TargetReality = () => {
  const state = useSelector((state)=>state.apis.targetRealityData);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchTargetReality());
  },[dispatch]);
  return (
    <div className='block-wrap'>
      <HeadTitle title='Target vs Reality'/>
      <div className="bar-chart w-full h-[180px]">
        {
          state&&(
            <TargetRealityChart data={state}/>
          )
        }
      </div>
      <div className="block-foot">
        <div className="legend-info mt-4 flex flex-col gap-2">
        {
        TARGET_REALITY_LISTS.map((item,index)=>(
          <div key={index} className='flex justify-between items-center gap-2'>
            <div className='info-item-left flex items-center gap-2'>
              <div className='w-10 h-10 rounded-sm bg-white flex items-center justify-center'>
                <img src={item.icon} alt={item.title} className='w-6 h-6'/>
              </div>
              <div>
                <h4 className=' text-gray-300'>{item.title}</h4>
                <p className='text-sm text-gray-500'>{item.subtitle}</p>
              </div>
            </div>
            <div className='info-item-right'>
              <span className='text text-gray-200'>{item.value}</span>
            </div>
          </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default TargetReality
