import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { COUNTRIES_API_URL } from '../../constants/apiUrls';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Icons } from '../../assets/icons';



const AppbarLang = () => {
  const [countries, setCountries] = useState([]);
  const [selectCountryIdx, setSelectCountryIdx] = useState(0);
  const [isDropListOpen, setDropListOpen] = useState(false);
  const DEFUALT_COUNTRY = 'South Korea';

  const getLanguageKey = (country)=>{
    if(country?.languages && Object.keys(country?.languages).length){
      const key = Object.keys(country?.languages)[0];
      return key;
    }
    return ;
  }

  const fetchCountriesData = async()=>{
    try {
      const res = await axios.get(COUNTRIES_API_URL);
      const sortedCountries = res.data.sort((a,b)=>a.name.common.localeCompare(b.name.common));
      const defaultCountry = sortedCountries.findIndex(country=>country.name.common === DEFUALT_COUNTRY);
      sortedCountries.forEach(country=>{
        country.langKey = getLanguageKey(country);
      })
      setCountries(sortedCountries);
      if(defaultCountry){
        setSelectCountryIdx(defaultCountry);
      }
    } catch (error) {
      console.log(`Error fetching countries data: ${error}`);
    }
  };
  useEffect(()=>{
    fetchCountriesData();
  },[]);

  const handleCountryClick = (idx)=>{
    setSelectCountryIdx(idx);
    setDropListOpen(false);
  };
  const handleDropListEnable = ()=>{
    setDropListOpen(!isDropListOpen);
  };

  const currentFlag = (idx)=>countries[idx]?.flags?.svg;
  const currentLangKey = (idx)=>countries[idx]?.langKey;


  const DropItem = ({country})=>{
    return(
      <div
        className='drop-item flex items-center gap-x-3
        py-1 px-0 '>
        <span 
          className='drop-img w-4 h-4 overflow-hidden rounded-full'>
          <img src={country?.flags?.svg} alt={country.name}
            className='w-full h-full object-cover'/>
        </span>
        <span 
          className='drop-text text-sm uppercase font-medium text-white'>
          {country.langKey}
        </span>
      </div>
    )
  }

  return (
    <div className='relative w-30 h-10 flex items-center'>
      <div onClick={handleDropListEnable} 
        className='drop-selected cursor-pointer flex items-center gap-x-2'>
        <div className="drop-selected-img w-6 h-6 overflow-hidden rounded-full 
        flex items-center justify-center
        border border-gray-300
        ">
          <img src={currentFlag(selectCountryIdx)} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className="drop-selected-text flex items-center gap-2">
          <span className='uppercase font-medium'>{currentLangKey(selectCountryIdx)}</span>
          <img src={Icons.ChevronDownDark} alt="" className="invert-[1]" />
        </div>
      </div>
      <div className={`drop-lists absolute top-full bg-gray-950
        ${isDropListOpen ? '' : 'hidden'}`}>
        <div
          className="drop-list-wrapper 
          max-h-52 w-auto overflow-y-scroll
          py-[6px]
          text-white">
        {countries?.map((country,idx)=>{
          if(country.langKey){
            return(<div key={idx} 
              onClick={()=>handleCountryClick(idx)}
              className='hover:bg-gray-700 px-3 transition-all duration-300 cursor-pointer'>
              <DropItem country={country}/>
            </div>);
          }
        })}
        </div>
      </div>
    </div>
  )
}

export default AppbarLang
