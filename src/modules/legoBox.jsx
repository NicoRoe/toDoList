import React,{useState} from 'react';
import {MainList} from './mainList'
import '../css/style.css';
import {MenuBox} from './menuBox';


export const LegoBox = () => {

    const menuFilter = useState(1);
    return (
        <div className="flexBox">
        <MenuBox/>
        <MainList/>
        {/* <Lists/> */}

        </div>
    )
}