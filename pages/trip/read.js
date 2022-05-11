import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Read } from '@/components';

export default function TripPage(){
    const columns = ["여행지", "여행날짜", "국내/해외", "일지"]
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/trip/read').then(res=>{
            setData(res.data.trips)
        }).catch(err=>{})
    }, [])
    return (<>
        <h1 align ="center">내 여행 기록</h1>
        <Read columns={columns} colspan = {4} data = {data}/>
    </>)
}