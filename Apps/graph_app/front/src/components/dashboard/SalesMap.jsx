import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { fetchSalesMap } from '../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import geoJson from '../../constants/world-50m.v1.json';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const SalesMap = () => {
  const data = useSelector((state) => state.apis.salesMap);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);
  // console.log(geoJson);

  const colors = {}
  data?.forEach((item) => {
    colors[item.country_id] = item.fill_color;
  })
  const getColors = (country_id) => {
    return colors[country_id] || '#ececec';
  }

  return (
    <div className='block-wrap  lg:w-auto w-full sm:w-[calc(50%-7px)] sm:ml-0 sm:mt-[14px] lg:mt-0'>
      <HeadTitle title='Sales Mapping by Country'/>
      <div className="sales-map">
        <ComposableMap projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0,0, 0],
            scale: 200,
          }}>
          <Geographies geography={geoJson}>
            {({ geographies }) =>{
              return geographies.map((geo) => {
                if(geo.id !== '010'){
                  return<Geography key={geo.rsmKey} geography={geo} fill={getColors(geo.id)} />
                }
              })
            }
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  )
}

export default SalesMap
