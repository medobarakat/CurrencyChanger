import React , {useEffect , useState}from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
const Chart = (country) => {
    useEffect(()=>{
        renderData()
    },[country])

    const [data,setData] = useState([])

    const renderData = ()=>{
        console.log(country)
        if(country.country === "US"){
            setData(usdData)
        }else if(country.country === "GB"){
            setData(Britindata)
        }else if(country.country === "JP"){
            setData(Jpydata)
        }else if(country.country === "EG"){
            setData(Egydata)
        }else if(country.country === "SA"){
            setData(Sardata)
        }
    }

    const usdData = [
        {
          name: "2010",
          Usd: 1000,
        },
        {
          name: "2011",
          Usd: 2500,
        },
        {
          name: "2012",
          Usd: 3100,
        },
        {
          name: "2013",
          Usd: 4280,
        },
        {
          name: "2014",
          Usd: 5090,
        },
        {
          name: "2015",
          Usd: 6390,
        },
        {
          name: "2016",
          Usd: 7490,
        },
      ];
    
      const Britindata = [
        {
          name: "2010",
          Usd: 2000,
        },
        {
          name: "2011",
          Usd: 3500,
        },
        {
          name: "2012",
          Usd: 2100,
        },
        {
          name: "2013",
          Usd: 4280,
        },
        {
          name: "2014",
          Usd: 2090,
        },
        {
          name: "2015",
          Usd: 6390,
        },
        {
          name: "2016",
          Usd: 9490,
        },
      ];
    
      const Jpydata = [
        {
          name: "2010",
          Usd: 200,
        },
        {
          name: "2011",
          Usd: 300,
        },
        {
          name: "2012",
          Usd: 210,
        },
        {
          name: "2013",
          Usd: 420,
        },
        {
          name: "2014",
          Usd: 290,
        },
        {
          name: "2015",
          Usd: 639,
        },
        {
          name: "2016",
          Usd: 940,
        },
      ];
      const Egydata = [
        {
          name: "2010",
          Usd: 21,
        },
        {
          name: "2011",
          Usd: 22,
        },
        {
          name: "2012",
          Usd: 20,
        },
        {
          name: "2013",
          Usd: 42,
        },
        {
          name: "2014",
          Usd: 29,
        },
        {
          name: "2015",
          Usd: 69,
        },
        {
          name: "2016",
          Usd: 94,
        },
      ];
      const Sardata = [
        {
          name: "2010",
          Usd: 231,
        },
        {
          name: "2011",
          Usd: 421,
        },
        {
          name: "2012",
          Usd: 205,
        },
        {
          name: "2013",
          Usd: 562,
        },
        {
          name: "2014",
          Usd: 292,
        },
        {
          name: "2015",
          Usd: 691,
        },
        {
          name: "2016",
          Usd: 949,
        },
      ];







  return (
    <LineChart
    width={500}
    height={300}
    data={
        data
    }
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Usd" stroke="#82ca9d" />
  </LineChart>
  )
}

export default Chart